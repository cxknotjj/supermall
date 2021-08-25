<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // import BScroll from '@better-scroll/core';
  import BScroll from '@better-scroll/core';
  import ObserveDom from "@better-scroll/observe-dom";
  import Pullup from "@better-scroll/pull-up";
  BScroll.use(ObserveDom);
  BScroll.use(Pullup);
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type:Number,
        default:0
      },
      pullUpLoad: {
        type:Boolean,
        default:false
      }
    },
    data() {
      return {
        cxk: null,
        message: '哈哈',
      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.cxk = new BScroll(this.$refs.wrapper, {
        click: true,
        // observeDom: true,
        // observeImage: true,
        probeType:this.probeType,
        pullUpLoad: this.pullUpLoad,
      })
      // this.scroll.on('scroll', (position)=> {
      //   console.log(position);
      // })
      // 2.监听滚动位置
      if (this.probeType == 2 || this.probeType == 3) {
        this.cxk.on('scroll', (position)=> {
        this.$emit('scroll', position);
        });
      }
      // 3.下拉加载更多
      if (this.probeType == 2 || this.probeType == 3) {
        if (this.pullUpLoad) {
          this.cxk.on('pullingUp', () => {
          this.$emit('pullingUp');
          });
        }
      }
    },
    methods: {
      scrollTo(x,y,time){
        // 当this.cxk不为空时执行
        this.cxk && this.cxk.scrollTo(x,y,time);
      },
      // 封装执行多次下拉加载的方法。
      finishPullUp() {
        this.cxk.finishPullUp();
      },
      refresh() {
        this.cxk && this.cxk.refresh();
      },
      getY() {
        return this.cxk ? this.cxk.y : 0
      },
    }
  }
</script>

<style scoped>

</style>