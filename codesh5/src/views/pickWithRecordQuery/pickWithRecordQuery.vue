<template>
    <van-nav-bar
            title="查询拣配单头"
            class="page-nav-bar"
            left-arrow
            @click-left="onClickLeft"
    />


</template>

<script>
    import {useRouter} from "vue-router";

    export default {
        setup() {
            const router = useRouter()
            //跳转到首页
            const onClickLeft = () => {
                router.push({path: '/home'})
            }

            return{
                onClickLeft
            }
        }
    }
</script>

<style scoped>

</style>