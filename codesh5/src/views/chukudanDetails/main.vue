<template>
  <main>
    <van-nav-bar
      title="出库单内容"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="container">
      <div class="prop-value-div">
        <div class="label">发货单号</div>
        <div class="value">{{ formData.billNo }}</div>
      </div>

      <div class="prop-value-div">
        <div class="label">制单日期</div>
        <div class="value">{{ formData.zhidanriqi.substr(0, 10) }}</div>
      </div>
      <div class="prop-value-div">
        <div class="label">计划数量</div>
        <div class="value">{{ formData.jihuashuliang }}</div>
      </div>
      <div class="prop-value-div">
        <div class="label">已发数量</div>
        <div class="value">{{ formData.yifashuliang }}</div>
      </div>
      <div class="prop-value-div">
        <div class="label">应捡数量</div>
        <div class="value">{{ formData.yingjianshuliang }}</div>
      </div>
      <div class="prop-value-div">
        <div class="label">收货单位</div>
        <div class="value">{{ formData.shouhuodanwei }}</div>
      </div>
      <div class="prop-value-div">
        <div class="label">车号</div>
        <div class="showMoreDiv">
          <div class="value">{{ formData.chehao }}</div>
          <div class="showMore" @click="selectCarNo">
            <img src="@/assets/image/btn_showmore.png" alt="" />
          </div>
        </div>
      </div>

      <div class="btn-area">
        <div>
          <img
            src="@/assets/image/btn_fanhui1.png"
            alt=""
            @click="onClickLeft"
          />
          <div>返回</div>
        </div>
        <div>
          <img
            src="@/assets/image/btn_chaxun1.png"
            alt=""
            type="primary"
            @click="onScan"
          />
          <div>扫描</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { reactive } from 'vue'
  import { onMounted } from 'vue'
  import { useStore } from 'vuex'
  import fc from 'flutter-core'
  export default {
    setup() {
      let formData = reactive({
        billNo: '',
        zhidanriqi: '',
        jihuashuliang: '',
        yifashuliang: '',
        yingjianshuliang: '',
        shouhuodanwei: '',
        chehao: '',
      })
      const route = useRoute()
      const router = useRouter()
      const store = useStore()

      const onClickLeft = () => history.back()
      const selectCarNo = () => {
        router.push({ name: 'chooseCarNumber' })
      }

      // 注册扫描后监听返回结果函数
      fc.await('scanner', (res) => {
        router.push({
          name: 'jianpeiScannedResult',
          query: {
            barcode: res,
          },
        })
      })

      const onScan = () => {
        fc.scan()

        // router.push({
        //   name: 'jianpeiScannedResult',
        //   query: {
        //     billNo: formData.billNo,
        //     shouhuodanwei: formData.shouhuodanwei,
        //   },
        // })
      }

      onMounted(() => {
        let rowData = ''
        if (store.state.chukudan) {
          rowData = store.state.chukudan
          formData.billNo = rowData.billNo
          formData.zhidanriqi = rowData.zhidanriqi
          formData.jihuashuliang = rowData.jihuashuliang
          formData.yifashuliang = rowData.yifashuliang
          formData.yingjianshuliang = rowData.yingjianshuliang
          formData.shouhuodanwei = rowData.shouhuodanwei
        }
        //if (route.query && Object.keys(route.query).length > 0) {
        if (store.state.chukudanListInfo) {
          rowData = store.state.chukudanListInfo
          formData.billNo = rowData.billNo
          formData.zhidanriqi = rowData.deliveryDate
          formData.jihuashuliang = rowData.planNum
          formData.yifashuliang = rowData.actualNum
          formData.yingjianshuliang =
            parseInt(rowData.planNum) - parseInt(rowData.actualNum)
          formData.shouhuodanwei = rowData.receiveUnit
        }

        if (store.state.carInfo) {
          formData.chehao = store.state.carInfo.plateNo
        }

        store.commit('setChukudan', formData)
      })

      return {
        formData,
        onClickLeft,
        onScan,
        selectCarNo,
      }
    },
  }
</script>

<style scoped>
  /**================== */

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto !important;
  }

  .btn-area > div {
    font-size: 25px;
    width: 45%;
    max-height: 150px;
  }

  .btn-area img {
    width: 75px;
  }

  .btn-area > div:nth-child(2) {
    background-color: var(--btn-color1);
  }
  .btn-area > div:nth-child(1) {
    background-color: var(--btn-color2);
  }

  /**--------------------------------------------------- */
  .prop-value-div {
    display: flex;
    padding-bottom: 10px;
    justify-content: space-between;
  }
  .prop-value-div div {
    font-size: 18px;
  }

  .prop-value-div .label {
    width: 90px;
    color: var(--form-label-color);
    display: flex;
    align-items: center;
  }

  .prop-value-div .value {
    border: 1px solid var(--form-input-border-color);
    background-color: white;
    width: 65%;
    border-radius: 10px;
    padding: 5px;
    color: #000000;
    padding-left: 15px;
    padding-right: 15px;
  }

  .showMoreDiv {
    display: flex;
    justify-content: space-between;
    width: 65%;
  }

  .showMore {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--form-label-color);
    color: #ffffff !important;
    text-align: center;
    width: 25%;
    margin-left: 10px;
    border-radius: 10px;
  }

  .showMore img {
    width: 35px;
  }
</style>
