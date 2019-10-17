<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Chat</h1>
    <article class="main">
      <p>Welcome {{userName}}</p>
      <section>
        <header>最近聊天记录</header>
        <div v-for="(item, index) of chatRoomList" class="chat-item">
          <img :src="item.img" alt="">
          <div>{{item.name}}</div>
        </div>
      </section>
      <section>
        <header>客服</header>
        <div class="chat-item">
          <img :src="waiter.img" alt="">
          <div>{{waiter.name}}</div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from "vuex";

export default {
  name: 'home',
  data() {
    return {
      chatRoomList: [
        {
          name: '聊天室1',
          img: 'https://s3.qiufengh.com/images/bce5b10ae530f530.png?imageView2/2/w/120/h/120',
        },
        {
          name: '聊天室2',
          img: 'https://s3.qiufengh.com/images/2016061316082590301.jpg?imageView2/2/w/120/h/120',
        }
      ],
      waiter: {
        name: '客服大白',
        img: 'https://s3.qiufengh.com/avatar/robots.jpg'
      }
    }
  },
  components: {
    // HelloWorld
  },
  computed: {
    ...mapState(['userName', 'avatar'])
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    width: 100vw;
    color: #fff;
    background: #000;
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid #05f3e7;
  }
  .main {
    padding: 30px;
    header {
      text-align: left;
    }
    .chat-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 10px;
      margin-bottom: 10px;
      box-shadow: 0 3px 5px #000;
      img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        box-shadow: 0 0 3px 3px #000;
      }
    }
  }
</style>
