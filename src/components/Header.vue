<template>
  <header>
    <div class="main">
      <div class="tools">
        <el-autocomplete
          class="search"
          v-model="keyword"
          size="medium"
          suffix-icon="el-icon-search"
          :fetch-suggestions="querySearchAsync"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
        <el-badge :value="goods" class="bag">
          <img src="../assets/images/header/bag.png">
        </el-badge>
        <i class="center">
          <img src="../assets/images/header/center.png">
        </i>
        <i class="it">
          <img src="../assets/images/header/IT.png">
        </i>
      </div>
      <h1 class="logo">
        <router-link to='/'>
          <img src="../assets/images/header/logo.png" alt="COSMI HOME">
        </router-link>
      </h1>      
      <div class="nav">
        <ul>
          <li class="nav-item" v-for="item in navList" :key="item">{{item}}</li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
// import { Button, Select } from 'element-ui';
export default {
  data () {
    return {
      navList: ['HOME', 'MAKEUP', 'NEWS'],
      keyword: '',
      goods: 0
    }
  },
  methods: {
    querySearchAsync (queryString, cb) {
      cb([
        { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
        { "value": "阳阳麻辣烫", "address": "天山西路389号" },
        { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
      ])
    },
    handleSelect (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="less" scoped>
  header {
    background-color: #000;
    >div {
      height: 100px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      line-height: 100px;
    }
    .tools {      
      width: 40%;
      text-align: right;
      .it {
        margin: 0 10px 0 52px;
        img {
          transform: translateY(7px)
        }
      }
      .center {
        margin-left: 20px;
      }
      img{
        transform: translateY(5px)
      }
    }
    .nav {      
      width: 40%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      ul {
        width: 59.2%;
        min-width: 175px;
        color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .nav-item {
        cursor: pointer;
        font-size: 1.6em;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .logo {
      width: 20%;
      min-width: 180px;
      text-align: center;
      vertical-align: center;
      img {
        margin-top: 3px;
      }
    }
  }
</style>
<style lang="less">
  header {
    .search {
      margin-right: 28px;
      max-width: 218px;
      width: 46% ;
      .el-icon-search {
        font-size: 22px;
        margin-right: 5px;
        margin-top: 2px;
      }
      .el-input__inner {
        background-color: #000;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 19px;
      }
    }
    .el-badge__content.is-fixed {
      top: 32px;
      background-color: rgb(255,54,54);
      border: none;
      height: 16px;
      line-height: 16px;
      padding: 0 5px;
    }
  }
</style>

