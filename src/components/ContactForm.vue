<template>
    <form action="https://formsubmit.co/d89f1384369cf512ca4e61d86924c142" method="POST">
        <div>
            <input type="text" placeholder="Name" name="name" required>
            <input type="email" placeholder="Email" name="email" required>
            <input type="hidden" name="_next" value="https://svenningsen.dev/thank-you">
        </div>
        <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
        <button type="submit">Send</button>
    </form>
</template>

<style lang="sass" scoped>
@import @/assets/main.sass

form
    display: flex
    flex-direction: column
    width: 100%

    div
        display: flex
        gap: 10%

        input
            width: 45%
            padding: 0.5rem
            border: none
            border-bottom: 1px solid $grey
            background: none
            outline: none
            color: $white
            border-radius: 0

    textarea
        resize: none
        font-family: 'Inter', sans-serif
        padding: 0.5rem
        border-radius: 8px
        outline: none
        margin: 2rem 0 1rem 0

    button
        padding: 1.25rem 0.75rem
        font-weight: 500
        font-family: 'Inter', sans-serif
        cursor: pointer
        border-radius: 8px
        font-size: 1rem
        border: none
        background: $grey
        color: #1b1b1b

</style>