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
        <el-table-column label="日期" width="150px">
          <template #default="scope">
            {{ scope.row.proDate.substr(0, 10) }}
          </template>
        </el-table-column>

        <el-table-column prop="code" label="一维码" width="210px" />
        <el-table-column prop="weight" label="重量" width="110px" />
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
  import { closeToast, showFailToast, showLoadingToast, showToast } from 'vant'
  import * as chukudanApi from '@/api/chukudan'
  import { useStore } from 'vuex'
  import { pick } from 'vant/lib/utils'
  export default {
    setup() {
      const router = useRouter()
      const route = useRoute()
      let tableData1 = ref([])
      let tableData2 = ref([
        { yingjian: 0, yijian: 0, queshao: 0 },
        { yingjian: '', yijian: 0, queshao: '' },
      ])

      const onClickLeft = () => history.back()
      const store = useStore()

      let totalPickBlocks = 0
      let totalPickWeight = 0

      const onHandle = () => {
        router.push({
          name: 'manualUnqualifiedBarcodes',
        })
      }

      let selectedRow = ''

      const selectRow = (row, column, event) => {
        selectedRow = toRaw(row)
      }

      const onDelete = () => {
        if (selectedRow) {
          let filtedData = tableData1.value.filter(
            (item) => item.barcode != selectedRow.barcode
          )
          tableData1.value = filtedData
          store.commit('setScandList', tableData1.value)
          selectedRow = ''
          calcPick(filtedData)
        } else {
          showFailToast('请选择要剔除的行！')
        }
      }

      const onConfirm = () => {
        let chukudanInfo = store.state.chukudan
        let chukudanListInfo = store.state.chukudanListInfo
        let carInfo = store.state.carInfo
        let userInfo = store.state.userInfo
        let pickBill = {}

        //pickBill.batchNo
        //pickBill.billNo = chukudanListInfo.billNo //拣配单号
        pickBill.carNo = carInfo.plateNo //车牌号
        pickBill.carUnit = carInfo.forwardingUnit //车属单位
        //createTime 创建时间
        //deleteFlag  删除标识
        pickBill.deliveryNo = carInfo.deliveryNo //发货通知单号

        pickBill.materialCode = chukudanListInfo.materialCode //产品编码
        pickBill.materialId = chukudanListInfo.materialDescribeId //产品id
        pickBill.materialName = chukudanListInfo.materialDescribe //产品名称（产品描述）

        //pickDate 拣配时间
        pickBill.pickPackage = totalPickBlocks //  拣配包数
        //pickPerson 减配人
        //pickState 拣配状态
        pickBill.pickWeight = totalPickWeight // 拣配重量
        pickBill.receiveUnit = chukudanListInfo.receiveUnit //收货单位

        pickBill.remark = chukudanListInfo.remark //备注
        pickBill.sendPlanNo = chukudanListInfo.billNo //  发货计划号

        //pickBill.tenantId = chukudanListInfo.tenantId
        pickBill.type = chukudanListInfo.type //类型
        pickBill.unit = chukudanListInfo.unit //计量单位

        pickBill.warehouseCode = carInfo.warehouseCode //库房编号
        pickBill.warehouseName = carInfo.warehouseName //库房名称

        let pickBillDetailList = []

        tableData1.value.forEach((item) => {
          let pickBillDetail = {}
          pickBillDetail.barcode = item.barcode //条形码
          pickBillDetail.batchNo = item.batchNo //批次号
          //pickBillDetail.billId=item.    //拣配单id
          //pickBillDetail.billNo  //拣配单号
          pickBillDetail.blocks = item.blocks //块数
          pickBillDetail.carNo = carInfo.plateNo //车牌号
          pickBillDetail.code = item.code //编号

          //judgmentResult  判定结果
          //remark 备注
          pickBillDetail.unit = item.unit //计量单位
          //pickBillDetail.warehouseInId  入库历史id
          pickBillDetail.weight = item.weight //重量

          pickBillDetailList.push(pickBillDetail)
        })

        showLoadingToast()
        chukudanApi
          .scanConfirm({
            pickBill,
            pickBillDetailList,
          })
          .then((res) => {
            if ((res.data.state = true)) {
              tableData1.value = []
              store.commit('setScandList', tableData1.value)
              showToast({
                message: '拣配成功!',
                type: 'success',
                className: 'toast',
                overlay: true,
              })
            } else {
              showFailToast(res.data.message)
            }
          })
      }

      const calcPick = (pickDataList) => {
        let chukudanListInfo = store.state.chukudanListInfo
        tableData2.value[0].yingjian = chukudanListInfo.planNum
        tableData2.value[0].queshao = chukudanListInfo.planNum

        totalPickBlocks = 0
        totalPickWeight = 0
        pickDataList.forEach((item) => {
          totalPickBlocks += item.blocks
          totalPickWeight += item.weight
        })
        tableData2.value[0].yijian = totalPickWeight
        tableData2.value[1].yijian = totalPickBlocks

        if (totalPickWeight > 0) {
          tableData2.value[0].queshao = (
            tableData2.value[0].yingjian -
            totalPickWeight / 1000
          ).toFixed(4)
        }

        if (tableData2.value[0].queshao < 0) {
          showFailToast('请求数量过多！')
        }
      }

      onMounted(() => {
        let queryParams = route.query

        let scandList = store.state.scandList || []
        tableData1.value = scandList
        calcPick(scandList)

        if (queryParams.barcode) {
          let checkRes = chukudanApi.checkBarcodeIfqualified(
            queryParams.barcode.trim()
          )
          if (!checkRes) {
            showFailToast('条形码不符合规范')
            return
          }

          for (let i = 0; i < scandList.length; i++) {
            if (scandList[i].barcode == queryParams.barcode) {
              showFailToast('该批次已经选择，请勿重复选择！')
              return
            }
          }
          showLoadingToast('加载中')

          chukudanApi.checkBarcode(queryParams.barcode).then((res) => {
            if (res.data.value === true) {
              showFailToast(res.data.message)
            } else {
              scandList.push(res.data.value)
              store.commit('setScandList', scandList)
              tableData1.value = scandList

              calcPick(scandList)
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
        selectRow,
        onDelete,
      }
    },
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .container > #data-area1 {
    margin-bottom: 5%;
    flex-grow: 1;
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

  /** */
  ::v-deep(#data-area2 .el-table__cell) {
    background-color: var(--table-body-back-color2);
  }

  ::v-deep(#data-area2 .el-table__cell) {
    border: 1px solid var(--table-body-border-color2);
  }
</style>
