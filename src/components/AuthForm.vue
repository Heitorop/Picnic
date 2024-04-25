<script setup lang="ts">
import { ref } from "vue";
import * as yup from "yup";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import { whiteColor, lightGreen } from "@/styles/variables";
import { useAppStore } from "@/store/app";

const $router = useRouter();

const appStore = useAppStore();

// const errors = ref();
const isReg = ref(false);

// create account
const createAccount = async () => {
  const { error } = await appStore.createAccount(
    email.value,
    name.value,
    password.value
  );
  if (error) {
    // errors.value = error;
  } else {
    appStore.setUser();
    $router.push("/");
  }
};
// login
const login = async () => {
  const { error } = await appStore.login(email.value, password.value);
  if (error) {
    // errors.value = error;
  } else {
    appStore.setUser();
    $router.push("/");
  }
};

// validation

const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().nullable(),
  password: yup.string().min(6).required(),
});

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit(() => {
  isReg.value ? createAccount() : login();
});

const [email] = defineField("email");
const [name] = defineField("name");
const [password] = defineField("password");
</script>

<template>
  <v-form fast-fail @submit.prevent="onSubmit">
    <fieldset>
      <h3>Email</h3>
      <v-text-field
        v-model="email"
        variant="solo"
        rounded
        :bg-color="whiteColor"
        id="email"
        clearable
      />
      <span v-if="errors.email">{{ errors.email }}</span>
      <div v-if="isReg">
        <h3>Name</h3>
        <v-text-field
          v-model="name"
          variant="solo"
          rounded
          :bg-color="whiteColor"
          id="name"
          clearable
        />
        <span v-if="errors.name">{{ errors.name }}</span>
      </div>
      <v-divider />
      <h3>Password</h3>
      <v-text-field
        v-model="password"
        variant="solo"
        rounded
        :bg-color="whiteColor"
        id="password"
        clearable
        type="password"
      />
      <span v-if="errors.password">{{ errors.password }}</span>
      <!-- <div v-if="errors">{{ errors }}</div> -->
    </fieldset>
    <div>
      <p @click="isReg = !isReg">{{ isReg ? "log in" : "sign in" }}</p>
      <v-btn
        v-if="isReg"
        size="60px"
        rounded
        :color="lightGreen"
        type="submit"
        elevation="0"
        block
        >sign in</v-btn
      >
      <v-btn
        v-else
        size="60px"
        rounded
        :color="lightGreen"
        type="submit"
        elevation="0"
        block
        >log in</v-btn
      >
    </div>
  </v-form>
</template>

<style scoped lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

.v-form {
  flex: 1;
  max-width: 696px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $background-color;
  border-radius: 24px;
  text-align: start;
  padding: 50px;
  min-width: 400px;

  & > div {
    text-align: center;
  }

  .v-divider {
    margin: 10px 0 15px;
  }

  fieldset {
    border: none;
  }

  h3 {
    font-size: 40px;
    line-height: 46px;
    padding-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 22px;
    color: $light-text-color;
    margin: 10px 0 18px;
    display: inline-block;
  }

  p {
    text-align: center;
  }

  .v-btn {
    text-transform: lowercase;
    max-height: 60px;

    &.v-btn--rounded {
      border-radius: 30px;
    }
  }

  @include mq("desktop") {
    min-width: 320px;
  }
}
</style>
