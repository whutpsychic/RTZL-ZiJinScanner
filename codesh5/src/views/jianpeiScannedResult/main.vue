<template>
  <main>
    <van-nav-bar
      title="拣配"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="container">
      <el-table
        :data="tableData1"
        border
        id="data-area1"
        @row-click="selectRow"
      >
        <el-table-column prop="proDate" label="日期" />
        <el-table-column prop="code" label="一维码" width="110px" />
        <el-table-column prop="weight" label="重量" />
      </el-table>

      <el-table :data="tableData2" border id="data-area2">
        <el-table-column prop="yingjian" label="应拣" />
        <el-table-column prop="yijian" label="已拣" />
        <el-table-column prop="queshao" label="缺少" />
      </el-table>

      <div class="btn-area">
        <div @click="onConfirm">
          <img src="@/assets/image/btn_queren.png" alt="" />
          <div>确认</div>
        </div>
        <div @click="onHandle">
          <img src="@/assets/image/btn_shoudong.png" alt="" type="primary" />
          <div>手动</div>
        </div>
        <div @click="onDelete">
          <img src="@/assets/image/btn_tichu.png" alt="" type="primary" />
          <div>剔除</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { ref, onMounted } from 'vue'
  import { toRaw } from '@vue/reactivity'
  import { useRouter, useRoute } from 'vue-router'
  import { showFailToast } from 'vant'
  import * as chukudanApi from '@/api/chukudan'
  import { useStore } from 'vuex'
  export default {
    setup() {
      const router = useRouter()
      const route = useRoute()
      let tableData1 = ref([])
      let tableData2 = ref([
        { yingjian: 1, yijian: 2, queshao: 3 },
        { yingjian: '', yijian: 2, queshao: '' },
      ])

      const onClickLeft = () => history.back()
      const store = useStore()

      const onHandle = () => {
        router.push({
          name: 'manualUnqualifiedBarcodes',
        })
      }

      const onDelete = () => {}

      const onConfirm = () => {
        let chukudanInfo = store.state.chukudan
        let chukudanListInfo = store.state.chukudanListInfo
        let userInfo = store.state.userInfo
        let pickBill = toRaw(chukudanListInfo)
        chukudanListInfo.carNo = chukudanInfo.chehao

        pickBill.pickPackage = 100
        pickBill.pickWeight - 9999

        let pickBillDetailList = toRaw(tableData1.value)
        chukudanApi
          .scanConfirm({
            pickBill,
            pickBillDetailList,
          })
          .then((res) => {
            debugger
          })
      }

      onMounted(() => {
        let queryParams = route.query

        if (queryParams.barcode) {
          chukudanApi.checkBarcode(queryParams.barcode).then((res) => {
            if (res.data.value === true) {
              showFailToast(res.data.message)
            } else {
              tableData1.value.push(res.data.value)
            }
          })
        }
      })

      return {
        onClickLeft,
        tableData1,
        tableData2,
        onHandle,
        onConfirm,
      }
    },
  }
</script>

<style scoped>
  .container > #data-area1 {
    height: 50%;
    max-height: 80%;
    margin-bottom: 5%;
  }

  /** 按钮样式 */

  .btn-area div {
    border-radius: 25px;
    font-size: 23px;
    width: 30%;
    min-height: 50px;
  }

  .btn-area img {
    width: 60px;
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

  /** */
  ::v-deep(#data-area2 .el-table__cell) {
    background-color: var(--table-body-back-color2);
  }

  ::v-deep(#data-area2 .el-table__cell) {
    border: 1px solid var(--table-body-border-color2);
  }
</style>
