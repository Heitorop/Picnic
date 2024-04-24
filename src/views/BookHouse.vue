<script setup lang="ts">
import bookingImg from 'assets/bookingImg.svg'
import VCalendar from '@/ui/calendar/index.vue'
import { useDisplay } from "vuetify/lib/framework.mjs";

const { lg, xl, xxl } = useDisplay()
</script>

<template>
  <h1>Book house {{ $route.params.id }}</h1>
  <div class="booking-wrapper">
    <div class="booking-img" v-if="lg || xl || xxl">
      <v-img max-width="520px" max-height="648px" :src="bookingImg" alt="image" />
    </div>
    <VCalendar />
  </div>
</template>

<style scoped lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

.booking-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: $white;
  justify-content: center;
  max-height: 865px;
  column-gap: 50px;
  padding: 50px;
  border-radius: 24px;

  .booking-img {
    display: flex;
    align-items: center;
    background-color: $background-color;
    padding: 130px 220px;
    border-radius: 24px;
    width: 100%;
    max-width: 984px;

  }
}

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