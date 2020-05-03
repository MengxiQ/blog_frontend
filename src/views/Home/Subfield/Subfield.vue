<template>
    <div class="Subfield">
        <Intro @changeAticle="changeAticle" :intro="intro" :tags="tags" :aticles="aticles"></Intro>
        <div class="AticleContent">
            <Aticle :aid="currendAid" :aticle="aticles[currentAticleIndex]"></Aticle>
        </div>
    </div>
</template>

<script>
    import {getSubfieldByTitle} from "@/network/subfield";
    import Intro from "@/views/Home/Subfield/SubfieldChildren/Intro";
    import Aticle from "@/views/Home/Subfield/SubfieldChildren/Aticle";

    export default {
    name: "Subfield",
      components: {Aticle, Intro},
      data(){
      return{
        intro:{},
        tags:[],
        aticles:[],
        currendAid:'',
        currentAticleIndex:0
      }
      },
    computed:{
      title(){
        return this.$route.query.title;
      }
    },
      methods:{
      //监听Intro中点击了文章列表，参数aid
        changeAticle(aid,index){
            this.currendAid = aid;
            this.currentAticleIndex = index;
        }
      },
    created() {
        //请求数据
      getSubfieldByTitle(this.title).then(res =>{
        this.intro = res.intro;
        this.tags = res.tags;
        this.aticles = res.aticles;
      })
    }
  }
</script>

<style scoped>
    .Subfield{
        margin-top: 50px;
        position: relative;
    }
</style>