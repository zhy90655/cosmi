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
         <el-popover
          popper-class='head'
          width="360"
          title='SHOPPING BAG'
          placement='bottom-end'
          trigger="hover">
          <shopping-bag></shopping-bag>
          <el-badge :value="carCount" class="bag" slot="reference">
            <img src="../assets/images/header/bag.png">
          </el-badge>
        </el-popover>
        <el-popover
          :width="146"
          popper-class='head pop-center'
          :disabled="!isLogin"
          trigger="hover">
          <ul class="personal">
            <li v-for="(item, index) in setList" :key="index" @click="handelCenterClick(item.params)">{{item.title}}</li>
          </ul>
          <router-link to='/login' class="center" slot="reference">
            <img src="../assets/images/header/center.png">
          </router-link>
        </el-popover>
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
          <li class="nav-item" v-for="item in navList" :key="item" @mouseenter="Detai(item)" @mouseleave="Detai()">{{item}}</li>
        </ul>
      </div>
      <div class="detail" ref="detail" @mouseenter="Detai(true)" @mouseleave="Detai()">
        <ul class="main">
          <li v-for="(value, key) in details" :key="key">
            <div v-if="key === 'new'" class="new">
              <div class="img" @click="productDetail(value.id)"><img :src="value.img"></div>
              <div class="name" @click="productDetail(value.id)">{{value.name}}</div>
              <div class="descr">{{value.descr}}</div>
            </div>
            <h4 v-else><router-link :to="'/products/'+ key">{{key}}</router-link></h4>
            <ul v-if="key !== 'new'" class="kind">
              <li v-for="(item, index) in value" :key="index"><router-link :to="'/products/'+ key + '/' + item">{{item}}</router-link></li>
            </ul>
          </li>
          <div class="all"><span>SHOP ALl</span> <i class="el-icon-arrow-right"></i></div>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import ShoppingBag from './ShoppingBag'
