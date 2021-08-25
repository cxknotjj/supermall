<template>
  <div class="bar">
    <div class="button-all">
      <button-a :is-checked="isSelectAll" @click.native="checkclick" />
      <span class="span">全选</span>
    </div>
    <div class="info">
      合计{{totalPrice}}
    </div>
    <div @click="computed" class="length">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import buttonA from "components/content/checkButton/checkButton";
export default {
  components: {
    buttonA
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.cartList.filter(item => {
        return item.checked
      }).reduce((p, i) => {
        return p + i.price * i.count;
      },0)
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    // 全选按钮
    isSelectAll() {
      // return !(this.cartList.filter(item => !item.checked).length)
      if (this.cartList.length === 0) return false; 
      // 这里的find找的是!item.checked为true的属性

      // 找到false输出true，找到true输出false
      return !this.cartList.find(item => !item.checked);
    },

  },
  methods: {
    checkclick() {
      // 判断全选
      if (this.isSelectAll){
        // this.cartList.forEach(item => item.checked = false);
        for (let i = 0; i < this.cartList.length; i++) {
          this.cartList[i].checked = false;
        }
        // this.cartList.checked= !this.cartList.checked;
      }
      else {
        // this.cartList.forEach(item => item.checked = true);
        for (let i = 0; i < this.cartList.length; i++) {
          this.cartList[i].checked = true;
        }

      }
    },
    computed() {
      // 找到true不理会，找到false才执行。
      if (!this.cartList.find(item => item.checked)) {
        this.$toast.show('您没有选中一个商品');
      }
      else {
        this.$toast.show('请结账');
      }
    }
  }
}
</script>

<style scoped>
  .bar {
    position:absolute;
    height:40px;
    bottom:49px;
    left:0px;
    right:0px;
    line-height:40px;
    background-color:#eee;
    display:flex;
  }
  .button-all {
    width:60px;
    /* height:30px; */

    margin-left:10px;
    display: flex;
  }
  .span {
    margin-left:5px;
  }
  .info {
    flex:1;
    margin-left:30px;
  }
  .length {
    width:80px;
    background-color:red;
    text-align:center;
  }
</style>