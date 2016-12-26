<template>
    <div class="panel panel-default">
       <div class="panel-heading">
          <h1 class="text-center">已有时间</h1>
       </div>
       <div class="panel-body">
          <h1 class="text-center">{{time}}小时</h1>
       </div>
    </div>
</template>

<script>
    //Vue中computed就是 实时计算 使用。 Vue检测到数据发生变动时就会执行对相应数据有引用的函数。
    export default{
       computed: {
          time() {
             return this.$store.state.totalTime
          }
       }
    }

</script>
