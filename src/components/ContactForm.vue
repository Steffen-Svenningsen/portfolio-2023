<template>
    <form action="https://formsubmit.co/stef7625@gmail.com" method="POST">
        <div>
            <input type="text" placeholder="Name" name="name" required>
            <input type="email" placeholder="Email" name="email" required>
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
    gap: 2rem
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

    textarea
        resize: none
        font-family: 'Inter', sans-serif
        padding: 0.5rem

    button
        padding: 0.75rem
        font-family: 'Inter', sans-serif
        cursor: pointer
</style>