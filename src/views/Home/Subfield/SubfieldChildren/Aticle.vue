<template>
    <div class="Aticle">
        <h1>{{aid}}</h1>
    </div>
</template>

<script>
    import {getAticleByURl} from "@/network/aticle";
    export default {
    name: "Aticle",
    aticleData:'',
    props:{
      aid:{
        type:String
      },
      aticle:{
        type: Object
      }
    },
    created(){
      getAticleByURl('http://www.mengxiq.cn:8080/static/blog/%E9%85%8D%E7%BD%AEvue%E7%9A%84%E6%80%BB%E7%BB%93.md').then(res => {
        console.log(res);
      })
    }
  }
</script>

<style scoped>
    .Aticle{
        position: absolute;
        background-color: white;
        height: 500px;
        width: 100%;
        left: 270px;
    }
</style>