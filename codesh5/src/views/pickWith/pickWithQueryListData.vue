<template>

    <van-nav-bar
            title="出库单查询结果"
            class="page-nav-bar"
            left-arrow
            @click-left="onClickLeft"
    />
    <div>
        <el-table ref="tableRef"
                  :data="tableData"
                  id="data-area"
                  :style="tableHeight"
                  v-loading="loading"
                  element-loading-text="数据加载中..."
                  element-loading-background="rgba(122, 122, 122, 0.8)"
                  @row-click="selectRow">
            <el-table-column prop="F_DELIVERYNO" fixed label="发货单号" width="110px"/>
            <el-table-column prop="F_RECIVE" label="收货单位"/>
            <el-table-column prop="F_PLANSUTTLE" label="计划重量" width="90px"/>
        </el-table>

        <div class="btn-area">
            <div @click="onClickLeft">
                <img src="@/assets/image/btn_fanhui2.png"/>
                <div>返回</div>
            </div>

            <div @click="renovateClikc">
                <img src="@/assets/image/btn_shuaxin2.png"/>
                <div>刷新</div>
            </div>

            <div @click="showDetail">
                <img src="@/assets/image/btn_chaxun2.png"/>
                <div>查看</div>
            </div>
        </div>
    </div>

</template>

<script>
    import {reactive, toRaw} from '@vue/reactivity'
    import {onMounted, ref} from 'vue'
    import {useRoute, useRouter, onBeforeRouteLeave} from 'vue-router'
    import {showToast, showLoadingToast, closeToast, showDialog} from 'vant'
    import {useStore} from 'vuex'
    import {
        getPlanMain
    } from '@/api/pickWith'
    import {onActivated} from "@vue/runtime-core";

    export default {
        setup() {
            const route = useRoute()
            const router = useRouter()
            const tableData = ref([])
            const store = useStore()
            const tableHeight = ref('')
            const loading = ref(true)
            const tableRef = ref(null)

            let queryParams = ''

            const onClickLeft = () => {
                router.push({path: '/pickWithQuery'})
            }

            let selectedRow = ''

            const selectRow = (row, column, event) => {
                selectedRow = toRaw(row)
            }


            const showDetail = () => {
                if (selectedRow) {
                    if (selectedRow.F_DELIVERYNO) {
                        let standard = new RegExp(
                            /^\d{10}$/,
                        );

                        let bool = standard.test(selectedRow.F_DELIVERYNO)
                        if (!bool) {
                            showDialog({
                                title: '提示',
                                width: '600',
                                allowHtml: true,
                                message: '<span style="font-size: 18px">非正常发货单号</span>',
                            }).then(() => {
                                // on close
                            })
                            return false
                        }
                    }
                    let scrollTop = tableRef.value.$refs.bodyWrapper.getElementsByClassName('el-scrollbar__wrap')[0]
                    store.commit('setPickWithScroll', scrollTop.scrollTop)
                    store.commit('setChukudanListInfo', selectedRow)
                    store.commit('setCarInfo', {})
                    // store.commit('setScandList', [])
                    // store.commit('setScandCalculateData', {})
                    router.push({
                        name: 'pickWithQueryInfoData',
                        // query: {
                        //   rowData,
                        // },
                    })
                } else {
                    showDialog({
                        allowHtml: true,
                        title: '提示',
                        width: '600',
                        message: '<span style="font-size: 18px">您尚未选择一条有效数据</span>',

                    }).then(() => {
                        // on close
                    });
                    return false
                }
            }


            const renovateClikc = () => {
                store.commit('setPickWithScroll', 0)
                queryData()
            }

            const queryData = () => {

                selectedRow = ''
                loading.value = true
                getPlanMain(queryParams).then((res) => {
                    tableData.value = res.data.data
                    loading.value = false
                    setTimeout(() => {
                        //滚动条位置
                        tableRef.value.setScrollTop(toRaw(store.state.pickWithScroll))
                    }, 0)

                })

            }

            onMounted(() => {
                let height = document.body.scrollHeight - 185
                tableHeight.value = 'height:' + height + 'px'
                queryParams = toRaw(store.state.pickWithQuery)
                queryData()
            })

            return {
                tableData,
                tableRef,
                loading,
                tableHeight,
                renovateClikc,
                onClickLeft,
                selectRow,
                showDetail,
                queryData,
            }
        },
    }
</script>

<style scoped>

    #data-area {
        flex-grow: 1;
    }

    .btn-area {
        flex-grow: 0;
    }

    /** 按钮样式 */

    .btn-area div {
        border-radius: 25px;
        font-size: 20px;
        width: 28%;
        min-height: 45px;
    }

    .btn-area img {
        width: 45px;
    }

    .btn-area > div:nth-child(2) {
        background-color: var(--btn-color2);
    }

    .btn-area > div:nth-child(1) {
        background-color: var(--btn-color1);
        margin-left: 10px
    }

    .btn-area > div:nth-child(3) {
        background-color: var(--btn-color1);
        margin-right: 10px
    }


</style>
