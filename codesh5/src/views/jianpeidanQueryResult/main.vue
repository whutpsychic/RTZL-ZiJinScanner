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
      <div class="btn-area">
        <div>
          <img
            src="@/assets/image/btn_queren.png"
            alt=""
            @click="onClickLeft"
          />
          <div>返回</div>
        </div>
        <div>
          <img
            src="@/assets/image/btn_tichu.png"
            alt=""
            type="primary"
            @click="onDelete"
          />
          <div>删除</div>
        </div>
        <div>
          <img
            src="@/assets/image/btn_mingxi.png"
            alt=""
            type="primary"
            @click="showDetail"
          />
          <div>明细</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { toRaw } from '@vue/reactivity'
  import { onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { showSuccessToast, showFailToast, showToast } from 'vant'
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
        if (!selectedRow) {
          showFailToast('请选择要删除的行')
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
          showFailToast('请选择正确的行')
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

  .btn-area div {
    border-radius: 25px;
    font-size: 25px;
    width: 30%;
    height: 115px;
  }
  .btn-area > div:nth-child(2) {
    background-color: var(--btn-color2);
  }
  .btn-area > div:nth-child(1) {
    background-color: var(--btn-color1);
  }
  .btn-area > div:nth-child(3) {
    background-color: var(--btn-color1);
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
