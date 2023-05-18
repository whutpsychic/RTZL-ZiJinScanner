<template>
  <main class="container">
    <van-nav-bar title="登录" class="page-nav-bar" />
    <p class="title">紫金铜业阴极铜条码管理系统</p>

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />

        <van-field
          v-model="rolename"
          name="rolename"
          placeholder="角色名"
          :rules="[{ required: true, message: '请填角色名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
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
      const rolename = ref('')

      const store = useStore()
      const router = useRouter()

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
              message: '失败',
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
      }
    },
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    background-image: url('../../assets/image/back-ground.png');
  }

  .title {
    text-align: center;
    font-size: 30pt;
    color: #ffffff;
  }

  /* .van-cell-group {
    opacity: 0.1;
  } */
</style>
