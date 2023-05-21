<template>
  <main>
    <van-nav-bar
      title="查询出库单"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

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
          v-model="orderNo"
          name="orderNo"
          label="发货单号"
          placeholder="填写单号"
          :rules="[{ required: true, message: '请填写单号' }]"
        />

        <van-field
          v-model="storeNo"
          is-link
          readonly
          name="storeNo"
          label="选择器"
          placeholder="点击选择库区"
          @click="showPicker3 = true"
        />
        <van-popup v-model:show="showPicker3" position="bottom">
          <van-picker
            :columns="storeNoOptions"
            @confirm="onConfirm3"
            @cancel="showPicker3 = false"
          />
        </van-popup>
      </van-cell-group>
      <div style="margin: 16px">
        <div class="btn">
          <van-button round block type="primary" @click="onClickLeft">
            返回
          </van-button>

          <van-button round block type="primary" native-type="submit">
            查询
          </van-button>
        </div>
      </div>
    </van-form>
  </main>
</template>

<script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  export default {
    setup() {
      const startDate = ref('')
      const endDate = ref('')
      const orderNo = ref('')
      const storeNo = ref('')
      const showPicker = ref(false)
      const showPicker2 = ref(false)
      const showPicker3 = ref(false)

      const router = useRouter()

      const onConfirm = ({ selectedValues }) => {
        startDate.value = selectedValues.join('/')
        showPicker.value = false
      }
      const onConfirm2 = ({ selectedValues }) => {
        endDate.value = selectedValues.join('/')
        showPicker2.value = false
      }

      const storeNoOptions = [
        { text: '1403', value: '1403' },
        { text: '1404', value: '1404' },
        { text: '1423', value: '1423' },
      ]

      const onConfirm3 = ({ selectedOptions }) => {
        storeNo.value = selectedOptions[0]?.text
        showPicker3.value = false
      }

      const onClickLeft = () => history.back()

      const onSubmit = (values) => {
        router.push({ name: 'chukudanResultQuery', query: values })
      }

      return {
        startDate,
        endDate,
        orderNo,
        storeNo,
        storeNoOptions,
        showPicker,
        showPicker2,
        showPicker3,
        onClickLeft,
        onConfirm,
        onConfirm2,
        onConfirm3,
        onSubmit,
      }
    },
  }
</script>

<style scoped>
  .btn {
    display: flex;
    justify-content: space-around;
  }

  .van-button {
    width: 150px;
    height: 150px;
    border-radius: 25px;
    font-size: 35px;
    cursor: pointer;
  }
  .van-button:nth-child(2) {
    margin-top: 17%;
    background-color: #003363;
  }
  .van-button:nth-child(1) {
    margin-top: 17%;
    background-color: #d77100;
  }
</style>
