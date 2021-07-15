<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper>
      <swiper-item >
        <a :href="banners[0].link">
          <img :src="banners[0].image">
        </a>
      </swiper-item>
      <swiper-item >
        <a :href="banners[1].link">
          <img :src="banners[1].image">
        </a>
      </swiper-item>
      <swiper-item >
        <a :href="banners[2].link">
          <img :src="banners[2].image">
        </a>
      </swiper-item>
      <swiper-item>
        <a :href="banners[3].link">
          <img :src="banners[3].image">
        </a>
      </swiper-item>
    </swiper>
    <!-- <home-swiper :banners="banners"></home-swiper> -->
  </div>
</template>

<script>
import swiper from "components/common/swiper1/swiper1";
import swiperItem from "components/common/swiper1/swiperItem1";
// import HomeSwiper from "./childComps/swipertop";
import NavBar from "components/common/navbar/NavBar.vue";
import {getHomeMultidata} from "network/home.js";
export default {
  name:'home',
  components: {
    NavBar,
    // HomeSwiper,
    swiper,
    swiperItem
  },
  data() {
    return {
      banners:[],
      recommend:[]
    }
  },
  // 生命周期函数
  created() {
    getHomeMultidata().then(res => {
      console.log(res.data);
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    }).catch(err => {
      console.log(err)
    })
    // 下边不能打印新result的数据，因为上边的操作是异步操作。
    // console.log(this.result);
  }
}
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
    color:#ffff;
  }
</style>