<script setup>
import { defineProps } from 'vue';
import ArrowIcon from "@/components/icons/ArrowIcon.vue"

const props = defineProps({
    imgSrc: String,
    imgDesc: String,
    title: String,
    techStack: String,
    linkPath: String
})
</script>

<template>
    <a target="_blank" :href="linkPath">
        <img :src="imgSrc" :alt="imgDesc">
        <h3>{{ title }}</h3>
        <div class="text">
            <div class="flex">
                <p>{{ techStack }}</p>
                <ArrowIcon />
            </div>
        </div>
    </a>
</template>

<style lang="sass" scoped>
@import @/assets/main.sass

a
    width: 100%
    height: 100%
    text-decoration: none

    &:hover

        img
            box-shadow: 0 0 5px 2px rgba(245,245,245,0.25)
        
        .text
            opacity: 1
                

    img
        height: auto
        width: 100%
        border-radius: calc( $border-size - 12px )
        transition: 0.2s

    h3
        font-size: 24px
        color: $white
        margin: 0.5rem 0 1rem 0
        font-weight: 600

    .text
        opacity: 0.5
        transition: 0.2s

        .flex
            display: flex
            justify-content: space-between
            align-items: center
            gap: 2rem

            p
                color: $white
                line-height: 1.2
</style>