<template>

    <van-nav-bar
            title="选择车号"
            class="page-nav-bar"
            left-arrow
            @click-left="onClickLeft"
    />

    <div>
        <van-form @submit="onSubmit" id="form-area" ref="formRef">
            <van-cell-group inset>
                <van-cell title="选择日期：" title-style="max-width: 25%" :value="dataText" @click="show = true"/>
                <van-calendar v-model:show="show" :min-date="minDate" :default-date="deDate"
                              type="range" allow-same-day @confirm="onConfirm"/>
            </van-cell-group>
        </van-form>

        <el-table ref="tableRef"
                  :data="tableData"
                  id="data-area"
                  :style="tableHeight"
                  v-loading="loading"
                  element-loading-text="数据加载中..."
                  element-loading-background="rgba(122, 122, 122, 0.8)"
                  @row-click="selectRow">
            <el-table-column fixed prop="chehao" label="车号" width="110px">
                <template #default="scope">
                    <span style="font-weight: bolder;font-size: 16px">{{ scope.row.chehao }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="danjuhao" label="单据号" width="130px"/>
            <el-table-column prop="chengfang" label="秤房"/>
            <el-table-column prop="pizhong" label="皮重" :formatter="formatter"/>
        </el-table>

        <div>
            <van-cell-group inset>
                <van-field class="chehao"
                           v-model="chehao" label="车牌号" placeholder=""/>
            </van-cell-group>
            <div class="btn-area">
                <div @click="onQuery">
                    <img src="@/assets/image/btn_chaxun1.png"/>
                    <div>查询</div>
                </div>
                <div @click="confirmSelect">
                    <img src="@/assets/image/btn_queren.png"/>
                    <div>确认</div>
                </div>

                <div @click="handleConfirmSelect">
                    <img src="@/assets/image/btn_shoudong.png"/>
                    <div>手动确认</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue'
    import {useRouter} from 'vue-router'
    import {useStore} from 'vuex'
    import {showToast, showLoadingToast, closeToast, showFailToast, showDialog} from 'vant'
    import {
        getTruckNo
    } from '@/api/pickWith'
    import {onMounted} from "@vue/runtime-core";
    import {toRaw} from "@vue/reactivity";

    let nowDat = new Date();
    let dateY = parseInt(nowDat.getFullYear() - 1);
    let dateM = parseInt(nowDat.getMonth());
    let dateD = parseInt(nowDat.getDate());

    let formRef = ''
    export default {
        mounted() {
            formRef = this.$refs['formRef']
        },

        setup() {
            const dataText = ref('')
            const startDate = ref('')
            const endDate = ref('')
            const chehao = ref('')
            const store = useStore()
            const show = ref(false)
            const router = useRouter()
            const tableData = ref([])
            const tableHeight = ref('')
            const loading = ref(true)
            const tableRef = ref(null)
            onMounted(() => {
                startDate.value = dateFormat('YYYY-mm-dd', new Date((new Date).getTime() - 24 * 60 * 60 * 1000))
                endDate.value = dateFormat('YYYY-mm-dd', new Date())
                let height = document.body.scrollHeight - 275
                tableHeight.value = 'height:' + height + 'px'
                dataText.value = startDate.value + '至' + endDate.value
                setTimeout(() => {
                    queryData()
                }, 0)
            })


            const formatter = (row, column) => {
                return toRaw(row).pizhong.toFixed(4)
            }

            const onConfirm = (values) => {
                const [start, end] = values;
                show.value = false;
                startDate.value = dateFormat('YYYY-mm-dd', start)
                endDate.value = dateFormat('YYYY-mm-dd', end)
                dataText.value = `${startDate.value}至${endDate.value}`;
            }

            const onClickLeft = () => {
                router.push({path: '/pickWithQueryInfoData'})
            }

            const onQuery = () => {
                formRef.submit()
            }

            let queryParams = {}

            const onSubmit = () => {
                queryData()
            }

            let selectedCheHao = ''
            const selectRow = (row, column, event) => {
                chehao.value = row.chehao
                selectedCheHao = row
            }



            const confirmSelect = () => {

                if (selectedCheHao) {
                    store.commit('setCarInfo', selectedCheHao)
                    // store.commit('setScandList', [])
                    // store.commit('setScandCalculateData', {})
                    router.push({
                        name: 'pickWithQueryInfoData',
                    })
                } else {
                    showDialog({
                        title: '提示',
                        width: '600',
                        allowHtml: true,
                        message: '<span style="font-size: 18px">请选择车号</span>',
                    }).then(() => {
                        // on close
                    });

                }
            }


            const handleConfirmSelect = () => {
                if (chehao.value) {
                    let obj = {
                        chehao: chehao.value,
                        danjuhao: '',
                        chengfang: '',
                        pizhong: 0,
                        DataId: '',
                    }
                    store.commit('setCarInfo', obj)
                    // store.commit('setScandList', [])
                    // store.commit('setScandCalculateData', {})
                    router.push({
                        name: 'pickWithQueryInfoData',
                    })
                } else {
                    showDialog({
                        title: '提示',
                        width: '600',
                        allowHtml: true,
                        message: '<span style="font-size: 18px">请手工录入车号</span>',
                    }).then(() => {
                        // on close
                    });

                }
            }

            const queryData = () => {
                loading.value = true
                chehao.value = ''
                tableRef.value.setScrollTop(0)
                queryParams.startDate = startDate.value + ' 00:00:00'
                queryParams.endDate = endDate.value + ' 23:59:59'
                getTruckNo(queryParams).then((res) => {
                    tableData.value = res.data.data
                    loading.value = false
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
                deDate: [new Date((new Date).getTime() - 24 * 60 * 60 * 1000), new Date()],
                minDate: new Date(dateY, dateM, dateD),
                show,
                dataText,
                startDate,
                endDate,
                tableData,
                tableRef,
                loading,
                tableHeight,
                chehao,
                formatter,
                onClickLeft,
                onConfirm,
                onSubmit,
                onQuery,
                queryData,
                selectRow,
                confirmSelect,
                dateFormat,
                handleConfirmSelect,

            }
        },
    }
</script>

<style scoped>
    #data-area {
        flex-grow: 1;
        margin-bottom: 10px;
    }

    /** 按钮样式 */

    .btn-area {
        padding-top: 0px !important;
    }

    .btn-area div {
        border-radius: 25px;
        font-size: 20px;
        width: 28%;
        min-height: 45px;
    }

    .btn-area img {
        width: 45px;
    }

    .btn-area > div:nth-child(3) {
        background-color: var(--btn-color1);
        margin-right:10px
    }

    .btn-area > div:nth-child(2) {
        background-color: var(--btn-color2);
    }

    .btn-area > div:nth-child(1) {
        background-color: var(--btn-color1);
        margin-left:10px
    }


    /**输入框 */
    ::v-deep(.van-field) {
        margin-bottom: 10px;
    }

    .chehao /deep/ .van-cell__value {
        background-color: #d0dde9;
        height: 35px;
        border-radius: 10px;
        font-size: 26px;
        font-weight: bold;
        color: black;
    }

    .chehao /deep/ .van-cell__title {
        font-size: 18px;
        font-weight: bold;
        color: black;
        line-height: 35px;
        width: 80px;
    }


</style>
