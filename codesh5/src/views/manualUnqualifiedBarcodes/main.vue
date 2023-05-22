<template>
  <main>
    <van-nav-bar
      title="手动不合格条码信息"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="table-content">
      <div class="search-area">
        <van-cell-group inset>
          <van-field v-model="picihao" label="批次号" placeholder="四位" />
          <van-field v-model="bianhao" label="编号" placeholder="三位" />
        </van-cell-group>
        <div class="search-btn">
          <van-button type="primary" @click="onSearch">查询</van-button>
        </div>
      </div>

      <van-field v-model="tiaoxingma" label="条形码" placeholder="" />

      <div style="margin: 1%">
        <div class="btn-area">
          <van-button round block type="primary">确认</van-button>
          <van-button round block type="primary" @click="onHandle">
            取消
          </van-button>
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
  .table-content {
    padding: 3%;
    height: calc(100vh - var(--van-nav-bar-height));
  }

  .search-btn {
    width: 100%;
    text-align: center;
    margin-top: 1%;
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
</style>
