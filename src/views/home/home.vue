<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
      <!-- :probeType中：的作用是确定传入参数的类型，不加：会传入一个字符串 -->
    <scroll ref="scroll" :probeType="3" :pullUpLoad="true" @pullingUp="pullingUp" @scroll="scrollPosition" >
      <home-swiper :banners="banners"></home-swiper>
      <recommendview :recommend="recommend"></recommendview>
      <feature></feature>
      <tab-control @itemclick="animate" class="staic" :titles="['流行','款式','样式']"></tab-control>
      <goodlist :Gooditem="goods[currentindex].list"></goodlist>
    </scroll>
            <!-- 监听组件点击 -->
    <backTop @click.native="backclick" v-show="ishowBacktop" />
  </div>
</template>

<script>
// import swiper from "components/common/swiper1/swiper1";
// import swiperItem from "components/common/swiper1/swiperItem1";

import feature from "./childComps/FeatureView";
import HomeSwiper from "./childComps/swipertop";
import Recommendview from "./childComps/Recommendview";

import goodlist from 'components/content/goods/goodlist';
import TabControl from "components/content/tabControl/TabControl";
import backTop from "components/content/backtop/backTop";
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll";

import {getHomeMultidata,getHomeGoods} from "network/home.js";


export default {
  name:'home',
  components: {
    HomeSwiper,
    Recommendview,
    feature,
    TabControl,
    NavBar,
    goodlist,
    Scroll,
    backTop,
  },
  data() {
    return {
      banners:[],
      recommend:[],
      goods: {
        new: {
          list: [],
          page: 0,

        },
        sell: {
          list: [],
          page: 0,
        },
        pop: {
          list: [],
          page: 0,
        }
      },
      ishowBacktop:false,
      currentindex: 'pop',
    }
  },
  // 生命周期函数
  created() {
    this.getHomeMultidatas()
    this.getHomeGood('sell');
    this.getHomeGood('pop');
    this.getHomeGood('new');
    this.$bus.$on('itemImgLoad',()=> {
      this.$refs.scroll.refresh();
    })
  },
  methods: {
    //
    // 事件监听相关代码
    //
    animate(index) {
      switch (index) {
        case 0 :
          this.currentindex = "pop"
          break
        case 1 :
          this.currentindex = "new"
          break
        case 2 :
          this.currentindex = "sell"
      }
    },
    backclick() {
      console.log('牛蛙');
      this.$refs.scroll.scrollTo(0,0);
      console.log(this.$refs.scroll.message)
    },
    scrollPosition(p) {
      // console.log(p);
      this.ishowBacktop = (-p.y) > 1000;
    },
    pullingUp() {
      // this.getHomeGood(this.currentindex);
      // this.$refs.scroll.finishPullUp();
    },
    //
    // 网络请求相关代码
    //
    getHomeMultidatas() {
      getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      }).catch(err => {
      console.log(err)
    })
    },
    getHomeGood(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        this.goods[type].page += 1;
        // 写法一
        // for (let i = 0; i < res.data.list.length; i++) {
        //   this.goods[type].list.push(res.data.list[i]);
        // }
        // 写法二
        this.goods[type].list.push(...res.data.list);
      })
    },
  }
}
</script>

<style>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: pink;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .nav-bar{
    /* position:absolute;
    top:0px;
    left:0px;
    right:0px; */
  }
  #hy-swiper {
    /* padding-top: 44px; */
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
    background-color:white;
  }
  /*神一般的bug*/
  .wrapper {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>