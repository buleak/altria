<template>
  <div>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-button @click.native="submit">
      Sign In
      <img src="http://image.xuexiwangzhe.com/FgpblpC3qduj_oeSv35T0AjFy7LL" height="50" width="50" slot="icon">
    </mt-button>
  </div>
</template>

<script>
import { Field, Button } from "mint-ui"
import { mapState } from "vuex";
import { reqPost } from "@/util";
export default {
  data() {
    return {
      username: '',
      password: '',
      phone: ''
    }
  },
  methods: {
    submit() {
      reqPost(`${this.baseUrl}register/login`, {
        userName: this.username,
        passWord: this.password
      }).then((res) => {
        if(res.data.msg === 'OK') {
          this.$store.commit('userInfo', {
            userName: res.data.userName,
            userAvatar: res.data.avatar
          })
          this.$router.push({name: 'home'})
        }
      }).catch((err) => {
        console.log('error: ', err)
      })
    }
  },
  computed: {
    ...mapState(['baseUrl'])
  }
}
</script>

<style lang="scss" scoped>

</style>