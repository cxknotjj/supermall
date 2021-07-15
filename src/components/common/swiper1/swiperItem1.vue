<template>
  <div class="Item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'swiperItem1'
}
</script>

<style>
.Item {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}
.Item img {
  width: 100%;
}
</style>