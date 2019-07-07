<template>
  <div class="hot">
    <div class="main">
      <div
        class="list"
        @touchstart="touchstart($event, 'h')"
        @touchmove="touchmove($event, 'h')"
        @touchend="touchend($event, 'h', hots.length-1)"
      >
        <el-row :gutter="20" ref="hul">
          <el-col
            :lg="isDetail?6:8"
            :xl="isDetail?6:8"
            :md="8"
            :sm="12"
            :xm="24"
            v-for="(pro, index) in hots"
            :key="index"
          >
            <div class="item">
              <div :class="isDetail?'imgs':'img'" @click="productDetail(pro.id)">
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
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      hot: []
    }
  },
  props: {
    hots: {
      type: Array
    },
    isDetail: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.hots && (this.hot = this.hots)
    console.log('detail', this.isDetail)
  },
  computed: {
    ...mapState(['productList'])
  },
  methods: {
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
    },
    touchmove (e, tag) {
      if (this.screenWidth) return
      const moveX = e.changedTouches[0].screenX - this.startX
      if (Math.abs(moveX) > 10 && e.cancelable) e.preventDefault()
      const translateX = moveX + this[tag + 'TranSteps'] * this.itemWidth
      if (tag === 'h') {
        this.$refs[tag + 'ul'].$children.forEach(
          _ => (_.$el.style.transform = 'translateX(' + translateX + 'px)')
        )
      } else {
        this.style.transform = 'translateX(' + translateX + 'px)'
      }
    },
    touchend (e, tag, length) {
      if (this.screenWidth) return
      const moveX = e.changedTouches[0].screenX - this.startX
      let step = moveX / this.itemWidth
      if (Math.abs(step) > 0.3) {
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        this[tag + 'TranSteps'] += step
        if (document.body.scrollWidth >= 768) {
          this[tag + 'TranSteps'] = this[tag + 'TranSteps'] <= -1 ? -1 : 0
        } else {
          this[tag + 'TranSteps'] =
            this[tag + 'TranSteps'] <= -length
              ? -length
              : this[tag + 'TranSteps'] >= 0
                ? 0
                : this[tag + 'TranSteps']
        }
      }
      if (tag === 'h') {
        this.$refs[tag + 'ul'].$children.forEach(_ => {
          _.$el.classList.add('tran')
          setTimeout(() => {
            _.$el.style.transform =
              'translateX(' + this[tag + 'TranSteps'] * this.itemWidth + 'px)'
          })
        })
      } else {
        this.$refs[tag + 'ul'].classList.add('tran')
        setTimeout(() => {
          this.style.transform =
            'translateX(' + this[tag + 'TranSteps'] * this.itemWidth + 'px)'
        })
      }
    },
    next (pro) {
      if (pro.colors.length - 1 > pro.activeIndex) pro.activeIndex += 1
    },
    productDetail (id) {
      const product = this.productList.find(_ => _.id === id)
      if (product) {
        const { kind, sub, productName } = product
        this.$router.push({
          path: `/products/${kind}/${sub}/${productName}`,
          query: { id }
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.hot {
  text-align: center;
  .list {
    margin-top: 45px;
    height: 590px;
    .img {
      cursor: pointer;
      display: inline-block;
      width: 300px;
      height: 300px;
      margin: 16px 0 11px 0;
    }
    .imgs {
      cursor: pointer;
      display: inline-block;
      width: 225px;
      height: 225px;
      margin: 16px 0 11px 0;
      >img{
          height: 100%;
          widows: 100%;
      }
    }
    .name {
      cursor: pointer;
      //   display: table;
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
</style>
