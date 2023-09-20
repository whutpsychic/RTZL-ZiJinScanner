<template>

    <van-nav-bar
            title="出库单内容"
            class="page-nav-bar"
            left-arrow
            @click-left="onClickLeft"
    />

    <div id="content" class="content">
        <div class="container">
            <div class="prop-value-div">
                <div class="label">发货单号</div>
                <div class="value">{{ formData.F_DELIVERYNO }}</div>
            </div>

            <div class="prop-value-div">
                <div class="label">制单日期</div>
                <div class="value">{{dateFormat("YYYY-mm-dd HH:MM:SS",formData.F_DELIVERYDATE)}}</div>
            </div>
            <div class="prop-value-div">
                <div class="label">计划数量</div>
                <div class="value">{{ formData.F_PLANSUTTLE }}</div>
            </div>
            <div class="prop-value-div">
                <div class="label">已发数量</div>
                <div class="value">{{ formData.F_SUTTLE }}</div>
            </div>
            <div class="prop-value-div">
                <div class="label">应拣数量</div>
                <div class="value">{{ formData.yingjianshuliang }}</div>
            </div>
            <div class="prop-value-div">
                <div class="label">收货单位</div>
                <div class="value">{{ formData.F_RECIVE }}</div>
            </div>
            <div class="prop-value-div">
                <div class="label">车号</div>
                <div class="showMoreDiv">
                    <div class="value">{{ formData.F_TRUCKNO }}</div>
                    <div class="showMore" @click="selectCarNo">
                        <img src="@/assets/image/btn_showmore.png" alt=""/>
                    </div>
                </div>
            </div>

            <div class="btn-area">
                <div>
                    <img
                            src="@/assets/image/btn_fanhui1.png"
                            alt=""
                            @click="onClickLeft"
                    />
                    <div>返回</div>
                </div>
                <div>
                    <img
                            src="@/assets/image/btn_chaxun1.png"
                            alt=""
                            type="primary"
                            @click="onScan"
                    />
                    <div>扫描</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BigNumber from 'bignumber.js'
    import {ref} from 'vue'
    import {useRoute, useRouter} from 'vue-router'
    import {reactive} from 'vue'
    import {onMounted} from 'vue'
    import {useStore} from 'vuex'
    import fc from 'flutter-core'
    import {toRaw} from "@vue/reactivity";
    import {showDialog} from "vant";

    export default {
        setup() {
            const formData = reactive({
                F_DELIVERYNO: '',
                F_DELIVERYDATE: '',
                F_PLANSUTTLE: '',
                F_SUTTLE: '',
                yingjianshuliang: '',
                F_RECIVE: '',
                F_TRUCKNO: '',
            })
            const route = useRoute()
            const router = useRouter()
            const store = useStore()

            const onClickLeft = () => {
                router.push({path: '/pickWithQueryListData'})
            }
            const selectCarNo = () => {
                router.push({name: 'chooseWagonNumber'})
            }


            const onScan = () => {

               if (Object.getOwnPropertyNames(toRaw(store.state.carInfo)).length == 0){
                   showDialog({
                       title: '提示',
                       width: '600',
                       message: '您尚未选择车号',
                   }).then(() => {
                       // on close
                   })

                   return false
               }

                router.push({
                  name: 'pickWith',
                })
            }

            onMounted(() => {
                let chukudanListInfo = toRaw(store.state.chukudanListInfo)
                formData.F_DELIVERYNO = chukudanListInfo.F_DELIVERYNO
                formData.F_DELIVERYDATE = chukudanListInfo.F_DELIVERYDATE
                formData.F_PLANSUTTLE = chukudanListInfo.F_PLANSUTTLE
                formData.F_SUTTLE = chukudanListInfo.F_SUTTLE
                formData.F_RECIVE = chukudanListInfo.F_RECIVE
                formData.yingjianshuliang = new BigNumber(chukudanListInfo.F_PLANSUTTLE).minus(chukudanListInfo.F_SUTTLE).toFixed(4)

                if (store.state.carInfo) {
                    formData.F_TRUCKNO=toRaw(store.state.carInfo.chehao)
                }
            })




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
                formData,
                onClickLeft,
                onScan,
                selectCarNo,
                dateFormat
            }
        },
    }
</script>

<style scoped>

    .content {

        width: 100%;
        overflow: auto;
        top: 50px;
        position: absolute;
        z-index: 10;
        bottom: 5px;

    }

    /**================== */

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: auto !important;
    }

    .btn-area > div {
        font-size: 25px;
        width: 35%;
    }

    .btn-area img {
        width: 60px;
    }


    .btn-area > div:nth-child(2) {
        background-color: var(--btn-color2);
        margin-right: 30px;
    }

    .btn-area > div:nth-child(1) {
        background-color: var(--btn-color1);
        margin-left: 30px;
    }

    /**--------------------------------------------------- */
    .prop-value-div {
        display: flex;
        padding-bottom: 10px;
        justify-content: space-between;
    }

    .prop-value-div div {
        font-size: 16px;
    }

    .prop-value-div .label {
        width: 70px;
        color: #000000;
        display: flex;
        align-items: center;
        margin-left: 15px;
    }

    .prop-value-div .value {
        border: 1px solid var(--form-input-border-color);
        background-color: white;
        width: 70%;
        border-radius: 5px;
        padding: 5px;
        color: #000000;
        padding-left: 15px;
        padding-right: 15px;
        margin-right: 15px;
    }

    .showMoreDiv {
        display: flex;
        justify-content: space-between;
        height: 38px;
        width: 70%;
        margin-right: 15px;
    }

    .showMore {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--form-label-color);
        color: #ffffff !important;
        text-align: center;
        width: 25%;
        margin-left: 10px;
        border-radius: 10px;
    }

    .showMore img {
        width: 35px;
    }
</style>
