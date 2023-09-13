<template>

    <van-nav-bar
            title="拣配"
            class="page-nav-bar"
            left-arrow
            @click-left="onClickLeft"
    >
        <template #right>
            <van-icon @click="scanCode" style="color: #FFFFFF" name="scan" size="40"/>
        </template>
    </van-nav-bar>

    <div class="container">
        <el-table
                :data="tableData"
                style="height:260px"
                id="data-area1"
                :key="itemKey"
                highlight-current-row
                @row-click="selectRow"
        >
            <el-table-column fixed prop="date" label="日期"/>
            <el-table-column prop="number" label="包号"/>
            <el-table-column prop="weight" label="重量"/>
            <el-table-column prop="barcode" label="条码" width="250"/>

        </el-table>

        <div class="info-container">
            <span class="title">应拣</span>
            <span class="title">已拣</span>
            <span class="title">缺少</span>
            <span>{{yingj}}</span>
            <span>{{yij1}}</span>
            <span>{{ques}}</span>
            <span class="title">皮重</span>
            <span class="title">捆数</span>
            <span class="title">合计</span>
            <span>{{pizhong}}</span>
            <span>{{yij2}}</span>
            <span>{{pz}}</span>
        </div>

        <div class="btn-area">
            <div @click="onConfirm">
                <img src="@/assets/image/btn_queren.png" alt=""/>
                <div>确认</div>
            </div>
            <div @click="onHandle">
                <img src="@/assets/image/btn_shoudong.png" alt="" type="primary"/>
                <div>手动</div>
            </div>
            <div @click="onDelete">
                <img src="@/assets/image/btn_tichu.png" alt="" type="primary"/>
                <div>剔除</div>
            </div>
        </div>
    </div>


    <el-dialog
            v-model="centerDialogVisibleTXM"
            title="手动不合格条码"
            width="96%"
            align-center
    >

        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field
                        v-model="F_BATCHGROUP"
                        name="F_BATCHGROUP"
                        label="批次号"
                        placeholder="批次号(四位)"
                        :rules="[{ required: true, message: '请填写批次号' }]"
                />
                <van-field
                        v-model="F_BATCHNUMBER"
                        name="F_BATCHNUMBER"
                        label="编号"
                        placeholder="编号(三位)"
                        :rules="[{ required: true, message: '请填写编号' }]"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button square icon="search" block type="primary" native-type="submit"
                            style="background-color: #003363;color:#FFFFFF">
                    查询
                </van-button>

                <div style="margin-top: 10px">
                    <p>条形码</p>

                    <el-select v-model="barCodeSelect"
                               placeholder="条形码" style="width: 100%;">
                        <el-option
                                v-for="item in listData.barCodeSelectList"
                                :key="item.F_BARCODE"
                                :label="item.F_BARCODE"
                                :value="item.F_BARCODE"
                        />
                    </el-select>
                </div>

                <van-row style="margin-top: 15px">
                    <van-col span="2"></van-col>
                    <van-col span="10">
                        <van-button icon="passed" style="background-color: #003363;color:#FFFFFF"
                                    @click="passedTXMClick">确定
                        </van-button>
                    </van-col>
                    <van-col span="10" style="text-align: center">
                        <van-button icon="close" style="background-color:red;color:#FFFFFF" @click="closeTXMClick">退出
                        </van-button>
                    </van-col>
                    <van-col span="2"></van-col>

                </van-row>

            </div>
        </van-form>

    </el-dialog>
</template>

