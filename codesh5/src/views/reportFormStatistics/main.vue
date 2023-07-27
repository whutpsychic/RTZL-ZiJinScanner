<template>
    <div class="container">
        <div class="header">
            <van-nav-bar
                    title="报表统计"
                    class="page-nav-bar"
                    left-arrow
                    @click-left="onClickLeft"
            />

            <van-tabs v-model:active="active" @click-tab="onClickTab">
                <van-tab title="按数量统计"></van-tab>
                <van-tab title=" 按重量统计"></van-tab>
            </van-tabs>

            <div style="background-color: #FFFFFF">
                <van-cell-group inset>
                    <van-field
                            v-model="startDate"
                            is-link
                            name="startDate"
                            label="开始日期"
                            placeholder="开始日期"
                            @click="showPicker = true"

                    />
                    <van-popup v-model:show="showPicker" position="bottom">
                        <van-date-picker
                                @confirm="onConfirm"
                                @cancel="showPicker = false"
                        />
                    </van-popup>

                    <van-field
                            v-model="endDate"
                            is-link
                            name="endDate"
                            label="结束日期"
                            placeholder="结束日期"
                            @click="showPicker2 = true"
                    />
                    <van-popup v-model:show="showPicker2" position="bottom">
                        <van-date-picker
                                @confirm="onConfirm2"
                                @cancel="showPicker2 = false"
                        />
                    </van-popup>
                    <div style="margin:8px">
                        <van-checkbox v-model="checkboxValue" shape="square" @click="checkboxClick">按个人查询</van-checkbox>
                    </div>
                </van-cell-group>
            </div>
        </div>

        <div v-if="active==0">
            <p style="margin: 5px;display: block">合计数量（捆）：{{totalQuantity}}</p>
            <el-table :data="tableDataQuantity" style="width: 100%">
                <el-table-column fixed prop="exteriorName" label="品级"/>
                <el-table-column prop="summations" label="总数"/>
                <el-table-column v-for="(item,index) in  tbYjtJyDictList"
                                 :prop="item.columnName" :label="item.name"/>

            </el-table>
            <div>
                <p style="text-align: center;margin-top: 5px;font-size: 16px;">品级比例（数量（捆））</p>
                <v-chart v-if="tableDataQuantity.length>0" style="height: 300px" :option="exteriorOption"/>
                <van-empty v-else description="暂无数据"/>
            </div>

            <div>
                <p style="text-align: center;margin-top: 5px;font-size: 16px;">合格品类型（数量（捆））</p>
                <v-chart v-if="tableDataQuantity.length>0" style="height:400px" :option="qualifiedOption"/>
                <van-empty v-else description="暂无数据"/>
            </div>

            <div>
                <p style="text-align: center;margin-top: 5px;font-size: 16px;">不合格品类型（数量（捆））</p>
                <v-chart v-if="tableDataQuantity.length>0" style="height:400px" :option="unqualifiedOption"/>
                <van-empty v-else description="暂无数据"/>
            </div>


        </div>

        <div v-if="active==1">
            <p style="margin: 5px;display: block">合计重量（KG）：{{totalWeight}}</p>
            <el-table :data="tableDataWeight" style="width: 100%">
                <el-table-column fixed prop="exteriorName" label="品级"/>
                <el-table-column prop="summations" label="总重量" :formatter="formatter"/>
                <el-table-column v-for="(item,index) in  tbYjtJyDictList"
                                 :formatter="formatter"
                                 :prop="item.columnName" :label="item.name"/>
            </el-table>

            <div>
                <p style="text-align: center;margin-top: 5px;font-size: 16px;">品级比例（重量（KG））</p>
                <v-chart v-if="tableDataWeight.length>0" style="height:500px;" :option="exteriorOption"/>
                <van-empty v-else description="暂无数据"/>
            </div>

            <div>
                <p style="text-align: center;margin-top: 5px;font-size: 16px;">合格品类型（重量（KG））</p>
                <v-chart v-if="tableDataWeight.length>0" style="height: 400px" :option="qualifiedOption"/>
                <van-empty v-else description="暂无数据"/>
            </div>

            <div>
                <p style="text-align: center;margin-top: 5px;font-size: 16px;">不合格品类型（重量（KG））</p>
                <v-chart v-if="tableDataWeight.length>0" style="height: 400px" :option="unqualifiedOption"/>
                <van-empty v-else description="暂无数据"/>
            </div>

        </div>
    </div>
