<template>
  <div class="GoodsDetail">
    <div class="content">
      <div class="goodsInfo">
        <img class="infoLeft" :src="goodsImg" alt="商品图片" />
        <div class="infoRight">
          <div class="infoBox">
            <h3 class="name">{{goodsName}}</h3>
          </div>
          <div class="infoBox">
            <p>{{goodsDesc}}</p>
          </div>
          <div class="infoBox">
            <h3 class="price">{{'$'+goodsPrice}}</h3>
          </div>
          <div class="infoBox">
            <span>SELECT COLOR</span>
            <div class="product-detail-color">
              <ul>
                <li v-for="(item,index) in productColor" :key="index">
                  <div :class="item=='#f00'?'active':''">
                    <i :style="'background-color:'+item"></i>
                  </div>
                  {{item}}
                </li>
              </ul>
            </div>
          </div>
          <div class="infoBox">
            <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
          </div>
          <button class="buyBtn" @click="buy">ADD TO BAG</button>
          <button @click="addToCart">CHECK OUT</button>
        </div>
      </div>
      <section class="msgBox leftContainer">
        <div class="typeGoods">
          <div class="title">DESCRIPTION</div>
        </div>
      </section>
      <section class="typeGoods rightContainer">
        <div class="title">MATCHING PRODUCT</div>
        <ul class="list">
          <!-- <GoodsItem
            v-for="(item,index) in filterList"
            :key="+item.id"
            :id="item.id"
            :img="item.img"
            :name="item.name"
            :price="item.price"
          />-->
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GoodsDetail',
  components: {},
  computed: {
    id () {
      return this.$route.params.id
    },
    goodsPrice () {
      let unitPrice = 0

      return this.num * unitPrice
    },
    filterList () {
      return this.goodsList.filter(item => {
        return String(item.id) !== String(this.id)
      })
    }
  },
  data () {
    return {
      goodsImg: '/static/images/bag/product.png',
      goodsName: 'PRODUCT NAME BALABALABALABALABALA ',
      goodsDesc:
        'PRODUCT NAME BALABALABALABALABALA BALABALAPRODUCT NAME BALABALABALABALABALA BALABALA',
      typeId: '',
      productColor: [
        '#f00',
        '#aee',
        '#000',
        '#333',
        '#888',
        '#f00',
        '#aee',
        '#000',
        '#333',
        '#888'
      ],
      num: 1
    }
  },

  methods: {
    addToCart () {
      if (!this.clientToken) {
        alert('请先登录！')
        return
      }
      const res = addOrder({
        token: this.clientToken,
        goodsDetailId: this.temSpecId,
        state: 0,
        num: this.num,
        amount: this.goodsPrice
      })
      res
        .then(() => {
          alert('加入购物车成功！请前往 个人中心->购物车 结算')
        })
        .catch(e => {
          alert(e)
        })
    },

    buy () {
      if (!this.clientToken) {
        alert('请先登录！')
        return
      }
      const res = addOrder({
        token: this.clientToken,
        goodsDetailId: this.temSpecId,
        num: this.num,
        state: 1,
        amount: this.goodsPrice
      })
      res
        .then(() => {
          alert('自动付款成功！请耐心等待包裹派送~')
        })
        .catch(e => {
          alert(e)
        })
    }
  },
  mounted () {},

  watch: {}
}
</script>

<style scoped lang="less">
.GoodsDetail {
  .content {
    width: 100%;
    padding-top: 20px;
    .goodsInfo {
      width: 100%;
      overflow: hidden;
      .infoLeft {
        display: inline-block;
        width: 400px;
        height: 400px;
        float: left;
      }
      .infoRight {
        display: inline-block;
        float: right;
        width: 700px;
        .infoBox {
          margin-bottom: 30px;
          .name {
            font-size: 20px;
          }
          p {
            font-size: 15px;
          }
          .price {
            font-size: 3.6em;
            color: #de9d37;
          }
          span {
            font-size: 1.6em;
            display: block;
            padding-bottom: 10px;
            border-bottom: 1px solid #000;
          }
          .tips {
            width: auto;
            margin: 0 20px 0 5px;
          }
          .product-detail-color {
            li {
              display: inline-block;
              width: 20%;
              text-align: center;
              margin: 20px 0;
              line-height: 38px;
              font-size: 1.4em;
              div {
                border-radius: 50%;
                height: 42px;
                width: 42px;
                background-color: #fff;
                margin: auto;
                border: 1px solid transparent;
                > i {
                  height: 32px;
                  width: 32px;
                  border-radius: 50%;
                  display: block;
                  margin: 5px;
                }

                &:hover {
                  border: 1px solid #ccc;
                }
              }
              .active {
                border: 1px solid #ccc;
              }
            }
          }
        }
        button {
          background-color: #000;
          width: 198px;
          height: 60px;
          color: #fff;
          border: 1px solid #000;
          font-size: 19px;
          margin-right: 30px;
          margin-top: 10px;
          &:hover {
            opacity: 0.8;
          }
        }
        .buyBtn {
          border: 1px solid #000;
          color: #000;
          background-color: #fff;
        }
      }
    }

    .typeGoods {
      margin: 20px 0;
      padding-top: 0;
      border-bottom: 1px solid #000;
      .title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 1.6em;
        font-weight: 600;
      }

    }
  }
}
</style>
