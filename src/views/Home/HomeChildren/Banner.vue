<template>
    <div class="banner" :style="'background-image: url('+blog.img+')'">
        <h1 class="title">{{blog.name}}<p class="line"></p></h1>
        <p class="desc">{{blog.desc}}</p>
    </div>
</template>

<script>
  export default {
    name: "Banner",
    props:{
      blog:{
        type:Object,
        default(){
          return {}
        }
      }
    }

  }
</script>

<style scoped>
    .banner{

        background: #a8a8a8;
        color:white;
        height: 250px;
        width: 100%;
        overflow: hidden;
        text-align: center;
        padding:60px 0 0 0;
        background-size: cover;

    }
    .title {

    }
    .line{
        height: 2px;
        /*background: var(--color-tint);*/
        background: linear-gradient(to right, rgb(25, 171, 214) 35%, rgb(58, 192, 232) 100%);
        width: 140px;
        margin: 10px auto auto;
    }
    .desc{
        font-size: smaller;
        padding: 0px 10px;
    }
</style>