<template>
    <van-nav-bar
            title="拣配单明细"
            class="page-nav-bar"
            left-arrow
            @click-left="onClickLeft"
    />
    <div>
        <el-table :data="tableData" ref="tableRef"
                  :style="tableHeight"
                  highlight-current-row
                  v-loading="loading"
                  element-loading-text="数据加载中..."
                  element-loading-background="rgba(122, 122, 122, 0.8)"
                 >

            <el-table-column fixed  prop="F_PICKNO" label="拣配单号" width="110px"/>
            <el-table-column  prop="F_BATCHGROUP" label="批次号" />
            <el-table-column  prop="F_BATCHNUMBER" label="批次编码" width="110px"/>
            <el-table-column  prop="F_SUTTLE" label="重量" />
            <el-table-column  prop="F_BLOCKS" label="块数" />
            <el-table-column  prop="F_UNIT" label="计量单位" width="110px"/>


        </el-table>
        <div class="btn-area">
            <div @click="onClickLeft">
                <img src="@/assets/image/btn_fanhui1.png"/>
                <div>返回</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {useRoute, useRouter} from "vue-router";
    import {onMounted, ref} from "vue";
    import {useStore} from "vuex";
    import {toRaw} from "@vue/reactivity";
    import {
        getPickListData
    } from '@/api/pickWithRecordQuery'

    export default {
        setup() {
            const router = useRouter()
            const route = useRoute()
            const store = useStore()
            const loading = ref(true)
            const tableRef = ref(null)
            const tableData = ref([])
            const tableHeight = ref('')


            let queryParams = ''
            onMounted(() => {
                let height = document.body.scrollHeight - 170
                tableHeight.value = 'height:' + height + 'px'
                queryParams=route.query
                queryData()
            })


            const queryData = () => {
                loading.value = true
                console.log(queryParams)
                getPickListData(queryParams).then((res) => {
                    tableData.value = res.data.data
                    loading.value = false
                })
            }

            const onClickLeft = () => {
                router.back()
                // router.push({path: '/pickWithRecordListData'})
            }
            return{
                tableData,
                tableRef,
                loading,
                tableHeight,
                onClickLeft,
                queryData
            }
        }
    }
</script>

<style scoped>

    #data-area {
        flex-grow: 1;
    }

    .btn-area {
        flex-grow: 0;
    }

    /** 按钮样式 */

    .btn-area div {
        border-radius: 25px;
        font-size: 20px;
        width: 30%;
        min-height: 50px;
    }

    .btn-area img {
        width: 45px;
    }


    .btn-area > div:nth-child(1) {
        background-color: var(--btn-color1);
        margin:0 auto;
    }

</style>