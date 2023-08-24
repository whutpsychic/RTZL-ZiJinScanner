<template>


        <div class="header">
            <van-nav-bar
                    title="审核列表"
                    class="page-nav-bar"
                    left-arrow
                    @click-left="onClickLeft"
            />

            <div style="display: flex;background-color: #ffffff;">
                <van-search style="width: 68%"
                            v-model="searchValue"
                            shape="round"
                            placeholder="请输入编号搜索"
                            @search="onSearch"
                />

                <el-select v-model="status" clearable placeholder="状态"
                           style="width: 31%;float: right;margin-top: 0.8rem" @change="statusChange">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    />
                </el-select>
            </div>
        </div>

        <div class="content">
            <van-list
                    v-model:loading="loading"
                    :finished="finished"
                    offset="50"
                    finished-text="没有更多了"
                    @load="onLoad"
            >

                <div style="padding:0px 5px 5px 5px">

                    <el-card class="box-card" shadow="always" style="margin-top:5px" @click="auditingDetails(item)"
                             v-for="(item,index) in  listData.auditorListData">

                        <div>
                            <p><span style="font-weight: bold">编号：</span><span>{{item.batchnumber}}</span></p>
                            <p><span
                                    style="font-weight: bold">重量：</span><span>{{parseFloat(item.suttle)}}{{item.unit}}</span>
                            </p>
                            <p><span style="font-weight: bold">标准：</span><span>{{item.standard}}</span></p>

                            <p>
                                <span style="font-weight: bold">品级分类：</span><span>{{item.exteriorName}}</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span v-if="item.exterior!='0'"
                                                              style="font-weight: bold">类型：</span><span>{{item.dictName}}</span>
                            </p>

                            <p>
                                <van-tag v-if="item.status=='0'" type="primary">未审核</van-tag>
                                <van-tag v-if="item.status=='1'" type="danger">驳回</van-tag>
                                <van-tag v-if="item.status=='2'" type="success">审核通过</van-tag>

                            </p>

                            <van-divider style="color:#c8c8c8"></van-divider>

                            <span style="color: #bbbbbb">{{dateFormat("YYYY-mm-dd HH:MM:SS",item.checkoutDate)}}</span>
                            <span style="float:right;color: #bbbbbb">{{item.checkoutUser}}</span>
                        </div>
                    </el-card>


                </div>

            </van-list>

        </div>

    <el-dialog
               v-model="centerDialogVisible"
               :destroy-on-close="true"
               title="审核详情"
               width="96%"
               align-center
    >
        <div style="overflow-y: auto;overscroll-behavior-y: contain;" :style="elDialogHeight">
            <div>
                <van-divider content-position="left">基本信息</van-divider>
                <div>
                    <p>
                        <span style="font-weight: bold">编号：</span><span>{{listData.yjtJyInformationDetails.batchnumber}}</span>
                    </p>

                    <p>
                        <span style="font-weight: bold">重量：</span><span>{{parseFloat(listData.yjtJyInformationDetails.suttle)}}{{listData.yjtJyInformationDetails.unit}}</span>
                    </p>

                    <p>
                        <span style="font-weight: bold">标准：</span><span>{{listData.yjtJyInformationDetails.standard}}</span>
                    </p>

                    <p>
                        <span style="font-weight: bold">计量员：</span><span>{{listData.yjtJyInformationDetails.suttleperson}}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="font-weight: bold">扫描人：</span><span>{{listData.yjtJyInformationDetails.scanUser}}</span>
                    </p>

                    <p>
                        <span style="font-weight: bold">生产日期：</span>{{dateFormat("YYYY-mm-dd HH:MM:SS",listData.yjtJyInformationDetails.proDate)}}
                    </p>

                </div>
                <van-divider content-position="left">质检信息</van-divider>

                <div>
                    <p>
                        <span style="font-weight: bold">品级分类：</span><span>{{listData.yjtJyInformationDetails.exteriorName}}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span v-if="listData.yjtJyInformationDetails.exterior!='0'"
                                                      style="font-weight: bold">类型：</span><span>{{listData.yjtJyInformationDetails.dictName}}</span>
                    </p>

                    <p>
                        <span style="font-weight: bold">质检时间：</span>{{dateFormat("YYYY-mm-dd HH:MM:SS",listData.yjtJyInformationDetails.checkoutDate)}}
                    </p>

                    <p>
                        <span style="font-weight: bold">质检人：</span><span>{{listData.yjtJyInformationDetails.checkoutUser}}</span>
                    </p>

                    <p>
                        <span style="font-weight: bold">改判理由：</span><span>{{listData.yjtJyInformationDetails.alterReason}}</span>
                    </p>


                </div>

                <div v-if="listData.yjtJyInformationDetails.exterior!='0'">
                    <van-image style="margin:0 2%" @click="seeImg"
                               v-for="(item,index) in  listData.yjtJyInformationFileList"
                               width="45%"
                               height="8rem"
                               fit="cover"
                               position="left"
                               :src="item"
                    />

                </div>


                <van-field v-if="listData.yjtJyInformationDetails.status=='0'"
                           v-model="auditorContent"
                           rows="5"
                           autosize
                           label="审核内容"
                           type="textarea"
                           maxlength="50"
                           placeholder="请输入审核内容"
                           show-word-limit
                />


                <div v-if="listData.yjtJyInformationDetails.status!='0'">
                    <van-divider content-position="left">审核信息</van-divider>

                    <p>
                        <span style="font-weight: bold">状态：</span><span>{{listData.yjtJyInformationDetails.status ==='0' ? '未审核' : (listData.yjtJyInformationDetails.status ==='1' ? '驳回' : '通过')}}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="font-weight: bold">审核人：</span><span>{{listData.yjtJyInformationDetails.auditorUserName}}</span>
                    </p>

                    <p>
                        <span style="font-weight: bold">审核时间：</span>{{dateFormat("YYYY-mm-dd HH:MM:SS",listData.yjtJyInformationDetails.auditorDate)}}
                    </p>

                    <p>
                        <span style="font-weight: bold">审核内容：</span><span>{{listData.yjtJyInformationDetails.auditorContent}}</span>
                    </p>
                </div>
            </div>

            <van-image-preview
                    v-model:show="showImage"
                    :images="listData.yjtJyInformationFileList"
                    :closeable="true"
                    :loop="false"
                    :closeOnPopstate="true"
            />


            <div style="margin-top: 30px" v-if="listData.yjtJyInformationDetails.status=='0'">
                <van-row>
                    <van-col span="2"></van-col>
                    <van-col span="10">
                        <van-button icon="close" type="danger" style="width:90%" @click="cathodeCopperAuditorClick('1')">驳回
                        </van-button>
                    </van-col>
                    <van-col span="10">
                        <van-button  icon="passed" type="success" style="width:90%" @click="cathodeCopperAuditorClick('2')">通过
                        </van-button>
                    </van-col>
                    <van-col span="2"></van-col>

                </van-row>
            </div>


        </div>


    </el-dialog>

