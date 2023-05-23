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

      <div class="btn-area">
        <div>
          <img
            src="@/assets/image/btn_queren.png"
            alt=""
            @click="onClickLeft"
          />
          <div>确认</div>
        </div>
        <div>
          <img
            src="@/assets/image/btn_shoudong.png"
            alt=""
            type="primary"
            @click="onSearch"
          />
          <div>手动</div>
        </div>
        <div>
          <img
            src="@/assets/image/btn_tichu.png"
            alt=""
            type="primary"
            @click="showDetail"
          />
          <div>剔除</div>
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
    height: 60%;
    max-height: 80%;
    margin-bottom: 5%;
  }

  .table-content > .btn-area {
    height: 20%;
    max-height: 20%;
  }

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

  /** */
  ::v-deep(#data-area2 .el-table__cell) {
    background-color: var(--table-body-back-color2);
  }

  ::v-deep(#data-area2 .el-table__cell) {
    border: 1px solid var(--table-body-border-color2);
  }
</style>
