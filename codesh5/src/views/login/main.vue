<template>
  <main>
    <div class="container">
      <van-form @submit="onSubmit">
        <p class="title">紫金铜业阴极铜条码管理系统</p>
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="username"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />

          <van-field v-model="rolename" name="rolename" placeholder="角色名" />
          <van-field
            v-model="password"
            type="password"
            name="password"
            placeholder="密码"
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
  export default {
    setup() {
      const username = ref('')
      const password = ref('')
      const rolename = ref('拣配')

      const store = useStore()
      const router = useRouter()

      const onClickLeft = () => history.back()

      const onSubmit = (values) => {
        login(values).then((res) => {
          if (res.code == 1) {
            store.commit('setUser', values)
            showToast({
              message: '登录成功',
              type: 'success',
            })
            router.push({ path: '/home' })
          } else {
            showToast({
              message: '账号或密码不正确',
              type: 'fail',
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
    padding-top: 30%;
    padding-bottom: 10%;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/image/back-ground.png');
    background-size: 100%;
  }

  .title {
    text-align: center;
    font-size: 25px;
    color: #ffffff;
  }

  .van-form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /**============ */

  .login-btn-area {
    display: flex;
    justify-content: space-evenly;
    height: 20%;
  }

  .login-btn-area .van-button {
    height: 100%;
    width: 45%;
    border-radius: 25px;
    font-size: 35px;
  }

  .login-btn-area .van-button:nth-child(1) {
    background-color: #ffffff;
    color: #aaaaaa;
  }
  .login-btn-area .van-button:nth-child(2) {
    background-color: var(--btn-color2);
    color: #ffffff;
  }

  /* .van-cell-group {
    opacity: 0.1;
  } */
</style>
