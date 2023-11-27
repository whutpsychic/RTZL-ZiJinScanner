<template>
    <van-nav-bar title="主菜单"/>

    <van-grid :gutter="5" :column-num="2" style="margin-top: 6px;
                                               font-size: 18px;
                                               font-weight: bold;">
        <van-grid-item @click="scanCode" v-if="gradeDeterminationRole">
            <img src="/image/pjpd.png" style="width: 40%;"/>
            <span style="margin-top: 8px;">品级质检</span>
        </van-grid-item>

        <van-grid-item to="/reportFormStatistics" v-if="reportFormStatisticsRole">
            <img src="/image/baobiao.png" style="width: 40%;"/>
            <span style="margin-top: 8px;">报表查询</span>
        </van-grid-item>

        <van-grid-item to="/auditingList" v-if="auditingListRole">
            <img src="/image/shenhe.png" style="width: 40%;"/>
            <span style="margin-top: 8px;">品级质检审核</span>
        </van-grid-item>


        <van-grid-item to="/qualityCheckingRecord" v-if="qualityCheckingRecordRole">
            <img src="/image/zjjl.png" style="width: 40%;"/>
            <span style="margin-top: 8px;">质检记录</span>
        </van-grid-item>


        <van-grid-item to="/pickWithQuery" v-if="pickWithQueryRecordRole">
            <img src="/image/jianpei.png" style="width: 40%;"/>
            <span style="margin-top: 8px;">拣配</span>
        </van-grid-item>


        <van-grid-item to="/pickWithRecordQuery" v-if="pickWithRecordQueryRecordRole">
            <img src="/image/jianpeidan.png" style="width: 40%;"/>
            <span style="margin-top: 8px;">查询拣配单</span>
        </van-grid-item>
    </van-grid>
</template>

<script>

    import fc from 'flutter-core'
    import {useRouter} from "vue-router";
    import {toRaw} from "@vue/reactivity";
    import {useStore} from "vuex";
    import {onMounted, ref} from "vue";
    import tools from '@/utils/tool.js'
    import {showConfirmDialog} from "vant";
    import {logout} from '@/api/user'

    export default {
        setup() {
            const router = useRouter()
            const store = useStore()
            const userData = toRaw(store.state.user)
            const gradeDeterminationRole = ref(false)
            const qualityCheckingRecordRole = ref(false)
            const reportFormStatisticsRole = ref(false)
            const auditingListRole = ref(false)
            const pickWithQueryRecordRole = ref(false)
            const pickWithRecordQueryRecordRole = ref(false)


            onMounted(() => {
                // 注册后退函数（供flutter调用）
                fc.register("goback", () => {
                    const location = window.location.href
                    const isRootRouter = tools.isRootRouter(location)
                    if (isRootRouter) {
                        showConfirmDialog({
                            title: '提示',
                            width: '600',
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


                    } else {
                        router.back()
                    }
                })
                roleJudgement()
            })


            //角色判断
            const roleJudgement = () => {
                let groupNames = userData.groupNames.split(',')
                for (let i = 0; i < groupNames.length; i++) {
                    if (groupNames[i] == 'admingroup') {
                        gradeDeterminationRole.value = true
                        qualityCheckingRecordRole.value = true
                        reportFormStatisticsRole.value = true
                        auditingListRole.value = true
                        pickWithQueryRecordRole.value = true
                        pickWithRecordQueryRecordRole.value = true
                        break
                    }

                    if (groupNames[i] == 'yjtzj_admin') {
                        gradeDeterminationRole.value = true
                        qualityCheckingRecordRole.value = true
                        reportFormStatisticsRole.value = true
                        auditingListRole.value = true
                        break
                    }

                    if (groupNames[i] == 'yjtzj_user') {
                        gradeDeterminationRole.value = true
                        qualityCheckingRecordRole.value = true
                        reportFormStatisticsRole.value = true
                        break
                    }


                    if (groupNames[i] == 'yjtjp_app') {
                        pickWithQueryRecordRole.value = true
                        pickWithRecordQueryRecordRole.value = true
                        break
                    }
                }
            }


            //扫码
            const scanCode = () => {
                router.push({
                    path: '/gradeDetermination',
                    query: {barcode: '', tabState: '0'}
                })

            }

            return {
                pickWithQueryRecordRole,
                pickWithRecordQueryRecordRole,
                gradeDeterminationRole,
                qualityCheckingRecordRole,
                reportFormStatisticsRole,
                auditingListRole,
                userData,
                scanCode,
                roleJudgement
            }
        }
    }
</script>

<style scoped>
    .btns {
        height: calc(100vh - var(--van-nav-bar-height));
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .van-button {
        width: 80%;
        height: 20%;
        border-radius: 25px;
        font-size: 30px;
        cursor: pointer;
    }

    .van-button:nth-child(1) {
        margin-top: 8%;
        background-color: var(--btn-color1);
    }

    .van-button:nth-child(2) {
        margin-top: 8%;
        background-color: var(--btn-color2);
    }

    .van-button:nth-child(3) {
        margin-top: 8%;
    }
</style>
