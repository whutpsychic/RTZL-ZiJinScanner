<template>
  <main>
    <p>本页面是初始展现的页面，没有业务UI。包含一些设备功能调试。如果有免登录需求，则根据条件或缓存数据判断是去登录页还是直接带入登陆数据进首页</p>
    <div class="body">
      <van-button type="primary" block @click="gotoLogin">去登陆页</van-button>
      <van-button type="primary" block @click="onScan">摄像头扫描（手机即可）</van-button>
      <van-button type="primary" block @click="onScan2">红外线扫描（PDA设备专属）</van-button>
      <van-button type="primary" block @click="writeLocalData">本地数据缓存（长期有效）</van-button>
      <van-button type="primary" block @click="readLocalData">读取本地已缓存的数据</van-button>
      <!-- <van-button type="primary" block @click="update">检查更新</van-button> -->
    </div>
  </main>
</template>

<script>
import fc from "flutter-core"

export default {
  mounted() {
    // 注册扫描后监听返回结果函数
    fc.await("scanner", (res) => {
      fc.toast(res)
    })
    // 读取本地缓存数据
    fc.await("readLocal", (res) => {
      fc.toast(res)
    })

    this.gotoLogin()
  },
  methods: {
    gotoLogin() {
      this.$router.replace("/login")
    },
    onScan() {
      fc.scan()
    },
    onScan2() {

    },
    writeLocalData() {
      fc.recordLocal("hell", "这是一些缓存的内容")
    },
    readLocalData() {
      fc.readLocal("hell")
    },
    // update() {
    //   fc.appUpdate("https://gitee.com/whutpsychic/RTZL-ZiJinScanner/raw/main/app-release_v0.2.1.apk")
    // },
  }
}

</script>

<style lang="scss" scoped>
main {
  padding: 10px;
}

.body {
  margin: 10px;

  button {
    margin-bottom: 15px;
  }
}
</style>