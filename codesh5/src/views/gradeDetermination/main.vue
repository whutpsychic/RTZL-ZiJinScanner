<template>

    <div class="header">
        <van-nav-bar
                title="品级质检列表"
                class="page-nav-bar"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-tabs v-model:active="active" @click-tab="onClickTab">
            <van-tab title="未质检"></van-tab>
            <van-tab title=" 已质检"></van-tab>
        </van-tabs>
    </div>

    <div class="content">
        <div v-show="active==0" style="padding:0px 5px 5px 5px">

            <el-card class="box-card" shadow="always" style="margin-top:5px"
                     v-for="(item,index) in  listData.yjtJyInformationListData">
                <template #header>
                    <div class="card-header">
                        <img src="/image/delete.png" class="delete" @click="deleteData(item)"/>
                    </div>
                </template>
                <div>
                    <p><span style="font-weight: bold">编号：</span><span>{{item.batchnumber}}</span></p>
                    <p><span
                            style="font-weight: bold">重量：</span><span>{{parseFloat(item.suttle)}}{{item.unit}}</span>
                    </p>
                    <p><span style="font-weight: bold">标准：</span><span>{{item.standard}}</span></p>
                    <p><span style="font-weight: bold">计量员：</span><span>{{item.suttleperson}}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-weight: bold">扫描人：</span><span>{{item.scanUser}}</span></p>
                    <p><span style="font-weight: bold">生产日期：</span>{{dateFormat("YYYY-mm-dd HH:MM:SS",item.proDate)}}
                    </p>
                </div>
                <van-button type="primary" size="small" style="float:right" @click="identifyClick('0',item)">品级鉴定
                </van-button>
            </el-card>


        </div>
        <div v-show="active==1">
            <div v-if="JSON.stringify(listData.yjtJyInformationData) !== '{}'">
                <div style="position: relative">

                    <el-card class="box-card" shadow="always" style="margin-top:5px">
                        <van-divider content-position="left">基本信息</van-divider>
                        <div style="position: relative">
                            <p>
                                <span style="font-weight: bold">编号：</span><span>{{listData.yjtJyInformationData.batchnumber}}</span>
                            </p>

                            <p>
                                <span style="font-weight: bold">重量：</span><span>{{parseFloat(listData.yjtJyInformationData.suttle)}}{{listData.yjtJyInformationData.unit}}</span>
                            </p>

                            <p>
                                <span style="font-weight: bold">标准：</span><span>{{listData.yjtJyInformationData.standard}}</span>
                            </p>

                            <p>
                                <span style="font-weight: bold">计量员：</span><span>{{listData.yjtJyInformationData.suttleperson}}</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span style="font-weight: bold">扫描人：</span><span>{{listData.yjtJyInformationData.scanUser}}</span>
                            </p>

                            <p>
                                <span style="font-weight: bold">生产日期：</span>{{dateFormat("YYYY-mm-dd HH:MM:SS",listData.yjtJyInformationData.proDate)}}
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
                                <span style="font-weight: bold">品级分类：</span><span>{{listData.yjtJyInformationDetailsData.exteriorName}}</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span v-if="listData.yjtJyInformationDetailsData.exterior!='0'"
                                                              style="font-weight: bold">类型：</span><span>{{listData.yjtJyInformationDetailsData.dictName}}</span>
                            </p>

                            <p>
                                <span style="font-weight: bold">质检时间：</span>{{dateFormat("YYYY-mm-dd HH:MM:SS",listData.yjtJyInformationDetailsData.checkoutDate)}}
                            </p>

                            <p>
                                <span style="font-weight: bold">质检人：</span><span>{{listData.yjtJyInformationDetailsData.checkoutUser}}</span>
                            </p>
                        </div>


                        <div v-if="listData.yjtJyInformationDetailsData.exterior!='0'">
                            <van-image style="margin:0 2%"  @click="seeImg"
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
            <van-col span="5"></van-col>
            <van-col span="7">
                <van-button type="success" @click="scanCode">继续扫码</van-button>
            </van-col>
            <van-col span="7">
                <van-button type="primary" @click="identifyClick('1')">品级鉴定</van-button>
            </van-col>
            <van-col span="5"></van-col>

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

    <van-image-preview
            v-model:show="showImage"
            :images="listData.yjtJyInformationFileList"
            :closeable="true"
            :loop = "false"
            :closeOnPopstate="true"
    />


