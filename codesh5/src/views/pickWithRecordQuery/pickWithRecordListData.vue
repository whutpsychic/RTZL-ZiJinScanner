<template>

    <van-nav-bar
            title="拣配单查询结果"
            class="page-nav-bar"
            left-arrow
            @click-left="onClickLeft"
    />
    <div class="table-content container" id="content">
        <el-table :data="tableData" ref="tableRef"
                  :style="tableHeight"
                  highlight-current-row
                  v-loading="loading"
                  element-loading-text="数据加载中..."
                  :element-loading-spinner="svg"
                  element-loading-svg-view-box="-10, -10, 50, 50"
                  element-loading-background="rgba(122, 122, 122, 0.8)"
                  @row-click="selectRow">

            <el-table-column fixed prop="F_PICKDATE" label="拣配日期" width="100px" :formatter="formatDate"/>
            <el-table-column prop="F_TRUCKNO" label="车号"/>
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
</template>

<script>
    import {toRaw} from '@vue/reactivity'
    import {onMounted, ref} from 'vue'
    import {useRoute, useRouter} from 'vue-router'
    import {closeToast, showConfirmDialog, showDialog, showLoadingToast, showToast} from 'vant'
    import {useStore} from 'vuex'
    import {
        getPickHeadData,
        deletePickNo
    } from '@/api/pickWithRecordQuery'

    export default {
        setup() {
            const route = useRoute()
            const router = useRouter()
            const tableData = ref([])
            const store = useStore()
            const tableHeight = ref('')
            const loading = ref(true)
            const tableRef = ref(null)
            const svg = `
                    <path class="path" d="
                      M 30 15
                      L 28 17
                      M 25.61 25.61
                      A 15 15, 0, 0, 1, 15 30
                      A 15 15, 0, 1, 1, 27.99 7.5
                      L 15 15
                    " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>`

            onMounted(() => {
                let height = document.body.scrollHeight - 170
                tableHeight.value = 'height:' + height + 'px'
                queryParams = toRaw(store.state.pickWithRecordQuery)
                queryData()
            })


            let queryParams = ''

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
                    let scrollTop = tableRef.value.$refs.bodyWrapper.getElementsByClassName('el-scrollbar__wrap')[0]
                    store.commit('setPickWithRecordScroll', scrollTop.scrollTop)
                    console.log(scrollTop.scrollTop)
                    let pickno = selectedRow.F_PICKNO
                    router.push({
                        name: 'pickWithRecordInfoData',
                        query: {
                            pickno,
                        },
                    })
                } else {
                    showDialog({
                        title: '提示',
                        width: '600',
                        message: '请选择一条数据',
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
                            message: '已装车，不能删除',
                        }).then(() => {
                            // on close
                        });
                        return false
                    }

                    showConfirmDialog({
                        title: '提示',
                        width:'600',
                        message:
                            '确定删除车号为' + selectedRow.F_TRUCKNO + '的记录？',
                    })
                        .then(() => {
                            showLoadingToast({
                                duration: 0,
                                forbidClick: true,
                                className: 'particulars-detail-popup',
                                message: '撤销中...',
                            });

                            let obj={}
                            obj.F_PICKNO=selectedRow.F_PICKNO
                            obj.F_SUTTLE=selectedRow.F_SUTTLE
                            obj.F_DELIVERYNO=selectedRow.F_DELIVERYNO
                            deletePickNo(obj).then((result) => {
                                closeToast()
                                showDialog({
                                    title: '提示',
                                    width: '600',
                                    message: result.data.message,
                                }).then(() => {
                                    store.commit('setPickWithRecordScroll', 0)
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
                        message: '请选择一条数据',
                    }).then(() => {
                        // on close
                    });
                    return false
                }
            }

            const queryData = () => {

                selectedRow = ''

                loading.value = true
                getPickHeadData(queryParams).then((res) => {
                    tableData.value = res.data.data
                    loading.value = false
                    setTimeout(() => {
                        //滚动条位置
                        tableRef.value.setScrollTop(toRaw(store.state.pickWithRecordScroll))
                    }, 0)

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
                tableData,
                tableRef,
                svg,
                loading,
                tableHeight,
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


    .table-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

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
        margin-left:10px
    }

    .btn-area > div:nth-child(3) {
        background-color: var(--btn-color1);
        margin-right:10px
    }


</style>
