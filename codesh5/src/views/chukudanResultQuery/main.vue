<template>
  <main>
    <van-nav-bar
      title="查看出库单"
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
    />
  </main>
</template>

<script>
  import { ref } from 'vue'
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  export default {
    setup() {
      const route = useRoute()

      const onClickLeft = () => history.back()

      onMounted(() => {
        debugger
        alert(JSON.stringify(route.params))
      })

      return {
        onClickLeft,
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