</template>

<script>
    import fc from "flutter-core";
    import {judgementCathodeCopper} from '@/api/gradeDetermination'
    import {showConfirmDialog, showDialog, showImagePreview, showToast} from "vant";
    import {onMounted, ref} from 'vue';
    import {useRoute, useRouter} from "vue-router";
    import {
        alreadyDeterminedData,
        cathodeCopperDelete,
        notDeterminedData,
        excellentJudgement,
        fileQuery
    } from '@/api/gradeDetermination'
    import {reactive, shallowReactive, toRaw} from "@vue/reactivity";

    export default {

        setup() {

            fc.await('scanner', (res) => {
                if (res != 'null') {
                    let tbCathodeCopper = {}
                    tbCathodeCopper.fBarcode = res
                    judgementCathodeCopper(tbCathodeCopper).then((result) => {
                        if (result.data.code != 200) {
                            showDialog({
                                title: '提示',
                                message: result.data.message,
                            }).then(() => {

                            });
                        } else {
                            router.push({
                                path: '/gradeDetermination',
                                query: {barcode: res, tabState: result.data.data}
                            })

                            barcode.value = res
                            active.value = Number(result.data.data)

                            if (active.value == 0) {
                                getNotDeterminedData()
                            } else {
                                getAlreadyDeterminedData()
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


            })

            const route = useRoute()
            const router = useRouter()
            const active = ref(0)
            const distinguish = ref('')
            const buttonShow = ref(false);
            const showImage=ref(false)
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
                    exterior:''
                },
                //阴极铜判定图片
                yjtJyInformationFileList: [],
                isAuditing: '',

            })
            const yjtJyInformation = shallowReactive({
                data: []
            })


            const barcode = ref(route.query.barcode)
            active.value = Number(route.query.tabState)

            onMounted(() => {
                if (active.value == 0) {
                    getNotDeterminedData()
                } else {
                    getAlreadyDeterminedData()
                }

            })


            //切换tab页
            const onClickTab = () => {
                if (active.value == 0) {
                    getNotDeterminedData()
                } else {
                    getAlreadyDeterminedData()
                }
            };

            //弹出品级鉴定按钮
            const identifyClick = (data, item) => {
                distinguish.value = data
                if (data == 0) {
                    yjtJyInformation.data = item
                }
                buttonShow.value = true
            };


            //扫码
            const scanCode = () => {
                 fc.scan()

                // let tbCathodeCopper = {}
                // tbCathodeCopper.fBarcode = '1240101220616033004924406'
                // judgementCathodeCopper(tbCathodeCopper).then((result) => {
                //     if (result.data.code != 200) {
                //         showDialog({
                //             title: '提示',
                //             message: result.data.message,
                //         }).then(() => {
                //
                //         });
                //     } else {
                //         router.push({
                //             path: '/gradeDetermination',
                //             query: {barcode: '1240101220616033004924406', tabState: result.data.data}
                //         })
                //
                //         barcode.value='1240101220616033004924406'
                //         active.value = Number(result.data.data)
                //
                //         if (active.value == 0) {
                //             getNotDeterminedData()
                //         } else {
                //             getAlreadyDeterminedData()
                //         }
                //
                //
                //     }

                // }).catch(error => {
                //     console.log(error)
                // })
            }



            //点击优等品
            const outstandingClick = () => {
                let listMap = {data: [], active: '', exterior: '0'}
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
                        getExcellentJudgement(listMap)
                    } else {
                        buttonShow.value = false
                        showToast({
                            message: '当前没有要质检的数据',
                            type: 'fail',
                            className: 'particulars-detail-popup'
                        })
                    }
                } else {
                    if (listData.yjtJyInformationDetailsData.status=='0'){
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width:'600',
                            message: '审核中的数据不允许质检',
                        }).then(() => {
                            // on close
                        });

                        return false
                    }



                    if (listData.yjtJyInformationDetailsData.exterior == '0') {
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width:'600',
                            message: '当前质检信息为优等品，不能再质检为优等品',
                        }).then(() => {
                            // on close
                        });
                    } else {
                        buttonShow.value = false
                        listMap.data.push(listData.yjtJyInformationData)
                        getExcellentJudgement(listMap)
                    }
                }

            };

            //点击合格
            const qualifiedClick = () => {

                if (active.value == 0) {
                    let data = encodeURIComponent(JSON.stringify(yjtJyInformation.data))
                    if (distinguish.value == '1') {
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width:'600',
                            message: '合格品不支持批量质检，请单个质检',
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
                    if (listData.yjtJyInformationDetailsData.status=='0'){
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width:'600',
                            message: '审核中的数据不允许质检',
                        }).then(() => {
                            // on close
                        });

                        return false
                    }



                    if (listData.yjtJyInformationDetailsData.exterior == '1') {
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width:'600',
                            message: '当前质检信息为合格品，不能再质检为合格品',
                        }).then(() => {
                            // on close
                        });
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
                            width:'600',
                            message: '不合格品不支持批量质检，请单个质检',
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
                    if (listData.yjtJyInformationDetailsData.status=='0'){
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width:'600',
                            message: '审核中的数据不允许质检',
                        }).then(() => {
                            // on close
                        });

                        return false
                    }


                    if (listData.yjtJyInformationDetailsData.exterior == '2') {
                        buttonShow.value = false
                        showDialog({
                            title: '提示',
                            width:'600',
                            message: '当前质检信息为不合格品，不能再质检为不合格品',
                        }).then(() => {
                            // on close
                        });
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
                    // overlayStyle:'',
                    message: '是否删除当前数据？',
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
            function getExcellentJudgement(listMap) {
                excellentJudgement(listMap).then((result) => {
                    if (result.data.code == 200) {
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
                    buttonShow.value = false
                    console.log(error)
                })
            }

           //图片预览
            const seeImg= () =>{
                showImage.value=true

            }


                //获取阴极铜判定图片
            function getFileQuery(data) {
                let obj = {}
                obj.yjtJyInformationDetailsId=data
                fileQuery(obj).then((result) => {
                    console.log(result)
                    listData.yjtJyInformationFileList=result.data.data
                }).catch(error => {
                    console.log(error)
                })
            }


            //已判定的数据
            function getAlreadyDeterminedData() {
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

                    console.log( listData.yjtJyInformationData)

                }).catch(error => {
                    console.log(error)
                })

            };

            //获取当前扫码人未判定的数据
            function getNotDeterminedData() {
                listData.yjtJyInformationListData=[]
                notDeterminedData().then((result) => {
                    listData.yjtJyInformationListData = result.data.data.yjtJyInformationListData
                }).catch(error => {
                    console.log(error)
                })

            };


            //跳转到首页
            const onClickLeft = () => {
                router.push({path: '/home'})
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
                active,
                barcode,
                listData,
                buttonShow,
                distinguish,
                showImage,
                seeImg,
                onClickTab,
                onClickLeft,
                dateFormat,
                deleteData,
                identifyClick,
                outstandingClick,
                qualifiedClick,
                unqualifiedClick,
                scanCode
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
        height: 95px;
        line-height: 95px;
        position: absolute;
        z-index: 5;
        top: 0;
    }

    .content {

        width: 100%;
        overflow: auto;
        top: 95px;
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
        margin-top: -12px;
        margin-right: -12px;

    }


</style>