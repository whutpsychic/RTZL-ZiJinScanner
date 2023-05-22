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
        <el-table-column prop="fahuodanhao" label="发货单号" />
        <el-table-column prop="shouhuodanwei" label="收货单号" />
        <el-table-column prop="jihuazhongliang" label="计划重量" />
        <el-table-column prop="yifashuliang" label="已发数量" />
        <el-table-column prop="fahuodanriqi" label="发货单日期" />
        <el-table-column prop="jihuariqi" label="计划日期" />
        <el-table-column prop="dingdanhao" label="订单号" />
        <el-table-column prop="xuhao" label="序号" />
        <el-table-column prop="chanpinbianma" label="产品编码" />
        <el-table-column prop="chanpinmingcheng" label="产品名称" />
        <el-table-column prop="picihao" label="批次号" />
        <el-table-column prop="jiliangdanwei" label="计量单位" />
        <el-table-column prop="kufangmingcheng" label="库房名称" />

        <el-table-column prop="yuanshuqufen" label="运输区分" />
        <el-table-column prop="chehao" label="车号" />
        <el-table-column prop="jihualeixing" label="计划类型" />
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

      const showDetail = () => {
        if (selectedRow) {
          router.push({
            name: 'chukudanDetails',
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
          fahuodanhao: '1',
          shouhuodanwei: 'asds',
          jihuazhongliang: '222',
          yifashuliang: '1',
          fahuodanriqi: 'asds',
          jihuariqi: '222',
          dingdanhao: '1',
          xuhao: 'asds',
          chanpinbianma: '222',
          chanpinmingcheng: '1',
          picihao: 'asds',
          jiliangdanwei: '222',
          kufangmingcheng: '1',
          yuanshuqufen: 'asds',
          chehao: '222',
          jihualeixing: '123',
        },
        {
          fahuodanhao: '2',
          shouhuodanwei: 'asds',
          jihuazhongliang: '222',
          yifashuliang: '1',
          fahuodanriqi: 'asds',
          jihuariqi: '222',
          dingdanhao: '1',
          xuhao: 'asds',
          chanpinbianma: '222',
          chanpinmingcheng: '1',
          picihao: 'asds',
          jiliangdanwei: '222',
          kufangmingcheng: '1',
          yuanshuqufen: 'asds',
          chehao: '222',
          jihualeixing: '123',
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
