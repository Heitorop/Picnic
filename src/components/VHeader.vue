<script setup lang="ts">
import Logo from 'assets/Logo.svg'
</script>

<template>
  <div class="header">
    <img :src="Logo" />
    <button>Log in</button>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';

.header {
  display: flex;
  justify-content: space-between;

  max-height: 80px;
  padding: 15px 20px;
  background-color: $white;
  border-radius: 0px 0px 24px 24px;
}
</style>
