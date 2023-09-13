<template>
    <div class="header">
        <van-nav-bar
                title="质检记录列表"
                class="page-nav-bar"
                left-arrow
                @click-left="onClickLeft"
        >
            <template #right>
                <van-icon @click="scanClick" style="color: #FFFFFF" name="scan" size="40"/>
            </template>
        </van-nav-bar>

        <div style="display: flex;background-color: #ffffff;">
            <van-search style="width: 100%"
                        v-model="searchValue"
                        shape="round"
                        placeholder="请输入编号搜索"
                        @search="onSearch"
            />
        </div>
    </div>

    <div id="content" class="content">
        <van-list
                v-model:loading="loading"
                :finished="finished"
                offset="50"
                finished-text="没有更多了"
                @load="onLoad"
        >

            <div style="padding:0px 5px 5px 5px">
                <el-card class="box-card" shadow="always" style="margin-top:5px"
                         @click="qualityCheckingRecordDetails(item)"
                         v-for="(item,index) in  listData.qualityCheckingList">
                    <div>
                        <p>
                            <span style="font-weight: bold">编号：</span>
                            <span>{{item.batchnumber}}</span>
                        </p>

                        <p>
                            <span style="font-weight: bold">重量：</span>
                            <span>{{parseFloat(item.suttle)}}{{item.unit}}</span>
                            <span style="margin-left:30px;" v-if="item.exteriorName">
                                 <span v-if="item.exteriorName=='优等品'">
                                     <el-tag>{{item.exteriorName}}</el-tag>
                                 </span>
                                 <span v-if="item.exteriorName=='合格'">
                                     <el-tag type='warning'>{{item.exteriorName}}</el-tag>
                                 </span>
                                 <span v-if="item.exteriorName=='不合格'">
                                     <el-tag type='danger'>{{item.exteriorName}}</el-tag>
                                 </span>
                             </span>
                        </p>

                        <van-tag v-if="item.state=='0'" type="primary">未质检</van-tag>
                        <van-tag v-if="item.state=='1'" type="success">已质检</van-tag>


                    </div>
                </el-card>
            </div>

        </van-list>
    </div>


    <el-dialog
            v-model="centerDialogVisible"
            :destroy-on-close="true"
            title="质检记录详情"
            width="96%"
            align-center
    >
        <div style="overflow-y: auto; overscroll-behavior-y: contain; height: calc(100vh - 180px);">

            <div>
                <van-divider content-position="left">基本信息</van-divider>
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

                <p><span style="font-weight: bold">计量员：</span>
                    <span>{{listData.yjtJyInformationData.suttleperson}}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span style="font-weight: bold">扫描人：</span>
                    <span>{{listData.yjtJyInformationData.scanUser}}</span>
                </p>

                <p>
                    <span style="font-weight: bold">生产日期：</span>
                    <span>{{dateFormat("YYYY-mm-dd HH:MM:SS",listData.yjtJyInformationData.proDate)}}</span>
                </p>
            </div>

            <div v-if="listData.yjtJyInformationData.state=='1'">
                <van-divider content-position="left">质检信息</van-divider>
                <div v-for="(item,index) in  listData.yjtJyInformationDecideDataList">
                    <div>
                        <p>
                            <span style="font-weight: bold">是否最新：</span>
                            <el-tag v-if="item.details.isNew=='0'" type="success">是</el-tag>
                            <el-tag v-if="item.details.isNew=='1'" type="danger">否</el-tag>
                        </p>

                        <p>
                            <span style="font-weight: bold">品级分类：</span>
                            <span>{{item.details.exteriorName}}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span v-if="item.details.exterior!='0'" style="font-weight: bold">类型：</span>
                            <span>{{item.details.dictName}}</span>
                        </p>

                        <p>
                            <span style="font-weight: bold">质检时间：</span>
                            <span>{{dateFormat("YYYY-mm-dd HH:MM:SS",item.details.checkoutDate)}}</span>
                        </p>

                        <p>
                            <span style="font-weight: bold">质检人：</span>
                            <span>{{item.details.checkoutUser}}</span>
                        </p>

                        <p v-if="item.details.alterReason">
                            <span style="font-weight: bold">改判理由：</span><span>{{item.details.alterReason}}</span>
                        </p>

                        <div v-if="item.details.exterior!='0'">
                            <van-image style="margin:0 2%" @click="seeImg(item.fileList)"
                                       v-for="(file,index) in  item.fileList"
                                       width="45%"
                                       height="8rem"
                                       fit="cover"
                                       position="left"
                                       :src="file"
                            />
                        </div>
                        <van-divider/>
                    </div>
                </div>
            </div>
        </div>

        <van-image-preview
                v-model:show="showImage"
                :images="listData.filePathList"
                :closeable="true"
                :loop="false"
                :closeOnPopstate="true"
        />
    </el-dialog>

