<template>
    <div class="navbar">
        <router-link class="item" to="/blog" exact>首页</router-link>
        <router-link class="item" to="/blog/pigeonhole">归档</router-link>
        <router-link class="item" to="/blog/works">作品</router-link>
        <router-link class="item" to="/blog/hobby">音乐</router-link>
        <router-link class="item" to="/blog/profile">关于</router-link>
    </div>
</template>

<script>
  export default {
    name: "navbar",
    data(){
      return{
      }
    },
    computed:{

    }
  }
</script>

<style scoped>
    ul,li{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .navbar{
        background:whitesmoke;
        /*padding-left: 20px;*/
        border-radius: 5px 0 0 2px;
        box-shadow: 0px 1px 2px rgba(191, 191, 191, 0.6);
        overflow: hidden;
    }
    .item{
        display: inline-block;
        padding: 15px;
        font-size: 15px;
    }
    .item:hover{
        background-color:var(--color-tint);
        color: white;
        cursor: pointer;
    }

</style>