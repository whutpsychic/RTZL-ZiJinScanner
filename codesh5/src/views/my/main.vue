<template>

    <van-nav-bar
            title="我的"
            class="page-nav-bar"
    />


    <div class="top">
        <div>
            <img class="tar" src="/image/touxiang.jpeg" alt="">
            <p style="float:left;color:#FFFFFF;margin-left:30px;margin-top:30px">{{displayName}}</p>
        </div>

    </div>

    <div style="margin-top:10px; clear: both; border-top: 1px solid #e2e2ee;">
        <van-cell size="large" icon="warning-o" title="退出" is-link @click="dropOut"/>
    </div>

    <div>
    </div>

</template>

<script>

    import {useStore} from "vuex";
    import {useRouter} from "vue-router";
    import {logout} from '@/api/user'
    import {showConfirmDialog} from 'vant';
    import {toRaw} from "@vue/reactivity";

    export default {
        setup() {
            const store = useStore()
            const router = useRouter()
            const Data = toRaw(store.state.user)
            let displayName = Data.displayName
            //退出
            const dropOut = () => {

                showConfirmDialog({
                    title: '提示',
                    width:'600',
                    allowHtml: true,
                    message: '<span style="font-size: 18px">是否退出当前程序？</span>',
                })
                    .then(() => {
                        logout().then(() => {
                            router.push({path: '/login'})
                        }).catch(error => {
                            console.log(error)
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                    });


            }

            return {
                dropOut,
                displayName
            }
        }
    }
</script>

<style  scoped>


    .top {
        height: 150px;
        width: 100%;
        background-image: linear-gradient(to top, #127793 0%, #011e4a 100%);

    }

    .tar {
        margin-top: 20px;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        float: left;
        margin-left: 10px;
    }



</style>
