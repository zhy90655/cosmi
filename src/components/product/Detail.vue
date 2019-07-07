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
          <ProductList :hots="hots" isDetail />
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import ProductList from './productList'
export default {
  name: 'GoodsDetail',
  components: {
    ProductList
  },
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
      num: 1,
      hots: [
        {
          hoverIndex: -1,
          activeIndex: 0,
          id: '0002',
          colors: [
            {
              code: '132#',
              color: 'rgb(239, 207, 175)',
              price: 126,
              img: '/static/images/main/product2.png',
              name: 'PRODUCT NAME SECOND LINE'
            },
            {
              code: '192#',
              color: 'rgb(229, 188, 146)',
              price: 162,
              img: '/static/images/main/product1.png',
              name: 'PRODUCT NAME'
            },
            {
              code: '178#',
              color: 'rgb(214, 160, 117)',
              price: 127,
              img: '/static/images/main/product3.png',
              name: 'PRODUCT NAME SECOND LINE'
            },
            {
              code: '180#',
              color: 'rgb(215, 167, 112)',
              price: 163,
              img: '/static/images/main/product1.png',
              name: 'PRODUCT NAME'
            },
            {
              code: '290#',
              color: 'rgb(222, 190, 151)',
              price: 126,
              img: '/static/images/main/product3.png',
              name: 'PRODUCT NAME'
            },
            {
              code: '422#',
              color: 'rgb(234, 196, 159)',
              price: 146,
              img: '/static/images/main/product1.png',
              name: 'PRODUCT NAME SECOND LINE'
            },
            {
              code: '105#',
              color: 'rgb(232, 188, 164)',
              price: 126,
              img: '/static/images/main/product2.png',
              name: 'PRODUCT NAME'
            },
            {
              code: '181#',
              color: 'rgb(236, 195, 161)',
              price: 166,
              img: '/static/images/main/product1.png',
              name: 'PRODUCT NAME'
            },
            {
              code: '272#',
              color: 'rgb(226, 185, 150)',
              price: 167,
              img: '/static/images/main/product2.png',
              name: 'PRODUCT NAME SECOND LINE'
            },
            {
              code: '374#',
              color: 'rgb(210, 158, 123)',
              price: 168,
              img: '/static/images/main/product3.png',
              name: 'PRODUCT NAME SECOND LINE'
            }
          ]
        },
        {
          hoverIndex: -1,
          activeIndex: 0,
          id: '0003',
          colors: [
            {
              code: '132#',
              color: 'rgb(239, 207, 175)',
              price: 136,
              img: '/static/images/main/product1.png',
              name: 'PRODUCT NAME'
            },
            {
              code: '192#',
              color: 'rgb(229, 188, 146)',
              price: 162,
              img: '/static/images/main/product2.png',
              name: 'PRODUCT NAME'
            },
            {
              code: '178#',
              color: 'rgb(214, 160, 117)',
              price: 126,
              img: '/static/images/main/product3.png',
              name: 'PRODUCT NAME SECOND LINE'
            },
            {
              code: '180#',
              color: 'rgb(215, 167, 112)',
              price: 163,
              img: '/static/images/main/product1.png',
              name: 'PRODUCT NAME'
            }
          ]
        },
        {
          hoverIndex: -1,
          activeIndex: 0,
          id: '0004',
          colors: [
            {
              code: '132#',
              color: 'rgb(239, 207, 175)',
              price: 188,
              img: '/static/images/main/product3.png',
              name: 'PRODUCT NAME SECOND LINE'
            }
          ]
        },
        {
          hoverIndex: -1,
          activeIndex: 0,
          id: '0004',
          colors: [
            {
              code: '132#',
              color: 'rgb(239, 207, 175)',
              price: 188,
              img: '/static/images/main/product3.png',
              name: 'PRODUCT NAME SECOND LINE'
            }
          ]
        }
      ]
    }
  },

  methods: {
    addToCart () {},

    buy () {}
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
      .title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 1.6em;
        font-weight: 600;
        border-bottom: 1px solid #000;
      }
    }
  }
}
</style>
