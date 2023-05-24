<template>
  <main>
    <van-nav-bar
      title="手动不合格条码信息"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="table-content container">
      <div class="search-area">
        <van-cell-group inset>
          <van-field v-model="picihao" label="批次号" placeholder="四位" />
          <van-field v-model="bianhao" label="编号" placeholder="三位" />
        </van-cell-group>
        <div class="btn-area btn-area1">
          <div>
            <img
              src="@/assets/image/btn_chaxun3.png"
              alt=""
              type="primary"
              @click="onSearch"
            />
            <div>查询</div>
          </div>
        </div>
      </div>

      <van-field v-model="tiaoxingma" label="条形码" placeholder="" />

      <div class="btn-area">
        <div>
          <img
            src="@/assets/image/btn_queren.png"
            alt=""
            type="primary"
            @click="onSearch"
          />
          <div>确认</div>
        </div>
        <div>
          <img
            src="@/assets/image/btn_tichu.png"
            alt=""
            type="primary"
            @click="onSearch"
          />
          <div>取消</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { reactive } from 'vue'
  export default {
    setup() {
      const router = useRouter()

      const picihao = ref('')
      const tiaoxingma = ref('')
      const bianhao = ref('')

      let tableData1 = ref([
        { riqi: 1, baohao: 2, yiweima: 3, zhongliang: 4 },
        { riqi: 1, baohao: 2, yiweima: 3, zhongliang: 4 },
        { riqi: 1, baohao: 2, yiweima: 3, zhongliang: 4 },
      ])
      let tableData2 = ref([
        { yingjian: 1, yijian: 2, queshao: 3 },
        { yingjian: '', yijian: 2, queshao: '' },
      ])

      const onClickLeft = () => history.back()

      const onHandle = () => {
        router.push({ name: 'manualUnqualifiedBarcodes' })
      }

      const onSearch = () => {}

      return {
        onClickLeft,
        tableData1,
        tableData2,
        onHandle,
        picihao,
        bianhao,
        tiaoxingma,
        onSearch,
      }
    },
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .btn-area > div {
    margin-bottom: 25px;
    border-radius: 15px;
    font-size: 20px;
    width: 45%;
    max-height: 150px;
  }

  .btn-area1 {
    justify-content: center;
  }

  .btn-area img {
    width: 50px;
    margin-bottom: 10px;
  }

  .btn-area > div:nth-child(2) {
    background-color: var(--btn-color1);
  }
  .btn-area > div:nth-child(1) {
    background-color: var(--btn-color1);
  }
</style>
