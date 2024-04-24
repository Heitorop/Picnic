<script setup lang="ts">
import dayjs from 'dayjs';
import { computed, ref } from 'vue'

const monthEmit = defineEmits<{ (e: 'selected', v: number): void }>()

const month = ref(dayjs().month())
const cMonth = computed(() => dayjs().month(month.value).format('MMMM'))

function modifyMonth(v: number) {
    month.value += v;
    monthEmit('selected', month.value)
}
</script>

<template>
    <div>
        <span>
            <v-icon icon="md:menu_left" @click="modifyMonth(-1)"></v-icon>
            {{ cMonth }}
            <v-icon icon="md:menu-right" @click="modifyMonth(1)"></v-icon>
        </span>
    </div>
</template>

<style scoped></style>