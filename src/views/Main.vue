<template>
  <div class="container">
    <section class="banner">
      <div class="main"></div>
    </section>
    <div class="hot">
      <h3 class="title">BEST SELLER</h3>
      <div class="main">
        <div class="list" @touchstart="touchstart($event, 'h')" @touchmove="touchmove($event, 'h')" @touchend="touchend($event, 'h', hots.length-1)">
          <el-row :gutter="20" ref="hul">
            <el-col :lg="8" :xl="8" :md="8" :sm="12" :xm='24' v-for="(pro, index) in hots" :key="index">
              <div class="item">
                <div class="img" @click="productDetail(pro.id)">
                  <img :src="(pro.colors[pro.hoverIndex] || pro.colors[pro.activeIndex]).img">
                </div>
                <div class="name" @click="productDetail(pro.id)">
                  <p>{{(pro.colors[pro.hoverIndex] || pro.colors[pro.activeIndex]).name}}</p>
                </div>
                <div class="color" v-if="pro.colors.length > 1">{{(pro.colors[pro.hoverIndex] || pro.colors[pro.activeIndex]).code}}</div>
                <div class="colorPicker" v-if="pro.colors.length > 1">
                  <i :class="['el-icon-arrow-left',pro.activeIndex === 0 ? 'disabled' : '' ]" :style="{visibility: pro.colors.length > 5 ? '' : 'hidden'}" @click="pre(pro)"></i>
                  <ul class="dot">
                    <li v-for="(item, ind) in pro.colors" :key="ind"
                    :style="{backgroundColor: item.color, transform:'translateX(-'+ (160 * (pro.activeIndex > 4 ? pro.activeIndex - 4 : 0))+'%)'}"
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
    <section class="prodotti">
      <h3 class="title">PRODOTTI</h3>
      <div class="main">
        <div class="wrapper" @touchstart="touchstart($event, 'p')" @touchmove="touchmove($event, 'p')" @touchend="touchend($event, 'p', prodottis.length-1)" >
          <ul ref="pul">
            <li v-for="(item, index) in prodottis" :key="index" :class="{thrid: index ===2, fouth: index === 3}">
              <img :src="item.img">
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="serv">
      <div class="main">
        <div class="content">
          <ul @touchstart="touchstart($event, 's')" @touchmove="touchmove($event, 's')" @touchend="touchend($event, 's', 1)" ref="sul">
            <li v-for="(item, index) in servicelist" :key="index">
              <div class="img">
                <img :src="item.img">
              </div>
              <div class="word"><p>{{item.info}}</p></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="aboutus">
      <div class="main">
        <div class="word">
          <div class="title">ABOUT US</div>
          <div class="content">{{content}}</div>
        </div>
        <div class="pic"></div>
      </div>
    </section>
    <section class="ins">
      <div class="main">
         <div class="content">
            <ul @touchstart="touchstart($event, 'i')" @touchmove="touchmove($event, 'i')" @touchend="touchend($event, 'i', insList.length-1)" ref="iul">
              <li v-for="(item, index) in insList" :key="index">
                <div class="img">
                  <img :src="item.img">
                  <div class="info">
                    <div class="name">@{{item.name}}</div>
                    <div class="msg">{{item.msg}}</div>
                  </div>
                </div>
              </li>
            </ul>
         </div>
      </div>
    </section>
    <el-dialog
      title="GET 10% OFF YOUR FIRST ORDER"
      :visible.sync="dialogVisible"
      :before-close='beforeClose'
      width="794px"
      custom-class='discount'>
      <div class="discountInfo">
        <p class="tip">Subsctibe to get 10% off your fist order.</p>
        <el-form :model="discountForm" :rules="rules" label-position="top" ref="discountForm" label-width="100px" class="discountForm">
          <el-form-item label="Email" prop="email">
            <el-input v-model="discountForm.email"></el-input>
          </el-form-item>
          <el-form-item prop="policy">
            <el-checkbox v-model="discountForm.policy">
              Having read the privacy policy information, I consent to the processing of my personal data for advertising and promotional purposes.
              <router-link to='/policy' style="display:block;color:#565656;text-decoration: underline;">Privacy policy</router-link>
            </el-checkbox>
          </el-form-item>
        </el-form>
      </div>
      <div style="text-align: center" slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('discountForm')">GET 10% OFF</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    var validatePolicy = (rule, value, callback) => {
      if (!value) {
        callback(new Error('Please agree the policy.'))
      } else {
        callback()
      }
    }
    return {
      hots: [
        {
          hoverIndex: -1,
          activeIndex: 0,
          id: '0002',
          colors: [
            { code: '132#', color: 'rgb(239, 207, 175)', price: 126, img: '/static/images/main/product2.png', name: 'PRODUCT NAME SECOND LINE' },
            { code: '192#', color: 'rgb(229, 188, 146)', price: 162, img: '/static/images/main/product1.png', name: 'PRODUCT NAME' },
            { code: '178#', color: 'rgb(214, 160, 117)', price: 127, img: '/static/images/main/product3.png', name: 'PRODUCT NAME SECOND LINE' },
            { code: '180#', color: 'rgb(215, 167, 112)', price: 163, img: '/static/images/main/product1.png', name: 'PRODUCT NAME' },
            { code: '290#', color: 'rgb(222, 190, 151)', price: 126, img: '/static/images/main/product3.png', name: 'PRODUCT NAME' },
            { code: '422#', color: 'rgb(234, 196, 159)', price: 146, img: '/static/images/main/product1.png', name: 'PRODUCT NAME SECOND LINE' },
            { code: '105#', color: 'rgb(232, 188, 164)', price: 126, img: '/static/images/main/product2.png', name: 'PRODUCT NAME' },
            { code: '181#', color: 'rgb(236, 195, 161)', price: 166, img: '/static/images/main/product1.png', name: 'PRODUCT NAME' },
            { code: '272#', color: 'rgb(226, 185, 150)', price: 167, img: '/static/images/main/product2.png', name: 'PRODUCT NAME SECOND LINE' },
            { code: '374#', color: 'rgb(210, 158, 123)', price: 168, img: '/static/images/main/product3.png', name: 'PRODUCT NAME SECOND LINE' }
          ]
        },
        {
          hoverIndex: -1,
          activeIndex: 0,
          id: '0003',
          colors: [
            { code: '132#', color: 'rgb(239, 207, 175)', price: 136, img: '/static/images/main/product1.png', name: 'PRODUCT NAME' },
            { code: '192#', color: 'rgb(229, 188, 146)', price: 162, img: '/static/images/main/product2.png', name: 'PRODUCT NAME' },
            { code: '178#', color: 'rgb(214, 160, 117)', price: 126, img: '/static/images/main/product3.png', name: 'PRODUCT NAME SECOND LINE' },
            { code: '180#', color: 'rgb(215, 167, 112)', price: 163, img: '/static/images/main/product1.png', name: 'PRODUCT NAME' }
          ]
        },
        {
          hoverIndex: -1,
          activeIndex: 0,
          id: '0004',
          colors: [
            { code: '132#', color: 'rgb(239, 207, 175)', price: 188, img: '/static/images/main/product3.png', name: 'PRODUCT NAME SECOND LINE' }
          ]
        }
      ],
      hTranSteps: 0,
      prodottis: [
        { img: '/static/images/main/product3.png', info: 'PRODUCT NAME SECOND LINE' },
        { img: '/static/images/main/product3.png', info: 'PRODUCT NAME SECOND LINE' },
        { img: '/static/images/main/product3.png', info: 'PRODUCT NAME SECOND LINE' },
        { img: '/static/images/main/product3.png', info: 'PRODUCT NAME SECOND LINE' }
      ],
      pTranSteps: 0,
      servicelist: [
        { img: '/static/images/main/service2.png', info: 'CRUELTY FREE' },
        { img: '/static/images/main/service1.png', info: 'MADE IN ITALY' },
        { img: '/static/images/main/service2.png', info: 'MADE IN ITALY' },
        { img: '/static/images/main/service1.png', info: 'CRUELTY FREE' }
      ],
      content: `TUR ADIPIS ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MALIQUA. UTENIM AD MINIM VENIAM, QUIS MOSTRUD EXERCITATION ULLAMCO LABORIS
        ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT I PTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCC
        CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID E ORUM. "UUAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE
        AMCO LABORIS NISI UT ALIQUIP EA COMMODO CONSEQUAT.DUIS `,
      insList: [
        { img: '/static/images/main/ins1.png', info: 'PRODUCT NAME SECOND LINE', name: 'Katebabie', msg: 'I Love cosmi.Yesterday I went to a party.All of my friends love my rouge' },
        { img: '/static/images/main/ins2.png', info: 'PRODUCT NAME SECOND LINE', name: 'Kate', msg: 'I Love cosmi.Yesterday I went to a party.All of my friends love my rouge' },
        { img: '/static/images/main/ins1.png', info: 'PRODUCT NAME SECOND LINE', name: 'Katebabie', msg: 'I Love cosmi.Yesterday I went to a party.All of my friends love my rouge' },
        { img: '/static/images/main/ins2.png', info: 'PRODUCT NAME SECOND LINE', name: 'Kate', msg: 'I Love cosmi.Yesterday I went to a party.All of my friends love my rouge' }
      ],
      sTranSteps: 0,
      iTranSteps: 0,
      rules: {
        email: [
          { required: true, message: 'Please enter your email address.', trigger: 'blur' },
          { type: 'email', message: 'Please enter your email address in the correct format.', trigger: ['blur', 'change'] }
        ],
        policy: [
          { validator: validatePolicy, trigger: 'change' }
        ]
      },
      discountForm: { email: '', policy: true }
    }
  },
  computed: {
    ...mapState(['dialogVisible'])
  },
  methods: {
    ...mapMutations(['set_dialogVisible']),
    productDetail (id) {
      console.log(id)
    },
    beforeClose (done) {
      this.set_dialogVisible(false)
    },
    pre (pro) {
      if (pro.activeIndex > 0) pro.activeIndex -= 1
    },
    next (pro) {
      if (pro.colors.length - 1 > pro.activeIndex) pro.activeIndex += 1
    },
    touchstart (e, tag) {
      this.screenWidth = tag !== 'p' ? document.body.scrollWidth >= 992 : document.body.scrollWidth >= 768
      if (this.screenWidth) return
      this.style = this.$refs[tag + 'ul'].style
      this.itemWidth = tag === 'h' ? this.$refs[tag + 'ul'].$children[0].$el.offsetWidth : this.$refs[tag + 'ul'].parentElement.offsetWidth
      this.startX = e.changedTouches[0].screenX
      if (tag === 'h') {
        this.$refs[tag + 'ul'].$children.forEach(_ => _.$el.classList.remove('tran'))
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
        this.$refs[tag + 'ul'].$children.forEach(_ => (_.$el.style.transform = 'translateX(' + translateX + 'px)'))
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
          this[tag + 'TranSteps'] = this[tag + 'TranSteps'] <= -length ? -length : this[tag + 'TranSteps'] >= 0 ? 0 : this[tag + 'TranSteps']
        }
      }
      if (tag === 'h') {
        this.$refs[tag + 'ul'].$children.forEach(_ => {
          _.$el.classList.add('tran')
          setTimeout(() => {
            _.$el.style.transform = 'translateX(' + this[tag + 'TranSteps'] * this.itemWidth + 'px)'
          })
        })
      } else {
        this.$refs[tag + 'ul'].classList.add('tran')
        setTimeout(() => {
          this.style.transform = 'translateX(' + this[tag + 'TranSteps'] * this.itemWidth + 'px)'
        })
      }
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.set_dialogVisible(false)
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
      .name {
        cursor: pointer;
        display:table;
        height: 52px;
        font-size: 1.6em;
        width: 145px;
        margin: 0 auto;
        &:hover {
          text-decoration: underline;
        }
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
          transition: transform .3s;
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
  .title {
    display: inline-block;
    font-size: 4.2em;
    font-family: caviar dreams;
    height: 84px;
    line-height: 84px;
    color: #000;
    box-sizing: border-box;
    border-bottom: 3px solid #000;
  }
  .prodotti {
    padding-top: 19px;
    background-color: #000;
    text-align: center;
    .title {
      color: #fff;
      border-color: #fff;
      margin-bottom: 30px;
    }
    .main {
      .wrapper {
        overflow: hidden;
      }
      ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-content: space-around;
        align-items:center;
        height: 660px;
        margin-bottom: 6px;
        >li {
          width: calc(33.3333333% - 20px);
          height: 300px;
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          align-items:center;
          justify-content:center;
          text-align:center;
          img {
            width: 100%;
          }
          &.fouth {
            width: calc(100% - 20px);
          }
        }
      }
      @media only screen and (max-width: 991px) {
        ul>li {
          width: calc(50% - 20px) !important;
        }
      }
      @media only screen and (max-width: 767px) {
        ul {
          flex-wrap: nowrap;
          height: 330px;
          justify-content:flex-start;
          >li {
            margin: 0 10px;
            width: calc(100% - 20px) !important;
          }
        }
      }
    }
  }
  .serv {
    .content {
      width: 600px;
      overflow: hidden;
      margin: 41px auto 36px;
    }
    @media only screen and (max-width: 991px) {
      .content {
        width: 300px;
      }
    }
    ul {
      padding: 14px 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      width: 600px;
      >li {
        width: 116px;
        height: 116px;
      }
      .img {
        height: 66px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .word {
        height: 40px;
        padding: 0 25px;
        font-size: 1.4em;
        line-height: 20px;
        text-align: center;
        display: table;
        >p {
          display: table-cell;
          vertical-align: middle
        }
      }
    }
  }
  .aboutus {
    background-color: #363636;
    color: #fff;
    padding: 45px 10px;
    .main {
      display: flex;
      justify-content: space-between;
    }
    .word {
      width: 638px;
      margin-right: 20px;
      .title {
        margin-top: 67px;
        color: #fff;
        border-color: #fff;
      }
      .content {
        margin: 60px 0;
        font-size: 1.4em;
        line-height: 3.4em;
        font-family: AVENIR-OBLIQUE;
        text-align: justify;
      }
    }
    .pic {
      width: 500px;
      height: 570px;
      background-image: url(../assets/images/main/aboutus.png);
      @media only screen and (max-width: 767px) {
        display: none;
      }
    }
    @media only screen and (max-width: 991px) {
      .main {
        flex-wrap: wrap;
        justify-content: center;
      }
      .word {
        margin-right: 0;
      }
    }
  }
  .ins {
    .main {
      overflow: hidden;
    }
    ul {
      height: 340px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media only screen and (max-width: 991px) {
        width: 200%;
      }
      @media only screen and (max-width: 767px) {
        width: 400%;
      }
      >li {
        cursor: pointer;
        width: calc(25% - 20px);
        height: 280px;
        display: flex;
        overflow: hidden;
        justify-content: center;
        align-items: center;
      }
      .img {
        position: relative;
        .info {
          transition: all .3s;
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          font-size: 1.4em;
          height: 100%;
          color: #fff;
          background-color:rgba(0, 0, 0, 0.3);
          padding: 0 45px 0 35px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          &:hover {
            opacity: 1;
          }
          .name {
            width: 100%;
            margin-bottom: 20px;
            line-height: 24px;
          }
          .msg {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
  .container {
    .tran {
      transition: all 0.5s;
    }
    .list .el-row {
      overflow: hidden;
      padding: 5px 0;
      display: flex;
      margin-left: 0 !important;
      margin-right: 0 !important;
      >.el-col {
        flex-shrink: 0;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    .el-dialog__wrapper,.detail,.v-modal {
      display: none;
    }
    body {
      padding-right: 0!important;
      overflow: auto!important;
    }
  }
  .el-dialog.discount {
    border: 1px solid #000;
    border-radius: 0;
    font-weight: 500;
    padding: 30px 60px 60px;
    .el-dialog__title {
      font-size: 36px;
    }
    .el-dialog__body {
      padding-top: 20px;
      .tip {
        font-size: 18px;
      }
      .discountForm {
        .el-form-item {
          margin-bottom: 16px;
        }
        .el-form-item__label {
          margin-top: 30px;
        }
      }
    }
    .el-button--primary {
      font-size: 18px;
      width: 244px;
    }
    .el-checkbox__input {
      transform: translateY(-34px);
      &.is-checked {
        span {
          background-color: #151515;
          border-color: #151515;
        }
      }
      >span {
        width: 20px;
        height: 20px;
        border-color: #151515;
        &::after {
          width: 6px;
          height: 12px;
          left: 5px;
        }
      }
    }
    .el-checkbox__label {
      width: 600px;
      font-size: 14px;
      white-space: normal;
      color: #565656 !important;

    }
  }
</style>
