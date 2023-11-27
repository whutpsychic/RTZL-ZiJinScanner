<template>
    <van-nav-bar
            title="查询拣配单头"
            class="page-nav-bar"
            left-arrow
            @click-left="onClickLeft"
    />

    <div>
        <van-form @submit="onSubmit" ref="formRef">
            <van-cell-group inset>

                <van-cell title="日期区间：" title-style="max-width: 25%" :value="dataText" @click="show = true"/>
                <van-calendar v-model:show="show" :min-date="minDate" type="range" allow-same-day @confirm="onConfirm"/>

                <van-field
                        v-model="F_DELIVERYNO"
                        name="F_DELIVERYNO"
                        label="发货单号"
                        placeholder="请填写单号"
                />


            </van-cell-group>


            <div class="btn-area" style="margin-top: 50px">
                <div @click="onClickLeft">
                    <img src="@/assets/image/btn_fanhui1.png"/>
                    <div>返回</div>
                </div>
                <div @click="onSearch">
                    <img src="@/assets/image/btn_chaxun1.png"/>
                    <div>查询</div>
                </div>
            </div>
        </van-form>
    </div>


</template>

<script>
    import fc from 'flutter-core'
    import {onBeforeRouteLeave, useRouter} from "vue-router";
    import {onBeforeUnmount, onMounted, onUnmounted} from "@vue/runtime-core";
    import {ref} from "vue";
    import {showDialog} from "vant";
    import {useStore} from "vuex";

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
            const router = useRouter()
            const store = useStore()
            const F_DELIVERYNO = ref('')
            const startDate = ref('')
            const endDate = ref('')
            const dataText = ref('')
            const show = ref(false)

            onMounted(() => {
                startDate.value = dateFormat('YYYY-mm-dd', new Date())
                endDate.value = dateFormat('YYYY-mm-dd', new Date())
                dataText.value = startDate.value + '至' + endDate.value


                fc.register("goback", () => {
                    router.push({path: '/home'})
                })

            })


            const onConfirm = (values) => {
                const [start, end] = values;
                show.value = false;
                startDate.value = dateFormat('YYYY-mm-dd', start)
                endDate.value = dateFormat('YYYY-mm-dd', end)
                dataText.value = `${startDate.value}至${endDate.value}`
            }

            const onSearch = () => {
                formRef.submit()
            }


            //查询
            const onSubmit = () => {
                if (startDate.value == '' && endDate.value == '') {
                    showDialog({
                        title: '提示',
                        width: '600',
                        message: '请选择日期',
                    }).then(() => {
                        // on close
                    });
                    return false
                }

                let obj = {}
                obj.strStart = startDate.value + ' 00:00:00'
                obj.strEnd = endDate.value + ' 23:59:59'
                obj.strDeliveryNo = F_DELIVERYNO.value

                store.commit('setPickWithRecordQuery', obj)
                store.commit('setPickWithRecordScroll', 0)
                router.push({name: 'pickWithRecordListData'})

            }


            //跳转到首页
            const onClickLeft = () => {
                router.push({path: '/home'})

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
                F_DELIVERYNO,
                show,
                //minDate: new Date('2022', '05', '01'),
                minDate: new Date(dateY, dateM, dateD),
                dataText,
                onConfirm,
                onClickLeft,
                onSubmit,
                onSearch,
                dateFormat
            }
        }
    }
</script>

<style scoped>


    /** */

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

    /**vant form */

    ::v-deep(.van-form) {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

</style>