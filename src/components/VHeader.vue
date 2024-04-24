<script setup lang="ts">
import { useRouter } from 'vue-router';
import { backgroundColor } from "@/styles/variables";
import logo from 'assets/Logo.svg'
import userIcon from 'assets/user.svg'
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';


const $router = useRouter();

const appStore = useAppStore()
const { isLogedIn, user } = storeToRefs(appStore)

const goToAuth = () => $router.push('authentication')
</script>

<template>
  <div class="header">
    <img :src="logo" alt="logo" />
    <span v-if="isLogedIn">{{ user?.email }}</span>
    <v-btn v-else aria-label="auth" flat rounded :color="backgroundColor" @click="goToAuth">
      <template v-slot:prepend>
        <img alt="user icon" :src="userIcon" />
      </template>
      Log in
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/mixins";
@import '../styles/variables.scss';

.header {
  display: flex;
  justify-content: space-between;

  max-height: 80px;
  padding: 15px 20px;
  background-color: $white;
  border-radius: 0px 0px 24px 24px;

  .v-btn {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    padding: 10px 22px;
  }

  @include mq('mobile') {
    min-height: 48px;
    padding: 10px;

    .v-btn {
      font-size: 14px;
      line-height: 20px;
      padding: 7px 20px;
    }
  }
}
</style>