<script>
    import BigNumber from 'bignumber.js'
    import {ref, onMounted} from 'vue'
    import {shallowReactive, toRaw} from '@vue/reactivity'
    import {useRouter, useRoute, onBeforeRouteLeave} from 'vue-router'
    import {closeToast, showConfirmDialog, showDialog, showFailToast, showLoadingToast, showToast} from 'vant'
    import {
        checkBatchNo,
        getBarcode,
        scanConfirm
    } from '@/api/pickWith'
    import {useStore} from 'vuex'
    import {pick} from 'vant/lib/utils'
    import fc from "flutter-core";

    export default {
        setup() {
            const router = useRouter()
            const route = useRoute()
            const tableData = ref([])
            const store = useStore()
            const itemKey = ref('')
            const yingj = ref('')
            const yij1 = ref('0')
            const ques = ref('')
            const pizhong = ref('0')
            const yij2 = ref('0')
            const pz = ref('0')
            const centerDialogVisibleTXM = ref(false)
            const typeName=ref('')
            const barCodeSelect = ref('')
            const F_BATCHGROUP = ref('')
            const F_BATCHNUMBER = ref('')
            const listData = shallowReactive({
                //查询的条形码
                barCodeSelectList: [],
            })


            console.log(router.currentRoute.value.path)

            fc.await('scanner', (res) => {
                if (router.currentRoute.value.path=='/pickWith') {
                    if (res != 'null') {
                        let barcode = res
                        let standard = new RegExp(
                            /^124010[1-9][0-9]{2}(0[1-9]|1[0-2])((0[1-9])|((1|2)[0-9])|30|31)[0-9]{12}$/,
                        );
                        let bool = standard.test(barcode) && barcode.length === 25;
                        if (bool) {
                            let queryParams = {}
                            queryParams.fBarcode = barcode
                            checkBatchNo(queryParams).then((res) => {
                                if (res.data.data) {
                                    return decode(barcode)
                                        .then((result) => {
                                            let date = result.shengchanriqi,
                                                number = result.kunxuhao,
                                                barcode = result.barcode,
                                                weight = result.kunjingzhong
                                            let databar = {date, number, barcode, weight}
                                            checkIfExist(toRaw(tableData.value), databar);
                                        })
                                } else {
                                    showDialog({
                                        title: '提示',
                                        width: '600',
                                        message: res.data.message,
                                    }).then(() => {
                                        // on close
                                    })
                                }
                            })
                        } else {
                            showDialog({
                                title: '提示',
                                width: '600',
                                message: '对不起，此条码不符合规范',
                            }).then(() => {
                                // on close
                            })
                        }

                    } else {
                        showDialog({
                            title: '提示',
                            width: '600',
                            message: '数据获取失败',
                        }).then(() => {
                            // on close
                        })
                    }

                }

            })

            const onClickLeft = () => {
                router.push({path: '/pickWithQueryInfoData'})
            }

            const closeTXMClick = () => {
                centerDialogVisibleTXM.value = false

            }

            const onHandle = () => {
                centerDialogVisibleTXM.value = true
            }

            let selectedRow = ''

            const selectRow = (row, column, event) => {
                selectedRow = toRaw(row)
            }

            const scanCode = () => {
                fc.scan()
            }



            onMounted(() => {
                let chukudanListInfo = toRaw(store.state.chukudanListInfo)
                if (toRaw(store.state.carInfo.pizhong)) {
                    pizhong.value = toRaw(store.state.carInfo.pizhong).toFixed(4)
                }
                yingj.value = new BigNumber(chukudanListInfo.F_PLANSUTTLE).minus(chukudanListInfo.F_SUTTLE).toFixed(4)
                tableData.value = toRaw(store.state.scandList)
                let calculateData = toRaw(store.state.scandCalculateData)
                if (Object.getOwnPropertyNames(calculateData).length == 0) {
                    ques.value = new BigNumber(chukudanListInfo.F_PLANSUTTLE).minus(chukudanListInfo.F_SUTTLE).toFixed(4)
                    pz.value = new BigNumber(pizhong.value).plus(yij1.value).toFixed(4)
                } else {
                    yij1.value = calculateData.yij1
                    ques.value = calculateData.ques
                    pz.value = calculateData.pz
                    yij2.value = calculateData.yij2
                }

            })


            const passedTXMClick = () => {
                if (barCodeSelect.value == '') {
                    showDialog({
                        title: '提示',
                        width: '600',
                        message: '请选择条形码',
                    }).then(() => {
                        // on close
                    })

                    return false
                }

                centerDialogVisibleTXM.value = false
                let barcode = barCodeSelect.value
                let standard = new RegExp(
                    /^124010[1-9][0-9]{2}(0[1-9]|1[0-2])((0[1-9])|((1|2)[0-9])|30|31)[0-9]{12}$/,
                );
                let bool = standard.test(barcode) && barcode.length === 25;
                if (bool) {
                    let queryParams = {}
                    queryParams.fBarcode = barcode
                    checkBatchNo(queryParams).then((res) => {
                        if (res.data.data) {
                            return decode(barcode)
                                .then((result) => {
                                    let date = result.shengchanriqi,
                                        number = result.kunxuhao,
                                        barcode = result.barcode,
                                        weight = result.kunjingzhong
                                    let databar = {date, number, barcode, weight}
                                    checkIfExist(toRaw(tableData.value), databar);
                                })
                        } else {
                            showDialog({
                                title: '提示',
                                width: '600',
                                message: res.data.message,
                            }).then(() => {
                                // on close
                            })
                        }
                    })
                } else {
                    showDialog({
                        title: '提示',
                        width: '600',
                        message: '对不起，此条码不符合规范',
                    }).then(() => {
                        // on close
                    })
                }
            }


            const onSubmit = (values) => {
                barCodeSelect.value = ''
                let strBatchno = values.F_BATCHNUMBER + '-' + values.F_BATCHGROUP
                let obj = {strBatchno: strBatchno}
                getBarcode(obj).then((result) => {
                    listData.barCodeSelectList = result.data.data
                    if (listData.barCodeSelectList.length > 0) {
                        showToast({
                            message: '数据查询成功',
                            type: 'success',
                            className: 'particulars-detail-popup',
                            overlay: true,
                        })
                    } else {
                        showDialog({
                            title: '提示',
                            width: '600',
                            message: '没有查询到对应的条码数据',
                        }).then(() => {
                            // on close
                        })
                    }
                }).catch(error => {
                    console.log(error)
                })

            };

            const onDelete = () => {
                if (selectedRow) {
                    showConfirmDialog({
                        title: '提示',
                        width: '600',
                        message:
                            '是否要剔除当前所选数据？',
                    })
                        .then(() => {
                            let filtedData = tableData.value.filter(
                                (item) => item.barcode != selectedRow.barcode
                            )
                            tableData.value = filtedData
                            typeName.value='edit'
                            calcPick(filtedData,selectedRow)
                            selectedRow = ''
                        })
                        .catch((err) => {
                            console.log(err)
                        })


                } else {
                    showDialog({
                        title: '提示',
                        width: '600',
                        message: '请选择要剔除的的数据',
                    }).then(() => {
                        // on close
                    })
                }
            }

            const onConfirm = () => {
                if (tableData.value.length == 0) {
                    showDialog({
                        title: '提示',
                        width: '600',
                        message: '没有要处理的数据',
                    }).then(() => {
                        // on close
                    })
                    return false
                }


                showConfirmDialog({
                    title: '提示',
                    width: '600',
                    message: '是否已完成扫描？',
                }).then(() => {

                   showLoadingToast({
                        duration: 0,
                        forbidClick: true,
                        message: '拣配中...',
                    });


                    let chukudanListInfo = toRaw(store.state.chukudanListInfo)
                    let carInfo = toRaw(store.state.carInfo)
                    let condition = {}
                    //发货单号
                    condition.F_DELIVERYNO = chukudanListInfo.F_DELIVERYNO
                    //已拣总重量
                    condition.strSuttle = yij1.value
                    //车号
                    condition.strTruckNo = carInfo.chehao
                    //秤房
                    condition.weighthousename = carInfo.chengfang
                    //单据号
                    condition.id = carInfo.danjuhao
                    //新增的DataId
                    condition.strDataId = carInfo.DataId
                    //条码数组
                    let str = toRaw(tableData.value).map((item) => {
                        return item.barcode + ',';
                    })
                        .join('')
                    condition.strBarcodes = str.substring(0, str.length - 1)
                    scanConfirm(condition).then((res) => {
                        closeToast()
                        if (res.data.code == '200') {
                            tableData.value=[]
                            showDialog({
                                title: '提示',
                                width: '600',
                                message: res.data.message,
                            }).then(() => {
                                store.commit('setPickWithScroll',0)
                                store.commit('setChukudanListInfo', {})
                                store.commit('setCarInfo', {})
                                store.commit('setScandList',[])
                                store.commit('setScandCalculateData', {})
                                router.push({path: '/pickWithQueryListData'})
                            })
                        } else {
                            showDialog({
                                title: '提示',
                                width: '600',
                                message: res.data.message,
                            }).then(() => {
                                // on close
                            })
                        }
                    })

                }).catch((err) => {
                    closeToast()
                    console.log(err)
                });
            }

            const calcPick = (arr,obj) => {
                if (typeName.value == 'add') {
                    yij1.value = (new BigNumber(yij1.value).plus(new BigNumber(obj.weight).dividedBy(1000).toNumber())).toFixed(4)
                } else {
                    yij1.value = (new BigNumber(yij1.value).minus(new BigNumber(obj.weight).dividedBy(1000).toNumber())).toFixed(4)
                }
                ques.value = (new BigNumber(yingj.value).minus(yij1.value)).toFixed(4)
                pz.value = (new BigNumber(pizhong.value).plus(yij1.value)).toFixed(4)

                yij2.value = arr.length
                tableData.value = arr
                itemKey.value = Math.random()



                let calculateData = {}
                calculateData.yij1 = yij1.value
                calculateData.ques = ques.value
                calculateData.pz = pz.value
                calculateData.yij2 = yij2.value
                store.commit('setScandCalculateData', calculateData)
                store.commit('setScandList', tableData.value)

                if (ques.value < 0) {
                    showDialog({
                        title: '提示',
                        width: '600',
                        message: '缺少数值已为负数',
                    }).then(() => {
                        // on close
                    })
                }
            }


            //解码规则
            const decode = barcode => {
                let arr = barcode.split('');
                //企业代码 三位
                const qiyedaima = arr.slice(0, 3).join('');
                //产品类别代码 二位
                const chanpinleibie = arr.slice(3, 5).join('');
                //产品等级代码 二位
                const chanpindengji = arr.slice(5, 7).join('');
                //生产日期代码 六位
                const shengchanriqi = arr.slice(7, 13).join('');
                //产品批号 四位
                const chanpinpihao = arr.slice(13, 17).join('');
                //捆序号 三位
                const kunxuhao = arr.slice(17, 20).join('');
                //捆净重代码 五位
                const kunjingzhong = arr.slice(20, 24).join('') + `.` + arr[24];

                return new Promise((resolve, reject) => {
                    resolve({
                        barcode,
                        qiyedaima,
                        chanpinleibie,
                        chanpindengji,
                        shengchanriqi,
                        chanpinpihao,
                        kunxuhao,
                        kunjingzhong,
                    });
                });
            };


            //检查是否已存在
            const checkIfExist = (arr, obj) => {
                let result = arr.find((item) => {
                    return item.barcode === obj.barcode;
                });
                if (!result) {
                    let existDatabar = []
                    arr.unshift(obj)
                    existDatabar = arr
                    typeName.value='add'
                    calcPick(existDatabar,obj)
                } else {
                    showDialog({
                        title: '提示',
                        width: '600',
                        message: '该批次已经选择，请勿重复选择',
                    }).then(() => {
                        // on close
                    })
                }
            }

            return {
                typeName,
                barCodeSelect,
                F_BATCHGROUP,
                F_BATCHNUMBER,
                listData,
                itemKey,
                yingj,
                yij1,
                ques,
                pizhong,
                yij2,
                pz,
                tableData,
                centerDialogVisibleTXM,
                passedTXMClick,
                onSubmit,
                closeTXMClick,
                checkIfExist,
                decode,
                scanCode,
                onClickLeft,
                onHandle,
                onConfirm,
                selectRow,
                onDelete,
            }
        },
    }
