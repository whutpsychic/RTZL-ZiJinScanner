import {createStore} from 'vuex'
import {getItem, setItem} from '../utils/storage'

const USER_KEY = 'userInfo'
const CHU_KU_DAN = 'chukudan'
const CHU_KU_DAN_LIST_INFO = 'chukudanListInfo'
const CAR_INFO = 'carInfo'
const SCAND_LIST = 'scandList'
const PICKWITH_QUERY = 'pickWithQuery'
const PICKWITH_SCROLL = 'pickWithScroll'
const SCAND_CALCULATE_DATA='scandCalculateData'

const store = createStore({
    state() {
        return {
            user: getItem(USER_KEY),
            chukudan: getItem(CHU_KU_DAN),
            chukudanListInfo: getItem(CHU_KU_DAN_LIST_INFO),
            carInfo: getItem(CAR_INFO),
            scandList: getItem(SCAND_LIST),
        }
    },
    mutations: {
        setUser(state, data) {
            state.user = data
            setItem(USER_KEY, state.user)
        },
        setChukudan(state, data) {
            state.chukudan = data
            setItem(CHU_KU_DAN, state.chukudan)
        },
        setChukudanListInfo(state, data) {
            state.chukudanListInfo = data
            setItem(CHU_KU_DAN_LIST_INFO, state.chukudanListInfo)
        },
        setCarInfo(state, data) {
            state.carInfo = data
            setItem(CAR_INFO, state.carInfo)
        },
        setScandCalculateData(state, data) {
            state.scandCalculateData = data
            setItem(SCAND_CALCULATE_DATA, state.scandCalculateData)
        },

        setScandList(state, data) {
            state.scandList = data
            setItem(SCAND_LIST, state.scandList)
        },

        setPickWithQuery(state, data) {
            state.pickWithQuery = data
            setItem(PICKWITH_QUERY, state.pickWithQuery)
        },


        setPickWithScroll(state, data) {
            state.pickWithScroll = data
            setItem(PICKWITH_SCROLL, state.pickWithScroll)
        },

    },
})

export default store
