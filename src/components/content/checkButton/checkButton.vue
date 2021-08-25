<template>
  <div class="buttonof">
    <i ref="icon" class="fa fa-battery-empty"></i>  
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type:Boolean,
      default:true
    }
  },
  data() {
    // 这里有问题，但是我不会解决
    return {
      // checked: this.isChecked,
    }
  },
  watch: {
    isChecked: function (newValue,oldValue) {
      console.log(this.isChecked + '是我干的')
      if (this.isChecked) {
        this.$refs.icon.className="fa fa-battery-4";
      }
      else {
        this.$refs.icon.className="fa fa-battery-empty";
      }
    }
  },
  methods: {
    buttonClick() {
      // console.log(this.isChecked)
      // console.log(this.checked)
      // if (this.isChecked) {
      //   this.$refs.icon.className="fa fa-battery-4";
      // }
      // else {
      //   this.$refs.icon.className="fa fa-battery-empty";
      // }
    }
  }
}
</script>

<style>
  .buttonof {
    width:20px;
    height:20px;
    border-radius: 50%;
    color:pink;
    /* background-color:pink; */
  }
</style>