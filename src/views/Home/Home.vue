<template>
    <div class="home">
        <banner :blog="blog"></banner>
        <div class="home_article">
            <pannels ref="pannels" :bloger="bloger" :fieldList="fieldList" :recommend="recommend" :allTag="allTag"></pannels>
            <acticle-list :aticles="aticles"></acticle-list>
        </div>
        <div class="shade" ref="shade"></div>
        <ToolBtn @click.native="ToolBtnClick" ref="ToolBtn"></ToolBtn>
    </div>
</template>

<script>
    import {getHomeMultipleData} from "@/network/home";
    import Banner from "@/views/Home/HomeChildren/Banner";
    import Pannels from "@/views/Home/HomeChildren/Pannels";
    import ActicleList from "@/views/Home/HomeChildren/ActicleList";
    import ToolBtn from "@/components/content/ToolBtn";

    export default {
      name:"Home",
      components: {ToolBtn, ActicleList, Pannels, Banner},
      data(){
        return{
          // data
          blog:{},
          bloger:{},
          aticles:[],
          fieldList:[],
          recommend:[],
          allTag:[],
          // flag
          isShowAside:false
        }
      },
      methods:{
        ToolBtnClick(){
          if (this.isShowAside === false) {
            this.$refs.pannels.$el.style.width = '240px';
            this.$refs.pannels.$el.style.padding = '10px';
            this.$refs.ToolBtn.$el.style.left = "245px";
            this.$refs.ToolBtn.$el.style.transform = "rotateY(180deg)";
            this.$refs.shade.style.width = "100%";
            this.$refs.shade.style.height = '100vh'
            this.isShowAside = true;
          }else{
            this.$refs.pannels.$el.style.width = '0';
            this.$refs.pannels.$el.style.padding = '0';
            this.$refs.ToolBtn.$el.style.left = "5px";
            this.$refs.ToolBtn.$el.style.transform = "rotateY(0deg)";
            this.$refs.shade.style.width = "0";
            this.$refs.shade.style.height = '0'
            this.isShowAside = false;
          }
        }
      },
      created() {
            getHomeMultipleData().then(res=>{
              if (res != null){
                this.blog= res.blog;
                this.bloger = res.bloger;
                this.aticles = res.aticles;
                this.fieldList =res.fieldList;
                this.recommend = res.recommend;
                this.allTag = res.allTag;
              }
            })
      }
    }
</script>

<style scoped>
    .home{
        width: 100%;
        height: auto;
        overflow: hidden;
        position: relative;
        background-color: #fafafa;
    }
    .home_article{
        height: 1000px;
        overflow: hidden;
        position: relative;
    }
    @media only screen and (max-width: 500px) {
        .home_article{
            position: static;
        }
        .shade{
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            background-color: rgba(0, 0, 0, 0.22);
            z-index: 9;
            transition: all 300ms;
        }
    }

</style>