</template>

<script>
    import {ref} from 'vue';
    import {useRouter} from "vue-router";
    import {
        qualityCheckingRecordDecide,
        qualityCheckingRecord
    } from '@/api/qualityCheckingRecord'
    import {shallowReactive} from "@vue/reactivity";
    import fc from "flutter-core";
    import {showDialog, showToast} from "vant";


    export default {
        setup() {
            const router = useRouter()
            const searchValue = ref('')
            const centerDialogVisible = ref(false)
            const listData = shallowReactive({
                qualityCheckingList: [],
                //阴极铜基本信息数据
                yjtJyInformationData: {},
                //阴极铜质检数据
                yjtJyInformationDecideDataList: [],
                //图片路径
                filePathList: [],
            })
            const showImage = ref(false)

            const loading = ref(false)
            const finished = ref(false)
            const limit = ref(10)
            const offset = ref(0)


            fc.await('scanner', (res) => {
                if (router.currentRoute.value.path=='/qualityCheckingRecord') {
                    if (res != 'null') {
                        // window.scrollTo(0,0);
                        listData.qualityCheckingList = []
                        offset.value = 1
                        finished.value = true
                        getQualityCheckingRecord({batchnumber: '', barcode: res})
                    } else {
                        showToast({
                            message: '数据获取失败',
                            type: 'fail',
                            className: 'particulars-detail-popup',
                        })
                    }
                }
            })



            //跳转到首页
            const onClickLeft = () => {
                router.push({path: '/home'})
            }

            //选择状态
            const statusChange = () => {
                offset.value = 1
                listData.qualityCheckingList = []
                finished.value = false
                getQualityCheckingRecord({batchnumber: searchValue.value, barcode: ''})
            }
            //搜索
            const onSearch = () => {
                offset.value = 1
                listData.qualityCheckingList = []
                finished.value = false
                getQualityCheckingRecord({batchnumber: searchValue.value, barcode: ''})
            }


            const onLoad = () => {
                offset.value = offset.value + 1
                getQualityCheckingRecord({batchnumber: searchValue.value, barcode: ''})

            }

            //打开手机扫码
            const scanClick = () => {
                fc.scan()
            }

            //图片预览
            const seeImg = (fileList) => {
                listData.filePathList = []
                listData.filePathList = fileList
                showImage.value = true
            }

            const qualityCheckingRecordDetails = (item) => {
                listData.yjtJyInformationData = item
                if (item.state == '1') {
                    let obj = {yjtJyInformationId: item.id, status: '2'}
                    getQualityCheckingRecordDecide(obj)
                }
                centerDialogVisible.value = true
            }

            //获取阴极铜质检数据详情
            const getQualityCheckingRecordDecide = (obj) => {
                qualityCheckingRecordDecide(obj).then((result) => {
                    listData.yjtJyInformationDecideDataList = result.data.data
                }).catch(error => {
                    console.log(error)
                })
            }


            //获取阴极铜质检数据
            const getQualityCheckingRecord = (obj) => {
                let paramInfo = {}
                let blocks = {}
                let paramBlock = {}
                paramBlock.limit = limit.value
                paramBlock.offset = offset.value
                paramBlock.blockId = 'paramBlock'
                paramBlock.data = obj
                blocks.paramBlock = paramBlock
                paramInfo.blocks = blocks
                qualityCheckingRecord(paramInfo).then((result) => {
                    listData.qualityCheckingList = [...listData.qualityCheckingList, ...result.data.blocks.resultBlock.data];
                    // 加载状态结束
                    loading.value = false
                    if (listData.qualityCheckingList.length == result.data.blocks.resultBlock.total) {
                        finished.value = true
                    }


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
                showImage,
                centerDialogVisible,
                searchValue,
                loading,
                finished,
                limit,
                offset,
                listData,
                onClickLeft,
                onLoad,
                statusChange,
                dateFormat,
                onSearch,
                qualityCheckingRecordDetails,
                scanClick,
                seeImg,
                getQualityCheckingRecordDecide,
                getQualityCheckingRecord
            }
        }
    }
</script>

<style scoped>

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
        overflow: scroll;
        top: 95px;
        position: absolute;
        z-index: 10;
        bottom: 5px;

    }

</style>