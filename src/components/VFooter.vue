<script setup lang="ts">
import Fb from 'assets/fb.svg'
import Inst from 'assets/inst.svg'
</script>

<template>
    <div class="footer">
        <div>
            <a href="#">privacy policy</a>
            <a href="#">public offer</a>
        </div>
        <div>
            <img :src="Fb" />
            <img :src="Inst" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.footer {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;

    a {
        font-size: 16px;
        line-height: 22px;
    }

    a,
    img {
        padding-right: 15px;

        &:last-child {
            padding-right: 0;
        }
    }

    @include mq("mobile") {
    padding-top: 15px;
  }
}
</style>
