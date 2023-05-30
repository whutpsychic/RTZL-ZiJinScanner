<template>
  <main>
    <van-nav-bar
      title="查询出库单"
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
            :rules="[{ required: true, message: '请选择' }]"
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
            :rules="[{ required: true, message: '请选择' }]"
          />
          <van-popup v-model:show="showPicker2" position="bottom">
            <van-date-picker
              @confirm="onConfirm2"
              @cancel="showPicker2 = false"
            />
          </van-popup>

          <van-field
            v-model="billNo"
            name="billNo"
            label="发货单号"
            placeholder="填写单号"
          />

          <van-field
            v-model="storagePlace"
            is-link
            readonly
            name="storagePlace"
            label="库区"
            placeholder="点击选择库区"
            @click="showPicker3 = true"
          />
          <van-popup v-model:show="showPicker3" position="bottom">
            <van-picker
              :columns="storagePlaceOptions"
              @confirm="onConfirm3"
              @cancel="showPicker3 = false"
            />
          </van-popup>
        </van-cell-group>
        <div class="btn-area">
          <div @click="onClickLeft">
            <img src="@/assets/image/btn_fanhui1.png" alt="" />
            <div>返回</div>
          </div>
          <div @click="onSearch">
            <img src="@/assets/image/btn_chaxun1.png" alt="" type="primary" />
            <div>查询</div>
          </div>
        </div>
      </van-form>
    </div>
  </main>
</template>

<script>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import * as chukudanApi from '@/api/chukudan'

  let formRef = ''
  export default {
    mounted() {
      formRef = this.$refs['formRef']
    },

    setup() {
      const startTime = ref('')
      const endTime = ref('')
      const billNo = ref('')
      const storagePlace = ref('')
      const showPicker = ref(false)
      const showPicker2 = ref(false)
      const showPicker3 = ref(false)
      const storagePlaceOptions = ref([])

      const router = useRouter()

      const onConfirm = ({ selectedValues }) => {
        startTime.value = selectedValues.join('/')
        showPicker.value = false
      }
      const onConfirm2 = ({ selectedValues }) => {
        endTime.value = selectedValues.join('/')
        showPicker2.value = false
      }

      const onConfirm3 = ({ selectedOptions }) => {
        storagePlace.value = selectedOptions[0]?.text
        showPicker3.value = false
      }

      const onClickLeft = () => history.back()

      const onSearch = () => {
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
        router.push({ name: 'chukudanResultQuery', query: values })
      }

      onMounted(() => {
        chukudanApi.getWarehouse().then((res) => {
          res.data.value.map((e) => {
            storagePlaceOptions.value.push({
              text: e.name,
              value: e.code,
            })
          })
        })
      })

      return {
        startTime,
        endTime,
        billNo,
        storagePlace,
        storagePlaceOptions,
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
  /** */

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

  /**vant form */

  ::v-deep(.van-form) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
