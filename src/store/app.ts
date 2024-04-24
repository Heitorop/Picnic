// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "@/plugins/supabase";
import { User } from "@supabase/supabase-js";

export const useAppStore = defineStore("mainStore", () => {
  const user = ref<User>();

  const createAccount = async (
    email: string,
    name: string,
    password: string
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });
    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }

    return { data, error };
  };

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }

    return { data, error };
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    } else {
      localStorage.clear();
      user.value = undefined;
      console.log("Logout has been seccessful");
    }
  };

  const setUser = () => {
    user.value = JSON.parse(localStorage.getItem("user") || '""');
  };

  return { user, createAccount, login, setUser, logout };
});
