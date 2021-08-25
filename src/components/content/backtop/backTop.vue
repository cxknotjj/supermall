<template>
  <div class="icon">
    <i class="fa fa-stop-circle-o fa-3x"></i>
  </div>
</template>

<script>
export default {
  name:'backTop',
}
</script>

<style>
  .icon {
    width: 30px;
    height: 30px;
    position: fixed;
    bottom: 75px;
    right: 15px;
    z-index:20;
    color: rgba(184, 43, 43, 0.7);
  }
</style>