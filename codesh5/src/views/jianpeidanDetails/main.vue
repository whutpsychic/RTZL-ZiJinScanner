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
        <el-table-column prop="jianpeidanhao" label="拣配单号" width="120px;" />
        <el-table-column prop="picihao" label="批次号" width="100px;" />
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

  .btn-area div {
    border-radius: 25px;
    font-size: 25px;
    width: 30%;
    min-height: 50px;
  }

  .btn-area > div:nth-child(1) {
    background-color: var(--btn-color1);
  }
</style>
