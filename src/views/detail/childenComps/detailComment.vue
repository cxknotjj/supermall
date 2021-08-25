<template>
  <div v-if="comment.content">
    <div class="topHidden">
      <span class="topLeft">用户评价</span>
      <span class="topRight">更多</span>
    </div>
    <div class="comment">
      <div class="imgover">
        <div class="avatar">
          <img :src="comment.user.avatar">
        </div>
        <span>{{comment.user.uname}}</span>
      </div>
      <span>{{comment.content}}</span>
      <div class="time">{{comment.created | asa}}</div>
      <div class="commentImg">
        <img v-for="img in comment.images" :src="img">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "common/utils"
export default {
  name:'detilShopInfo',
  props: {
    comment: {
      type: Object,
    }
  },
  filters: {
    asa(aa) {
      return formatDate(aa,'yyyy-MM-dd hh');
    }
  }
}
</script>

<style scoped>
.topHidden{
  padding:5px;
  padding-top:20px;
  border-top: 1px solid gray;
}
.topLeft {
  position:relative;
  top:-10px;
}
.topRight {
  float: right;
  line-height: 5px;
}
.comment {
  padding:5px;
  padding-top:20px;
  border-top: 1px solid gray;
}
.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow:hidden;
}
.avatar img {
  width: 70px;
  height: 70px;
}
.imgover {
  display:flex;
  padding-bottom:20px;
}
.imgover span {
  position:relative;
  bottom: -30px;
  margin-left:20px;
}
.comment .time {
  color:gray;
  font-size:14px;
}
</style>