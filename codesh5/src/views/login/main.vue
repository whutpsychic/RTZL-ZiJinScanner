<template>
  <main>
    <div class="container">
      <van-form @submit="onSubmit">
        <div class="title">阴极铜条码管理系统</div>
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="username"
            autocomplete="off"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />

          <van-field
            v-model="rolename"
            name="rolename"
            placeholder="角色名"
            disabled
            autocomplete="off"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            placeholder="密码"
            autocomplete="off"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div class="login-btn-area">
          <van-button round block type="primary" @click="onClickLeft">
            取消
          </van-button>
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
  </main>
</template>

<script>
  import { ref } from 'vue'
  import { login } from '@/api/user'
  import { showToast } from 'vant'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import { setToastDefaultOptions, resetToastDefaultOptions } from 'vant'
  export default {
    setup() {
      const username = ref('')
      const password = ref('')
      const rolename = ref('拣配')

      const store = useStore()
      const router = useRouter()

      const onClickLeft = () => history.back()

      setToastDefaultOptions({ duration: 1000 })

      const onSubmit = (values) => {
        login(values).then((res) => {
          if (res.data.loginStatus) {
            store.commit('setUser', res.data)
            showToast({
              message: '登录成功',
              type: 'success',
              className: 'toast',
              overlay: true,
            })
            router.push({ path: '/home' })
          } else {
            showToast({
              message: '账号或密码不正确',
              type: 'fail',
              className: 'toast',
            })
          }
        })
      }

      return {
        username,
        rolename,
        password,
        onSubmit,
        onClickLeft,
      }
    },
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    background-image: url('../../assets/image/back-ground.png');
    background-size: 100%;
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

  .van-form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .van-cell-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .van-field {
    padding: 0px;
  }

  ::v-deep(.van-field__control) {
    height: 50px;
    text-align: center !important;
    font-size: 20px !important;
    color: #ffffff;
  }

  ::v-deep(.van-cell) {
    background-color: rgba(255, 255, 255, 0) !important;
    color: red !important;
  }

  ::v-deep(.van-field__error-message) {
    font-size: 15px;
    text-align: center;
  }

  /**============ */

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
