<template>
  <div class="container">
    <div class="banner">
      <div class="main"></div>
    </div>
    <div class="hot">
      <h3 class="title">BEST SELLER</h3>
      <div class="main">
        <div class="list">
          <el-row :gutter="20">
            <el-col :lg="8" :xl="8" :md="12" :sm="24" v-for="(pro, index) in hots" :key="index"
                    :class="{'hidden-md-and-down':index === 2, 'hidden-sm-and-down': index === 1}">
              <div class="item">
                <div class="img">
                  <img :src="(pro.colors[pro.hoverIndex] || pro.colors[pro.activeIndex]).img">
                </div>
                <div class="name">
                  <p>{{(pro.colors[pro.hoverIndex] || pro.colors[pro.activeIndex]).name}}</p>
                </div>
                <div class="color" v-if="pro.colors.length > 1">{{(pro.colors[pro.hoverIndex] || pro.colors[pro.activeIndex]).code}}</div>
                <div class="colorPicker" v-if="pro.colors.length > 1">
                  <i :class="['el-icon-arrow-left',pro.activeIndex === 0 ? 'disabled' : '' ]" :style="{visibility: pro.colors.length > 5 ? '' : 'hidden'}" @click="pre(pro)"></i>
                  <ul class="dot">
                    <li v-for="(item, ind) in pro.colors" :key="ind" :style="{backgroundColor: item.color}"
                    :class="{active: ind === pro.activeIndex || ind === pro.hoverIndex}"
                    @click="pro.activeIndex = ind" @mouseenter="pro.hoverIndex = ind" @mouseleave="pro.hoverIndex = -1"></li>
                  </ul>
                  <i :class="['el-icon-arrow-right',pro.activeIndex === pro.colors.length - 1 ? 'disabled' : '' ]" :style="{visibility: pro.colors.length > 5 ? '' : 'hidden'}" @click="next(pro)"></i>
                </div>
                <div v-else class="new"><p>NEW</p></div>
                <div class="price">${{(pro.colors[pro.hoverIndex] || pro.colors[pro.activeIndex]).price}}</div>
                <el-button class="add">ADD TO BAG</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      hots :[
        { 
          hoverIndex: -1,
          activeIndex: 0,
          colors:[
            {code: '132#', color: 'rgb(239, 207, 175)', price: 126, img:'/static/images/main/product2.png',name: 'PRODUCT NAME SECOND LINE'},
            {code: '192#', color: 'rgb(229, 188, 146)', price: 162, img:'/static/images/main/product2.png',name: 'PRODUCT NAME'},
            {code: '178#', color: 'rgb(214, 160, 117)', price: 126, img:'/static/images/main/product3.png',name: 'PRODUCT NAME SECOND LINE'},
            {code: '180#', color: 'rgb(215, 167, 112)', price: 163, img:'/static/images/main/product1.png',name: 'PRODUCT NAME'},
            {code: '290#', color: 'rgb(222, 190, 151)', price: 126, img:'/static/images/main/product3.png',name: 'PRODUCT NAME'},
            {code: '422#', color: 'rgb(234, 196, 159)', price: 146, img:'/static/images/main/product1.png',name: 'PRODUCT NAME SECOND LINE'},
            {code: '105#', color: 'rgb(232, 188, 164)', price: 126, img:'/static/images/main/product2.png',name: 'PRODUCT NAME'},
            {code: '181#', color: 'rgb(236, 195, 161)', price: 166, img:'/static/images/main/product1.png',name: 'PRODUCT NAME'},
            {code: '272#', color: 'rgb(226, 185, 150)', price: 167, img:'/static/images/main/product2.png',name: 'PRODUCT NAME SECOND LINE'},
            {code: '374#', color: 'rgb(210, 158, 123)', price: 168, img:'/static/images/main/product3.png',name: 'PRODUCT NAME SECOND LINE'}
          ]
        },
        { 
          hoverIndex: -1,
          activeIndex: 0,
          colors:[
            {code: '132#', color: 'rgb(239, 207, 175)', price: 136, img:'/static/images/main/product1.png',name: 'PRODUCT NAME'},
            {code: '192#', color: 'rgb(229, 188, 146)', price: 162, img:'/static/images/main/product2.png',name: 'PRODUCT NAME'},
            {code: '178#', color: 'rgb(214, 160, 117)', price: 126, img:'/static/images/main/product3.png',name: 'PRODUCT NAME SECOND LINE'},
            {code: '180#', color: 'rgb(215, 167, 112)', price: 163, img:'/static/images/main/product1.png',name: 'PRODUCT NAME'}
          ]
        },
        { 
          hoverIndex: -1,
          activeIndex: 0,
          colors:[
            {code: '132#', color: 'rgb(239, 207, 175)', price: 188, img:'/static/images/main/product3.png',name: 'PRODUCT NAME SECOND LINE'}
          ]
        }
      ]
    }
  },
  methods: {
    pre(pro) {
      if (pro.activeIndex > 0) pro.activeIndex -= 1
    },
    next(pro) {
      if (pro.colors.length - 1 > pro.activeIndex) pro.activeIndex += 1
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  .banner {
    height: 480px;
    width: 100%;
    margin-bottom: 19px;
    background: url(../assets/images/main/banner.png) no-repeat center;
  }
  .hot {
    text-align: center;
  }
  .title {
    display: inline-block;
    font-size: 5.2em;
    font-family: caviar dreams;
    height: 94px;
    line-height: 94px;
    color: #000;
    box-sizing: border-box;
    border-bottom: 3px solid #000;
  }
  .list {
    margin-top: 20px;
    height: 590px;
    padding: 10px;
    color: #151515;
    .img {
      display: inline-block;
      width: 300px;
      height: 300px;
      margin: 16px 0 11px 0;
    }
    .name {
      display:table;
      height: 52px;
      font-size: 1.6em;
      width: 132px;
      margin: 0 auto;
      p {
        display:table-cell;
        vertical-align:middle;
        line-height: 26px;
      }
    }
    .color {
      height: 26px;
      line-height: 26px;
      font-size: 1.4em;
    }
    .item {
      height: 554px;
      border-radius: 30px;
      max-width: 400px;
      margin: 0 auto;
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
    }
    .colorPicker {
      width: 198px;
      margin: 5px auto 7px;
      height: 32px;
      line-height: 22px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      >i {
        line-height: 32px;
        font-size: 1.8em;
        color: #000;
        cursor: pointer;
        &.disabled {
          color: #afafaf;
          cursor: not-allowed;
        }
      }
      ul {
        height: 32px;
        max-width: 162px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;        
        align-items: center;
        overflow: hidden;
      }
      li {
        width: 20px;
        height: 20px;
        margin: 0 6px;
        border-radius: 50%;
        flex-shrink: 0;
        cursor: pointer;
        &.active {
          box-shadow: 0 0 0px 1px #060606;
        }
      }
    }
    .price {
      margin: 0 auto;
      height: 36px;
      font-size: 1.6em;
      line-height: 36px;
    }
    .add {
      height: 40px;
      width: 168px;
      font-size: 1.6em;
      background-color: rgb(35,35,35);
      color: #fff;
      border-radius: 0px;
    }
    .new {
      height: 52px;
      width: 300px;
      margin: 16px auto 2px;
      display:table;
      font-size: 1.6em;
      color: #f02655;
      p {
        display:table-cell;
        vertical-align:middle;
        line-height: 26px;
      }
    }
  }
}
</style>
