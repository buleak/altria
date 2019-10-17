<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/" exact class="link">Home</router-link> 
      <router-link to="/mine" class="link">Mine</router-link>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  background: #999;
  .link {
    color: #fff;
    font-size: 24px;
  }
  .router-link-active {
    color: #000;
  }
}
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
h1, h2, h3, h4, h5, h6{ font-size:20px; }
address, cite, dfn, em, var { font-style:normal; }
code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
small{ font-size:12px; }
ul, ol { list-style:none; }
a { text-decoration:none; color: #333; }
a:hover { text-decoration:underline; }
a:link{text-decoration:none; }
a:visited{text-decoration:none; }
a:hover{text-decoration:none;}
a:active{text-decoration:none;}
sup { vertical-align:text-top; }
sub{ vertical-align:text-bottom; }
legend { color:#000; }
fieldset, img { border:0; }
button, input, select, textarea { font-size:20px; }
/*消除iOS点击事件出现灰色背景*/
html,body{-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
img{vertical-align: middle}
</style>
