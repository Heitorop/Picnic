// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const isLogedIn = ref(false);
  const user = ref({data: {}, loggedIn: false});

  function SET_LOGGED_IN(value: boolean) {
    user.value.loggedIn = value;
  }

  function SET_USER(data: {}) {
    user.value.data = data;
  }

  return { isLogedIn, user, SET_LOGGED_IN, SET_USER };
});
