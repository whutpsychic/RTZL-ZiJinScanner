import { createStore } from 'vuex'
import { getItem, setItem } from '../utils/storage'

const USER_KEY = 'userInfo'
const store = createStore({
  state() {
    return {
      user: getItem(USER_KEY),
    }
  },
  mutations: {
    setUser(state, data) {
      state.user = data
      setItem(USER_KEY, state.user)
    },
  },
})

export default store