// import Login from './Login'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    ShoppingBag
    // Login
  },
  data () {
    return {
      navList: ['HOME', 'MAKEUP', 'NEWS'],
      keyword: '',
      details: {
        new: { img: '/static/images/header/pro.png', id: '0001', name: 'NEW CRUSHED LIQUD COLOR', descr: 'This is the product description,We can add it no more than 3 liness.No more, no more' },
        EYES: ['Primer', 'Eyeshadows', 'Eye pencils', 'Nascaras', 'Eyeliners', 'Eyebrows'],
        LIPS: ['Lip Pencil', 'Lipgloss', 'Lipstick', 'Lip Kit'],
        FACE: ['Primer', 'Eyeshadows', 'Eye pencils', 'Nascaras', 'Eyeliners', 'Eyebrows'],
        HANDS: ['Nail Polishe', 'Nail Care', 'French Manicure', 'Nail Polish Removers', 'Nail Polish Fixers']
      },
      setList: [{ title: 'MY ACCOUNT', params: 'MyAccount' }, { title: 'ORDERS', params: 'Orders' }, { title: 'WISHLIST', params: 'Wishlist' }, { title: 'LOG OUT' }]
    }
  },
  watch: {
    $route () {
      this.$refs.detail.classList.remove('show')
    }
  },
  computed: {
    ...mapState(['cartlist', 'isLogin', 'productList']),
    carCount () {
      let count = 0
      this.cartlist.forEach(_ => (count += _.count))
      return count
    }
  },
  methods: {
    ...mapMutations(['setLogin']),
    querySearchAsync (queryString, cb) {
      const data = [
        { 'value': '(小杨生煎)西郊百联餐厅', 'address': '长宁区仙霞西路88号百联2楼' },
        { 'value': '阳阳麻辣烫', 'address': '天山西路389号' },
        { 'value': '南拳妈妈龙虾盖浇饭', 'address': '普陀区金沙江路1699号鑫乐惠美食广场A13' }
      ]
      console.log(queryString)
      cb(data)
    },
    handelCenterClick (params) {
      if (params) this.$router.push('/personalCenter/' + params)
      else {
        console.log('logout')
        this.setLogin(false)
        this.$router.push('/')
      }
    },
    productDetail (id) {
      const product = this.productList.find(_ => _.id === id)
      if (product) {
        const { kind, sub, productName } = product
        this.$router.push({ path: `/products/${kind}/${sub}/${productName}`, query: { id } })
      }
    },
    handleSelect (item) {
      console.log(item)
    },
    Detai (item) {
      if (!item) {
        return this.$refs.detail.classList.remove('show')
      } else if (item === 'MAKEUP') {
        this.$refs.detail.classList.add('show')
      } else if (item === 'HOME') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="less" scoped>
  header {
    background-color: #000;
    position: relative;
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
        cursor: pointer;
      }
      img{
        transform: translateY(5px)
      }
      .bag {
        margin: 30px 0;
        height: 40px;
        img{
          transform: translateY(-25px)
        }
      }
      @media only screen and (max-width: 991px) {
        .search {
          display: none;
        }
      }
      @media only screen and (max-width: 767px) {
        .it {
          display: none;
        }
        .center {
          margin-right: 10px;
        }
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
        margin: 30px 0 0;
        cursor: pointer;
        font-size: 1.6em;
        line-height: 40px;
        padding-bottom: 30px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .logo {
      width: 20%;
      min-width: 180px;
      text-align: center;
      img {
        margin-top: 3px;
      }
    }
    @media only screen and (max-width: 500px) {
      .tools,.nav {
        display: none;
      }
      .main {
        justify-content: center;
      }
    }
    .detail {
      position: absolute;
      top: 100%;
      left: 0;
      height: 0;
      overflow: hidden;
      background-color: #fff;
      width: 100%;
      opacity: 0;
      z-index: 100;
      transition: opacity .5s ease-in-out, height .1s ease .5s;
      &.show {
        transition: opacity .5s ease-in-out;
        height: 376px;
        opacity: 1;
      }
      .main {
        position: relative;
        line-height: 36px;
        display: flex;
        justify-content: space-between;
        >li {
          box-sizing: border-box;
          width: 160px;
          &:first-child {
            width: 220px;
            padding: 20px 10px 0;
          }
          .img {
            height: 200px;
            cursor: pointer;
          }
          .name {
            cursor: pointer;
            margin-top: 8px;
            font-size: 1.6em;
            font-weight: 500;
            line-height: 24px;
            &:hover {
              text-decoration: underline;
            }
          }
          .descr {
            margin-top: 14px;
            font-size: 1.4em;
            line-height: 22px;
            height: 66px;
            overflow: hidden;
          }
          >h4 {
            margin-top: 28px;
            font-size: 1.6em;
            line-height: 52px;
            font-weight: 600;
          }
        }
        .all {
          position: absolute;
          bottom: 37px;
          right: 0;
          font-size: 1.6em;
          line-height: 20px;
          color: #151515;
          >i {
            font-size: 19px;
            line-height: 22px;
          }
          >span {
            margin-right: 10px;
            cursor: pointer;
            &:hover {
              border-bottom: 1px solid #151515;
            }
          }
        }
      }
      .kind>li {
        margin-top: 10px;
        cursor: pointer;
        font-size: 1.4em;
        line-height: 24px;
        color: #565656;
        a {
          display: inline-block;
          &:hover {
            color: #151515;
          }
        }
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
        color: #fff;
      }
      .el-input__inner {
        background-color: #000;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 19px;
      }
    }
    .el-badge__content.is-fixed {
      top: 6px;
      background-color: rgb(255,54,54);
      border: none;
      height: 16px;
      line-height: 16px;
      padding: 0 5px;
    }
  }
  .el-popover.el-popper.head {
    color: #151515;
    border-color: #cacaca;
    border-radius: 0;
    padding-left: 20px;
    .el-popover__title {
      margin-top: 10px;
      font-size: 18px;
      font-weight: 500;
    }
    &.pop-center {
      padding: 0;
      transform: translateY(13px);
      .el-popover__title {
        padding-left: 18px;
        margin-top: 20px;
      }
    }
    .personal {
      padding: 12px 0;
      line-height: 33px;
      text-align: center;
      font-size: 14px;
      >li:hover {
        cursor: pointer;
        background-color: #f9ecde;
      }
    }
  }
</style>
