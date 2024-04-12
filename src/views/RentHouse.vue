<script setup lang="ts">
import Map from '@/components/Map.vue';
</script>

<template>
  <h1>
    Choose a house
  </h1>
  <Map />
</template>

<style scoped lang="scss">
@import '../styles/mixins.scss';

h1 {
  font-size: 66px;
  line-height: 72px;
  text-align: start;
  padding: 70px 0 45px 0;

  @include mq("tablet") {
    font-size: 56px;
    line-height: 62px;
    padding: 50px 0 25px 0;
  }

  @include mq("mobile") {
    font-size: 28px;
    line-height: 34px;
    padding: 30px 0 15px 0;
  }
}
</style>