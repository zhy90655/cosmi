<template>
  <div class="order-wrap" style="width:830px">
    <div class="shipping">
      <ul class="tabs">
        <li
          v-for="item in ordersMenu"
          :key="item.id"
          :class="{active:activeIndex === item.id}"
          @click="activeIndex = item.id"
        >{{item.type}}</li>
      </ul>
      <ul class="orderTitle">
        <li v-for="(item,index) in titleList" :key="index">{{item}}</li>
      </ul>
      <div class="orderDetail" v-for="order in orderList" :key="order.orderNumber">
        <ul class="head">
          <li>{{order.createDate}}</li>
          <li>Order Number:{{order.orderNumber}}</li>
          <li><img src="../../assets/images/person/trashcan.png"/></li>
        </ul>
        <div class="body">
          <ul v-for="(product, index) in order.products" :key="index" :class="[index === 0 ? 'product' : 'product otehrLine']">
            <li class="detail">
              <img :src="product.img" alt="">
              <div>
                <p>{{product.name}}</p>
                <span>${{product.price}}</span>
              </div>
            </li>
            <li class="qty">x{{product.count}}</li>
            <li class="total"><p>${{order.amount}}</p></li>
            <li class="status">
              <p>{{ordersMenu.find(_ => _.id === order.status).type}}</p>
              <p>Order Details</p>
              <p>Shipping Number <span>{{order.shippingNumber}}</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapActions, mapState } from 'vuex'
// import { updateAddress, addAddress } from '../../api'
export default {
  data () {
    return {
      ordersMenu: [
        { id: 0, type: 'All Orders' },
        { id: 1, type: 'Pending Payment' },
        { id: 2, type: 'To Be Shippen' },
        { id: 3, type: 'Completed' },
        { id: 4, type: 'Cancelled' }
      ],
      activeIndex: 0,
      titleList: ['Orders', 'Qty', 'Oreder Amount', 'Oreder Status'],
      orderList: [
        {
          orderNumber: '12345678910',
          shippingNumber: '66666666666',
          createDate: '2019-05-10',
          amount: 230,
          status: 1, // 与ordersMenu 里面的id 对应
          products: [
            {
              img: '/static/images/bag/product.png',
              name: 'PRODUCT NAME BALABALABALABALABALA BALABALA',
              count: 1,
              price: 30.01,
              color: '#f00',
              id: '0005'
            },
            {
              img: '/static/images/bag/product.png',
              name: 'PRODUCT NAME BALABALABALABALABALA BALABALA',
              count: 1,
              price: 30.01,
              color: '#f00',
              id: '0005'
            },
            {
              img: '/static/images/bag/product.png',
              name: 'PRODUCT NAME BALABALABALABALABALA BALABALA',
              count: 2,
              price: 33.0,
              color: '#f00',
              id: '0006'
            }
          ]
        }
      ]
    }
  },
  created () {},
  methods: {

  }
}
</script>
<style lang="less" scoped>
.order-wrap {
  .tabs {
    margin-top: 20px;
    display: flex;
    color: #000;
    font-size: 14px;
    li {
      cursor: pointer;
      padding: 10px 0;
      margin-right: 60px;
    }
    .active {
      text-decoration: underline;
      color: #b78a69;
    }
  }
  .orderTitle {
    display: flex;
    height: 40px;
    font-size: 14px;
    margin-bottom: 9px;
    background-color: #f6f6f6;
    > li {
      text-align: center;
      width: 138px;
      line-height: 40px;
      &:first-child {
        flex-grow: 1;
      }
    }
  }
  .orderDetail {
    box-sizing: border-box;
    border-bottom: 1px solid #e7e7e7;
    border-right: 1px solid #e7e7e7;
    .head {
      height: 40px;
      background-color: #fff5e7;
      display: flex;
      line-height: 40px;
      justify-content: space-between;
      padding-right: 20px;
      border-left: 1px solid #e7e7e7;
      border-top: 1px solid #e7e7e7;
      > li:first-child {
        text-align: center;
        width: 138px;
      }
      > li:nth-child(2) {
        flex-grow: 1;
      }
      img {
        cursor: pointer;
      }
    }
    .body {
      .product {
        height: 138px;
        display: flex;
        > li {
          width: 138px;
          border-left: 1px solid #e7e7e7;
          border-top: 1px solid #e7e7e7;
          &.total,
          &.qty {
            line-height: 138px;
            text-align: center;
          }
        }
        &.otehrLine .total,
        &.otehrLine .status {
          border-top: none;
          > p {
            display: none;
          }
        }
        .detail {
          padding-left: 10px;
          flex-grow: 1;
          display: flex;
          align-items: center;
          > div {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
