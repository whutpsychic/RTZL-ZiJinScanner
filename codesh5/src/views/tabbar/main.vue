<template>

    <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>

</template>

<script>
    export default {
        data() {
            return {
                active: 0
            }
        },
        methods: {
            onChange(index) {
                this.active=index
                 console.log(this.active)
                if (index == 0) {
                    this.$router.push({path: '/home'})
                } else if (index == 1) {
                    this.$router.push({path: '/my'})
                }
            }
        }

    }
</script>

<style scoped>

</style>