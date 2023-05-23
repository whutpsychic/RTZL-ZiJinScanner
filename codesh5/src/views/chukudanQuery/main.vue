<template>
  <main>
    <van-nav-bar
      title="查询出库单"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-form @submit="onSubmit" ref="formRef">
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
          <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" />
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

        <van-field
          v-model="fahuodanhao"
          name="fahuodanhao"
          label="发货单号"
          placeholder="填写单号"
        />

        <van-field
          v-model="kuqu"
          is-link
          readonly
          name="kuqu"
          label="库区"
          placeholder="点击选择库区"
          @click="showPicker3 = true"
        />
        <van-popup v-model:show="showPicker3" position="bottom">
          <van-picker
            :columns="kuquOptions"
            @confirm="onConfirm3"
            @cancel="showPicker3 = false"
          />
        </van-popup>
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
  </main>
</template>

<script>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  let formRef = ''
  export default {
    mounted() {
      formRef = this.$refs['formRef']
    },

    setup() {
      const startDate = ref('')
      const endDate = ref('')
      const fahuodanhao = ref('')
      const kuqu = ref('1403')
      const showPicker = ref(false)
      const showPicker2 = ref(false)
      const showPicker3 = ref(false)
      const kuquOptions = [{ text: '1403', value: '1403' }]

      const router = useRouter()

      const onConfirm = ({ selectedValues }) => {
        startDate.value = selectedValues.join('/')
        showPicker.value = false
      }
      const onConfirm2 = ({ selectedValues }) => {
        endDate.value = selectedValues.join('/')
        showPicker2.value = false
      }

      const onConfirm3 = ({ selectedOptions }) => {
        kuqu.value = selectedOptions[0]?.text
        showPicker3.value = false
      }

      const onClickLeft = () => history.back()

      const onSearch = () => {
        formRef.submit()
      }

      const onSubmit = (values) => {
        debugger
        // values.startDate = values.startDate.replaceAll('/', '-') + ' 00:00:00'
        // values.endDate = values.endDate.replaceAll('/', '-') + ' 23:59:59'
        router.push({ name: 'chukudanResultQuery', query: values })
      }

      return {
        startDate,
        endDate,
        fahuodanhao,
        kuqu,
        kuquOptions,
        showPicker,
        showPicker2,
        showPicker3,
        onClickLeft,
        onConfirm,
        onConfirm2,
        onConfirm3,
        onSearch,
        onSubmit,
      }
    },
  }
</script>

<style scoped>
  .btn-area div {
    font-size: 35px;
    width: 45%;
  }
  .btn-area > div:nth-child(2) {
    background-color: var(--btn-color1);
  }
  .btn-area > div:nth-child(1) {
    background-color: var(--btn-color2);
  }
</style>
