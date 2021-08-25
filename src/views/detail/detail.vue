<template>
  <div class="detail">
    <childnav-bar @positionClick="positionClick" class="nva-bar" ref="nav"/>
    <scroll ref="scroll" @scroll="getScrollY" :probeType="3"  class="content">
      <detail-swiper :topImage="topImage" />
      <detilBaseInfo :goods="goods" />
      <datilShopInfo :Shop="Shop" />
      <dataInfo ref="Parameters" @itemload="itemLoad" :data-info="dataInfo" />
      <productParameters ref="comment" :goods-info="GoodsInfo" />
      <comment :comment="comment" />
      <goods-list ref="list" :Gooditem = "recommends" />
    </scroll>
      <backTop @click.native="backclick" v-show="ishowBacktop" />
    <detailBottomBar @addToCart="ToCart"  />
    <!-- <toast @toastClick="4" :message="message" :show="isshow" /> -->
  </div>
</template>

<script>
import {getUnil,Goods,Shop,GoodsParam,getRecommends} from "network/detail";
// import detail from "network/detail"
import childnavBar from "./childenComps/detailNavBar" 
import detilBaseInfo from "./childenComps/detilBaseInfo"
import detailSwiper from "./childenComps/detailSwiper";
import datilShopInfo from "./childenComps/detilShopInfo";
import scroll from "components/common/scroll/Scroll";
import {delayed} from "common/utils.js";
import dataInfo from "./childenComps/detailInfo";
// import toast from "components/common/toast/toast";
import detailBottomBar from "./childenComps/detailBottomBar.vue";
import productParameters from "./childenComps/productParameters"
import comment from "./childenComps/detailComment"
import goodsList from "components/content/goods/goodlist";
import {itemList,LoadbackTop} from "common/mixin";
// 1.使用辅助函数
import { mapActions } from "vuex";
export default {
  name: 'detail',
  data() {
    return {
      iid: null,
      topImage: null,
      goods: {},
      Shop:{} ,
      dataInfo: {},
      GoodsInfo: {},
      comment: {},
      recommends: [],
      itemImageLoad: null,
      positionTop: [],
      getThemeTopY: null,
      currentIndex: 0,
    }
  },
  mixins:[itemList,LoadbackTop]
  ,
  created() {
    // 1.保存iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求数据
    getUnil(this.iid).then(res => {
      //3. 获取顶部图片
      this.topImage = res.result.itemInfo.topImages;
      const data = res.result;
      // 4.获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      // console.log(this.goods);
      // 5.创建店铺信息对象
      this.Shop = new Shop(data.shopInfo);
      // 6.获取展示图片
      this.dataInfo = data.detailInfo;
      // 7.获取参数信息
      this.GoodsInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);
      // .log(this.GoodsInfo);
      // 8.取出评论信息
      if (data.rate.cRate !== 0) {
        this.comment = data.rate.list[0]
      }
      // 9.防抖操作
      this.getThemeTopY = delayed(() => {
        this.positionTop = [];

        this.positionTop.push(0);
        this.positionTop.push(this.$refs.Parameters.$el.offsetTop);
        this.positionTop.push(this.$refs.comment.$el.offsetTop);
        this.positionTop.push(this.$refs.list.$el.offsetTop);
      },500);
    })
    //  3.请求推荐数据
    getRecommends().then(res => {
      this.recommends = res.data.list;
    })
  },
  mounted() {
  },
  // 在DOM渲染成功之后才执行（然并卵，这时图片还没加载好）
  updated() {

  },
  destroyed() {
    this.$bus.$off('itemImgLoad',this.itemImageLoad);
  },
  methods: {
    ...mapActions(['addCart']),
    itemLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
      // 获取组件距离顶部的高度(防抖操作)
      // clearTimeout(setTime);
      // let setTime = setTimeout(() => {
      //   this.positionTop = [];
      //   this.positionTop.push(0);
      //   this.positionTop.push(this.$refs.Parameters.$el.offsetTop);
      //   this.positionTop.push(this.$refs.comment.$el.offsetTop);
      //   this.positionTop.push(this.$refs.list.$el.offsetTop);
      //   console.log(this.positionTop);
      // },50)
    },
    // 传递购物车数据
    ToCart() {
      // 1.获取购物车要展示的信息。
      const product = {

      };
      product.image = this.topImage[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realyPrice;
      product.iid = this.iid;
      // 2.将购物车信息传入Vuex
      // 使用映射后的addCart来调用，addCart返回的是Promise（期约）
      this.addCart(product).then(res => {
        // console.log(res);
        // 2.1 使用以插件的形式封装的toast
        this.$toast.show(res);
        // console.log(this.$toast);

        // this.isshow = true;
        // this.message = res;
        // setTimeout(() => {
        //   this.isshow = false;
        // }, 1500);
      })
      // this.$store.dispatch('addCart',product).then(res => {
        // console.log(res);
      // })
    },
    // 1.更改详情页滚动条位置
    positionClick(index) {
      console.log(-this.positionTop[index])
      this.$refs.scroll.scrollTo(0,-this.positionTop[index],200);
    },
    // 2.获取滚动条位置
    getScrollY(position) {
      this.listenTop(position)
      // 变成正数了
      let positionY = -position.y;
      let length = this.positionTop.length;
      //      0                 100
      // positionTop[0]  ~ positionTop[1]
      //     100                400
      // positionTop[1]  ~ positionTop[2]
      //     400                800
      // positionTop[2]  ~ positionTop[3]
      //     800                1200
      // positionTop[3]  ~ positionTop[4]
      for (let i = 0; i < length; i++) {
        // if (this.positionTop[i] < positionY  &&  positionY < this.positionTop[i+1]){
        //   console.log(i);
        // }

        if ((this.currentIndex !== i) && ((i < length - 1 && this.positionTop[i] <= positionY && this.positionTop[i+1] > positionY) || 
            (i === length - 1 && this.positionTop[i] <= positionY))) {
              this.currentIndex = i;
              // console.log(this.currentIndex);
              this.$refs.nav.currentIndex = this.currentIndex;
            }
      }
    }
  },
  components: {
    childnavBar,
    detailSwiper,
    detilBaseInfo,
    datilShopInfo,
    scroll,
    dataInfo,
    productParameters,
    comment,
    goodsList,
    detailBottomBar,
  },
}
</script>

<style scoped>
  .bottom {
    border-bottom: 2px solid gray;
  }
  .detail {
    position:relative;
    background-color:#fff;
    height: 100vh;
  }
  .nva-bar {
    position: relative;
    z-index: 9;
  }
  .content{
    height: calc(100% - 44px -49px);
    overflow:hidden;
  }
</style>