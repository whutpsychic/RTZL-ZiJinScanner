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

          <van-field
            v-model="fahuodanhao"
            name="fahuodanhao"
            label="发货单号"
            placeholder="填写单号"
            :rules="[{ required: true, message: '请填写单号' }]"
          />
        </van-cell-group>
        <!-- <div style="margin: 16px">
          <div class="btn">
            <van-button round block type="primary" @click="onClickLeft">
              返回
            </van-button>

            <van-button round block type="primary" native-type="submit">
              查询
            </van-button>
          </div>
        </div> -->

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
  let formRef = ''
  export default {
    mounted() {
      formRef = this.$refs['formRef']
    },

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

      const onSearch = () => {
        formRef.submit()
      }
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
        onSearch,
        onSubmit,
      }
    },
  }
</script>

<style scoped>
  .btn-area > div {
    font-size: 30px;
    width: 45%;
    max-height: 150px;
  }

  .btn-area img {
    width: 90px;
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