</script>

<style scoped>

    .info-container {
        margin: 8px;
        background-color: #b6ceeb;
        display: flex;
        flex-wrap: wrap;
        border-radius: 6px;
        overflow: hidden;
    }

    .info-container span {
        display: block;
        font-size: 18px;
        font-weight: bold;
        flex-basis: 33.33%;
        color: #000;
        text-align: center;
        min-height: 40px;
        line-height: 40px;
        border: solid 1px #4971a0;
        border-collapse: collapse;
    }

    .info-container span.title {
        background-color: #3c5d85;
        color: #fff;
    }


    .container {
        /*display: flex;*/
        /*flex-direction: column;*/
        /*justify-content: space-between;*/
        width: 100%;
        overflow: auto;
        top: 50px;
        position: absolute;
        z-index: 10;
        bottom: 5px;
    }

    .container > #data-area1 {
        margin-bottom: 5%;
        flex-grow: 1;
    }

    /** 按钮样式 */

    .btn-area div {
        border-radius: 25px;
        font-size: 20px;
        width: 30%;
        min-height: 50px;
    }

    .btn-area img {
        width: 45px;
    }

    .btn-area > div:nth-child(2) {
        background-color: var(--btn-color2);
    }

    .btn-area > div:nth-child(1) {
        background-color: var(--btn-color1);
    }

    .btn-area > div:nth-child(3) {
        background-color: var(--btn-color1);
    }

    /** */
    ::v-deep(#data-area2 .el-table__cell) {
        background-color: var(--table-body-back-color2);
    }

    ::v-deep(#data-area2 .el-table__cell) {
        border: 1px solid var(--table-body-border-color2);
    }
</style>
