import { createStore } from 'vuex'
import { getItem, setItem } from '../utils/storage'

const USER_KEY = 'userInfo'
const CHU_KU_DAN = 'chukudan'
const store = createStore({
  state() {
    return {
      user: getItem(USER_KEY),
      chukudan: getItem(CHU_KU_DAN),
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
  },
})

export default store
