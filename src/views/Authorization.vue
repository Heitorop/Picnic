<script setup lang="ts">
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import Keys from 'assets/kyes.svg'

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Succes");
      router.push("/rent");
    })
    .catch((error) => {
      console.log(error.code);
    });
};
</script>

<template>
  <h1>Office login</h1>
  <div class="auth-wrapper">
    <div>
      <v-img width='648px' :src="Keys" alt="keys" />
    </div>
    <v-form fast-fail @submit.prevent='register'>
      <v-text-field v-model="email" label="First name"></v-text-field>

      <v-text-field
        type="password"
        v-model="password"
        label="Last name"
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/mixins";

.auth-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  column-gap: 50px;

  .v-form {
    width: 100%;
    max-width: 696px;
  }
}

h1 {
  font-size: 66px;
  line-height: 72px;
  text-align: start;
  padding: 70px 0 45px 0;

  @include mq("tablet") {
    font-size: 56px;
    line-height: 62px;
    padding: 50px 0 25px 0;
  }

  @include mq("mobile") {
    font-size: 28px;
    line-height: 34px;
    padding: 30px 0 15px 0;
  }
}
</style>
