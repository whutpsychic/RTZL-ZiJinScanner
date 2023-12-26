<template>
    <main>
        <van-nav-bar
                title="拣配单查询结果"
                class="page-nav-bar"
                left-arrow
                @click-left="onClickLeft"
        />
        <div>
            <el-table :data="tableData"
                      ref="tableRef"
                      :style="tableHeight"
                      v-loading="loading"
                      v-el-table-infinite-scroll="scrollBehavior"
                      element-loading-text="数据加载中..."
                      element-loading-background="rgba(122, 122, 122, 0.8)"
                      @row-click="selectRow">

                <el-table-column fixed prop="F_PICKDATE" label="拣配日期" width="100px" :formatter="formatDate"/>
                <el-table-column prop="F_TRUCKNO" label="车号" width="100px"/>
                <el-table-column prop="F_RECIVE" label="收货单位" width="100px"/>
                <el-table-column prop="F_PICKSTATE_NAME" label="拣配状态" width="100px"/>
                <el-table-column prop="F_CONTRACT" label="合同号"/>
                <el-table-column prop="F_DELIVERYNO" label="发货单号" width="110px"/>
                <el-table-column prop="F_RECIVE" label="收货单位" width="100px"/>
                <el-table-column prop="F_PRODUCTCODE" label="产品编码" width="110px"/>
                <el-table-column prop="F_PRODUCTNAME" label="产品名称" width="100px"/>
                <el-table-column prop="F_BATCHGROUP" label="批次号" width="100px"/>
                <el-table-column prop="F_UNIT" label="计量单位" width="90px"/>
                <el-table-column prop="F_SUTTLE" label="重量"/>
                <el-table-column prop="F_COUNT" label="数量"/>
                <el-table-column prop="F_STORENAME" label="仓库"/>
                <el-table-column prop="F_CONTENT" label="备注"/>
                <el-table-column prop="F_PICKPERSON" label="拣配人"/>


            </el-table>
            <div class="btn-area">
                <div @click="onClickLeft">
                    <img src="@/assets/image/btn_fanhui1.png"/>
                    <div>返回</div>
                </div>

                <div @click="onDelete">
                    <img src="@/assets/image/btn_tichu.png"/>
                    <div>删除</div>
                </div>

                <div @click="showDetail">
                    <img src="@/assets/image/btn_mingxi.png"/>
                    <div>明细</div>
                </div>
            </div>
        </div>


        <el-dialog class="elDialogInfo"
                   v-model="centerDialogVisible"
                   :destroy-on-close="true"
                   :show-close="false"
                   title="拣配单明细"
                   fullscreen
                   align-center
        >


            <div id="contentInfo">
                <el-table :data="tableDataInfo"
                          ref="tableRefInfo"
                          :style="tableHeightInfo"
                          v-loading="loadingInfo"
                          element-loading-text="数据加载中..."
                          element-loading-background="rgba(122, 122, 122, 0.8)"
                >

                    <el-table-column fixed prop="F_PICKNO" label="拣配单号" width="110px"/>
                    <el-table-column prop="F_BATCHGROUP" label="批次号"/>
                    <el-table-column prop="F_BATCHNUMBER" label="批次编码" width="110px"/>
                    <el-table-column prop="F_SUTTLE" label="重量"/>
                    <el-table-column prop="F_BLOCKS" label="块数"/>
                    <el-table-column prop="F_UNIT" label="计量单位" width="110px"/>


                </el-table>
                <div class="btn-area">
                    <div @click="centerDialogVisible = false" style=" margin: 0 auto;">
                        <img src="@/assets/image/btn_fanhui1.png"/>
                        <div>返回</div>
                    </div>
                </div>
            </div>

        </el-dialog>
    </main>
</template>

