<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
      <tab-control v-show="istab" class="tab-control" ref="tabControl2" @itemclick="animate" :titles="['流行','款式','样式']"></tab-control>
      <!-- :probeType中：的作用是确定传入参数的类型，不加：会传入一个字符串 -->
    <scroll ref="scroll" :probeType="3" :pullUpLoad="true" @pullingUp="pullingUp" @scroll="scrollPosition" >
      <home-swiper :banners="banners" @imageLoad="imageLoad"></home-swiper>
      <recommendview :recommend="recommend"></recommendview>
      <feature></feature>
      <tab-control v-show="!istab" ref="tabControl1" @itemclick="animate" class="staic" :titles="['流行','款式','样式']"></tab-control>
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
import {delayed} from "common/utils.js";
import NavBar from "components/common/navbar/NavBar.vue";
import {itemList} from "common/mixin";
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
      top: 0,
      istab: false,
      saveY: 0,
    }
  },
  // 生命周期函数
  created() {

    this.getHomeMultidatas()
    // 请求数据
    this.getHomeGood('sell');
    this.getHomeGood('pop');
    this.getHomeGood('new');
  },
  mixins:[itemList]
  ,
  mounted() {
    console.log('我是mounted');
  },
  destroyed() {
    this.$bus.$off('itemImgLoad',this.itemImageLoad);
  },
  // 悬浮框bug解决（有备无患）
  activated() {
    // 1.刷新滚动条高度
    this.$refs.scroll.refresh();
    // 2.设置滚动条位置
    this.$refs.scroll.scrollTo(0,this.saveY,0);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getY();
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    imageLoad() {
        // 流行框距离顶部的距离
      this.top = this.$refs.tabControl1.$el.offsetTop;
    },
    backclick() {
      this.$refs.scroll.scrollTo(0,0);
    },
    scrollPosition(p) {
      this.ishowBacktop = (-p.y) > 1000;
      this.istab = (-p.y) > this.top;
    },
    pullingUp() {
      this.getHomeGood(this.currentindex);
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
        // 下拉加载更多
        this.$refs.scroll.finishPullUp();
      })
    },
  }
}
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: pink;
    color: #fff;
    /* 在浏览器使用原生滚动时，为了让导航不跟随页面一起滚动 */ 
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0; */
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
  .after {
    position:fixed;
    top:44px;
    left:0;
    right:0;
  }
  .tab-control{
    position:relative;
    top:0px;
    left:0;
    right:0;
    z-index:5
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