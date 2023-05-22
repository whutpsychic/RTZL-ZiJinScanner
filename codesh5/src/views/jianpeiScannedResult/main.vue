<template>
  <main>
    <van-nav-bar
      title="拣配"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="table-content">
      <el-table
        :data="tableData1"
        border
        id="data-area1"
        @row-click="selectRow"
      >
        <el-table-column prop="riqi" label="日期" />
        <el-table-column prop="baohao" label="包号" />
        <el-table-column prop="yiweima" label="一维码" />
        <el-table-column prop="zhongliang" label="重量" />
      </el-table>

      <el-table :data="tableData2" border id="data-area2">
        <el-table-column prop="yingjian" label="应拣" />
        <el-table-column prop="yijian" label="已拣" />
        <el-table-column prop="queshao" label="缺少" />
      </el-table>

      <div style="margin: 1%">
        <div class="btn-area">
          <van-button round block type="primary">确认</van-button>
          <van-button round block type="primary" @click="onHandle">
            手动
          </van-button>
          <van-button round block type="primary" @click="handleDeleteSelect">
            剔除
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
        router.push({
          name: 'manualUnqualifiedBarcodes',
        })
      }

      return {
        onClickLeft,
        tableData1,
        tableData2,
        onHandle,
      }
    },
  }
</script>

<style scoped>
  .table-content {
    padding: 3%;
    height: calc(100vh - var(--van-nav-bar-height));
  }

  .table-content > #data-area1 {
    height: 40%;
    max-height: 80%;
  }
  .table-content > #data-area2 {
    height: 40%;
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
</style>
