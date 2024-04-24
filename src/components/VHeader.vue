<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { backgroundColor } from "@/styles/variables";
import logo from "assets/Logo.svg";
import userIcon from "assets/user.svg";
import { useAppStore } from "@/store/app";

const $router = useRouter();

const appStore = useAppStore();
const { user } = storeToRefs(appStore);
const goToAuth = () => $router.push("authentication");

const logout = () => {
  appStore.logout();
};
</script>

<template>
  <div class="header">
    <img :src="logo" alt="logo" />
    <div v-if="user">
      {{ user.user_metadata.name }}
      <v-btn @click="logout">Log out</v-btn>
    </div>
    <v-btn
      v-else
      aria-label="auth"
      flat
      rounded
      :color="backgroundColor"
      @click="goToAuth"
    >
      <template v-slot:prepend>
        <img alt="user icon" :src="userIcon" />
      </template>
      Log in
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/mixins";
@import "../styles/variables.scss";

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

  @include mq("mobile") {
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
