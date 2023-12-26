<template>

    <van-tabbar v-model="active" active-color="rgb(0 101 197)" @change="onChange">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>

</template>

<script>
    import {toRaw} from "@vue/reactivity";
    import {useStore} from 'vuex'
    import {ref} from 'vue'
    import {useRouter} from "vue-router";
    export default {
        setup() {
            const store = useStore()
            const router = useRouter()
            const active=ref(toRaw(store.state.dhIndex))
            const onChange = (index) => {
                active.value=index
                store.commit('setDhIndex', index)
                if (index == 0) {
                    router.push({path: '/home'})
                } else if (index == 1) {
                    router.push({path: '/my'})
                }
            }
            return{
                active,
                onChange
            }
        },
    }
</script>

<style scoped>

</style>