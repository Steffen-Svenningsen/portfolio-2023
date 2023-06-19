<script setup>
import NewSkill from '@/components/NewSkill.vue';
import ContactForm from '@/components/ContactForm.vue';
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
    <section class="text-section">
      <h1><span class="first-line">With a passion for <span class="yellow-g">performance</span></span><span ref="second-line"> and an eye for <span class="green-g">aesthetics,</span></span><span ref="third-line"> I strive to develop</span><span ref="last-line"> seamless user-friendly <span class="purple-g">frontend solutions.</span></span></h1>
    </section>
    <section class="project-section">Project section</section>
    <section class="alternative-text-section">
      <h1 class="white-grey-text">
        The web changes every day at high speed. <span>So does the technology underneath.</span>
      </h1>
    </section>
    <section class="tech-stack-section">
      <div class="folder">Folder - show tech stack</div>
      <div class="learning-curve">
        <div class="skills">
          <h1>What I'm <br> learning <br> ATM</h1>
          <NewSkill imgSrc="/public/images/astro.png" imgAlt="Astro" title="Astro" />
          <NewSkill imgSrc="/public/images/contentful.png" imgAlt="Contentful" title="Contentful" />
          <NewSkill imgSrc="/public/images/spline.png" imgAlt="Spline" title="Spline" />
        </div>
      </div>
    </section>
    <section class="contact-section">
      <div class="contact-form">
        <h1>Let's talk<span style="color: #d9d9d9; opacity: 0.5;">.</span></h1>
        <ContactForm />
      </div>
      <div class="social-links">
        Socials
      </div>
    </section>
    <footer>
      <p>© Steffen Svenningsen 2023</p>
      <p>Designed and developed <br> by Steffen Svenningsen</p>
    </footer>
  </main>
</template>

<style lang="sass" scoped>
@import @/assets/main.sass

main
  width: 100%
  height: 100%
  font-family: 'Inter', sans-serif

  section
    margin-bottom: 8rem

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

  .text-section

    h1
      font-size: clamp(42px, 10vw, 96px)
      color: $white
      font-weight: 600

      .yellow-g
        background: linear-gradient(100deg, $yellow 45%, $orange 75%)
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent

      .green-g
        background: linear-gradient(100deg, $green 45%, $blue 75%)
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent

      .purple-g
        background: linear-gradient(100deg, $purple 45%, $red 75%)
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent


  .white-grey-text
    font-size: clamp(42px, 10vw, 96px)
    color: $white
    font-weight: 600

    span
      opacity: 0.5

  .tech-stack-section

    .learning-curve
      display: flex
      color: $white
      justify-content: space-between
      align-items: center
      gap: 4rem
      flex-wrap: wrap

      h1
        font-size: clamp(42px, 10vw, 96px)
        font-weight: 600
        border-right: 1px solid $grey
        padding-right: 2rem

      .skills
        display: flex
        flex-wrap: wrap
        align-items: center
        gap: 6rem
        justify-content: center

  .contact-section
    padding: 1.25rem
    border-radius: $border-size
    border: 1px solid $grey
    display: flex
    gap: 4rem
    flex-wrap: wrap

    .contact-form
      flex: 60%

      h1
        font-size: clamp(42px, 10vw, 96px)
        font-weight: 600
        color: $white
        margin-bottom: 4rem

    .social-links
      flex: 30%

  footer
    color: $grey
    border-top: 1px solid $grey
    padding-top: 2rem
    
    p
      margin-top: 1rem
      line-height: 1.3
      opacity: 0.5
      font-size: 12px

@media (max-width: 740px)

  .hero-section
    h3
      font-size: 14px !important
      transform: translate(35px, 15px) !important

  .skills
    h1
      text-align: center
      border-right: none !important
      padding-right: 0 !important
      padding-bottom: 2rem
      border-bottom: 1px solid $grey
</style>