</template>

<script>
    import {ref} from 'vue';
    import {useRouter} from "vue-router";
    import {
        auditorDataQuery,
        cathodeCopperAuditor
    } from '@/api/auditing'
    import {
        fileQuery
    } from '@/api/gradeDetermination'

    import {shallowReactive} from "@vue/reactivity";
    import {showConfirmDialog, showToast} from "vant";

    export default {
        // beforeRouteEnter(to, from, next) {
        //     if (from.path=='/home'){
        //         to.meta.keepAlive = false
        //     }else {
        //         to.meta.keepAlive = true
        //     }
        //      next()
        // },

        setup() {
            const router = useRouter()
            const searchValue = ref('')
            const showImage = ref(false)
            const auditorContent = ref('')
            const elDialogHeight= ref('')
            const state = ref(false)
            const listData = shallowReactive({
                auditorListData: [],
                //阴极铜基本信息和判定数据
                yjtJyInformationDetails: {},
                //阴极铜判定图片
                yjtJyInformationFileList: [],
            })
            const centerDialogVisible = ref(false)
            const options = [
                {
                    value: '0',
                    label: '未审核',
                },
                {
                    value: '1',
                    label: '驳回',
                },
                {
                    value: '2',
                    label: '审核通过',
                },
            ]

            const loading = ref(false)
            const finished = ref(false)
            const status = ref('0')
            const limit = ref(10)
            const offset = ref(0)


            //跳转到首页
            const onClickLeft = () => {
                router.push({path: '/home'})
            }

            //选择状态
            const statusChange = (val) => {

                offset.value = 1
                listData.auditorListData = []
                finished.value = false
                getAuditorDataQuery({batchnumber: val, status: status.value})
            }
            //搜索
            const onSearch = (val) => {
                offset.value = 1
                listData.auditorListData = []
                finished.value = false
                getAuditorDataQuery({batchnumber: val, status: status.value})
            }


            const onLoad = () => {
                offset.value = offset.value + 1
                getAuditorDataQuery({batchnumber: searchValue.value, status: status.value})
            }


            //跳转到审核页面
            const auditingDetails = (item) => {
                // let data = encodeURIComponent(JSON.stringify(item))
                // router.push({
                //     path: '/auditingDetails',
                //     query: {yjtJyInformationDetails: data}
                // })

                listData.yjtJyInformationDetails = item
                centerDialogVisible.value = true
                if (listData.yjtJyInformationDetails.exterior != '0') {
                    getFileQuery(listData.yjtJyInformationDetails.yjtJyInformationDetailsId)
                }
            }


            //图片预览
            const seeImg = () => {
                showImage.value = true

            }


            //获取阴极铜审核数据
            function getAuditorDataQuery(obj) {
                let paramInfo = {}
                let blocks = {}
                let paramBlock = {}
                paramBlock.limit = limit.value
                paramBlock.offset = offset.value
                paramBlock.blockId = 'paramBlock'
                paramBlock.data = obj
                blocks.paramBlock = paramBlock
                paramInfo.blocks = blocks
                auditorDataQuery(paramInfo).then((result) => {
                    listData.auditorListData = [...listData.auditorListData, ...result.data.blocks.resultBlock.data];
                    // 加载状态结束
                    loading.value = false
                    if (listData.auditorListData.length == result.data.blocks.resultBlock.total) {
                        finished.value = true
                    }

                    let height =document.body.scrollHeight-180
                    elDialogHeight.value='height:'+height+'px'

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


            //阴极铜判定审核
            const cathodeCopperAuditorClick = (state) => {
                if (auditorContent.value == '') {
                    showToast({
                        message: '请填写审核内容',
                        type: 'fail',
                        className: 'particulars-detail-popup'
                    })

                    return false
                }

                let obj = {}
                let paramInfo = {}
                let blocks = {}
                let paramBlock = {}
                obj.id = listData.yjtJyInformationDetails.id
                obj.yjtJyInformationId = listData.yjtJyInformationDetails.yjtJyInformationId
                obj.yjtJyInformationDetailsId = listData.yjtJyInformationDetails.yjtJyInformationDetailsId
                obj.auditorContent = auditorContent.value
                obj.status = state
                paramBlock.data = obj
                blocks.paramBlock = paramBlock
                paramInfo.blocks = blocks
                let text = ''
                if (state == '1') {
                    text = '驳回'
                } else {
                    text = '通过'
                }

                showConfirmDialog({
                    title: '提示',
                    width: '600',
                    message:
                        '是否' + text + '这条数据？',
                })
                    .then(() => {

                        cathodeCopperAuditor(paramInfo).then((result) => {
                            if (result.data.status == '0') {
                                showToast({
                                    message: result.data.returnMsg,
                                    type: 'success',
                                    className: 'particulars-detail-popup',
                                    overlay: true,
                                })
                                listData.auditorListData = []
                                centerDialogVisible.value = false
                                getAuditorDataQuery({batchnumber: searchValue.value, status: status.value})
                            }
                        }).catch(error => {
                            console.log(error)
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            }


            //获取阴极铜判定图片
            function getFileQuery(data) {
                let obj = {}
                obj.yjtJyInformationDetailsId = data
                fileQuery(obj).then((result) => {
                    listData.yjtJyInformationFileList = result.data.data
                }).catch(error => {
                    console.log(error)
                })
            }


            return {
                elDialogHeight,
                state,
                listData,
                showImage,
                auditorContent,
                centerDialogVisible,
                searchValue,
                loading,
                finished,
                limit,
                offset,
                status,
                options,
                listData,
                onClickLeft,
                onLoad,
                statusChange,
                dateFormat,
                onSearch,
                auditingDetails,
                seeImg,
                cathodeCopperAuditorClick
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