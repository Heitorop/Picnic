// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "@/plugins/supabase";
import { User } from "@supabase/supabase-js";


export const useAppStore = defineStore("mainStore", () => {
  const isLogedIn = ref(false);
  const user = ref<User>();

  return { isLogedIn, user };
});
