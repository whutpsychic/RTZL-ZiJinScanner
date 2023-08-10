<template>
    <div class="container">

        <div class="header">
            <van-nav-bar
                    title="审核详情"
                    class="page-nav-bar"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </div>

        <div>
            <el-card class="box-card" shadow="always" style="margin-top:5px">
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

            </el-card>
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
                <van-col span="5"></van-col>
                <van-col span="7">
                    <van-button type="danger" style="width:90%" @click="cathodeCopperAuditorClick('1')">驳回</van-button>
                </van-col>
                <van-col span="7">
                    <van-button type="success" style="width:90%" @click="cathodeCopperAuditorClick('2')">通过</van-button>
                </van-col>
                <van-col span="5"></van-col>

            </van-row>
        </div>


    </div>

</template>

<script>
    import {onBeforeRouteLeave, useRoute, useRouter} from "vue-router";
    import {shallowReactive} from "@vue/reactivity";
    import {onMounted, ref} from "vue";
    import {
        fileQuery
    } from '@/api/gradeDetermination'

    import {
        cathodeCopperAuditor
    } from '@/api/auditing'
    import {showConfirmDialog, showToast} from "vant";
    import {onActivated} from "@vue/runtime-core";

    export default {
        setup() {
            const router = useRouter()
            const route = useRoute()
            const showImage = ref(false)
            const auditorContent = ref('')
            const state = ref(false)
            const listData = shallowReactive({
                //阴极铜基本信息和判定数据
                yjtJyInformationDetails: {},
                //阴极铜判定图片
                yjtJyInformationFileList: [],

            })
            listData.yjtJyInformationDetails = JSON.parse(decodeURIComponent(route.query.yjtJyInformationDetails))

            onMounted(() => {
                if (listData.yjtJyInformationDetails.exterior != '0') {
                    getFileQuery(listData.yjtJyInformationDetails.yjtJyInformationDetailsId)
                }

            })


            // onBeforeRouteLeave((to, from, next) => {
            //     // to.meta.keepAlive = true
            //     if (state.value){
            //         to.meta.keepAlive = false
            //     }
            //     console.log(to)
            //     console.log(from)
            //     next();
            // })



            //返回上一页
            const onClickLeft = () => {
                router.back()
            }

            //图片预览
            const seeImg = () => {
                showImage.value = true

            }

            //阴极铜判定审核
            const cathodeCopperAuditorClick = (status) => {
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
                obj.status = status
                paramBlock.data = obj
                blocks.paramBlock = paramBlock
                paramInfo.blocks = blocks
                let text = ''
                if (status == '1') {
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
                        state.value=true
                        router.back()
                        // cathodeCopperAuditor(paramInfo).then((result) => {
                        //     if (result.data.status == '0') {
                        //         showToast({
                        //             message: result.data.returnMsg,
                        //             type: 'success',
                        //             className: 'particulars-detail-popup',
                        //             overlay: true,
                        //         })
                        //         router.back()
                        //     }
                        // }).catch(error => {
                        //     console.log(error)
                        // })
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
                state,
                listData,
                showImage,
                auditorContent,
                seeImg,
                onClickLeft,
                dateFormat,
                cathodeCopperAuditorClick
            }

        }
    }
</script>

<style scoped>
    .container {
        position: relative;
        height: 100%;
        overflow: scroll;
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .header {
        position: sticky;
        top: 0;
        z-index: 999;
        overflow: hidden;
    }
</style>