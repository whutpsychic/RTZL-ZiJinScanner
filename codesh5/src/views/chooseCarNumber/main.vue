<template>
  <main>
    <van-nav-bar
      title="选择车号"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="table-content">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="startDate"
            is-link
            readonly
            name="startDate"
            label="开始日期"
            placeholder="点击选择时间"
            @click="showPicker = true"
          />
          <van-popup v-model:show="showPicker" position="bottom">
            <van-date-picker
              @confirm="onConfirm"
              @cancel="showPicker = false"
            />
          </van-popup>

          <van-field
            v-model="endDate"
            is-link
            readonly
            name="endDate"
            label="结束日期"
            placeholder="点击选择时间"
            @click="showPicker2 = true"
          />
          <van-popup v-model:show="showPicker2" position="bottom">
            <van-date-picker
              @confirm="onConfirm2"
              @cancel="showPicker2 = false"
            />
          </van-popup>
        </van-cell-group>
      </van-form>

      <el-table :data="tableData" border id="data-area" @row-click="selectRow">
        <el-table-column prop="chehao" label="车号" />
        <el-table-column prop="danjuhao" label="单据号" />
        <el-table-column prop="chengfang" label="秤房" />
      </el-table>

      <van-cell-group inset>
        <van-field v-model="chehao" label="车号" placeholder="请输入车号" />
      </van-cell-group>

      <div class="btn-area">
        <div>
          <img
            src="@/assets/image/btn_fanhui2.png"
            alt=""
            @click="onClickLeft"
          />
          <div>返回</div>
        </div>
        <div>
          <img
            src="@/assets/image/btn_shuaxin2.png"
            alt=""
            type="primary"
            @click="onSearch"
          />
          <div>刷新</div>
        </div>
        <div>
          <img
            src="@/assets/image/btn_chaxun2.png"
            alt=""
            type="primary"
            @click="showDetail"
          />
          <div>查看</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  export default {
    setup() {
      const startDate = ref('')
      const endDate = ref('')

      const chehao = ref('')

      const showPicker = ref(false)
      const showPicker2 = ref(false)
      const store = useStore()

      const router = useRouter()

      let tableData = ref([])
      const onConfirm = ({ selectedValues }) => {
        startDate.value = selectedValues.join('/')
        showPicker.value = false
      }
      const onConfirm2 = ({ selectedValues }) => {
        endDate.value = selectedValues.join('/')
        showPicker2.value = false
      }

      const onClickLeft = () => history.back()
      const onQuery = () => {
        tableData.value = [
          { chehao: 1, danjuhao: 2, chengfang: 3 },
          { chehao: 11, danjuhao: 22, chengfang: 33 },
          { chehao: 111, danjuhao: 222, chengfang: 333 },
        ]
      }

      const onSubmit = (values) => {}

      let selectedCheHao = ''
      const selectRow = (row, column, event) => {
        selectedCheHao = row.chehao
      }

      const confirmSelect = () => {
        if (selectedCheHao) {
          let chukudanInfo = store.state.chukudan
          chukudanInfo.chehao = selectedCheHao
          store.commit('setChukudan', chukudanInfo)
          router.push({
            name: 'chukudanDetails',
          })
        } else {
          alert('请选择正确的行')
        }
      }

      const handleConfirmSelect = () => {
        if (chehao.value) {
          let chukudanInfo = store.state.chukudan
          chukudanInfo.chehao = chehao.value
          store.commit('setChukudan', chukudanInfo)
          router.push({ name: 'chukudanDetails' })
        } else {
          alert('请选输入车号')
        }
      }

      return {
        startDate,
        endDate,
        showPicker,
        showPicker2,
        onClickLeft,
        onConfirm,
        onConfirm2,
        onSubmit,
        onQuery,
        tableData,
        selectRow,
        confirmSelect,
        handleConfirmSelect,
        chehao,
      }
    },
  }
</script>

<style scoped>
  .table-content {
    padding: 3%;
    height: calc(100vh - var(--van-nav-bar-height));
  }

  .table-content > #data-area {
    height: 50%;
    max-height: 80%;
  }

  .table-content > .btn-area {
    height: 30%;
    max-height: 20%;
  }

  /** 按钮样式 */

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

  /**输入框 */
  .van-field__label {
    text-align: right;
    color: red !important;
  }
</style>