<script>
    import elTableInfiniteScroll from 'el-table-infinite-scroll'
    import fc from 'flutter-core'
    import {toRaw} from '@vue/reactivity'
    import {onMounted, ref} from 'vue'
    import {useRouter} from 'vue-router'
    import {closeToast, showConfirmDialog, showDialog, showLoadingToast} from 'vant'
    import {useStore} from 'vuex'
    import {
        getPickHeadData,
        getPickListData,
        deletePickNo
    } from '@/api/pickWithRecordQuery'
    import {default as vElTableInfiniteScroll} from "el-table-infinite-scroll";

    export default {
        directives: {
            'el-table-infinite-scroll': elTableInfiniteScroll
        },
        setup() {
            const router = useRouter()
            const tableData = ref([])
            const store = useStore()
            const tableHeight = ref('')
            const loading = ref(true)
            const tableRef = ref(null)
            const tableHeightInfo = ref('')
            const loadingInfo = ref(true)
            const tableRefInfo = ref(null)
            const tableDataInfo = ref([])

            const limit = ref(20)
            const offset = ref(0)
            const continuation = ref(true)
            const centerDialogVisible = ref(false)

            let queryParams = ''
            onMounted(() => {
                fc.register("goback", () => {
                    if (centerDialogVisible.value) {
                        centerDialogVisible.value = false
                    } else {
                        router.push({path: '/pickWithRecordQuery'})
                    }
                })


                let height = document.body.scrollHeight - 170
                tableHeight.value = 'height:' + height + 'px'
                queryParams = toRaw(store.state.pickWithRecordQuery)
            })


            const scrollBehavior = () => {
                if (continuation.value) {
                    offset.value = offset.value + 1
                    queryData()
                }
            }


            const onClickLeft = () => {
                router.push({path: '/pickWithRecordQuery'})

            }

            let selectedRow = ''

            const selectRow = (row, column, event) => {
                selectedRow = toRaw(row)
            }


            //明细
            const showDetail = () => {
                if (selectedRow) {
                    centerDialogVisible.value = true
                    setTimeout(() => {
                        // document.querySelector('.el-dialog__header').style.display = 'none'
                        let height = document.body.scrollHeight - 180
                        tableHeightInfo.value = 'height:' + height + 'px'

                        loadingInfo.value = true
                        let obj = {pickno: selectedRow.F_PICKNO}
                        getPickListData(obj).then((res) => {
                            tableDataInfo.value = res.data.data
                            loadingInfo.value = false
                        })
                    }, 200)

                } else {
                    showDialog({
                        title: '提示',
                        width: '600',
                        allowHtml: true,
                        message: '<span style="font-size: 18px">请选择一条数据</span>',
                    }).then(() => {
                        // on close
                    });
                    return false
                }
            }


            //删除
            const onDelete = () => {
                if (selectedRow) {
                    if (selectedRow.F_PICKSTATE != 0) {
                        showDialog({
                            title: '提示',
                            width: '600',
                            allowHtml: true,
                            message: '<span style="font-size: 18px">已装车，不能删除</span>',
                        }).then(() => {
                            // on close
                        });
                        return false
                    }

                    showConfirmDialog({
                        title: '提示',
                        width: '600',
                        allowHtml: true,
                        message: '<p style="font-size: 18px"><span>确定删除车号为</span><span style="color: red;font-weight: bolder">' + selectedRow.F_TRUCKNO + '</span><span>的记录？</span></p>',
                    })
                        .then(() => {
                            showLoadingToast({
                                duration: 0,
                                forbidClick: true,
                                className: 'particulars-detail-popup',
                                overlay: true,
                                message: '撤销中...',
                            });

                            let obj = {}
                            obj.F_PICKNO = selectedRow.F_PICKNO
                            obj.F_SUTTLE = selectedRow.F_SUTTLE
                            obj.F_DELIVERYNO = selectedRow.F_DELIVERYNO
                            deletePickNo(obj).then((result) => {
                                closeToast()
                                showDialog({
                                    title: '提示',
                                    width: '600',
                                    allowHtml: true,
                                    message: '<span style="font-size: 18px">' + result.data.message + '</span>',
                                }).then(() => {
                                    offset.value = 1
                                    tableData.value = []
                                    tableRef.value.setScrollTop(0)
                                    queryData()
                                })
                            }).catch(error => {
                                console.log(error)
                                closeToast()
                            })

                        })
                        .catch((err) => {
                            console.log(err)
                            closeToast()
                        });
                } else {
                    showDialog({
                        title: '提示',
                        width: '600',
                        allowHtml: true,
                        message: '<span style="font-size: 18px">请选择一条数据</span>',
                    }).then(() => {
                        // on close
                    });
                    return false
                }
            }

            const queryData = () => {
                selectedRow = ''
                loading.value = true

                let paramInfo = {}
                let blocks = {}
                let paramBlock = {}
                paramBlock.limit = limit.value
                paramBlock.offset = offset.value
                paramBlock.blockId = 'paramBlock'
                paramBlock.data = queryParams
                blocks.paramBlock = paramBlock
                paramInfo.blocks = blocks
                getPickHeadData(paramInfo).then((res) => {
                    tableData.value = [...tableData.value, ...res.data.blocks.resultBlock.data];
                    if (tableData.value.length == res.data.blocks.resultBlock.total) {
                        continuation.value = false
                    }
                    loading.value = false


                })

            }

            const formatDate = (row, column, cellValue, index) => {
                if (typeof (cellValue) == "undefined") {
                    return "";
                }
                return dateFormat("YYYY-mm-dd", cellValue);
            }


            //格式化时间
            const dateFormat = (fmt, date) => {
                let ret;
                let d = new Date(date);
                const opt = {
                    "Y+": d.getFullYear().toString(),        // 年
                    "m+": (d.getMonth() + 1).toString(),     // 月
                    "d+": d.getDate().toString(),            // 日
                    "H+": d.getHours().toString(),           // 时
                    "M+": d.getMinutes().toString(),         // 分
                    "S+": d.getSeconds().toString()          // 秒
                    // 有其他格式化字符需求可以继续添加，必须转化成字符串
                };
                for (let k in opt) {
                    ret = new RegExp("(" + k + ")").exec(fmt);
                    if (ret) {
                        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")));
                    }

                }
                return fmt
            }

            return {
                tableHeightInfo,
                loadingInfo,
                tableRefInfo,
                tableDataInfo,
                tableData,
                tableRef,
                loading,
                tableHeight,
                limit,
                offset,
                continuation,
                centerDialogVisible,
                scrollBehavior,
                formatDate,
                dateFormat,
                onDelete,
                onClickLeft,
                selectRow,
                showDetail,
                queryData,
            }
        },
    }
</script>

<style scoped>

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


    .btn-areaInfo {
        flex-grow: 0;
    }

    /** 按钮样式 */

    .btn-areaInfo div {
        border-radius: 25px;
        font-size: 20px;
        width: 30%;
        min-height: 50px;
    }

    .btn-areaInfo img {
        width: 45px;
    }


    .btn-areaInfo > div:nth-child(1) {
        background-color: var(--btn-color1);
        margin: 0 auto;
    }


</style>
