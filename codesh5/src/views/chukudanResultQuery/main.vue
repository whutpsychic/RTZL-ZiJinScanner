<template>
  <main>
    <van-nav-bar
      title="查看出库单"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="table-content container">
      <el-table :data="tableData" border id="data-area" @row-click="selectRow">
        <el-table-column prop="billNo" label="发货单号" width="130px" />
        <el-table-column prop="receiveUnit" label="收货单位" width="200px" />
        <el-table-column prop="planNum" label="计划重量" width="130px" />
        <el-table-column prop="actualNum" label="已发数量" width="130px" />

        <el-table-column label="发货单日期" width="150px">
          <template #default="scope">
            {{ scope.row.deliveryDate.substr(0, 10) }}
          </template>
        </el-table-column>

        <el-table-column prop="jihuariqi" label="计划日期" width="130px" />
        <el-table-column prop="dingdanhao" label="订单号" width="130px" />
        <el-table-column prop="xuhao" label="序号" width="130px" />
        <el-table-column prop="materialCode" label="产品编码" width="130px" />
        <el-table-column
          prop="materialDescribe"
          label="产品名称"
          width="130px"
        />
        <!-- <el-table-column prop="picihao" label="批次号" width="130px" /> -->
        <el-table-column prop="unit" label="计量单位" width="130px" />
        <el-table-column prop="storagePlace" label="库房名称" width="130px" />

        <el-table-column prop="yuanshuqufen" label="运输区分" width="130px" />
        <el-table-column prop="chehao" label="车号" width="130px" />
        <!-- <el-table-column prop="jihualeixing" label="计划类型" width="130px" /> -->
      </el-table>
      <div class="btn-area">
        <div>
          <img
            src="@/assets/image/btn_fanhui2.png"
            alt=""
            @click="onClickLeft"
          />
          <div>返回</div>
        </div>
        <div>
          <img
            src="@/assets/image/btn_shuaxin2.png"
            alt=""
            type="primary"
            @click="queryData"
          />
          <div>刷新</div>
        </div>
        <div>
          <img
            src="@/assets/image/btn_chaxun2.png"
            alt=""
            type="primary"
            @click="showDetail"
          />
          <div>查看</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { toRaw } from '@vue/reactivity'
  import { onMounted, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { showToast, showLoadingToast, closeToast } from 'vant'
  import * as chukudanApi from '@/api/chukudan'
  import { useStore } from 'vuex'
  export default {
    setup() {
      const route = useRoute()
      const router = useRouter()

      const tableData = ref([])
      const store = useStore()

      let queryParams = ''

      const onClickLeft = () => history.back()

      let selectedRow = ''

      const selectRow = (row, column, event) => {
        selectedRow = toRaw(row)
      }

      const showDetail = () => {
        if (selectedRow) {
          //let rowData = encodeURIComponent(JSON.stringify(selectedRow))

          store.commit('setChukudanListInfo', selectedRow)
          router.push({
            name: 'chukudanDetails',
            // query: {
            //   rowData,
            // },
          })
        } else {
          showToast({
            message: '请选择正确的行！',
            type: 'fail',
          })
        }
      }

      const queryData = () => {
        showLoadingToast({
          duration: 0,
          message: '加载中...',
        })
        chukudanApi.chukudanQuery(queryParams, 0).then((res) => {
          tableData.value = res.data.value.records
        })
      }

      onMounted(() => {
        queryParams = route.query
        queryData()
      })

      return {
        onClickLeft,
        selectRow,
        tableData,
        showDetail,
        queryData,
      }
    },
  }
</script>

<style scoped>
  .table-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #data-area {
    flex-grow: 1;
  }

  .btn-area {
    flex-grow: 0;
  }

  /** 按钮样式 */

  .btn-area div {
    border-radius: 25px;
    font-size: 20px;
    width: 30%;
    min-height: 50px;
  }

  .btn-area img {
    width: 45px;
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
</style>
