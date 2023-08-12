<template>
    <main>
        <van-nav-bar
                title="主菜单"
                style="background: #1989fa"
        />

        <van-grid :gutter="10" :column-num="2" style="margin-top: 20px;
                                               font-size: 18px;
                                               font-weight: bold;">
            <van-grid-item @click="scanCode" v-if="qualityCheckingRecordRole">
                <img src="/image/pjpd.png" style="width: 50%;"/>
                <span style="margin-top: 10px;">品级质检</span>
            </van-grid-item>

            <van-grid-item to="/reportFormStatistics" v-if="reportFormStatisticsRole">
                <img src="/image/baobiao.png" style="width: 50%;"/>
                <span style="margin-top: 10px;">报表查询</span>
            </van-grid-item>

            <van-grid-item @click="auditingClick" v-if="auditingListRole">
                <img src="/image/shenhe.png" style="width: 50%;"/>
                <span style="margin-top: 10px;">品级质检审核</span>
            </van-grid-item>

        </van-grid>
    </main>


</template>

<script>
    import fc from "flutter-core";
    import {useRouter} from "vue-router";
    import {showDialog, showToast} from "vant";
    import {judgementCathodeCopper} from '@/api/gradeDetermination'
    import {toRaw} from "@vue/reactivity";
    import {useStore} from "vuex";
    import {onMounted, ref} from "vue";

    export default {
        setup() {
            const router = useRouter()
            const store = useStore()
            const userData = toRaw(store.state.user)
            const qualityCheckingRecordRole = ref(false)
            const reportFormStatisticsRole = ref(false)
            const scannerShow=ref(false)
            const auditingListRole = ref(false)
            fc.await('scanner', (res) => {
                if (scannerShow.value){
                    if (res != 'null') {
                        let tbCathodeCopper = {}
                        tbCathodeCopper.fBarcode = res
                        judgementCathodeCopper(tbCathodeCopper).then((result) => {
                            if (result.data.code) {
                                if (result.data.code != 200) {
                                    showDialog({
                                        title: '提示',
                                        width: '600',
                                        message: result.data.message,
                                    }).then(() => {

                                    });
                                } else {
                                    router.push({
                                        path: '/gradeDetermination',
                                        query: {barcode: res, tabState: result.data.data}
                                    })
                                }
                            }
                        }).catch(error => {
                            console.log(error)
                        })

                    } else {
                        showToast({
                            message: '数据获取失败',
                            type: 'fail',
                            className: 'particulars-detail-popup',
                        })
                    }
                }
            })

            history.pushState(null, null, document.URL);
            window.addEventListener("popstate", function (e) {
                history.pushState(null, null, document.URL);
            }, false)

            onMounted(() => {
                roleJudgement()
            })


            //角色判断
            function roleJudgement() {
                let groupNames = userData.groupNames.split(',')
                for (let i = 0; i < groupNames.length; i++) {
                    if (groupNames[i] == 'admingroup') {
                        qualityCheckingRecordRole.value = true
                        reportFormStatisticsRole.value = true
                        auditingListRole.value = true
                        scannerShow.value=true
                        break
                    }

                    if (groupNames[i] == 'yjtzj_admin') {
                        qualityCheckingRecordRole.value = true
                        reportFormStatisticsRole.value = true
                        auditingListRole.value = true
                        scannerShow.value=true
                        break
                    }

                    if (groupNames[i] == 'yjtzj_user') {
                        qualityCheckingRecordRole.value = true
                        reportFormStatisticsRole.value = true
                        scannerShow.value=true
                        break
                    }
                }
            }

            const auditingClick = () => {

                router.push({
                    path: '/auditingList',

                })

                // let state = true
                // let groupNames = userData.groupNames.split(',')
                // for (let i = 0; i < groupNames.length; i++) {
                //     if (groupNames[i] == 'yjtzlpd') {
                //         state = false
                //         break
                //     }
                // }
                //
                // if (state) {
                //     router.push({
                //         path: '/auditingList',
                //
                //     })
                // }else {
                //     showToast({
                //         message: '没有权限',
                //         type: 'fail',
                //         className: 'particulars-detail-popup'
                //     })
                // }
            }

            //扫码
            const scanCode = () => {
                router.push({
                    path: '/qualityCheckingRecord',

                })
                // let tbCathodeCopper = {}
                // tbCathodeCopper.fBarcode = '1240101220616033003524362'
                // judgementCathodeCopper(tbCathodeCopper).then((result) => {
                //    if (result.data.code){
                //        if (result.data.code != 200) {
                //            showDialog({
                //                title: '提示',
                //                width: '600',
                //                message: result.data.message,
                //            }).then(() => {
                //
                //            });
                //        } else {
                //            router.push({
                //                path: '/gradeDetermination',
                //                query: {barcode: '1240101220616033003524362', tabState: result.data.data}
                //            })
                //        }
                //    }
                //
                //
                // }).catch(error => {
                //     console.log(error)
                // })

            }

            return {
                scannerShow,
                qualityCheckingRecordRole,
                reportFormStatisticsRole,
                auditingListRole,
                userData,
                scanCode,
                auditingClick,
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
