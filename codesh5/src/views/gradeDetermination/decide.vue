<template>
    <van-nav-bar
            title="品级质检"
            class="page-nav-bar"
            left-arrow
            @click-left="onClickLeft"
    />


    <el-card class="box-card" shadow="always" style="margin-top:5px">
        <van-divider content-position="left">基本信息</van-divider>
        <div>
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

        </div>

        <div>
            <van-divider content-position="left"><span style="color: red">*</span>{{typeCodeText}}</van-divider>
            <van-radio-group v-model="typeCodeChecked" direction="horizontal">
                <van-radio v-for="(item,index) in  listData.typeCodeList" :name="String(item.id)">{{item.name}}
                </van-radio>
            </van-radio-group>
        </div>

        <div>
            <van-divider content-position="left"><span style="color: red">*</span> 上传照片</van-divider>
            <van-uploader
                    v-model="listData.fileList"
                    :after-read="onRead"
                    :before-delete="beforeDelete"
            />
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


    <van-button type="primary" size="large" style="width: 80%;position: absolute;left: 10%;margin-top: 15px;"
                @click="conservation">提交
    </van-button>

</template>

<script>
    import {onMounted, ref} from 'vue'
    import {useRoute, useRouter} from "vue-router";
    import {shallowReactive} from "@vue/reactivity";
    import {
        typeCodeData,
        excellentJudgement,
        fileQuery,
        cathodeCopperImgUpload
    } from '@/api/gradeDetermination'
    import {compressImage} from '@/utils/compressImage.js'
    import {showToast} from "vant";

    export default {
        setup() {
            const router = useRouter()
            const route = useRoute()
            const typeCode = ref('')
            const typeCodeText = ref('')
            const remarks = ref('')
            const typeCodeChecked = ref('')
            const listData = shallowReactive({
                //阴极铜基本信息数据
                yjtJyInformationData: {},
                //判断类型数据
                typeCodeList: [],
                fileList: [], // 回显图片
                imagePath: [] // 上传图片路径
            })

            listData.yjtJyInformationData = JSON.parse(decodeURIComponent(route.query.yjtJyInformation))
            const exterior = ref(JSON.parse(decodeURIComponent(route.query.exterior)))
            const tabIndex = ref(JSON.parse(decodeURIComponent(route.query.tabIndex)))
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
            })



            //返回上一页
            const onClickLeft = () => {
                router.back()
            }

            //图片删除
            const beforeDelete = (file) => {

                listData.imagePath = listData.imagePath.filter(item => {
                    return item.fileName != file.file.name
                })

                return true
            }

            //保存
            const conservation = () => {
                if (listData.imagePath.length == 0) {
                    showToast({
                        message: '请上传照片',
                        type: 'fail',
                        className: 'particulars-detail-popup'
                    })

                    return false
                }

                let listMap = {data: [], active: '', exterior: '',remarks:'', typeCodeChecked:'', fileList: []}
                let obj = []
                obj.push(listData.yjtJyInformationData)
                listMap.data = obj
                listMap.typeCodeChecked=typeCodeChecked.value
                listMap.active = tabIndex.value
                listMap.exterior = exterior.value
                listMap.remarks = remarks.value
                listMap.fileList = listData.imagePath
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


            //图片压缩并上传
            const onRead = (file) => {
                //调用压缩方法
                compressImage(file.file, '0.9').then(result => {
                    //上传图片
                    let data = new FormData();
                    let path = '/cathodeCopper/' + listData.yjtJyInformationData.batchgroup + '/' + listData.yjtJyInformationData.batchnumber
                    data.append('file', result.file);
                    data.append('path', path);

                    let obj = {}
                    cathodeCopperImgUpload(data).then((result) => {
                        obj.fileName = result.data.fileName
                        obj.fileUrl = result.data.fileUrl
                        listData.imagePath.push(obj)
                    }).catch(error => {
                        console.log(error)
                    })

                })


            }


            //获取阴极铜判定类型
            function getTypeCodeData(data) {
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
                remarks,
                typeCode,
                typeCodeText,
                listData,
                exterior,
                tabIndex,
                typeCodeChecked,
                onClickLeft,
                dateFormat,
                onRead,
                beforeDelete,
                conservation
            }
        }
    }
</script>

<style scoped>

</style>