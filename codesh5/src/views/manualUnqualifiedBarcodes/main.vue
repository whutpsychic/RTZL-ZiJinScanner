<template>
  <main>
    <van-nav-bar
      title="手动不合格条码信息"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="table-content container">
      <div class="search-area">
        <van-form @submit="onSubmit" id="form-area" ref="formRef">
          <van-cell-group inset>
            <!-- <van-field
              v-model="batchNo"
              label="批次号"
              placeholder=""
              :rules="[{ required: true, message: '请输入' }]"
            /> -->
            <van-field v-model="code" label="编号" placeholder="" />
          </van-cell-group>
        </van-form>
        <div class="btn-area btn-area1">
          <div>
            <img
              src="@/assets/image/btn_chaxun3.png"
              alt=""
              type="primary"
              @click="onSearch"
            />
            <div>查询</div>
          </div>
        </div>
      </div>

      <van-field v-model="barcode" label="条形码" placeholder="" />

      <div class="btn-area">
        <div @click="onConfirm">
          <img src="@/assets/image/btn_queren.png" alt="" type="primary" />
          <div>确认</div>
        </div>
        <div @click="onClickLeft">
          <img src="@/assets/image/btn_tichu.png" alt="" type="primary" />
          <div>取消</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import * as chukudanApi from '@/api/chukudan'
  import { showToast, showLoadingToast, closeToast, showFailToast } from 'vant'
  let formRef = ''
  export default {
    mounted() {
      formRef = this.$refs['formRef']
    },

    setup() {
      const router = useRouter()

      const batchNo = ref('')
      const barcode = ref('')
      const code = ref('')

      const onClickLeft = () => router.push({ name: 'jianpeiScannedResult' })

      const onSearch = () => {
        if (!code.value) {
          showFailToast('请输入编号')
          return
        }

        formRef.submit()
      }

      const onConfirm = () => {
        let checkRes = chukudanApi.checkBarcodeIfqualified(barcode.value.trim())
        if (checkRes) {
          router.push({
            path: '/jianpeiScannedResult',
            query: { barcode: barcode.value },
          })
        } else {
          showFailToast('条形码不符合规范')
        }
      }

      const onSubmit = () => {
        showLoadingToast({
          duration: 0,
          message: '加载中...',
        })

        chukudanApi
          .getBarCode({
            //batchNo: batchNo.value,
            code: code.value,
          })
          .then((res) => {
            if (res.data.value) {
              barcode.value = res.data.value
            } else {
              showFailToast('未查到条形码，请检查编号是否正确')
              barcode.value = ''
            }
          })
      }

      return {
        onClickLeft,
        batchNo,
        code,
        barcode,
        onSearch,
        onSubmit,
        onConfirm,
      }
    },
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .btn-area > div {
    margin-bottom: 25px;
    border-radius: 15px;
    font-size: 20px;
    width: 45%;
    max-height: 150px;
  }

  .btn-area1 {
    justify-content: center;
  }

  .btn-area img {
    width: 50px;
    margin-bottom: 10px;
  }

  .btn-area > div:nth-child(2) {
    background-color: var(--btn-color1);
  }
  .btn-area > div:nth-child(1) {
    background-color: var(--btn-color1);
  }

  ::v-deep(.van-field__label) {
    width: 70px !important;
  }
</style>
