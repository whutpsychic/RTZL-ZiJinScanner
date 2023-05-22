<template>
  <main>
    <van-nav-bar
      title="拣配单查询结果"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="table-content">
      <el-table :data="tableData" border id="data-area" @row-click="selectRow">
        <el-table-column prop="jianpeiriqi" label="拣配日期" />
        <el-table-column prop="chehao" label="车号" />
        <el-table-column prop="shouhuodanwei" label="收货单位" />
      </el-table>
      <div style="margin: 16px">
        <div class="btn-area">
          <van-button round block type="primary" @click="onClickLeft">
            返回
          </van-button>
          <van-button round block type="primary" @click="onDelete">
            删除
          </van-button>
          <van-button round block type="primary" @click="showDetail">
            明细
          </van-button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { toRaw } from '@vue/reactivity'
  import { onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  export default {
    setup() {
      const route = useRoute()
      const router = useRouter()

      const onClickLeft = () => history.back()
      const onRefresh = () => {}

      let selectedRow = ''

      const selectRow = (row, column, event) => {
        selectedRow = toRaw(row)
      }

      const onDelete = () => {
        debugger
        if (!selectedRow) {
          alert('请选择要删除的行')
        }
      }

      const showDetail = () => {
        if (selectedRow) {
          router.push({
            name: 'jianpeidanDetails',
            query: {
              rowData: encodeURIComponent(JSON.stringify(selectedRow)),
            },
          })
        } else {
          alert('请选择正确的行')
        }
      }

      const tableData = [
        {
          jianpeiriqi: '1',
          chehao: 'asds',
          shouhuodanwei: '222',
        },
        {
          jianpeiriqi: '1',
          chehao: 'asds',
          shouhuodanwei: '222',
        },
        {
          jianpeiriqi: '1',
          chehao: 'asds',
          shouhuodanwei: '222',
        },
      ]

      onMounted(() => {
        let queryParams = route.query
      })

      return {
        onClickLeft,
        selectRow,
        tableData,
        showDetail,
        onRefresh,
        onDelete,
      }
    },
  }
</script>

<style scoped>
  .btn {
    display: flex;
    justify-content: space-around;
  }

  /**------------------------------------- */

  .table-content {
    padding: 3%;
    height: calc(100vh - var(--van-nav-bar-height));
  }

  .table-content > #data-area {
    height: 80%;
    max-height: 80%;
  }

  .table-content > .btn-area {
    height: 20%;
    max-height: 20%;
  }

  .btn-area {
    display: flex;
    justify-content: space-around;
  }

  .van-button {
    width: 30%;
    border-radius: 25px;
    font-size: 25px;
    cursor: pointer;
  }
  .van-button:nth-child(2) {
    background-color: #003363;
  }
  .van-button:nth-child(1) {
    background-color: #d77100;
  }
  .van-button:nth-child(3) {
    background-color: #d77100;
  }
  /**------------------------------------------ */

  :deep(thead .el-table__cell) {
    background-color: #3c5d85;
  }

  :deep(thead .el-table__cell > .cell) {
    text-align: center;
    color: #ffffff;
  }
</style>
