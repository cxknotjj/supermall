import backTop from "components/content/backtop/backTop";
import {delayed} from "./utils";
export const itemList = {
  data() {
    return {
      itemImageLoad: null
    }
  },
  mounted() {
    const func = delayed(this.$refs.scroll.refresh,500);
    this.itemImageLoad = ()=> {
      func()
    }
    // 监听图片是否加载完成
    this.$bus.$on('itemImgLoad',this.itemImageLoad);
  }
}

export const LoadbackTop = {
  methods: {
    backclick() {
      this.$refs.scroll.scrollTo(0,0);
    },
    listenTop(position) {
      this.ishowBacktop = (-position.y) > 1000;
    }
  },
  components: {
    backTop
  },
  data() {
    return {
      ishowBacktop:false,
    }
  }
}