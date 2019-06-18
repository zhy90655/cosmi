<template>
  <div class="personal-center">
    <el-container class="main">
      <el-aside width="250px">
        <h3>EDWIN</h3>
        <ul>
          <li v-for="(item, index) in centerList" :key="index">
            <router-link :to="'/personalCenter/' + item.params">{{item.title}}</router-link>
          </li>
        </ul>
      </el-aside>
      <el-main>
        <h2>{{mainTitle}}</h2>
        <component :is="$route.params.item"></component>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      centerList: [
        { title: 'My Order', params: 'Orders' },
        { title: 'Personal Information', params: 'MyAccount' },
        { title: 'Address Book', params: 'Address' },
        { title: 'My Wishlist', params: 'Wishlist' }
      ]
    }
  },
  computed: {
    mainTitle () {
      return this.centerList.find(_ => _.params === this.$route.params.item).title
    }
  },
  components: {
    Orders: () => import('./Orders'),
    MyAccount: () => import('./MyAccount'),
    Address: () => import('./Address'),
    Wishlist: () => import('./Wishlist')
  }
}
</script>

<style lang="less" scoped>
  .personal-center {
    .el-aside {
      margin-top: 40px;
      padding-left: 50px;
      h3 {
        font-size: 1.8em;
        font-weight: 500;
        line-height: 38px;
      }
      li {
        font-size: 1.4em;
        line-height: 36px;
        >a {
          color: #161616;
          display: inline-block;
          &.router-link-active {
            color: #b98a5b;
            font-weight: 600;
          }
        }
      }
    }
    .el-main {
      margin-top: 40px;
      >h2 {
        width: 830px;
        font-size: 1.8em;
        line-height: 48px;
        border-bottom: 1px solid #000;
      }
    }
  }
</style>
