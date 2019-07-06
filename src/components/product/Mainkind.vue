<template>
  <div class="mainkind-wrap">
    <el-container class="main">
      <el-aside>
        <h3>PRICE RANGE</h3>

        <el-slider class="price-slider" range v-model="value1" :format-tooltip="price"></el-slider>
        <h3>COLOR</h3>
        <ul>
          <li v-for="(item,index) in colorList" :key="index" :style="'background-color:'+item"></li>
        </ul>
      </el-aside>
      <el-main>
        <div class="main">
          <div
            class="list"
            @touchstart="touchstart($event, 'h')"
            @touchmove="touchmove($event, 'h')"
            @touchend="touchend($event, 'h', hots.length-1)"
          >
            <el-row :gutter="20" ref="hul">
              <el-col
                :lg="8"
                :xl="8"
                :md="8"
                :sm="12"
                :xm="24"
                v-for="(pro, index) in hots"
                :key="index"
              >
                <div class="item">
                  <div class="img" @click="productDetail(pro.id)">
                    <img :src="(pro.colors[pro.hoverIndex] || pro.colors[pro.activeIndex]).img" />
                  </div>
                  <div class="name" @click="productDetail(pro.id)">
                    <p>{{(pro.colors[pro.hoverIndex] || pro.colors[pro.activeIndex]).name}}</p>
                  </div>
                  <div
                    class="color"
                    v-if="pro.colors.length > 1"
                  >{{(pro.colors[pro.hoverIndex] || pro.colors[pro.activeIndex]).code}}</div>
                  <div class="colorPicker" v-if="pro.colors.length > 1">
                    <i
                      :class="['el-icon-arrow-left',pro.activeIndex === 0 ? 'disabled' : '' ]"
                      :style="{visibility: pro.colors.length > 5 ? '' : 'hidden'}"
                      @click="pre(pro)"
                    ></i>
                    <ul class="dot">
                      <li
                        v-for="(item, ind) in pro.colors"
                        :key="ind"
                        :style="{backgroundColor: item.color, transform:'translateX(-'+ (160 * (pro.activeIndex > 4 ? pro.activeIndex - 4 : 0))+'%)'}"
                        :class="{active: ind === pro.activeIndex || ind === pro.hoverIndex}"
                        @click="pro.activeIndex = ind"
                        @mouseenter="pro.hoverIndex = ind"
                        @mouseleave="pro.hoverIndex = -1"
                      ></li>
                    </ul>
                    <i
                      :class="['el-icon-arrow-right',pro.activeIndex === pro.colors.length - 1 ? 'disabled' : '' ]"
                      :style="{visibility: pro.colors.length > 5 ? '' : 'hidden'}"
                      @click="next(pro)"
                    ></i>
                  </div>
                  <div v-else class="new">
                    <p>NEW</p>
                  </div>
                  <div
                    class="price"
                  >${{(pro.colors[pro.hoverIndex] || pro.colors[pro.activeIndex]).price}}</div>
                  <el-button class="add">ADD TO BAG</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value1: [10, 100],
      colorList: [
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
        }
      ]
    }
  },
  computed: {},
  components: {},
  methods: {
    price (val) {
      return '$' + val
    },
    touchstart (e, tag) {
      this.screenWidth =
        tag !== 'p'
          ? document.body.scrollWidth >= 992
          : document.body.scrollWidth >= 768
      if (this.screenWidth) return
      this.style = this.$refs[tag + 'ul'].style
      this.itemWidth =
        tag === 'h'
          ? this.$refs[tag + 'ul'].$children[0].$el.offsetWidth
          : this.$refs[tag + 'ul'].parentElement.offsetWidth
      this.startX = e.changedTouches[0].screenX
      if (tag === 'h') {
        this.$refs[tag + 'ul'].$children.forEach(_ =>
          _.$el.classList.remove('tran')
        )
      } else {
        this.$refs[tag + 'ul'].classList.remove('tran')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.mainkind-wrap {
  .el-aside {
    margin-top: 40px;
    h3 {
      font-size: 1.8em;
      font-weight: 500;
      line-height: 38px;
      margin-bottom: 34px;
    }
    .price-slider {
      width: 228px;
      margin-bottom: 38px;
    }
    ul {
      width: 250px;
      li {
        display: inline-block;
        height: 28px;
        width: 28px;
        margin-right: 22px;
        margin-bottom: 25px;
      }
    }
  }
  .el-main {
    margin-top: 40px;
    > h2 {
      width: 830px;
      font-size: 1.8em;
      line-height: 48px;
      border-bottom: 1px solid #000;
    }
    .list {
    // margin-top: 45px;
    height: 590px;
    text-align: center;
    .img {
      cursor: pointer;
      display: inline-block;
      width: 225px;
      height: 225px;
      margin: 16px 0 11px 0;
      >img{
        height: 100%;
        width: 100%;
      }
    }
    .name {
      cursor: pointer;
      // display: table;
      height: 52px;
      font-size: 1.6em;
      width: 145px;
      margin: 0 auto;
      overflow: hidden;
      &:hover {
        text-decoration: underline;
      }
      p {
        display: table-cell;
        vertical-align: middle;
        line-height: 26px;
      }
    }
    .color {
      height: 26px;
      line-height: 26px;
      font-size: 1.4em;
      text-align: center;
    }
    .item {
      height: 554px;
      border-radius: 30px;
      max-width: 400px;
      margin: 0 auto;
      &:hover {
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
      }
    }
    .colorPicker {
      width: 198px;
      margin: 5px auto 7px;
      height: 32px;
      line-height: 22px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      > i {
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
        transition: transform 0.3s;
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
      background-color: rgb(35, 35, 35);
      color: #fff;
      border-radius: 0px;
    }
    .new {
      height: 52px;
      width: 300px;
      margin: 16px auto 2px;
      display: table;
      font-size: 1.6em;
      color: #f02655;
      p {
        display: table-cell;
        vertical-align: middle;
        line-height: 26px;
      }
    }
  }
  }

}
</style>
