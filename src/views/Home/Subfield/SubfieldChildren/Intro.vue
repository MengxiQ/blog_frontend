<template>
    <div class="Intro">
        <pannel :title="'分栏简介'">
            <div class="info">
                <img class="subImg" :src="intro.logo" alt="">
                <div class="desc">
                    {{intro.desc}}
                </div>
                <span class="subdate">{{intro.date}}</span>
                <div class="tags">
                    <span class="tag" v-for="(item,index) in tags" :key="index">{{item}}</span>
                </div>
            </div>
        </pannel>
        <pannel :title="intro.title">
            <div class="aticles">
                <li @click="aticleClick(item.aid,index)" :class="{active : currentIndex === index}" class="aticle" v-for="(item,index) in aticles" :key="index">
                    <img class="aticle_iron" src="@/assets/imgs/article.svg" alt="">
                    <span class="aticle_text">{{item.title}}</span>
                </li>
            </div>
        </pannel>

    </div>
</template>

<script>
  import Pannel from "@/components/comm/Pannel";
  export default {
    name: "Intro",
    components: {Pannel},
    data(){
      return{
        currentIndex:0
      }
    },
    props:{
      intro:{
        type:Object
      },
      tags:{
        type:Array
      },
      aticles:{
        type:Array
      }
    },
    methods:{
      aticleClick(aid,index){
        //
        this.currentIndex = index;
        //
        this.$emit('changeAticle',aid,index);
      }
    }
  }
</script>

<style scoped>

    .Intro{
        /*height: 400px;*/
        width: 260px;
        background-color: white;
        box-shadow: 0px 0px 2px rgba(213, 213, 213, 0.54);
        padding: 1px 5px;
        position: absolute;
        left: 5px;
        top: 0;

    }
    .subImg{
        background-color:var(--color-strengthen);
        display: block;
        width: 100%;
        height: 120px;
    }
    .desc{

        width: 100%;
        padding: 5px;
        /*height: 100px;*/
        max-height: 100px;
    }
    .subdate{
        margin: 2px;

        font-size: smaller;
        float: right;
    }
    .tags{
        clear: both;

        width: 100%;
        height: auto;
        padding: 2px;
    }
    .tag{
        display: inline-block;
        /*background-color: #99CCFF;*/
        border:solid 1px #99CCFF;
        border-radius: 12px;
        padding:0 4px;
        font-size: 14px;
        line-height: 14px;
        height: 20px;
    }
    ul,li{
        list-style: none;
        margin: 0;
        padding: 0;

    }
    .aticle{
        padding: 3px;
        transition: background-color 100ms;
    }
    .aticle:hover{
        background-color: #99CCFF;
        color: white;
        cursor: pointer;
    }
    .aticle_iron{
        display: inline-block;
        height:20px;
        width:20px;
        /*background-color: #99CCFF;*/
        overflow: hidden;
    }
    .aticle_text{
        display: inline-block;
        /*background-color: rebeccapurple;*/
        height: 20px;
        line-height: 20px;
        padding-left: 2px;
        overflow: hidden; text-overflow:ellipsis; white-space: nowrap;
    }

</style>