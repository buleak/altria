import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:3000/',
    userName: '',
    avatar: 'https://s3.qiufengh.com/avatar/robots.jpg'
  },
  mutations: {
    userInfo(state, info) {
      state.userName = info.userName
      info.avatar && (state.avatar = info.avatar )
    }
  },
  actions: {

  }
})
