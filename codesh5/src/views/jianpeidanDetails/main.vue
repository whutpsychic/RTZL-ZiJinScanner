<template>
  <main>
    <van-nav-bar
      title="拣配单明细"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="table-content">
      <el-table :data="tableData" border id="data-area" @row-click="selectRow">
        <el-table-column prop="jianpeidanhao" label="拣配单号" width="120px;" />
        <el-table-column prop="picihao" label="批次号" />
        <el-table-column prop="picibianma" label="批次编码" width="120px;" />
        <el-table-column prop="zhongliang" label="重量" />
        <el-table-column prop="kuaishu" label="块数" />
        <el-table-column prop="jiliangdanwei" label="计量单位" width="120px;" />
      </el-table>
      <div class="btn-area">
        <div>
          <img
            src="@/assets/image/btn_fanhui2.png"
            alt=""
            @click="onClickLeft"
          />
          <div>返回</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { toRaw } from '@vue/reactivity'
  import { onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  export default {
    setup() {
      const route = useRoute()
      const router = useRouter()

      const onClickLeft = () => history.back()

      const tableData = [
        {
          jianpeidanhao: '1',
          picihao: 'asds',
          picibianma: '222',
          zhongliang: 'asd',
          kuaishu: 'xasd',
          jiliangdanwei: 'sda',
        },
        {
          jianpeidanhao: '1',
          picihao: 'asds',
          picibianma: '222',
          zhongliang: 'asd',
          kuaishu: 'xasd',
          jiliangdanwei: 'sda',
        },
      ]

      onMounted(() => {
        let queryParams = route.query
      })

      return {
        onClickLeft,
        tableData,
      }
    },
  }
</script>

<style scoped>
  .btn {
    display: flex;
    justify-content: space-around;
  }

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
    max-height: 20%;
    justify-content: center;
  }

  .btn-area div {
    border-radius: 25px;
    font-size: 25px;
    width: 30%;
    height: 115px;
  }

  .btn-area > div:nth-child(1) {
    background-color: var(--btn-color1);
  }

  /**------------------------------------------ */

  :deep(thead .el-table__cell) {
    background-color: #3c5d85;
  }

  :deep(thead .el-table__cell > .cell) {
    text-align: center;
    color: #ffffff;
  }
</style>
