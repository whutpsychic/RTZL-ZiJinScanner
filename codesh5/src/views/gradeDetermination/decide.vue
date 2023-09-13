<template>
    <div class="container">
        <div class="header">
            <van-nav-bar
                    title="品级质检"
                    class="page-nav-bar"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </div>


        <div class="content">
            <el-card class="box-card" shadow="always">
                <van-divider content-position="left">基本信息</van-divider>
                <div>
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
                </div>

                <div>
                    <van-divider content-position="left"><span style="color: red">*</span>{{typeCodeText}}</van-divider>
                    <van-radio-group v-model="typeCodeChecked" direction="horizontal">
                        <van-radio v-for="(item,index) in  listData.typeCodeList" :name="String(item.id)">{{item.name}}
                        </van-radio>
                    </van-radio-group>
                </div>


                <div>
                    <van-divider content-position="left"><span style="color: red">*</span> 质检照片</van-divider>
                    <div class="van-uploader">
                        <div class="van-uploader__wrapper">
                            <div class="van-uploader__preview" v-for="(item,index) in  fileList" :key="item.index">
                                <div class="van-image van-uploader__preview-image">
                                    <img class="van-image__img" :src="item.base64Img"
                                         style="object-fit: cover;" @click="seeImg">
                                </div>
                                <div role="button"
                                     class="van-uploader__preview-delete van-uploader__preview-delete--shadow"
                                     tabindex="0" aria-label="删除" @click="beforeDelete(item.index,item.base64Img)">
                                    <i class="van-badge__wrapper van-icon van-icon-cross van-uploader__preview-delete-icon"></i>
                                </div>
                            </div>


                            <div class="van-uploader__upload" @click="takePhotoZJ">
                                <i class="van-badge__wrapper van-icon van-icon-photograph van-uploader__upload-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>


                <div v-if="tabIndex==0">
                    <van-divider content-position="left"><span style="color: red">*</span> 标签照片</van-divider>
                    <div class="van-uploader">
                        <div class="van-uploader__wrapper">
                            <div class="van-uploader__preview" v-for="(item,index) in  labelFileList" :key="item.index">
                                <div class="van-image van-uploader__preview-image">
                                    <img class="van-image__img" :src="item.base64Img"
                                         style="object-fit: cover;" @click="seeImgBQ">
                                </div>
                                <div role="button"
                                     class="van-uploader__preview-delete van-uploader__preview-delete--shadow"
                                     tabindex="0" aria-label="删除" @click="beforeDeleteBQ(item.index,item.base64Img)">
                                    <i class="van-badge__wrapper van-icon van-icon-cross van-uploader__preview-delete-icon"></i>
                                </div>
                            </div>


                            <div class="van-uploader__upload" @click="takePhotoBQ" v-if="labelFileList.length!=1">
                                <i class="van-badge__wrapper van-icon van-icon-photograph van-uploader__upload-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="tabIndex==1">
                    <van-divider content-position="left"><span style="color: red">*</span>改判理由</van-divider>
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

                <div>
                    <van-divider content-position="left">备注</van-divider>
                    <van-cell-group inset>
                        <van-field
                                v-model="remarks"
                                rows="1"
                                autosize
                                label="备注"
                                type="textarea"
                                placeholder="请输入备注"
                        />
                    </van-cell-group>
                </div>

            </el-card>

            <van-button type="primary" size="large"
                        style="width: 80%;position: absolute;left: 10%;margin-top: 15px;background-color: #003363;color:#FFFFFF"
                        @click="conservation">提交
            </van-button>

            <van-image-preview
                    v-model:show="showImage"
                    :images="imgList"
                    :closeable="true"
                    :loop="false"
                    :closeOnPopstate="true"
            />
        </div>
    </div>
</template>

