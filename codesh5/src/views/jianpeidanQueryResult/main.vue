<template>
  <main>
    <van-nav-bar
      title="拣配单查询结果"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="table-content container">
      <el-table :data="tableData" border id="data-area" @row-click="selectRow">
        <el-table-column prop="jianpeiriqi" label="拣配日期" />
        <el-table-column prop="chehao" label="车号" />
        <el-table-column prop="shouhuodanwei" label="收货单位" />
      </el-table>
      <div class="btn-area">
        <div>
          <img
            src="@/assets/image/btn_queren.png"
            alt=""
            @click="onClickLeft"
          />
          <div>返回</div>
        </div>
        <div>
          <img
            src="@/assets/image/btn_tichu.png"
            alt=""
            type="primary"
            @click="onDelete"
          />
          <div>删除</div>
        </div>
        <div>
          <img
            src="@/assets/image/btn_mingxi.png"
            alt=""
            type="primary"
            @click="showDetail"
          />
          <div>明细</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { toRaw } from '@vue/reactivity'
  import { onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { showSuccessToast, showFailToast, showToast } from 'vant'
  export default {
    setup() {
      const route = useRoute()
      const router = useRouter()

      const onClickLeft = () => history.back()
      const onRefresh = () => {}

      let selectedRow = ''

      const selectRow = (row, column, event) => {
        selectedRow = toRaw(row)
      }

      const onDelete = () => {
        if (!selectedRow) {
          showFailToast('请选择要删除的行')
        }
      }

      const showDetail = () => {
        if (selectedRow) {
          router.push({
            name: 'jianpeidanDetails',
            query: {
              rowData: encodeURIComponent(JSON.stringify(selectedRow)),
            },
          })
        } else {
          showFailToast('请选择正确的行')
        }
      }

      const tableData = [
        {
          jianpeiriqi: '1',
          chehao: 'asds',
          shouhuodanwei: '222',
        },
        {
          jianpeiriqi: '1',
          chehao: 'asds',
          shouhuodanwei: '222',
        },
        {
          jianpeiriqi: '1',
          chehao: 'asds',
          shouhuodanwei: '222',
        },
      ]

      onMounted(() => {
        let queryParams = route.query
      })

      return {
        onClickLeft,
        selectRow,
        tableData,
        showDetail,
        onRefresh,
        onDelete,
      }
    },
  }
</script>

<style scoped>
  /**------------------------------------- */

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

  /** 按钮样式 */

  .btn-area div {
    border-radius: 25px;
    font-size: 23px;
    width: 30%;
    min-height: 50px;
  }

  .btn-area img {
    width: 60px;
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

  /**------------------------------------------ */
</style>
