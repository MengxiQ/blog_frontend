<template>
  <div id="app">
    <router-view></router-view>
    <div class="homeNarbar" :class="{navbarToTop:isNavTop}"><navbar></navbar></div>
  </div>
</template>
<script>
  import navbar from "@/components/comm/navbar";
  export default {
    components:{
      navbar
    },
    data() {
      return {

      }
    },
    computed:{
      isNavTop(){
        return (this.$route.path !=='/blog' && this.$route.path !=='/blog/')
      }
    }
  }

</script>
<style>
  @import "assets/css/base.css";
  #app {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    background-color: #fafafa;
  }
  .active{
    background-color:var(--color-tint);
    color: #fafafa;
  }
  .homeNarbar{
    position: absolute;
    width: 380px;
    top: 228px;
    right: 0;
  }
  .navbarToTop{
    top:0
  }
  @media only screen and (max-width: 500px) {
    .homeNarbar{
      width: 100%;
      left: 0;
      right: 0;
  }
  }
</style>
