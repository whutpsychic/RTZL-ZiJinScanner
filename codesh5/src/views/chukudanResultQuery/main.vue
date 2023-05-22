<template>
  <main>
    <van-nav-bar
      title="查看出库单"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="table-content">
      <el-table :data="tableData" border id="data-area" @row-click="selectRow">
        <el-table-column prop="id" label="发货单号" />
        <el-table-column prop="name" label="收货单号" />
        <el-table-column prop="address" label="计划重量" />
        <el-table-column prop="address" label="已发数量" />
        <el-table-column prop="address" label="发货单日期" />
        <el-table-column prop="address" label="计划日期" />
        <el-table-column prop="address" label="订单号" />
        <el-table-column prop="address" label="序号" />
        <el-table-column prop="address" label="产品编码" />
        <el-table-column prop="address" label="产品名称" />
        <el-table-column prop="address" label="批次号" />
        <el-table-column prop="address" label="计量单位" />
        <el-table-column prop="address" label="库房名称" />

        <el-table-column prop="address" label="运输区分" />
        <el-table-column prop="address" label="车号" />
        <el-table-column prop="address" label="计划类型" />
      </el-table>
      <div style="margin: 16px">
        <div class="btn-area">
          <van-button round block type="primary" @click="onClickLeft">
            返回
          </van-button>
          <van-button round block type="primary" @click="onRefresh">
            刷新
          </van-button>
          <van-button round block type="primary" @click="showDetail">
            查询
          </van-button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { ref } from 'vue'
  import { onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  export default {
    setup() {
      const route = useRoute()
      const router = useRouter()

      const onClickLeft = () => history.back()
      const onRefresh = () => {}

      let selectedId = ''

      const selectRow = (row, column, event) => {
        selectedId = row.id
      }

      const showDetail = () => {
        if (selectedId) {
          alert(selectedId)
          router.push({ name: 'chukudanDetails', query: { id: selectedId } })
        } else {
          alert('请选择正确的行')
        }
      }

      const tableData = [
        {
          id: '1',
          name: 'asds',
          address: '222',
        },
        {
          id: '2',
          name: 'asd',
          address: '333',
        },
        {
          id: '3',
          name: 'asdf',
          address: '444',
        },
        {
          id: '4',
          name: 'dsdf',
          address: '5',
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
