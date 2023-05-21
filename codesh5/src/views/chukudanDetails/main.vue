<template>
  <main>
    <van-nav-bar
      title="出库单内容"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="prop-value-div">
      <div class="label">发货单号</div>
      <div class="value">123</div>
    </div>

    <div class="prop-value-div">
      <div class="label">制单日期</div>
      <div class="value">123</div>
    </div>
    <div class="prop-value-div">
      <div class="label">计划数量</div>
      <div class="value">123</div>
    </div>
    <div class="prop-value-div">
      <div class="label">已发数量</div>
      <div class="value">123</div>
    </div>
    <div class="prop-value-div">
      <div class="label">应捡数量</div>
      <div class="value">123</div>
    </div>
    <div class="prop-value-div">
      <div class="label">收货单位</div>
      <div class="value">123</div>
    </div>
    <div class="prop-value-div">
      <div class="label">车号</div>
      <div class="value" style="width: 40%">123</div>
      <div class="showMore" style="width: 25%" @click="selectCarNo">...</div>
    </div>

    <div style="margin: 16px">
      <div class="btn">
        <van-button round block type="primary" @click="onClickLeft">
          返回
        </van-button>

        <van-button round block type="primary">扫描</van-button>
      </div>
    </div>
  </main>
</template>

<script>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { reactive } from 'vue'
  import { onMounted } from 'vue'
  export default {
    setup() {
      let formData = reactive({ orderNo: 1 })
      const route = useRoute()
      const router = useRouter()

      const onClickLeft = () => history.back()
      const selectCarNo = () => {
        router.push({ name: 'chooseCarNumber' })
      }

      const onScan = () => {}

      onMounted(() => {
        formData = route.query
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
  .btn {
    display: flex;
    justify-content: space-around;
  }

  .van-button {
    width: 150px;
    height: 150px;
    border-radius: 25px;
    font-size: 35px;
    cursor: pointer;
  }
  .van-button:nth-child(2) {
    margin-top: 17%;
    background-color: #003363;
  }
  .van-button:nth-child(1) {
    margin-top: 17%;
    background-color: #d77100;
  }

  /**--------------------------------------------------- */
  .prop-value-div {
    display: flex;
    padding: 1em;
  }
  .prop-value-div div {
    color: blue;
    font-size: 25px;
  }

  .prop-value-div .label {
    width: 35%;
  }

  .prop-value-div .value {
    border: 1px solid;
    width: 65%;
  }

  .showMore {
    background-color: blue;
    color: #ffffff !important;
    text-align: center;
    font-size: 50px;
  }
</style>
