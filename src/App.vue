<script setup lang="ts">
import VHeader from 'components/VHeader.vue'
import VFooter from 'components/VFooter.vue'
import 'styles/style.scss';
</script>

<template>
  <v-container fluid>
    <VHeader />
    <main>
      <router-view />
    </main>
    <VFooter />
  </v-container>
</template>

<style scoped lang="scss">
.v-container {
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

main {
  flex: 1;
}
</style>
