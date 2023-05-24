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
        <div class="value">{{ formData.fahuodanhao }}</div>
      </div>

      <div class="prop-value-div">
        <div class="label">制单日期</div>
        <div class="value">{{ formData.zhidanriqi }}</div>
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
        <div class="value" style="width: 40%">{{ formData.chehao }}</div>
        <div class="showMore" @click="selectCarNo">
          <img src="@/assets/image/btn_showmore.png" alt="" />
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
  export default {
    setup() {
      let formData = reactive({
        fahuodanhao: '',
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

      const onScan = () => {
        router.push({
          name: 'jianpeiScannedResult',
          query: {
            fahuodanhao: formData.fahuodanhao,
            shouhuodanwei: formData.shouhuodanwei,
          },
        })
      }

      onMounted(() => {
        let rowData = ''
        debugger
        if (store.state.chukudan) {
          rowData = store.state.chukudan
          formData.fahuodanhao = rowData.fahuodanhao
          formData.zhidanriqi = rowData.zhidanriqi
          formData.jihuashuliang = rowData.jihuashuliang
          formData.yifashuliang = rowData.yifashuliang
          formData.yingjianshuliang = rowData.yingjianshuliang
          formData.shouhuodanwei = rowData.shouhuodanwei
          formData.chehao = rowData.chehao
        }
        if (route.query && Object.keys(route.query).length > 0) {
          rowData = JSON.parse(decodeURIComponent(route.query.rowData))
          formData.fahuodanhao = rowData.fahuodanhao
          formData.zhidanriqi = rowData.fahuodanriqi
          formData.jihuashuliang = rowData.jihuazhongliang
          formData.yifashuliang = rowData.yifashuliang
          formData.yingjianshuliang =
            parseInt(rowData.jihuazhongliang) - parseInt(rowData.yifashuliang)
          formData.shouhuodanwei = rowData.shouhuodanwei
          formData.chehao = rowData.chehao
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
  }

  .btn-area > div {
    font-size: 30px;
    width: 45%;
    max-height: 150px;
  }

  .btn-area img {
    width: 90px;
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
    padding: 10px;
  }
  .prop-value-div div {
    font-size: 25px;
  }

  .prop-value-div .label {
    width: 120px;
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
    margin-left: 15px;
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
</style>
