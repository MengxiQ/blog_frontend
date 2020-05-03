<template>
    <div class="acticleList">
        <li class="acticle" v-for="(item,index) in aticles" :key="index">
            <img class="img" :src="item.logo" alt="">
            <h4 class="title">{{item.title}}</h4>
            <hr style="width:90%; margin-left: 10px;height: 2px; border: none;background-color: #99CCFF">
            <div class="desc">四月是你的谎言，四月是你的谎言四月是你的谎言四月是你的谎言，四月是你的谎言，四月是你的谎言</div>
            <div class="info">
                <span class="tag">vue</span>
                <span class="date">{{item.date}}</span>
            </div>
        </li>
    </div>
</template>

<script>
  export default {
    name: "ActicleList",
    props:{
      aticles:{
        type:Array
      }
    }
  }
</script>

<style scoped>
    ul,li{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .acticleList{
        /*background-color: rebeccapurple;*/
        position: absolute;
        left: 250px;
        width: calc(100% - 250px);
        text-align: center;
        margin-top: 25px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

    }
    .acticle{
        display: inline-block;
        background-color: white;
        width: 350px;
        margin: 10px;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 1px 1px 4px rgba(192, 192, 192, 0.39);
        /*flex: 2;*/
    }
    .img{
        display: block;
        width: 100%;
        height: 150px;
        background-color: palevioletred;
    }
    .title{
        text-align: left;
        padding: 10px;

    }
    .desc{
        text-align: left;
        padding:10px 10px;
        height: 40px;
        width: 100%;
        /*background-color: #99CCFF;*/
        font-size: 14px;
        overflow: hidden; text-overflow:ellipsis; white-space: nowrap;
    }
    .info{
        font-size: 12px;
        text-align: right;
        padding: 10px;
    }
    .tag{
        color: var(--color-tint);
        float: left;
    }
    .tag:hover{
        cursor: pointer;
    }
    @media only screen and (max-width: 500px) {
        .acticleList{
            left: 0;
            width: 100%;
        }
        .acticle{
            /*background-color: rebeccapurple;*/
            flex: auto;
        }
    }
</style>