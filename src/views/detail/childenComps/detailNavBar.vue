<template>
  <div>
    <nav-bar>
      <div slot="left">
        <div class="fa fa-backward" @click="iconBack"></div>
      </div>
      <div slot="center" class="tab">
        <div class="tab-content" :class="{active: index === currentIndex}" v-for ="(item,index) in titles" @click="tabclick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar.vue";
export default {
  name: 'detailNavBar',
  data() {
    return {
      titles: ['详情','商品','参数','推荐'],
      currentIndex: 0
    }
  },
  components: {
    navBar
  },
  methods: {
    tabclick(index) {
      this.currentIndex = index;
      this.$emit('positionClick',index)
    },
    iconBack() {
      this.$router.back();
      
    }
  }
}
</script>

<style scoped>
  .tab {
    display:flex;
    font-size: 12px;
    padding-left: 50px;
    width: 70%;
  }
  .tab-content {
    flex:1;
  }
  .active{
    color:pink;
  }
  .fa {
    padding-left: 8px;
  }
</style>