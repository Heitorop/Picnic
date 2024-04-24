<script setup lang="ts">
import dayjs from 'dayjs';
import { defineAsyncComponent, ref } from 'vue';

const Month = defineAsyncComponent(() => import('./Month.vue'));
const Dates = defineAsyncComponent(() => import('./Dates.vue'));

const selectedDateValue = ref(dayjs().date())
</script>

<template>
    <div class="calendar" v-bind="$attrs">
        <div class="calendar-wrapper">
            <Month />
            <!-- <Dates /> -->
        </div>
        <div><span>{{ `${selectedDateValue}/ `}}</span></div>
    </div>
</template>

<style scoped lang="scss">
.calendar {
    display: flex;

    &-wrapper {
        display: flex;
        flex-direction: column;
    }
}
</style>