<template>
  <div class="bag">
    <ul>
      <li v-for="(item, index) in cartlist" :key="index">
        <div class="img" style="cursor:pointer" @click="productDetail(item.id)">
          <img :src="item.img">
        </div>
        <div class="right">
          <div class="name" @click="productDetail(item.id)">{{item.name}}</div>
          <div class="bottom">
            <el-input-number :min=0 size="mini" v-model="item.count" @change='change(item, index)'></el-input-number>
            <span class="price">${{(+item.price || 0).toFixed(2)}}</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="total">
      <div class="top">
        <span class="acounts">{{total.counts}} ITEMS</span>
        <span class="subtotal">SUBTOTAL ${{(+total.subtotal || 0).toFixed(2)}}</span>
      </div>
      <div class="sellInfo">
        $12 away from free standard shipping!
      </div>
    </div>
    <div class="operating">
      <el-button size="mini" @click="viewCart">VIEW CART</el-button>
      <el-button size="mini" class="checkout" @click="checkout">CHECKOUT</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['cartlist', 'productList']),
    total () {
      let total = { counts: 0, subtotal: 0 }
      this.cartlist.forEach(_ => {
        total.counts += _.count
        total.subtotal += _.price * _.count
      })
      return total
    }
  },
  methods: {
    viewCart () {
      console.log('viewCart')
    },
    checkout () {
      console.log('checkout')
    },
    change (item, index) {
      if (item.count === 0) this.cartlist.splice(index, 1)
    },
    productDetail (id) {
      const product = this.productList.find(_ => _.id === id)
      if (product) {
        const { kind, sub, productName } = product
        this.$router.push({ path: `/products/${kind}/${sub}/${productName}`, query: { id } })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .bag {
    margin: 20px 20px 10px 0;
    >ul{
      border-bottom: 1px solid #d2d2d2;
      >li {
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-bottom: 5px;
          .name {
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
          .bottom {
            display: flex;
            justify-content: space-between;
            .price {
              font-size: 24px;
              font-weight:500;
              line-height: 28px;
              color:#de9d37;
            }
          }
        }
      }
    }
    .total {
      .top {
        line-height: 54px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        font-weight: 600;
      }
    }
  }
</style>
<style lang="less">
.bag {
  .el-input__inner {
    border-radius: 0;
    border-color: #aeaeae;
  }
  .el-input-number__decrease, .el-input-number__increase {
    background-color: #efefef;
    border-radius: 0;
  }
  .el-input-number {
    width: 98px;
  }
  .operating {
    margin-top: 22px;
    display: flex;
    justify-content:flex-end;
    .el-button--mini {
      border-radius: 0;
      color: #151515;
      font-size: 14px;
      border-color: #151515;
      background-color: #fff;
      width: 126px;
      &.checkout {
        background-color: #000;
        color: #fff;
      }
    }
  }
}
</style>
