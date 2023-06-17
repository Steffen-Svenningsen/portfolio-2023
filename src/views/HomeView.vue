<script setup>
</script>

<template>
  <main>
    <section class="hero-section">
      <div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;">
        <iframe src="https://streamable.com/e/k5owgb?autoplay=1&nocontrols=1" frameborder="0" width="100%" height="100%" allowfullscreen allow="autoplay" style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
        <div class="video-overlay">
        </div>
        <h1>Steffen <br> Svenningnsen.</h1>
        <h3>Challenging the <br> <span>norms of</span> web <br> design with <br> modern <br> technologies.</h3>
        <h6>Web designer & <br> Front-end developer</h6>
      </div>
    </section>
  </main>
</template>

<style lang="sass" scoped>
@import @/assets/main.sass

main
  width: 100%
  height: 100%

  section
    padding: 2rem

    iframe
      border-radius: $border-size

    .video-overlay
      position: absolute
      width: 100%
      height: 100%
      background: $black
      opacity: 50%
      border-radius: $border-size

  .hero-section

    h1, h3, h6
      position: absolute
      color: $white
      font-family: 'Inter', sans-serif

    h1
      font-size: clamp(28px, 6vw, 96px)
      font-weight: 600
      left: 1.25rem
      top: 1.25rem

    h3
      font-size: clamp(20px, 5vw, 64px)
      font-weight: 500
      right: 1.25rem
      top: 50%
      transform: translateY(-50%)
      text-align: right

      span
        border: 1px solid $white
        padding: clamp(0.25rem, 4%, 0.75rem)
        border-radius: $border-size
        line-height: 1.6

    h6
      font-size: clamp(14px, 4vw, 36px)
      left: 1.25rem
      bottom: 1.25rem
</style>
