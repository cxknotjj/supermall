<template>
  <div class="hy-swiper">
    <div class="swiper">
      <slot></slot>
    </div>
    <div class="indicator">
      <div class="indi-item" :class="{active: index === currentIndex - 1}"   v-for="(item,index) in count" :key="index"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swiper1',
  data() {
    return {
      count: [1,2,3,4], //所有图片
      currentIndex : 0, //当前图片
      slideCount: 0,    //所有图片的个数
      swiperStyle:{    //轮播图样式

      },
      totalWidth: 0, // 轮播图的总宽度
      scrolling: false //动画是否在滚动
    }
  },
  props: {
    interval: {       //轮播间隔时间
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.handleDom()
      this.starttime()
    },3000)
  },
  methods: {
    starttime() {
      this.playTimer = window.setInterval(() => {
        console.log(this.currentIndex)
        this.scrollContent(-this.currentIndex * this.totalWidth);
        this.currentIndex++;
      },this.interval)
    },
    setTransfrom(position) {                    // 识别参数
      // this.swiperStyle.transform = `translate3d(${position}px,0,0)`
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
    },
    // 设置滚动动画
    scrollContent(currentPosition) {
      this.scorlling = true;
      // 设置动画时间
      this.swiperStyle.transition ='transform '+ this.animDuration + 'ms';
      this.setTransfrom(currentPosition);
      // 判断滚动到的位置
      this.checkPosition();
      this.scorlling = false;
    },
    // 获取swiper标签中插槽的个数
    handleDom() {
      let label = document.querySelector('.swiper');
      let swiperLabel = label.getElementsByClassName('Item');
      // 保存个数
      this.slideCount = swiperLabel.length;
      this.totalWidth = label.offsetWidth;
      this.swiperStyle = label.style;
      // this.setTransfrom(-this.totalWidth) 

    },
    checkPosition() {
      window.setTimeout(() => {
        if (this.currentIndex >= this.slideCount) {
          this.currentIndex = 0;
          // this.setTransfrom(0);
        }
        else if(this.currentIndex <= 0) {
          console.log('永远不可能')
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        // 结束移动后回调
        this.$emit('transitionEnd', this.currentIndex-1);
      },this.animDuration)
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