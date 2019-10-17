<template>
  <div class="mine">
    <img :src="avatar" alt="" class="avatar">
    <uploader :options="options" class="uploader-example">
    <uploader-unsupport></uploader-unsupport>
    <uploader-drop>
      <p>Drop files here to upload or</p>
      <uploader-btn>select files</uploader-btn>
      <uploader-btn :attrs="attrs">select images</uploader-btn>
      <uploader-btn :directory="true">select folder</uploader-btn>
    </uploader-drop>
    <uploader-list></uploader-list>
  </uploader>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import { mapState } from "vuex";
export default {
  name: 'mine',
  data() {
    return {
      options: {
          // 可通过 https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js 示例启动服务
          target: `${this.baseUrl}upload`,
          testChunks: false
        },
        attrs: {
          accept: 'image/*'
        }
    }
  },
  mounted() {
    this.userName == '' && MessageBox.confirm('请登录 (= m =)!!', '提示').then(action => {
      console.log('resolve: ', action)
      this.$router.push({path: '/register'})
    }).catch(err => {
      console.log('reject: ', err);
    })
  },
  computed: {
    ...mapState(['userName', 'avatar'])
  }
}
</script>

<style lang="scss" scoped>

</style>