</template>

<script>
    import {useRouter} from "vue-router";
    import {onMounted, ref} from "vue";
    import {shallowReactive, toRaw} from "@vue/reactivity";
    import {
        typeCodeData,
    } from '@/api/gradeDetermination'
    import {
        appReportFormStatisticsTable,
    } from '@/api/reportFormStatistics'
    import {showToast} from "vant";
    import {useStore} from "vuex";
    import "echarts";


    export default {
        setup() {
            const router = useRouter()
            const active = ref(0)
            const store = useStore()
            const tableDataQuantity = ref([])
            const tableDataWeight = ref([])
            const startDate = ref('')
            const endDate = ref('')
            const showPicker = ref(false)
            const showPicker2 = ref(false)
            const checkoutUserId = ref('')
            const checkboxValue = ref('')
            const totalQuantity = ref(0)
            const totalWeight = ref(0)
            //阴极铜质检类型
            const tbYjtJyDictList = ref([])


            const exteriorOption = ref({
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        //饼状图
                        type: 'pie',
                        avoidLabelOverlap: false,
                        //标签
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
                                formatter: '{d}%',
                                textStyle: {
                                    align: 'center',
                                    baseline: 'middle',
                                    fontFamily: '微软雅黑',
                                    fontSize: 15,
                                    fontWeight: 'bolder'
                                }
                            },
                        },
                        data: []
                    }

                ]
            })

            const qualifiedOption = ref({
                grid: {
                    left: '20%'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                xAxis: {
                    type: 'category',
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [],
                        type: 'bar'
                    }
                ]
            })

            const unqualifiedOption = ref({
                grid: {
                    left: '20%'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                xAxis: {
                    type: 'category',
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [],
                        type: 'bar'
                    }
                ]
            })


            const listData = shallowReactive({})
            dateFormat('YYYY-mm-dd', new Date())
            getTbYjtJyDictList()

            onMounted(() => {
                getAppReportFormStatisticsTable()

            })


            //按个人查询
            const checkboxClick = () => {
                if (checkboxValue.value) {
                    checkoutUserId.value = store.state.user.userId
                } else {
                    checkoutUserId.value = ''
                }

                getAppReportFormStatisticsTable()
            }

            //开始日期
            const onConfirm = ({selectedValues}) => {
                let startDateString = selectedValues.join('-')
                if (endDate.value < startDateString) {
                    showToast({
                        message: '开始日期不能大于结束日期',
                        type: 'fail',
                        className: 'particulars-detail-popup'
                    })
                    return false
                }
                startDate.value = startDateString
                showPicker.value = false
                getAppReportFormStatisticsTable()
            }

            //结束日期
            const onConfirm2 = ({selectedValues}) => {
                let endDateString = selectedValues.join('-')
                if (endDateString < startDate.value) {
                    showToast({
                        message: '开始日期不能大于结束日期',
                        type: 'fail',
                        className: 'particulars-detail-popup'
                    })
                    return false
                }
                endDate.value = endDateString
                showPicker2.value = false
                getAppReportFormStatisticsTable()
            }


            //切换tab页
            const onClickTab = () => {
                getAppReportFormStatisticsTable()
            }

            //跳转到首页
            const onClickLeft = () => {
                router.push({path: '/home'})
            }


            const formatter = (row, column, cellValue) => {
                let regPos = /^[0-9]+.?[0-9]*/;
                if (regPos.test(cellValue)) {
                    return parseFloat(cellValue)
                } else {
                    return cellValue
                }

            }

            //获取阴极铜质检类型
            function getTbYjtJyDictList() {
                let tbYjtJyDict = {}
                typeCodeData(tbYjtJyDict).then((result) => {
                    if (result.data.code == 200) {
                        tbYjtJyDictList.value = result.data.data

                    }
                }).catch(error => {
                    console.log(error)
                })
            }

            //获取表格统计数据
            function getAppReportFormStatisticsTable() {
                let objectMap = {}
                objectMap.startDate = startDate.value
                objectMap.endDate = endDate.value
                objectMap.checkoutUserId = checkoutUserId.value
                objectMap.active = active.value

                appReportFormStatisticsTable(objectMap).then((result) => {
                    if (result.data.data.length > 0) {
                        if (active.value == 0) {
                            tableDataQuantity.value = result.data.data
                            totalQuantity.value = result.data.total
                        } else {
                            tableDataWeight.value = result.data.data
                            totalWeight.value = parseFloat(result.data.total)
                        }
                        let pieDataList = []
                        let regPos = /^[0-9]+.?[0-9]*/;
                        let qualifiedXAxisData = []
                        let qualifiedSeriesData = []
                        let unqualifiedXAxisData = []
                        let unqualifiedSeriesData = []
                        let tbYjtJyDictObj = toRaw(tbYjtJyDictList.value)
                        for (let i = 0; i < result.data.data.length; i++) {
                            let obj = result.data.data[i]
                            let pieData = {}
                            let itemStyle = {}
                            pieData.name = obj.exteriorName
                            pieData.value = obj.summations
                            //优等品
                            if (obj.exterior == '0') {
                                itemStyle.color = 'LawnGreen '
                            } else if (obj.exterior == '1') {
                                //合格品
                                itemStyle.color = 'Gold '
                                for (let key in obj) {
                                    if (key != 'exteriorName' && key != 'exterior' && key != 'summations') {
                                        if (regPos.test(obj[key])) {
                                            qualifiedXAxisData.push(tbYjtJyDictObj.find(tbYjtJyDict => tbYjtJyDict.columnName == key).name)
                                            qualifiedSeriesData.push(parseFloat(obj[key]))
                                        }
                                    }
                                }

                            } else if (obj.exterior == '2') {
                                //不合格品
                                itemStyle.color = 'Red'
                                for (let key in obj) {
                                    if (key != 'exteriorName' && key != 'exterior' && key != 'summations') {
                                        if (regPos.test(obj[key])) {
                                            unqualifiedXAxisData.push(tbYjtJyDictObj.find(tbYjtJyDict => tbYjtJyDict.columnName == key).name)
                                            unqualifiedSeriesData.push(parseFloat(obj[key]))
                                        }
                                    }
                                }
                            }
                            pieData.itemStyle = itemStyle
                            pieDataList.push(pieData)

                        }
                        exteriorOption.value.series[0].data = pieDataList
                        qualifiedOption.value.xAxis.data = qualifiedXAxisData
                        qualifiedOption.value.series[0].data = qualifiedSeriesData
                        unqualifiedOption.value.xAxis.data = unqualifiedXAxisData
                        unqualifiedOption.value.series[0].data = unqualifiedSeriesData
                    } else {
                        totalQuantity.value = 0
                        tableDataQuantity.value = []
                        tableDataWeight.value = []
                        totalWeight.value = 0
                    }

                }).catch(error => {
                    console.log(error)
                })
            }

            //格式化时间
            function dateFormat(fmt, date) {
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
                startDate.value = fmt
                endDate.value = fmt
            }


            return {
                qualifiedOption,
                unqualifiedOption,
                exteriorOption,
                active,
                totalQuantity,
                totalWeight,
                tableDataQuantity,
                tableDataWeight,
                tbYjtJyDictList,
                startDate,
                endDate,
                showPicker,
                showPicker2,
                checkoutUserId,
                checkboxValue,
                checkboxClick,
                onConfirm,
                onConfirm2,
                onClickTab,
                formatter,
                onClickLeft
            }
        },

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