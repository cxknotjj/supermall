<template>
  <div class="hy-swiper">
    <div class="swiper">
      <slot></slot>
    </div>
    <div class="indicator">
      <!-- :class="{active: index === currentIndex-1}" -->
      <div class="indi-item"  v-for="(item,index) in count" :key="index"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swiper1',
  data() {
    return {
      count: [1,2,3,4], //所有图片
      currentIndex : 1, //当前图片
      slideCount: 0,    //所有图片的个数
      swiperStyle:{    //轮播图样式

      },
      totalWidth: null // 轮播图的总宽度
    }
  },
  props: {
    interval: {       //轮播间隔时间
      type: Number
    }
  },
  mounted: function () {
    settimeout(() => {
      this.handleDom()
      this.starttime()
    },3000)
  },
  methods: {
    starttime() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;

      })
    },
    // 获取swiper标签中插槽的个数
    handleDom() {
      let label = document.querySelector('.swiper');
      let swiperLabel = label.getElementsByClassName('Item');
      // 保存个数
      this.slideCount = swiperLabel.length;
      this.totalWidth = label.offsetWidth;
      this.swiperStyle = label.style;
    }
  }
}
</script>

<style>
.hy-swiper {
  overflow: hidden;
  position: relative;
  /* background-color: red; */
}
.swiper {
  display:flex;
  height: 200px;
}
.indicator {
  display:flex;
  position: absolute;
  bottom:8px;
  width: 100%;
  justify-content: center;
}
.indi-item {
  width: 8px;
  height: 8px;
  box-sizing: border-box;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  background-color: #fff;
  border-radius: 4px;
  margin: 0 3px;
}
.indi-item.active {
  background-color: rgba(212,62,46,1.0)
}
</style>