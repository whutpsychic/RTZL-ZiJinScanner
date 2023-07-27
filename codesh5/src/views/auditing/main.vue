<template>
    <div class="container">

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

        <van-list
                v-model:loading="loading"
                :finished="finished"
                :offset="100"
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

</template>

<script>
    import {ref} from 'vue';
    import {useRouter} from "vue-router";
    import {
        auditorDataQuery
    } from '@/api/auditing'
    import {shallowReactive} from "@vue/reactivity";


    export default {
        setup() {
            const router = useRouter()
            const searchValue = ref('')
            const listData = shallowReactive({
                auditorListData: []
            })
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

            //选择状态啊
            const statusChange = (val) => {
                offset.value =1
                listData.auditorListData=[]
                finished.value = false
                getAuditorDataQuery({batchnumber: searchValue.value, status: val})
            }
            //搜索
            const onSearch = (val) => {
                offset.value =1
                listData.auditorListData=[]
                finished.value = false
                getAuditorDataQuery({batchnumber: val, status: status.value})
            }



            const onLoad = () => {
                offset.value = offset.value + 1
                getAuditorDataQuery({batchnumber: searchValue.value, status: status.value})

            }


            //跳转到审核页面
            const auditingDetails=(item)  => {
                let data = encodeURIComponent(JSON.stringify(item))
                router.push({
                    path: '/auditingDetails',
                    query: {yjtJyInformationDetails: data}
                })
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
                    // listData.auditorListData = result.data.blocks.resultBlock.data
                    listData.auditorListData = [...listData.auditorListData, ...result.data.blocks.resultBlock.data];
                    // 加载状态结束
                    loading.value = false
                    if (listData.auditorListData.length == result.data.blocks.resultBlock.total) {
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
                auditingDetails
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