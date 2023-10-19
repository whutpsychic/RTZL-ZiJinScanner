<template>

    <div class="header">
        <van-nav-bar
                title="品级质检列表"
                class="page-nav-bar"
                left-arrow
                @click-left="onClickLeft"
        >
            <template #right>
                <van-icon @click="scanCode" style="color: #FFFFFF" name="scan" size="40"/>
            </template>
        </van-nav-bar>
        <van-tabs v-model:active="active" @click-tab="onClickTab">
            <van-tab :title="quantity"></van-tab>
            <van-tab title=" 已质检"></van-tab>
        </van-tabs>
    </div>

    <div class="content">
        <div v-show="active==0" style="padding:0px 5px 5px 5px">

            <el-card class="box-card" shadow="always" style="margin-top:5px"
                     v-for="(item,index) in  listData.yjtJyInformationListData">

                <div class="test">

                    <div @click="details(item)">{{item.batchnumber}}</div>
                    <van-button size="small" style="margin-left: 30px;background-color: #003363;color:#FFFFFF"
                                @click="identifyClick('0',item)">单个鉴定
                    </van-button>

                    <img src="/image/delete.png" class="delete" @click="deleteData(item)"/>

                </div>

            </el-card>
        </div>
        <div v-show="active==1">
            <div v-if="JSON.stringify(listData.yjtJyInformationData) !== '{}'">
                <div style="position: relative">

                    <el-card class="box-card" shadow="always" style="margin-top:5px">
                        <van-divider content-position="left">基本信息</van-divider>
                        <div style="position: relative">
                            <p>
                                <span style="font-weight: bold">编号：</span>
                                <span>{{listData.yjtJyInformationData.batchnumber}}</span>
                            </p>

                            <p>
                                <span style="font-weight: bold">重量：</span>
                                <span>{{parseFloat(listData.yjtJyInformationData.suttle)}}{{listData.yjtJyInformationData.unit}}</span>
                            </p>

                            <p>
                                <span style="font-weight: bold">标准：</span>
                                <span>{{listData.yjtJyInformationData.standard}}</span>
                            </p>

                            <p>
                                <span style="font-weight: bold">计量员：</span>
                                <span>{{listData.yjtJyInformationData.suttleperson}}</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span style="font-weight: bold">扫描人：</span>
                                <span>{{listData.yjtJyInformationData.scanUser}}</span>
                            </p>

                            <p>
                                <span style="font-weight: bold">生产日期：</span>
                                <span>{{dateFormat("YYYY-mm-dd HH:MM:SS",listData.yjtJyInformationData.proDate)}}</span>
                            </p>

                            <div v-if="listData.yjtJyInformationDetailsData.status=='2'" class="yijianyan"
                                 style="position: absolute;">
                                <img src="/image/yijianyan.png">
                            </div>

                            <div v-if="listData.yjtJyInformationDetailsData.status=='0'" class="yijianyan"
                                 style="position: absolute;">
                                <img src="/image/shenhezhong.png">
                            </div>

                        </div>


                        <van-divider content-position="left">质检信息</van-divider>

                        <div>
                            <p>
                                <span style="font-weight: bold">品级分类：</span>
                                <span>{{listData.yjtJyInformationDetailsData.exteriorName}}</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span v-if="listData.yjtJyInformationDetailsData.exterior!='0'"
                                      style="font-weight: bold">类型：</span>
                                <span>{{listData.yjtJyInformationDetailsData.dictName}}</span>
                            </p>

                            <p>
                                <span style="font-weight: bold">质检时间：</span>
                                <span>{{dateFormat("YYYY-mm-dd HH:MM:SS",listData.yjtJyInformationDetailsData.checkoutDate)}}</span>
                            </p>

                            <p>
                                <span style="font-weight: bold">质检人：</span>
                                <span>{{listData.yjtJyInformationDetailsData.checkoutUser}}</span>
                            </p>

                            <p v-if="listData.yjtJyInformationDetailsData.alterReason">
                                <span style="font-weight: bold">改判理由：</span>
                                <span>{{listData.yjtJyInformationDetailsData.alterReason}}</span>
                            </p>

                        </div>


                        <div v-if="listData.yjtJyInformationDetailsData.exterior!='0'">
                            <van-image style="margin:0 2%" @click="seeImg"
                                       v-for="(item,index) in  listData.yjtJyInformationFileList"
                                       width="45%"
                                       height="8rem"
                                       fit="cover"
                                       position="left"
                                       :src="item"
                            />
                        </div>
                    </el-card>

                </div>
            </div>
        </div>
    </div>

    <div class="empennage">

        <van-row>
            <van-col span="2"></van-col>
            <van-col span="8">
                <van-button style="background-color: #003363;color:#FFFFFF" @click="queryTXM">手动录入</van-button>
            </van-col>
            <van-col span="12" style="text-align: center">
                <van-button style="background-color: #003363;color:#FFFFFF" @click="identifyClick('1')">
                    {{identifyTitle}}
                </van-button>
            </van-col>
            <van-col span="2"></van-col>

        </van-row>
    </div>

    <van-popup
            v-model:show="buttonShow"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '50%' }"
    >

        <div style="margin-top:15%">
            <van-row>
                <van-col span="3"></van-col>
                <van-col span="18">
                    <van-button type="primary" size="large" @click="outstandingClick">优等品</van-button>
                </van-col>
                <van-col span="3"></van-col>
            </van-row>

            <van-row style="margin-top:15px">
                <van-col span="3"></van-col>
                <van-col span="18">
                    <van-button type="warning" size="large" @click="qualifiedClick">合格</van-button>
                </van-col>
                <van-col span="3"></van-col>
            </van-row>

            <van-row style="margin-top:15px">
                <van-col span="3"></van-col>
                <van-col span="18">
                    <van-button type="danger" size="large" @click="unqualifiedClick">不合格</van-button>
                </van-col>
                <van-col span="3"></van-col>
            </van-row>
        </div>
    </van-popup>


    <van-popup
            v-model:show="buttonShowPL"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '25%' }"
    >

        <div style="margin-top:15%">
            <van-row>
                <van-col span="3"></van-col>
                <van-col span="18">
                    <van-button type="primary" size="large" @click="outstandingClick">优等品</van-button>
                </van-col>
                <van-col span="3"></van-col>
            </van-row>
        </div>
    </van-popup>

    <van-image-preview
            v-model:show="showImage"
            :images="listData.yjtJyInformationFileList"
            :closeable="true"
            :loop="false"
            :closeOnPopstate="true"
    />


    <el-dialog
            v-model="centerDialogVisible"
            title="请选择或填写改判理由"
            width="90%"
            align-center
    >
        <div style="padding: 15px;">
            <el-select v-model="alterReason" filterable
                       clearable allow-create
                       placeholder="改判理由" style="width: 100%">
                <el-option
                        v-for="item in listData.alterReasonList"
                        :key="item.alterReason"
                        :label="item.alterReason"
                        :value="item.alterReason"
                />
            </el-select>
        </div>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="outstandingAlter" type="primary">提交</el-button>
        <el-button type="danger" @click="centerDialogVisible = false">
          退出
        </el-button>
      </span>
        </template>


    </el-dialog>


    <el-dialog
            v-model="centerDialogVisibleJBXX"
            title="基本信息"
            width="96%"
            align-center
    >

        <div style="position: relative;padding: 15px;">
            <p>
                <span style="font-weight: bold">编号：</span><span>{{listData.detailsInfo.batchnumber}}</span>
            </p>

            <p>
                <span style="font-weight: bold">重量：</span><span>{{parseFloat(listData.detailsInfo.suttle)}}{{listData.detailsInfo.unit}}</span>
            </p>

            <p>
                <span style="font-weight: bold">标准：</span><span>{{listData.detailsInfo.standard}}</span>
            </p>

            <p>
                <span style="font-weight: bold">计量员：</span><span>{{listData.detailsInfo.suttleperson}}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="font-weight: bold">扫描人：</span><span>{{listData.detailsInfo.scanUser}}</span>
            </p>

            <p>
                <span style="font-weight: bold">生产日期：</span><span>{{dateFormat("YYYY-mm-dd HH:MM:SS",listData.detailsInfo.proDate)}}</span>
            </p>

            <P><span style="font-weight: bold">条形码：</span><span>{{listData.detailsInfo.barcode}}</span></P>
        </div>
    </el-dialog>


    <el-dialog
            v-model="centerDialogVisibleTXM"
            title="条形码筛选"
            width="96%"
            align-center
    >
        <div style="padding: 15px;">
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
                            <van-button icon="close" style="background-color:red;color:#FFFFFF" @click="closeTXMClick">
                                退出
                            </van-button>
                        </van-col>
                        <van-col span="2"></van-col>

                    </van-row>

                </div>
            </van-form>
        </div>


    </el-dialog>


