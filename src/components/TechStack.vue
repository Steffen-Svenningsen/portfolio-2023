<script setup></script>

<template>
    <div class="folder">
        <div>
            <h3 v-motion-fade-visible-once :delay="200">" As a web developer it's crucial to learn new stuff and keep up with technologies.</h3>
            <div class="tools">
                <u>Tools I tend to use when designing and developing web experiences</u>
                <h4><span class="green">Vue</span> - <span class="blue">React</span> - Figma - <span class="purple">Sass</span> - JavaScript - TypeScript - <span class="pink">Photoshop</span> - Shopify - PUG - <span class="red">GitHub</span> - WordPress - LottieFiles - <span class="orange">Motion One</span> - Swiper.js - PWA</h4>
            </div>
        </div>
        <div>
            <img src="/public/images/portrait.webp" alt="Steffen Svenningsen">
            <a href="#contact">Say Hi! <span>👋🏻</span></a>
        </div>
    </div>
</template>

<style lang="sass" scoped>
@import @/assets/main.sass

.folder
    width: 100%
    height: 100%
    border-radius: 0 $border-size $border-size $border-size
    background: $grey
    padding: 1.25rem
    box-sizing: border-box
    display: flex
    position: relative
    gap: 2rem
    justify-content: space-between
    flex-wrap: wrap

    &::before
        content: "| MY TECH STACK"
        position: absolute
        background: $grey
        width: 320px
        height: 32px
        padding: 1.25rem
        border-radius: $border-size 0 0 0
        top: 0
        left: 0
        transform: translateY(-48px)
        font-weight: 500

    &::after
        content: ""
        position: absolute
        width: 0
        height: 0
        border-style: solid
        border-width: 48px 0 0 48px
        border-color: transparent transparent transparent $grey
        top: 0
        transform: translateY(-48px)
        left: 360px

    div
        display: flex
        flex-direction: column
        
        img
            width: 100%
            height: auto
            max-width: 500px
            border-radius: 12px
            border: 1px solid $black
        
        a
            text-decoration: none
            padding: 1rem 1.25rem
            border: 1px solid $black
            border-radius: 12px
            width: fit-content
            margin-left: auto
            margin-top: 1rem
            background: $white
            color: $black
            transition: 0.2s

            span
                margin-left: 0.5rem
                transition: 0.2s
                display: inline-block

            &:hover
                span
                    animation: wave 0.5s forwards

        h3
            margin-top: 4rem
            font-size: clamp(28px, 4vw, 48px)
            font-weight: 600
            max-width: 700px
            margin-bottom: 2rem

        .tools
            margin-top: auto
            max-width: 700px

            u
                opacity: 0.60

            h4
                margin-top: 1rem
                font-size: clamp(20px, 2vw, 36px)
                font-weight: 700
                line-height: 1.15

                .green
                    color: $green

                .blue
                    color: $blue

                .orange
                    color: $orange

                .red
                    color: $red

                .purple
                    color: $purple

                .pink
                    color: $pink


@keyframes wave
    0%
        transform: rotate(0)
    50%
        transform: rotate(-15deg)
    100%
        transform: translate(90deg)

@media (max-width: 740px)
    .folder

        &::before
            width: 105px
            font-size: 12px

        &::after
            left: 145px
</style>