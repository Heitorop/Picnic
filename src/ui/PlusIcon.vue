<script setup lang="ts">
import { Color } from '@/types';
import { lightGreen, whiteColor } from '@/styles/variables';

interface Props {
    circleColor: Color
    pathColor: Color
}

withDefaults(defineProps<Props>(), {
    circleColor: whiteColor, pathColor: lightGreen
})
</script>
<template>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" :fill="circleColor" />
            <path
                d="M24.043 13C18.0011 13 13 17.9152 13 23.957C13 29.9989 18.0011 35 24.043 35C30.0848 35 35 29.9989 35 23.957C35 17.9152 30.0848 13 24.043 13ZM29.8438 25.2461H25.332V29.8438C25.332 30.5545 24.7532 31.1328 24.043 31.1328C23.3323 31.1328 22.7539 30.5545 22.7539 29.8438V25.2461H18.1562C17.4455 25.2461 16.8672 24.6677 16.8672 23.957C16.8672 23.2463 17.4455 22.668 18.1562 22.668H22.7539V18.1562C22.7539 17.4455 23.3323 16.8672 24.043 16.8672C24.7532 16.8672 25.332 17.4455 25.332 18.1562V22.668H29.8438C30.554 22.668 31.1328 23.2463 31.1328 23.957C31.1328 24.6677 30.554 25.2461 29.8438 25.2461Z"
                :fill="pathColor" />
        </svg>
</template>



<style lang="scss" scoped></style>