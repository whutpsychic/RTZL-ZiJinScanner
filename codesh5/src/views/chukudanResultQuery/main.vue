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
        <el-table-column prop="fahuodanhao" label="发货单号" width="110px" />
        <el-table-column prop="shouhuodanwei" label="收货单号" width="110px" />
        <el-table-column
          prop="jihuazhongliang"
          label="计划重量"
          width="110px"
        />
        <el-table-column prop="yifashuliang" label="已发数量" width="110px" />
        <el-table-column prop="fahuodanriqi" label="发货单日期" width="120px" />
        <el-table-column prop="jihuariqi" label="计划日期" width="110px" />
        <el-table-column prop="dingdanhao" label="订单号" width="110px" />
        <el-table-column prop="xuhao" label="序号" width="110px" />
        <el-table-column prop="chanpinbianma" label="产品编码" width="110px" />
        <el-table-column
          prop="chanpinmingcheng"
          label="产品名称"
          width="110px"
        />
        <el-table-column prop="picihao" label="批次号" width="110px" />
        <el-table-column prop="jiliangdanwei" label="计量单位" width="110px" />
        <el-table-column
          prop="kufangmingcheng"
          label="库房名称"
          width="110px"
        />

        <el-table-column prop="yuanshuqufen" label="运输区分" width="110px" />
        <el-table-column prop="chehao" label="车号" width="110px" />
        <el-table-column prop="jihualeixing" label="计划类型" width="110px" />
      </el-table>
      <!-- <div class="btn-area">
        <van-button round block type="primary" @click="onClickLeft">
          返回
        </van-button>
        <van-button round block type="primary" @click="onRefresh">
          刷新
        </van-button>
        <van-button round block type="primary" @click="showDetail">
          查询
        </van-button>
      </div> -->
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
            @click="onSearch"
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
  import { onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { showToast } from 'vant'
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
          showToast({
            message: '请选择正确的行！',
            type: 'fail',
          })
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
  }
  /** 按钮样式 */

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
</style>
