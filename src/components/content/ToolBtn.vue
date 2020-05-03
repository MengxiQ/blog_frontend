<template>
    <div class="TobBtn">
        <img class="img" src="@/assets/imgs/toolbtn.svg" alt="">
    </div>
</template>

<script>
  export default {
    name: "ToolBtn"
  }
</script>

<style scoped>
    .TobBtn{
        display: none;
    }
    .shade{
        display: none;
    }
    @media only screen and (max-width: 500px) {
        .TobBtn{
            display: block;
            height: 40px;
            width: 40px;
            /*z-index: 0;*/
            background-color: rgba(24, 24, 24, 0.31);
            position: fixed;
            top: 5px;
            left: 5px;
            border-radius: 50%;
            transition: left 500ms  ease-in-out;
            /*transform: rotateY(180deg);*/
            z-index: 11;
        }
        .img{
            height: 40px;
            padding: 7px;
        }

    }
</style>