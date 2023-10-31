<template>
  <div class="container" :style="{ height: bodyHeight + 'px' }">
    <van-form @submit="onSubmit">
      <div class="title" @dblclick="ipconfigClick">阴极铜条码管理系统</div>
      <van-cell-group inset style="width: 96%; position: relative;left: 2%;">
        <van-field left-icon="friends" v-model="inputUser" name="inputUser" label="用户名" autocomplete="off"
          placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field left-icon="bag" v-model="inputPw" type="password" name="inputPw" label="密码" placeholder="密码"
          autocomplete="off" :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div class="login-btn-area">
        <van-button round block type="primary" @click="onClickLeft">
          取消
        </van-button>
        <van-button round block style="background-color: #d77100;color: #FFFFFF;margin-top:50px;" type="primary"
          native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>


<script>
import fc from "flutter-core";
import { onMounted, ref } from 'vue'
import { login, loginVerify } from '@/api/user'
import { showToast } from 'vant'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { setToastDefaultOptions } from 'vant'
import appConfig from '@/appConfig'

export default {
  setup() {

    const inputUser = ref('')
    const inputPw = ref('')
    const bodyHeight = ref('')
    const store = useStore()
    const router = useRouter()

    const onClickLeft = () => {
      fc.call('exitApp')
    }

    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function (e) {
      history.pushState(null, null, document.URL);
    }, false)


    onMounted(() => {
      if (appConfig.developing) {
        onSubmit({ inputUser: 'admin', inputUser: 'admin' })
      }
      bodyHeight.value = document.documentElement.clientHeight
    })


    setToastDefaultOptions({ duration: 500 })

    const ipconfigClick = () => {
      fc.ipconfig()
    }

    const onSubmit = (values) => {
      login(values).then((result) => {
        loginVerify().then((res) => {
          if (res.data.code) {
            if (res.data.code == 200) {
              store.commit('setUser', res.data.data)
              showToast({
                message: '登录成功',
                type: 'success',
                className: 'particulars-detail-popup',
                overlay: true,
              })
              router.push({ path: '/home' })
            }
          } else {
            showToast({
              message: '登录失败',
              type: 'fail',
              className: 'particulars-detail-popup'
            })
          }
        }).catch(error => {
          console.log(error)
        })

      }).catch(error => {
        console.log(error)
      })
    }


    return {
      bodyHeight,
      inputUser,
      inputPw,
      onSubmit,
      ipconfigClick,
      onClickLeft
    }
  }
  ,
}
</script>


<style scoped>
.container {
  background-image: url('../../assets/image/back-ground.png');
  background-size: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.title {
  height: 100px;
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

/**=================== */

/*.van-form {*/
/*    height: 100%;*/
/*    display: flex;*/
/*    flex-direction: column;*/
/*    justify-content: space-between;*/
/*}*/

/*.van-cell-group {*/
/*    display: flex;*/
/*    flex-direction: column;*/
/*    justify-content: center;*/
/*    background-color: rgba(255, 255, 255, 0.3);*/
/*}*/

/*.van-field {*/
/*    padding: 0px;*/
/*}*/

::v-deep(.van-field__control) {
  height: 40px;
  font-size: 18px !important;
  color: #000000;
}


::v-deep(.van-field__label) {
  margin-top: 8px !important;
  font-size: 18px !important;
  width: 80px !important;
}

::v-deep(.van-icon) {
  font-size: 22px !important;
  margin-top: 8px !important;
}





/*::v-deep(.van-cell) {*/
/*    background-color: rgba(255, 255, 255, 0) !important;*/
/*    color: red !important;*/
/*}*/

/*::v-deep(.van-field__error-message) {*/
/*    font-size: 15px;*/
/*    text-align: center;*/
/*}*/

/*!**============ *!*/

.login-btn-area {
  display: flex;
  justify-content: space-evenly;
}

.login-btn-area .van-button {
  width: 45%;
  border-radius: 25px;
  font-size: 30px;
  min-height: 100px;
}

.login-btn-area .van-button:nth-child(1) {
  background-color: #ffffff;
  color: #aaaaaa;
}

.login-btn-area .van-button:nth-child(2) {
  background-color: var(--btn-color2);
  color: #ffffff;
}

/**toast */
.toast {
  background-color: red;
}
</style>
