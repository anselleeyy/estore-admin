<template>
  <div id="tableData">
    <table class="layui-table">
      <colgroup>
        <col width="1%">
        <col width="10%">
        <col width="9%">
        <col width="9%">
        <col width="9%">
        <col width="9%">
        <col width="9%">
        <col width="15%">
      </colgroup>
      <thead>
        <tr>
          <th>
            <div @click="allChecked(AllcheckClick.flag)" v-show="AllcheckClick.flag" class="layui-unselect layui-form-checkbox layui-form-checked" lay-skin="primary"><i class="layui-icon"></i></div>
            <div @click="allChecked(AllcheckClick.flag)" v-show="!AllcheckClick.flag" class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </th>
          <th v-for="(table,index) in tableData.headTh" :key="table" style="text-align:left;">{{table}}</th>
        </tr>
      </thead>
      <tbody class="news_content">
        <tr v-for="(tabcont,index) in tableData.tableContent" :key="index">
          <td>
            <div @click="CheckClick(index)" v-show="tabcont.checked" class="layui-unselect layui-form-checkbox layui-form-checked" lay-skin="primary"><i class="layui-icon"></i></div>
            <div @click="CheckClick(index)" v-show="!tabcont.checked" class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td align="left">{{tabcont.id}}</td>
          <td>{{tabcont.title}}</td>
          <td>{{tabcont.author}}</td>
          <td>{{tabcont.price}}</td>
          <td>
            <input type="checkbox" name="show" lay-skin="switch" lay-text="是|否">
            <!-- 变成是，绿色：layui-form-onswitch -->
            <div class="layui-unselect layui-form-switch" lay-skin="_switch" :class="{'layui-form-onswitch':tabcont.show}" @click="isShow(tabcont)"><em>{{tabcont.status}}</em><i></i></div>
          </td>
          <td>{{tabcont.publisher}}</td>
          <td>
            <a class="layui-btn layui-btn-mini news_edit">
              <i class="iconfont icon-edit"></i> 编辑
            </a>
            <a class="layui-btn layui-btn-normal layui-btn-mini news_collect">
              <span v-show="!tabcont.isCollection" @click="isCollection(tabcont)"><i class="layui-icon"></i> 收藏</span>
              <span v-show="tabcont.isCollection" @click="isCollection(tabcont)"><i class="iconfont icon-star"></i> 已收藏</span>
            </a>
            <a class="layui-btn layui-btn-danger layui-btn-mini news_del" data-id="1">
              <span @click="deleteData(index)"> <i class="layui-icon"></i> 删除</span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      btnStstus: Object,
    },
    data() {
      return {
        tableData: {
          headTh: ["ISBN 号", "书名", "作者", "价格", "是否上架", "出版社", "操作"],
          // Allchecked: false,
          tableContent: [
            {
              id: "9787111213826",
              title: "Java编程思想",
              author: "[美] 埃克尔，译者：陈昊鹏 编",
              price: "86.4",
              status: false,
              publisher: "机械工业出版社",
              checked: true
            }
          ]
        }
      };
    },
    methods: {
      // 选中或取消选中
      CheckClick(index) {
        this.tableData.tableContent[index].checked = !this.tableData.tableContent[index].checked;
      },
      // 全选、全不选
      allChecked(bool) {
        // 根据传入的值判断全选按钮的状态
        var array = this.tableData.tableContent;
        // 若是为true，则需要变把元素都变成false。反之，则为true。
        if (bool === true) {
          array.forEach(element => {
            element.checked = false;
          })
        } else {
          array.forEach(element => {
            element.checked = true;
          })
        }
      },
      // 是否的按钮
      isShow(tabcont) {
        // 改变show的值。
        tabcont.show = !tabcont.show;
        // 根据show的值改变显示的文字。
        tabcont.show ? tabcont.showText = '是' : tabcont.showText = '否';
      },
      // 是否收藏
      isCollection(tabcont) {
        tabcont.isCollection = !tabcont.isCollection;
      },
      // 删除数据
      deleteData(index) {
        this.tableData.tableContent.splice(index, 1)
      }
    },
    computed: {
      //计算是否全部的属性；
      AllcheckClick() {
        var array = this.tableData.tableContent;
        // 根据元素checked的值判返回的数据值。
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          if (element.checked === false) {
            return {
              flag: false
            }
          }
        }
        // 当数据为空的时候返回false；
        if (this.tableData.tableContent.length === 0) {
          return false;
        }
        // 若是没有false则全为true，返回true。
        return {
          flag: true
        };
      },
      // 批量删除数据；只要是选中的状态就删除，
      moreDel() {
        var array = this.tableData.tableContent;
        // alert(array.length)
        var arr = [];
        if (this.btnStstus.del === true) {
          for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element.checked !== true) {
              arr.push(element)
            }
          }
          this.btnStstus.del = false;
        } else {
          arr = array;
        }
        // 数据同步。
        this.tableData.tableContent = arr;
        return arr;
      }
    }
  };
</script>

<style scoped>
</style>