</template>

<script>
    import fc from "flutter-core";
    import {judgementCathodeCopper, alterReasonQuery} from '@/api/gradeDetermination'
    import {closeToast, showConfirmDialog, showDialog, showImagePreview, showLoadingToast, showToast} from "vant";
    import {onMounted, ref} from 'vue';
    import {useRoute, useRouter} from "vue-router";
    import {
        alreadyDeterminedData,
        cathodeCopperDelete,
        notDeterminedData,
        excellentJudgement,
        fileQuery,
        tbSmCopperOfflineBarCodeQuery
    } from '@/api/gradeDetermination'
    import {reactive, shallowReactive, toRaw} from "@vue/reactivity";

    export default {

        setup() {

            const route = useRoute()
            const router = useRouter()
            const active = ref(0)
            const distinguish = ref('')
            const buttonShow = ref(false)
            const buttonShowPL = ref(false)
            const showImage = ref(false)
            const identifyTitle = ref('')
            const F_BATCHGROUP = ref('')
            const F_BATCHNUMBER = ref('')
            const barCodeSelect = ref('')
            const centerDialogVisible = ref(false)
            const centerDialogVisibleJBXX = ref(false)
            const centerDialogVisibleTXM = ref(false)
            const quantity = ref('未质检(0)')
            const alterReason = ref('')
            const listData = shallowReactive({
                //当前扫描人未判定的阴极铜数据
                yjtJyInformationListData: [],
                //当前条码获取的阴极铜数据
                yjtJyInformationData: {
                    batchnumber: '',
                    suttle: '',
                    unit: '',
                    standard: '',
                    suttleperson: '',
                    scanUser: '',
                    proDate: ''
                },
                //当前条码获取的阴极铜判定数据
                yjtJyInformationDetailsData: {
                    exteriorName: '',
                    dictName: '',
                    checkoutDate: '',
                    checkoutUser: '',
                    exterior: ''
                },
                //阴极铜判定图片
                yjtJyInformationFileList: [],
                isAuditing: '',
                //改判理由
                alterReasonList: [],
                //优等品改判数据
                outstandingAlterList: [],
                //基本信息
                detailsInfo: {},
                //查询的条形码
                barCodeSelectList: [],
            })
            const yjtJyInformation = shallowReactive({
                data: []
            })

            const activeName = ref()
            const barcode = ref(route.query.barcode)
            active.value = Number(route.query.tabState)


            fc.await('scanner', (res) => {
                if (router.currentRoute.value.path == '/gradeDetermination') {
                    if (res != 'null') {

                        let barcode = res
                        let standard = new RegExp(
                            /^124010[1-9][0-9]{2}(0[1-9]|1[0-2])((0[1-9])|((1|2)[0-9])|30|31)[0-9]{12}$/,
                        );
                        let bool = standard.test(barcode) && barcode.length === 25;
                        if (bool) {
                            let tbCathodeCopper = {}
                            tbCathodeCopper.fBarcode = res
                            getJudgementCathodeCopper(tbCathodeCopper)
                        } else {
                            showDialog({
                                title: '提示',
                                width: '600',
                                allowHtml: true,
                                message: '<span style="font-size: 18px">对不起，此条码不符合规范</span>',
                            }).then(() => {
                                // on close
                            })
                        }


                    } else {
                        showToast({
                            message: '数据获取失败',
                            type: 'fail',
                            overlay: true,
                            className: 'particulars-detail-popup',
                        })
                    }

                }
            })


            onMounted(() => {
                if (active.value == 0) {
                    identifyTitle.value = '批量鉴定（优等品）'
                    getNotDeterminedData()
                } else {
                    identifyTitle.value = '再次鉴定'
                    getAlreadyDeterminedData()
                }
                getAlterReasonQuery()
            })

            //跳转到首页
            const onClickLeft = () => {
                router.push({path: '/home'})
            }


            const onSubmit = (values) => {
                barCodeSelect.value = ''
                let obj = {fBatchnumber: F_BATCHNUMBER.value + '-' + F_BATCHGROUP.value}
                tbSmCopperOfflineBarCodeQuery(obj).then((result) => {
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
                            allowHtml: true,
                            message: '<span style="font-size: 18px">没有查询到对应的条码数据</span>',
                        }).then(() => {
                            // on close
                        })
                    }
                }).catch(error => {
                    console.log(error)
                })

            };

            const details = (item) => {
                centerDialogVisibleJBXX.value = true
                listData.detailsInfo = item
            }


            const queryTXM = () => {
                centerDialogVisibleTXM.value = true
            }

            const closeTXMClick = () => {
                centerDialogVisibleTXM.value = false

            }


            const passedTXMClick = () => {
                if (barCodeSelect.value == '') {
                    showDialog({
                        title: '提示',
                        width: '600',
                        allowHtml: true,
                        message: '<span style="font-size: 18px">请选择条形码</span>',
                    }).then(() => {
                        // on close
                    })
                    return false
                }

                centerDialogVisibleTXM.value = false
                let tbCathodeCopper = {}
                tbCathodeCopper.fBarcode = barCodeSelect.value
                getJudgementCathodeCopper(tbCathodeCopper)

            }

            //切换tab页
            const onClickTab = () => {
                if (active.value == 0) {
                    identifyTitle.value = '批量鉴定（优等品）'
                    getNotDeterminedData()
                } else {
                    identifyTitle.value = '再次鉴定'
                    getAlreadyDeterminedData()
                }
            };


            //扫码
            const scanCode = () => {
                fc.scan()
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

            //弹出品级鉴定按钮
            const identifyClick = (data, item) => {
                distinguish.value = data
                if (data == 0) {
                    buttonShow.value = true
                    yjtJyInformation.data = item
                } else {
                    if (active.value == 0) {
                        buttonShowPL.value = true
                    } else {
                        buttonShow.value = true
                    }

                }


            };

            //点击优等品
            const outstandingClick = () => {
                let listMap = {data: [], active: '', exterior: '0', alterReason: ''}
                listMap.active = active.value
                if (active.value == 0) {
                    //批量判定
                    if (distinguish.value == '1') {
                        listMap.data = listData.yjtJyInformationListData
                    } else {
                        //单独判定
                        listMap.data.push(yjtJyInformation.data)
                    }
                    if (listMap.data.length > 0) {
                        buttonShow.value = false
                        buttonShowPL.value = false
                        getExcellentJudgement(listMap)
                    } else {
                        buttonShowPL.value = false

                        showDialog({
                            title: '提示',
                            width: '600',
                            allowHtml: true,
                            message: '<span style="font-size: 18px">当前没有要质检的数据</span>',
                        }).then(() => {
                            // on close
                        });

                    }
                } else {

                    if (JSON.stringify(listData.yjtJyInformationData) === '{}') {
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width: '600',
                            allowHtml: true,
                            message: '<span style="font-size: 18px">当前没有要质检的数据</span>',
                        }).then(() => {
                            // on close
                        });
                        return false
                    }

                    if (listData.yjtJyInformationDetailsData.status == '0') {
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width: '600',
                            allowHtml: true,
                            message: '<span style="font-size: 18px">审核中的数据不允许质检</span>',
                        }).then(() => {
                            // on close
                        });

                        return false
                    } else {
                        centerDialogVisible.value = true
                        buttonShow.value = false
                        listMap.data.push(listData.yjtJyInformationData)
                        listData.outstandingAlterList = listMap
                    }

                }
            }

            const outstandingAlter = () => {

                if (!alterReason.value) {
                    showToast({
                        message: '请选择或者填写改判理由',
                        type: 'fail',
                        overlay: true,
                        className: 'particulars-detail-popup'
                    })
                    return false
                }
                centerDialogVisible.value = false
                listData.outstandingAlterList.alterReason = alterReason.value
                getExcellentJudgement(listData.outstandingAlterList)
            }

            //点击合格
            const qualifiedClick = () => {

                if (active.value == 0) {
                    let data = encodeURIComponent(JSON.stringify(yjtJyInformation.data))
                    if (distinguish.value == '1') {
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width: '600',
                            allowHtml: true,
                            message: '<span style="font-size: 18px">合格品不支持批量质检，请单个质检</span>',
                        }).then(() => {
                            // on close
                        });

                    } else {
                        router.push({
                            path: '/decide',
                            query: {yjtJyInformation: data, exterior: '1', tabIndex: active.value}
                        })
                    }
                } else {

                    if (JSON.stringify(listData.yjtJyInformationData) === '{}') {
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width: '600',
                            allowHtml: true,
                            message: '<span style="font-size: 18px">当前没有要质检的数据</span>',
                        }).then(() => {
                            // on close
                        });
                        return false
                    }

                    if (listData.yjtJyInformationDetailsData.status == '0') {
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width: '600',
                            allowHtml: true,
                            message: '<span style="font-size: 18px">审核中的数据不允许质检</span>',
                        }).then(() => {
                            // on close
                        });

                        return false
                    } else {
                        let data = encodeURIComponent(JSON.stringify(listData.yjtJyInformationData))
                        router.push({
                            path: '/decide',
                            query: {yjtJyInformation: data, exterior: '1', tabIndex: active.value}
                        })
                    }

                }

            };

            //点击不合格
            const unqualifiedClick = () => {

                if (active.value == 0) {
                    let data = encodeURIComponent(JSON.stringify(yjtJyInformation.data))
                    if (distinguish.value == '1') {
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width: '600',
                            allowHtml: true,
                            message: '<span style="font-size: 18px">不合格品不支持批量质检，请单个质检</span>',
                        }).then(() => {
                            // on close
                        });
                    } else {
                        router.push({
                            path: '/decide',
                            query: {yjtJyInformation: data, exterior: '2', tabIndex: active.value}
                        })
                    }
                } else {
                    if (JSON.stringify(listData.yjtJyInformationData) === '{}') {
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width: '600',
                            allowHtml: true,
                            message: '<span style="font-size: 18px">当前没有要质检的数据</span>',
                        }).then(() => {
                            // on close
                        });
                        return false
                    }

                    if (listData.yjtJyInformationDetailsData.status == '0') {
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width: '600',
                            allowHtml: true,
                            message: '<span style="font-size: 18px">审核中的数据不允许质检</span>',
                        }).then(() => {
                            // on close
                        });

                        return false
                    } else {
                        let data = encodeURIComponent(JSON.stringify(listData.yjtJyInformationData))
                        router.push({
                            path: '/decide',
                            query: {yjtJyInformation: data, exterior: '2', tabIndex: active.value}
                        })
                    }
                }
            };

            //未判定的数据可以删除
            const deleteData = (item) => {
                showConfirmDialog({
                    title: '提示',
                    width: '600',
                    allowHtml: true,
                    message: '<span style="font-size: 18px">是否删除当前数据？</span>',
                })
                    .then(() => {
                        let tbCathodeCopper = {}
                        tbCathodeCopper.id = item.id
                        cathodeCopperDelete(tbCathodeCopper).then((result) => {
                            showToast({
                                message: result.data.message,
                                type: 'success',
                                className: 'particulars-detail-popup',
                                overlay: true,
                            })
                            if (result.data.code == 200) {
                                getNotDeterminedData()
                            }

                        }).catch(error => {
                            console.log(error)
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            };

            //判定
            const getExcellentJudgement = (listMap) => {
                showLoadingToast({
                    duration: 0,
                    forbidClick: true,
                    overlay: true,
                    className: 'particulars-detail-popup',
                    message: '正在质检...',
                });
                excellentJudgement(listMap).then((result) => {
                    if (result.data.code == 200) {
                        closeToast();
                        showToast({
                            message: '质检成功',
                            type: 'success',
                            className: 'particulars-detail-popup',
                            overlay: true,
                        })
                        if (active.value == 0) {
                            getNotDeterminedData()
                        } else {
                            getAlreadyDeterminedData()
                        }
                    }
                }).catch(error => {
                    console.log(error)
                    buttonShow.value = false
                    buttonShowPL.value = false
                    closeToast();
                })
            }

            //图片预览
            const seeImg = () => {
                showImage.value = true

            }

            const getJudgementCathodeCopper = (tbCathodeCopper) => {
                judgementCathodeCopper(tbCathodeCopper).then((result) => {
                    if (result.data.code) {
                        if (result.data.code != 200) {
                            showDialog({
                                title: '提示',
                                width: '600',
                                allowHtml: true,
                                message: '<span style="font-size: 18px">' + result.data.message + '</span>',
                            }).then(() => {

                            });
                        } else {
                            router.push({
                                path: '/gradeDetermination',
                                query: {barcode: tbCathodeCopper.fBarcode, tabState: result.data.data}
                            })

                            barcode.value = tbCathodeCopper.fBarcode
                            active.value = Number(result.data.data)

                            if (active.value == 0) {
                                identifyTitle.value = '批量鉴定（优等品）'
                                getNotDeterminedData()
                            } else {
                                identifyTitle.value = '再次鉴定'
                                getAlreadyDeterminedData()
                            }
                        }
                    }
                }).catch(error => {
                    console.log(error)
                })
            }


            //获取阴极铜判定图片
            const getFileQuery = (data) => {
                let obj = {}
                obj.yjtJyInformationDetailsId = data
                fileQuery(obj).then((result) => {
                    listData.yjtJyInformationFileList = result.data.data
                }).catch(error => {
                    console.log(error)
                })
            }


            //已判定的数据
            const getAlreadyDeterminedData = () => {
                let tbCathodeCopper = {}
                tbCathodeCopper.fBarcode = barcode.value
                listData.yjtJyInformationData = {}
                listData.yjtJyInformationDetailsData = {}
                listData.yjtJyInformationFileList = []
                alreadyDeterminedData(tbCathodeCopper).then((result) => {
                    if (result.data.data.yjtJyInformationData) {
                        listData.yjtJyInformationData = result.data.data.yjtJyInformationData
                        listData.yjtJyInformationDetailsData = result.data.data.yjtJyInformationDetailsData
                        if (listData.yjtJyInformationDetailsData.exterior != '0') {
                            getFileQuery(listData.yjtJyInformationDetailsData.id)
                        }
                    }
                }).catch(error => {
                    console.log(error)
                })

            };

            //获取当前扫码人未判定的数据
            const getNotDeterminedData = () => {
                listData.yjtJyInformationListData = []
                notDeterminedData().then((result) => {
                    listData.yjtJyInformationListData = result.data.data.yjtJyInformationListData
                    quantity.value = '未质检(' + result.data.data.quantity + ')'
                }).catch(error => {
                    console.log(error)
                })

            }

            //获取改判理由
            const getAlterReasonQuery = () => {
                let paramInfo = {}
                let blocks = {}
                let paramBlock = {}
                paramBlock.limit = 9999
                paramBlock.offset = 1
                paramBlock.blockId = 'paramBlock'
                paramBlock.data = {}
                blocks.paramBlock = paramBlock
                paramInfo.blocks = blocks
                alterReasonQuery(paramInfo).then((result) => {
                    listData.alterReasonList = result.data.blocks.resultBlock.data
                }).catch(error => {
                    console.log(error)
                })
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

                return fmt;
            }


            return {
                barCodeSelect,
                F_BATCHGROUP,
                F_BATCHNUMBER,
                buttonShowPL,
                identifyTitle,
                quantity,
                alterReason,
                centerDialogVisibleTXM,
                centerDialogVisibleJBXX,
                centerDialogVisible,
                activeName,
                active,
                barcode,
                listData,
                buttonShow,
                distinguish,
                showImage,
                closeTXMClick,
                passedTXMClick,
                onSubmit,
                queryTXM,
                scanCode,
                details,
                seeImg,
                onClickTab,
                onClickLeft,
                dateFormat,
                deleteData,
                identifyClick,
                outstandingClick,
                qualifiedClick,
                unqualifiedClick,
                outstandingAlter,
                getExcellentJudgement,
                getJudgementCathodeCopper,
                getFileQuery,
                getAlreadyDeterminedData,
                getNotDeterminedData,
                getAlterReasonQuery
            };
        },
    }
</script>

<style scoped>

    body {
        margin: 0;
        padding: 0
    }


    .header {

        width: 100%;
        height: 105px;
        line-height: 105px;
        position: absolute;
        z-index: 5;
        top: 0;
    }

    .content {

        width: 100%;
        overflow: auto;
        top: 105px;
        position: absolute;
        z-index: 10;
        bottom: 58px;

    }

    .empennage {
        height: 58px;
        line-height: 45px;
        background: #FFFFFF;
        width: 100%;
        position: absolute;
        z-index: 200;
        bottom: 0;

    }

    .yijianyan {
        opacity: 0.2;
        top: 35%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    .delete {
        width: 25px;
        height: 25px;
        float: right;
        margin-top: -2px;
        margin-right: -1px;

    }

    .el-card {
        --el-card-padding: 4px;
    }

    .test {

        display: flex;
        align-items: center;
        justify-content: space-around;
    }

</style>