<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "@/plugins/supabase";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";
import { whiteColor, lightGreen } from "@/styles/variables";
import { storeToRefs } from "pinia";

const $router = useRouter()
const appStore = useAppStore();
const { user, isLogedIn } = storeToRefs(appStore)

const email = ref('');
const nickname = ref('')
const password = ref('')
const isReg = ref(true)

// create account
// async function createAccount() {
//     const { data, error } = await supabase.auth.signUp({
//         email: email.value, password: password.value, options: {
//             data: {
//                 name: nickname.value
//             }
//         }
//     })
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// }
// login
const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    });

    if (error) {
        console.log(error);
    } else {
        console.log(data);
        user.value = data.user;
        isLogedIn.value = true;
        $router.push('/')
    }
};
// see current user
// async function seeCurrentUser() {
//     const { data: { user } } = await supabase.auth.getUser()

//     console.log(user)
// }
// logout
// async function logout() {

//     const { error } = await supabase.auth.signOut()
//     if (error) {
//         console.log(error)
//     } else {
//         console.log('Logout has been seccessful')
//     }
// }

</script>

<template>
    <v-form fast-fail>
        <fieldset>
            <h3>Email</h3>
            <label for="email">Email</label>
            <v-text-field v-model="email" variant="solo" rounded :bg-color="whiteColor" id="email" clearable />
            <div v-if="isReg">
                <h3>Name</h3>
                <label for="name">Email</label>
                <v-text-field v-model="nickname" variant="solo" rounded :bg-color="whiteColor" id="name" clearable />
            </div>
            <v-divider />
            <h3>Password</h3>
            <label for="password">Password</label>
            <v-text-field v-model="password" variant="solo" rounded :bg-color="whiteColor" id="password" clearable
                type="password" />
        </fieldset>
        <div>
            <p @click="isReg = !isReg">{{ isReg ? 'Log in' : 'Sign up' }}</p>
            <v-btn v-if="isReg" @click.prevent="login" size="60px" rounded :color="lightGreen" type="submit"
                elevation="0" block>reg</v-btn>
            <v-btn v-else @click.prevent="login" size="60px" rounded :color="lightGreen" type="submit" elevation="0"
                block>login</v-btn>
        </div>

        <!-- <v-btn @click.prevent="seeCurrentUser" size="60px" rounded :color="lightGreen" type="submit" elevation="0"
            block>seeCurrentUser</v-btn>
        <v-btn @click.prevent="logout" size="60px" rounded :color="lightGreen" type="submit" elevation="0"
            block>logout</v-btn> -->

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

    &>div {
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
    }

    label,
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

    @include mq('desktop') {
        min-width: 320px;
    }

}
</style>