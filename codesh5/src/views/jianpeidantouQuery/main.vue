<template>
  <main>
    <van-nav-bar
      title="查询拣配单头"
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
          v-model="fahuodanhao"
          name="fahuodanhao"
          label="发货单号"
          placeholder="填写单号"
          :rules="[{ required: true, message: '请填写单号' }]"
        />
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
      const fahuodanhao = ref('')
      const showPicker = ref(false)
      const showPicker2 = ref(false)

      const router = useRouter()

      const onConfirm = ({ selectedValues }) => {
        startDate.value = selectedValues.join('/')
        showPicker.value = false
      }
      const onConfirm2 = ({ selectedValues }) => {
        endDate.value = selectedValues.join('/')
        showPicker2.value = false
      }

      const onClickLeft = () => history.back()

      const onSubmit = (values) => {
        router.push({ name: 'jianpeidanQueryResult', query: values })
      }

      return {
        startDate,
        endDate,
        fahuodanhao,
        showPicker,
        showPicker2,
        onClickLeft,
        onConfirm,
        onConfirm2,
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
