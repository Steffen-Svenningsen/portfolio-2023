<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    imgSrc: String,
    imgAlt: String,
    title: String,
})
</script>

<template>
    <div>
        <img :src="imgSrc" :alt="imgAlt">
        <h3>{{ title }}</h3>
    </div>
</template>

<style lang="sass" scoped>
div
    display: flex
    flex-direction: column
    justify-items: center
    align-items: center
    width: 230px

    h3
        margin-top: 2rem
</style>