<script>
    import fc from "flutter-core";
    import {onMounted, ref} from 'vue'
    import {toRaw} from "@vue/reactivity";
    import {useRoute, useRouter} from "vue-router";
    import {shallowReactive} from "@vue/reactivity";
    import {
        typeCodeData,
        excellentJudgement,
        cathodeCopperImgUpload,
        alterReasonQuery
    } from '@/api/gradeDetermination'
    import {compressImage, dataURLtoFile} from '@/utils/compressImage.js'
    import {showToast} from "vant";

    export default {
        setup() {
            const router = useRouter()
            const route = useRoute()
            const typeCode = ref('')
            const typeCodeText = ref('')
            const remarks = ref('')
            const alterReason = ref('')
            const typeCodeChecked = ref('')
            const takePhotoState = ref('')
            // 质检图片
            const fileList = ref([])
            const base64ImgList = ref([])
            // 质检图片路径
            const imagePath = ref([])
            //标签图片
            const labelFileList = ref([])
            const base64LabelImgList = ref([])
            // 标签图片路径
            const labelImagePath = ref([])

            const showImage = ref(false)
            const showLabelImage = ref(false)
            const imgList = ref([])

            const listData = shallowReactive({
                //阴极铜基本信息数据
                yjtJyInformationData: {},
                //判断类型数据
                typeCodeList: [],
                //改判理由
                alterReasonList: []
            })

            listData.yjtJyInformationData = JSON.parse(decodeURIComponent(route.query.yjtJyInformation))
            const exterior = ref(JSON.parse(decodeURIComponent(route.query.exterior)))
            const tabIndex = ref(JSON.parse(decodeURIComponent(route.query.tabIndex)))

            // 拍照监听
            fc.await("takePhoto", (res) => {
                if (res != 'null') {
                    if (takePhotoState.value == '0') {
                        let fileObj = {}
                        fileObj.index = fileList.value.length + 1
                        fileObj.base64Img = res
                        fileList.value.push(fileObj)
                        base64ImgList.value.push(res)
                        //上传图片
                        let data = new FormData();
                        let path = '/cathodeCopper/' + listData.yjtJyInformationData.batchgroup
                            + '/' + listData.yjtJyInformationData.batchnumber
                        data.append('file', dataURLtoFile(res));
                        data.append('path', path);


                        cathodeCopperImgUpload(data).then((result) => {
                            let obj = {}
                            obj.fileName = result.data.fileName
                            obj.fileUrl = result.data.fileUrl
                            obj.index = fileList.value.length
                            imagePath.value.push(obj)
                        }).catch(error => {
                            console.log(error)
                        })

                    }

                    if (takePhotoState.value == '1') {
                        let fileLabelObj = {}
                        fileLabelObj.index = labelFileList.value.length + 1
                        fileLabelObj.base64Img = res
                        labelFileList.value.push(fileLabelObj)
                        base64LabelImgList.value.push(res)

                        //上传图片
                        let data = new FormData();
                        let path = '/cathodeCopperLabel/' + listData.yjtJyInformationData.batchnumber
                        data.append('file', dataURLtoFile(res));
                        data.append('path', path);


                        cathodeCopperImgUpload(data).then((result) => {
                            let labelObj = {}
                            labelObj.fileName = result.data.fileName
                            labelObj.fileUrl = result.data.fileUrl
                            labelObj.index = labelFileList.value.length
                            labelImagePath.value.push(labelObj)
                        }).catch(error => {
                            console.log(error)
                        })

                    }

                }
            })

            //质检照片拍照
            const takePhotoZJ = () => {
                takePhotoState.value = '0'
                fc.takePhoto();
            }

            //质检图片删除
            const beforeDelete = (index, base64Img) => {
                imagePath.value = imagePath.value.filter(item => {
                    return item.index != index
                })
                fileList.value = fileList.value.filter(item => {
                    return item.index != index
                })
                base64ImgList.value = base64ImgList.value.filter(item => {
                    return item != base64Img
                })
            }

            //质检图片预览
            const seeImg = () => {
                imgList.value = base64ImgList.value
                showImage.value = true
            }


            //标签照片拍照
            const takePhotoBQ = () => {
                takePhotoState.value = '1'
                fc.takePhoto();
            }

            //标签图片删除
            const beforeDeleteBQ = (index, base64Img) => {
                labelImagePath.value = labelImagePath.value.filter(item => {
                    return item.index != index
                })
                labelFileList.value = labelFileList.value.filter(item => {
                    return item.index != index
                })
                base64LabelImgList.value = base64LabelImgList.value.filter(item => {
                    return item != base64Img
                })


            }


            //标签图片预览
            const seeImgBQ = () => {
                imgList.value = base64LabelImgList.value
                showImage.value = true
            }


            //合格品
            if (exterior.value == '1') {
                typeCode.value = 'qualified'
                typeCodeText.value = '合格品类型'
            }
            //不合格品
            else if (exterior.value == '2') {
                typeCode.value = 'unqualified'
                typeCodeText.value = '不合格品类型'
            }


            onMounted(() => {
                getTypeCodeData(typeCode.value)
                getAlterReasonQuery()
            })


            //返回上一页
            const onClickLeft = () => {
                router.back()
            }


            //保存
            const conservation = () => {

                if (imagePath.value.length == 0) {
                    showToast({
                        message: '请上传质检照片',
                        type: 'fail',
                        className: 'particulars-detail-popup'
                    })

                    return false
                }

                if (tabIndex.value == 0) {
                    if (labelImagePath.value.length == 0) {
                        showToast({
                            message: '请上传标签照片',
                            type: 'fail',
                            className: 'particulars-detail-popup'
                        })

                        return false
                    }
                }


                if (tabIndex.value == 1) {
                    if (!alterReason.value) {
                        showToast({
                            message: '请选择或者填写改判理由',
                            type: 'fail',
                            className: 'particulars-detail-popup'
                        })

                        return false
                    }
                }

                let listMap = {
                    data: [],
                    active: '',
                    exterior: '',
                    remarks: '',
                    alterReason: '',
                    typeCodeChecked: '',
                    fileList: [],
                    labelFileList: []
                }
                let obj = []
                obj.push(listData.yjtJyInformationData)
                listMap.data = obj
                listMap.typeCodeChecked = typeCodeChecked.value
                listMap.active = tabIndex.value
                listMap.exterior = exterior.value
                listMap.remarks = remarks.value
                listMap.alterReason = alterReason.value
                listMap.fileList = imagePath.value
                listMap.labelFileList = labelImagePath.value

                excellentJudgement(listMap).then((result) => {
                    if (result.data.code == 200) {
                        showToast({
                            message: '质检成功',
                            type: 'success',
                            className: 'particulars-detail-popup',
                            overlay: true,
                        })
                        router.back()
                    }
                }).catch(error => {
                    console.log(error)
                })

            }


            //获取阴极铜判定类型
            const getTypeCodeData = (data) => {
                let tbYjtJyDict = {}
                tbYjtJyDict.typeCode = data
                typeCodeData(tbYjtJyDict).then((result) => {
                    if (result.data.code == 200) {
                        listData.typeCodeList = result.data.data
                        typeCodeChecked.value = String(listData.typeCodeList[0].id)
                    }
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
                imgList,
                showImage,
                showLabelImage,
                fileList,
                base64ImgList,
                imagePath,
                labelFileList,
                labelImagePath,
                takePhotoState,
                alterReason,
                remarks,
                typeCode,
                typeCodeText,
                listData,
                exterior,
                tabIndex,
                typeCodeChecked,
                seeImg,
                seeImgBQ,
                takePhotoZJ,
                takePhotoBQ,
                onClickLeft,
                dateFormat,
                beforeDelete,
                beforeDeleteBQ,
                conservation,
                getTypeCodeData,
                getAlterReasonQuery,
            }
        }
    }
</script>

<style scoped>
    .header {

        width: 100%;
        height: 46px;
        line-height: 46px;
        position: absolute;
        z-index: 5;
        top: 0;
    }

    .content {
        width: 100%;
        overflow: scroll;
        top: 46px;
        position: absolute;
        z-index: 10;
        bottom: 5px;

    }

</style>