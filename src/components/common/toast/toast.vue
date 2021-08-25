<template>
  <div class="toast" v-show="isShow">
    <div>
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   message: {

  //   },
  //   isShow: {
  //     type:Boolean,
  //     default() {
  //       return false
  //     }
  //   }
  // },
  data() {
    return {
      message: '',
      isShow:false,
    }
  },
  methods: {
    show(message='一段文字',delay=2000) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.message= ''
        this.isShow = false;
      }, delay);
    }
  },
  created() {
    // setInterval(() => {
    //   console.log(this.show);
    // },1000)
  },
}
</script>
<style scoped>
  .toast {
    position:fixed;
    transform: translate(-50%,-50%);
    top:50%;
    left:50%;
    color:white;
    padding: 8px 10px;
    transition:1s;
    background-color:rgba(0,0,0,0.75);
    z-index: 999;
  }
</style>