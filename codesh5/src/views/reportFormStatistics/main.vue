<template>
    <div>
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

        <div style="background-color: #FFFFFF; z-index: 999;">
            <van-cell-group inset>
                <van-cell title="日期区间：" title-style="max-width: 25%" :value="dataText" @click="show = true"/>
                <van-calendar v-model:show="show" :min-date="minDate" type="range" allow-same-day @confirm="onConfirm"/>


                <div style="margin:8px">
                    <van-checkbox v-model="checkboxValue" shape="square" @click="checkboxClick">按个人查询</van-checkbox>
                </div>
            </van-cell-group>
        </div>
    </div>
    <div id="content" class="content">
        <div v-show="active==0">
            <p style="margin: 5px;display: block">合计数量（捆）：{{totalQuantity}}</p>
            <el-table :data="tableDataQuantity" style="width: 100%">
                <el-table-column fixed prop="exteriorName" label="品级"/>
                <el-table-column prop="summations" label="总数"/>
                <el-table-column v-for="(item,index) in  tbYjtJyDictList"
                                 :prop="item.columnName" :label="item.name"/>

            </el-table>
            <div>
                <p style="text-align: center;margin-top: 5px;font-size: 16px;">品级比例（数量（捆））</p>
                <v-chart v-if="showEcharts" ref="tu1" style="height: 300px;width:100vw" :option="exteriorOption"/>
                <van-empty v-else description="暂无数据"/>
            </div>

            <div>
                <p style="text-align: center;margin-top: 5px;font-size: 16px;">合格品类型（数量（捆））</p>
                <v-chart v-if="showEcharts" ref="tu2" style="height:400px;width:100vw" :option="qualifiedOption"/>
                <van-empty v-else description="暂无数据"/>
            </div>

            <div>
                <p style="text-align: center;margin-top: 5px;font-size: 16px;">不合格品类型（数量（捆））</p>
                <v-chart v-if="showEcharts" ref="tu3" style="height:400px;width:100vw" :option="unqualifiedOption"/>
                <van-empty v-else description="暂无数据"/>
            </div>


        </div>
        <div v-show="active==1">
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
                <v-chart v-if="showEcharts" ref="tu4" style="height:300px;width:100vw" :option="exteriorOption"/>
                <van-empty v-else description="暂无数据"/>
            </div>

            <div>
                <p style="text-align: center;margin-top: 5px;font-size: 16px;">合格品类型（重量（KG））</p>
                <v-chart v-if="showEcharts" ref="tu5" style="height: 400px;width:100vw" :option="qualifiedOption"/>
                <van-empty v-else description="暂无数据"/>
            </div>

            <div>
                <p style="text-align: center;margin-top: 5px;font-size: 16px;">不合格品类型（重量（KG））</p>
                <v-chart v-if="showEcharts" ref="tu6" style="height: 400px;width:100vw" :option="unqualifiedOption"/>
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
    import {useStore} from "vuex";
    import "echarts";
    import {onBeforeUnmount} from "@vue/runtime-core";

    let nowDat = new Date();
    let dateY = parseInt(nowDat.getFullYear() - 1);
    let dateM = parseInt(nowDat.getMonth());
    let dateD = parseInt(nowDat.getDate());

    export default {

        setup() {
            const router = useRouter()
            const active = ref(0)
            const showEcharts = ref(true)
            const store = useStore()
            const tableDataQuantity = ref([])
            const tableDataWeight = ref([])
            const startDate = ref()
            const endDate = ref()
            const showPicker = ref(false)
            const showPicker2 = ref(false)
            const checkoutUserId = ref('')
            const checkboxValue = ref('')
            const totalQuantity = ref(0)
            const totalWeight = ref(0)
            const show = ref(false)
            const dataText = ref('')

            const tu1 = ref(null)
            const tu2 = ref(null)
            const tu3 = ref(null)
            const tu4 = ref(null)
            const tu5 = ref(null)
            const tu6 = ref(null)


            const onConfirm = (values) => {
                const [start, end] = values;
                show.value = false;
                startDate.value = dateFormat('YYYY-mm-dd', start)
                endDate.value = dateFormat('YYYY-mm-dd', end)
                getAppReportFormStatisticsTable()
                dataText.value = `${startDate.value}至${endDate.value}`
            };


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


            onMounted(() => {
                startDate.value = dateFormat('YYYY-mm-dd', new Date())
                endDate.value = dateFormat('YYYY-mm-dd', new Date())
                dataText.value = startDate.value + '至' + endDate.value
                getTbYjtJyDictList()
                setTimeout(() => {
                    getAppReportFormStatisticsTable()
                }, 0)

            })


            onBeforeUnmount(() => {

                if (tu1.value) {
                    tu1.value.dispose()
                }

                if (tu2.value) {
                    tu2.value.dispose()
                }

                if (tu3.value) {
                    tu3.value.dispose()
                }

                if (tu4.value) {
                    tu4.value.dispose()
                }

                if (tu5.value) {
                    tu5.value.dispose()
                }

                if (tu6.value) {
                    tu6.value.dispose()
                }

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


            //切换tab页
            const onClickTab = () => {
                document.getElementById("content").scrollTop = 0
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
            const getTbYjtJyDictList = () => {
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
            const getAppReportFormStatisticsTable = () => {
                showEcharts.value = true
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

                        exteriorOption.value.series[0].data = []
                        qualifiedOption.value.xAxis.data = []
                        qualifiedOption.value.series[0].data = []
                        unqualifiedOption.value.xAxis.data = []
                        unqualifiedOption.value.series[0].data = []
                        showEcharts.value = false
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

                return fmt
            }


            return {
                tu1,
                tu2,
                tu3,
                tu4,
                tu5,
                tu6,
                show,
                minDate: new Date(dateY, dateM, dateD),
                dataText,
                showEcharts,
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
                onConfirm,
                checkboxClick,
                onClickTab,
                formatter,
                onClickLeft,
                getTbYjtJyDictList,
                dateFormat,
                getAppReportFormStatisticsTable
            }
        },

    }
</script>

<style scoped>

    .content {

        width: 100%;
        overflow: auto;
        top: 170px;
        position: absolute;
        z-index: 10;
        bottom: 5px;

    }
</style>