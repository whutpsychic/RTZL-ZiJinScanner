<template>
  <main>
    <van-nav-bar
      title="拣配单明细"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="table-content container">
      <el-table :data="tableData" border id="data-area" @row-click="selectRow">
        <el-table-column prop="billNo" label="拣配单号" width="120px;" />
        <el-table-column prop="batchNo" label="批次号" width="100px;" />
        <el-table-column prop="barcode" label="批次编码" width="120px;" />
        <el-table-column prop="weight" label="重量" />
        <el-table-column prop="blocks" label="块数" />
        <el-table-column prop="unit" label="计量单位" width="120px;" />
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
  import { onMounted, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import * as jianpeidanApi from '@/api/jianpeidan'
  import { showLoadingToast, closeToast, showFailToast } from 'vant'
  export default {
    setup() {
      const route = useRoute()
      const tableData = ref([])

      const onClickLeft = () => history.back()

      onMounted(() => {
        showLoadingToast({
          duration: 0,
          message: '加载中...',
        })
        let rowData = JSON.parse(decodeURIComponent(route.query.rowData))
        jianpeidanApi
          .jianpeidanDetail({
            billId: rowData.id,
            billNo: rowData.billNo,
          })
          .then((res) => {
            closeToast()
            tableData.value = res.data.value
          })
      })

      return {
        onClickLeft,
        tableData,
      }
    },
  }
</script>

<style scoped>
  .table-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #data-area {
    flex-grow: 1;
  }

  .btn-area {
    flex-grow: 0;
  }

  /**------------------------------------- */

  .table-content > .btn-area {
    justify-content: center;
  }

  .btn-area img {
    width: 45px;
  }
  .btn-area div {
    border-radius: 25px;
    font-size: 20px;
    width: 30%;
    min-height: 50px;
  }

  .btn-area > div:nth-child(1) {
    background-color: var(--btn-color1);
  }
</style>
