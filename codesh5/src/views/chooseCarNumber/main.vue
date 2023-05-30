<template>
  <main>
    <van-nav-bar
      title="选择车号"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="table-content container">
      <van-form @submit="onSubmit" id="form-area" ref="formRef">
        <van-cell-group inset>
          <van-field
            v-model="startDate"
            is-link
            readonly
            name="startDate"
            label="开始日期"
            placeholder="点击选择时间"
            @click="showPicker = true"
            :rules="[{ required: true, message: '请选择' }]"
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
            :rules="[{ required: true, message: '请选择' }]"
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
        <el-table-column prop="plateNo" label="车号" />
        <el-table-column prop="contractNo" label="单据号" />
      </el-table>

      <div>
        <van-cell-group inset>
          <van-field v-model="chehao" label="车号" placeholder="请输入车号" />
        </van-cell-group>
        <div class="btn-area">
          <div @click="onQuery">
            <img src="@/assets/image/btn_chaxun3.png" alt="" />
            <div>查询</div>
          </div>
          <div @click="confirmSelect">
            <img src="@/assets/image/btn_queren.png" alt="" />
            <div>确认</div>
          </div>
          <div @click="handleConfirmSelect">
            <img src="@/assets/image/btn_shoudong.png" alt="" />
            <div>手动确认</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import { showToast, showLoadingToast, closeToast, showFailToast } from 'vant'
  import * as chukudanApi from '@/api/chukudan'
  let formRef = ''
  export default {
    mounted() {
      formRef = this.$refs['formRef']
    },

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
        startDate.value = selectedValues.join('-')
        showPicker.value = false
      }
      const onConfirm2 = ({ selectedValues }) => {
        endDate.value = selectedValues.join('-')
        showPicker2.value = false
      }

      const onClickLeft = () => history.back()

      const onQuery = () => {
        formRef.submit()
      }

      const onSubmit = () => {
        showLoadingToast({
          duration: 0,
          message: '加载中...',
        })

        chukudanApi
          .cheliangQuery(
            {
              startTime:
                startDate.value.replace('/', '-').replace('/', '-') +
                ' 00:00:00',
              endTime:
                endDate.value.replace('/', '-').replace('/', '-') + ' 23:59:59',
            },
            0
          )
          .then((res) => {
            tableData.value = res.data.value.records
          })
      }

      let selectedCheHao = ''
      const selectRow = (row, column, event) => {
        selectedCheHao = row
      }

      const confirmSelect = () => {
        if (selectedCheHao) {
          store.commit('setCarInfo', selectedCheHao)
          router.push({
            name: 'chukudanDetails',
          })
        } else {
          showFailToast('请选择正确的行！')
        }
      }

      const handleConfirmSelect = () => {
        if (chehao.value) {
          showLoadingToast()
          chukudanApi.queryVehicleByPlateNo(chehao.value).then((res) => {
            closeToast()
            if (!res.data.value) {
              showFailToast('请输入正确的车号')
              return
            } else {
              store.commit('setCarInfo', res.data.value)
              router.push({ name: 'chukudanDetails' })
            }
          })
        } else {
          showToast({
            message: '请手工录入车号！',
            type: 'fail',
          })
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
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #data-area {
    flex-grow: 1;
    margin-bottom: 10px;
  }

  /** 按钮样式 */

  .btn-area {
    padding-top: 0px !important;
  }

  .btn-area div {
    border-radius: 25px;
    font-size: 20px;
    width: 30%;
    min-height: 50px;
  }

  .btn-area img {
    width: 45px;
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
  ::v-deep(.van-field) {
    margin-bottom: 10px;
  }
</style>
