<template>
    <div class="pannels">
        <label class="serach_lable">
            <input class="search" type="text" placeholder="seach..." ><img class="search_iron" src="@/assets/imgs/seach.svg" alt="">
        </label>
        <pannel :title="'简介'"> {{bloger.signatrue}}</pannel>
        <pannel title="文章分类">
            <li @click="subfieldClick(item.title)" class="item" v-for="(item,index) in fieldList" :key="index">
                {{item.title}}<span class="total">({{item.total}})</span></li>
        </pannel>
        <pannel title="推荐文章">
            <li class="recommend_item" v-for="(item,index) in recommend" :key="index">
                <img class="recommend_img" :src="item.logo" alt="">
                <div class="recommend_right">
                    <span class="recommend_title">{{item.title}}</span>
                    <span class="recommend_date">{{item.date}}</span>
                </div>

            </li>
        </pannel>
        <pannel title="文章标签">
            <span class="tag" v-for="(item,index) in allTag" :key="index">{{item}}</span>
        </pannel>

    </div>
</template>

<script>
  import Pannel from "@/components/comm/Pannel";
  export default {
    name: "Pannels",
    components: {Pannel},
    props:{
      bloger:{
        type:Object
      },
      fieldList:{
        type:Array
      },
      recommend:{
        type:Array
      },
      allTag:{
        type:Array
      }
    },
    methods:{
      subfieldClick(parm){
        this.$router.push({
          path:'/blog/subfield',
          query:{
            title:parm
          }
        });
      }
    }
  }
</script>

<style scoped>
    ::-webkit-scrollbar{
        display: none;
    }
    ul,li{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .pannels{
        /*width: 100%;*/
        background-color: white;
        position: absolute;
        left: 10px;
        width: 240px;
        box-shadow: 0px 0px 2px rgba(213, 213, 213, 0.54);
        padding: 10px;
        margin-top: 35px;
        top: 0;
        transition: width 500ms ease-in-out;

    }

    .total{
        color: var(--color-high-text);
        font-size: smaller;
        padding: 4px;
    }
    .item{
        padding: 5px 0;
        border-bottom: dashed 1px var(--color-high-text);
        width: 85%;
    }
    .item:hover{
        cursor: pointer;
        transform: translateX(5px);
        transition: all 0.5s;
    }
    .serach_lable{
        display: block;
        position: relative;
        width: 220px;
        height: 40px;
        margin: 10px 0px;
        /*background: #99CCFF;*/
        /*padding: 0 10px;*/
    }
    .search{
        display: block;
        line-height: 35px;
        width: 220px;
        height: 40px;
        background: rgba(234, 234, 234, 0.8);
       border: none;
        border-radius: 18px;
        font-size: 14px;
        padding: 0 10px;
        /*color: #d5d5d5;*/
    }
    .search:active{
        /*background: rebeccapurple;*/
        /*border: none;*/
        border: solid 2px cornflowerblue;
    }
    .search_iron{
        height: 28px;
        position: absolute;
        /*background: rebeccapurple;*/
        top: 5px;
        right: 10px;

    }
/*    推荐文章*/
    .recommend_item{
        margin-top: 10px;
    }
    .recommend_item:hover{
        cursor: pointer;
    }
    .recommend_img{
        height: 50px;
        width: 50px;
        background-color: #99CCFF;
        display: inline-block;
    }
    .recommend_right{
        display: inline-block;
        height: 50px;
        /*background-color: #a8a8a8;*/
        overflow: hidden;
        padding: 0 5px;
    }
    .recommend_title{
        display: block;
        /*background-color: rebeccapurple;*/
    }
    .recommend_date{
        display: block;
        /*background-color: palevioletred;*/
        margin-top: 15px;
        font-size: 12px;
    }

    /*文章标签*/
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
    .tag:hover{
        cursor: pointer;
    }
    @media only screen and (max-width: 500px) {
        .pannels {
           /*width: 100%;*/
            position: fixed;
            z-index:10;
            top: 0;
            margin: 0;
            left: 0;
            height: 100vh;
            /*隐藏时候的样式*/
            width: 0;
            padding: 0;
            /**/
            overflow-x: hidden;
            overflow-y: scroll;

        }


    }
</style>