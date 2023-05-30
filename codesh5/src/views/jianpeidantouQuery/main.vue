<template>
  <main>
    <van-nav-bar
      title="查询拣配单头"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="container">
      <van-form @submit="onSubmit" ref="formRef">
        <van-cell-group inset>
          <van-field
            v-model="startTime"
            is-link
            readonly
            name="startTime"
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
            v-model="endTime"
            is-link
            readonly
            name="endTime"
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

          <van-field
            v-model="sendPlanNo"
            name="sendPlanNo"
            label="发货单号"
            placeholder="填写单号"
          />
        </van-cell-group>

        <div class="btn-area">
          <div>
            <img
              src="@/assets/image/btn_fanhui1.png"
              alt=""
              @click="onClickLeft"
            />
            <div>返回</div>
          </div>
          <div>
            <img
              src="@/assets/image/btn_chaxun1.png"
              alt=""
              type="primary"
              @click="onSearch"
            />
            <div>查询</div>
          </div>
        </div>
      </van-form>
    </div>
  </main>
</template>

<script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { showToast, showLoadingToast, closeToast, showFailToast } from 'vant'
  let formRef = ''
  export default {
    mounted() {
      formRef = this.$refs['formRef']
    },

    setup() {
      const startTime = ref('')
      const endTime = ref('')
      const sendPlanNo = ref('')
      const showPicker = ref(false)
      const showPicker2 = ref(false)

      const router = useRouter()

      const onConfirm = ({ selectedValues }) => {
        startTime.value = selectedValues.join('/')
        showPicker.value = false
      }
      const onConfirm2 = ({ selectedValues }) => {
        endTime.value = selectedValues.join('/')
        showPicker2.value = false
      }

      const onClickLeft = () => history.back()

      const onSearch = () => {
        if (!startTime.value) {
          showFailToast('请选择开始时间')
          return
        }

        if (!endTime.value) {
          showFailToast('请选择结束时间')
          return
        }
        formRef.submit()
      }
      const onSubmit = (values) => {
        values.startTime
          ? (values.startTime =
              values.startTime.replace('/', '-').replace('/', '-') +
              ' 00:00:00')
          : ''
        values.endTime
          ? (values.endTime =
              values.endTime.replace('/', '-').replace('/', '-') + ' 23:59:59')
          : ''

        router.push({ name: 'jianpeidanQueryResult', query: values })
      }

      return {
        startTime,
        endTime,
        sendPlanNo,
        showPicker,
        showPicker2,
        onClickLeft,
        onConfirm,
        onConfirm2,
        onSearch,
        onSubmit,
      }
    },
  }
</script>

<style scoped>
  .btn-area > div {
    font-size: 25px;
    width: 45%;
  }

  .btn-area img {
    width: 70px;
  }

  .btn-area > div:nth-child(2) {
    background-color: var(--btn-color1);
  }
  .btn-area > div:nth-child(1) {
    background-color: var(--btn-color2);
  }

  ::v-deep(.van-field) {
    margin-top: 15px;
    margin-bottom: 25px;
  }
</style>
