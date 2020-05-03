<template>
    <span class="tag" @click="tagClick"></span>
</template>

<script>
  export default {
    name: "Tag",
    props:{
      title:{
        type:String,
        default(){
          return 'tag'
        }
      }
    },
    methods:{
      tagClick(){
        console.log(this.title);
        //转到tag搜索结果页
        // 携带参数tag的值
      }
    }
  }
</script>

<style scoped>
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
</style>