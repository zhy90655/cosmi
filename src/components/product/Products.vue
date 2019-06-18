<template>
  <div class="products">
    <div class="main">
      <div class="header">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">HOME</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in nav" :key="index" :to="{path: item.path}">{{item.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-autocomplete
          class="search"
          v-model="keyword"
          size="medium"
          suffix-icon="el-icon-arrow-down"
          :fetch-suggestions="querySearchAsync"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </div>
      <div class="content">
        products -- {{nav.slice(-1)[0].title}}
        <component :is="componentLsit[nav.length - 1]"></component>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    window._this = this
    return {
      keyword: '',
      componentLsit: ['Mainkind', 'Subclass', 'Detail']
    }
  },
  components: {
    Mainkind: () => import('./Mainkind'),
    Subclass: () => import('./Subclass'),
    Detail: () => import('./Detail')
  },
  computed: {
    nav () {
      let root = '/products'
      return Object.values(this.$route.params).filter(_ => _).map(_ => {
        root += '/' + _
        return { path: root, title: _.toLocaleUpperCase() }
      })
    }
  },
  methods: {
    querySearchAsync (queryString, cb) {
      const data = [
        { 'value': '(小杨生煎)西郊百联餐厅', 'address': '长宁区仙霞西路88号百联2楼' },
        { 'value': '阳阳麻辣烫', 'address': '天山西路389号' },
        { 'value': '南拳妈妈龙虾盖浇饭', 'address': '普陀区金沙江路1699号鑫乐惠美食广场A13' }
      ]
      console.log(queryString)
      cb(data)
    },
    handleSelect (item) {
      console.log(item)
    }
  }
}
</script>
<style lang="less" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 25px 15px;
    border-bottom: 1px solid #000;
    .el-breadcrumb {
      font-size: 1.8em;
      line-height: 36px;
    }

  }
</style>
<style lang="less">
  .header {
    .search {
      margin-right: 28px;
      max-width: 218px;
      width: 46% ;
      .el-icon-arrow-down {
        font-size: 20px;
        margin-right: 5px;
        margin-top: 0px;
        color: #151515;
      }
      .el-input__inner {
        color: #151515;
        border: 1px solid #000;
        border-radius: 19px;
      }
    }
    .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
      font-weight: 500;
    }
    .el-breadcrumb__item {
      &:last-child{
        padding:0 10px;
        background-color: rgb(249, 235, 222);
        border-radius: 18px;
      }
    }
  }
</style>
