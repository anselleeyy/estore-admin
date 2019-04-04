<template>
  <div id="statusBtn">
    <blockquote class="layui-elem-quote news_search">
      <div class="layui-inline">
        <div class="layui-input-inline">
          <input type="text" value="" placeholder="请输入关键字" class="layui-input search_input">
        </div>
        <a class="layui-btn layui-btn-sm search_btn">查询</a>
      </div>
      <div class="layui-inline">
        <a class="layui-btn layui-btn-sm layui-btn-normal newsAdd_btn">添加文章</a>
      </div>
      <div class="layui-inline">
        <a class="layui-btn layui-btn-sm recommend" style="background-color:#5FB878">推荐文章</a>
      </div>
      <div class="layui-inline">
        <a class="layui-btn layui-btn-sm audit_btn">审核文章</a>
      </div>
      <div class="layui-inline">
        <a class="layui-btn layui-btn-sm layui-btn-danger batchDel" @click='moreDelete'>批量删除</a>
      </div>
    </blockquote>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        del:{
          isDel:true
        }
      }
    },
    methods: {
      moreDelete() {
        console.log(this.del)
        this.$emit('delInfo',this.del)
      }
    },
  }
</script>

<style>

</style>
