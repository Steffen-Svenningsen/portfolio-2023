<script setup>

</script>

<template>
    <div class="page">
        <u>Yayy, I'm excited to see your message</u>
        <h1>I've recieved your message. Hang in thight and I'll reply as soon as possible!</h1>
        <a href="/">Go back</a>
    </div>
</template>

<style lang="sass" scoped>
@import @/assets/main.sass

.page
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    height: 100vh
    font-family: "Inter", sans-serif

    u
        color: $white
        opacity: 0.5
        margin: 10rem 0 1rem 0
        font-size: 12px

    h1
        font-size: clamp(28px, 3vw, 64px)
        color: $white
        text-align: center
        max-width: 700px
        line-height: 1.2
        font-weight: 500

    a
        text-decoration: none
        padding: 1.15rem 1.65rem
        border-radius: 12px
        width: fit-content
        background: $grey
        color: $black
        font-weight: 600
        transition: 0.2s
        margin-top: 2rem
        border: 1px solid $grey

        &:hover
            border: 1px solid $white
            color: $white
            background: #1b1b1b
</style>