<template>
    <div class="Panel">
    <div class="title">{{title}}</div>
        <div class="cotent">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Pannel",
    props:{
      title:{
        type:String,
        default() {
          return 'Title'
        }
      }
    }
  }
</script>

<style scoped>
    .Panel{
        /*background: #e5e5e5;*/
        width: 250px;
        margin-top: 20px;
    }
    .title{
        /*background: #336699;*/
        font-size: 15px;
        padding: 4px 13px;
        border-left: 4px solid var(--color-tint);
        margin-bottom: 15px;
    }
    .cotent{
        font-size: 14px;
        padding: 0 10px;
    }
</style>