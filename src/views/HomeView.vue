<script setup>
import NewSkill from '@/components/NewSkill.vue';
import ContactForm from '@/components/ContactForm.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import TechStack from '@/components/TechStack.vue';
</script>

<template>
  <main>
    <section class="hero-section">
      <div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;">
        <iframe src="https://streamable.com/e/k5owgb?autoplay=1&nocontrols=1" frameborder="0" width="100%" height="100%" allowfullscreen allow="autoplay" style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
        <div class="video-overlay">
        </div>
        <h1>Steffen <br> Svenningsen.</h1>
        <h3 class="desktop-h3-text">Challenging the <br> <span>norms of</span> web <br> design with <br> modern <br> technologies.</h3>
        <h6>Web designer & <br> Front-end developer</h6>
      </div>
      <div class="mobile-hero">
        <h3 class="mobile-h3-text">Challenging the <br> <span>norms of</span> web <br> design with <br> modern <br> technologies.</h3>
        <div class="line"></div>
        <div class="line-2"></div>
      </div>
    </section>
    <section class="text-section">
      <h1>
        <span class="first-line">With a passion for <span class="yellow-g" v-motion :initial="{ opacity: 0.1 }" :visibleOnce="{ opacity: 1 }" :delay="500">performance</span></span>
        <span class="second-line"> and an eye for <span class="green-g" v-motion :initial="{ opacity: 0.1 }" :visibleOnce="{ opacity: 1 }" :delay="1000">aesthetics,</span></span>
        <span class="third-line"> I strive to develop</span>
        <span class="last-line"> seamless user-friendly <span class="purple-g" v-motion :initial="{ opacity: 0.1 }" :visibleOnce="{ opacity: 1 }" :delay="1500">frontend solutions.</span></span>
      </h1>
    </section>
    <section class="project-section">
      <div class="project-row">
        <div class="flex-30">
          <ProjectCard title="Acera" imgSrc="/public/images/Acera.png" imgDesc="Acera" techStack="Vue, TypeScript, Contentful, DigitalOcean, Sass, Swiper.js" linkPath="https://acera.dk/" />
        </div>
        <div class="flex-60">
          <ProjectCard title="Pokémon App" imgSrc="/public/images/Pokemon.png" imgDesc="Pokémon App" techStack="Vue, JavaScript, PokeAPI, Sass, Axios" linkPath="https://svenningsen.dev/pokemon" />
        </div>
      </div>
      <div class="project-row flex-wrap">
          <ProjectCard class="card-item" title="Levels" imgSrc="/public/images/Levels.png" imgDesc="Levels" techStack="React, React-router, JavaScript, CSS, GetForm, Swiper.js" linkPath="https://svenningsen.dev/levels" />
          <ProjectCard class="card-item" title="Crypto App" imgSrc="/public/images/Crypto.png" imgDesc="Crypto App" techStack="Vue, JavaScript, Sass, Vue-router, Axios, CryptoCompare API" linkPath="https://svenningsen.dev/crypto" />
          <ProjectCard class="card-item" title="Zoo PWA" imgSrc="/public/images/Zoo.png" imgDesc="Zoo PWA" techStack="React, JavaScript, React-router, PWA, Firebase, Sass, Swiper.js" linkPath="https://svenningsen.dev/zoo-app" />
      </div>
      <div>
        <ProjectCard title="Zynaps" imgSrc="/public/images/Zynaps.png" imgDesc="Zynaps" techStack="WordPress, Yoast, ContactForm 7, Tideo, MegaMenu, Tribute Testimonials, CSS, HTML" linkPath="https://zynaps.dk" />
      </div>
    </section>
    <section class="alternative-text-section">
      <h1 class="white-grey-text">
        The web changes every day at high speed. <span>So does the technology underneath.</span>
      </h1>
    </section>
    <section class="tech-stack-section">
      <div class="folder-container">
        <TechStack />
      </div>
      <div class="learning-curve">
        <div class="skills">
          <h1>What I'm learning <br> at the moment</h1>
          <div class="skill-container">
            <NewSkill imgSrc="/public/images/astro.png" imgAlt="Astro" title="Astro" />
            <NewSkill imgSrc="/public/images/contentful.png" imgAlt="Contentful" title="Contentful" />
            <NewSkill imgSrc="/public/images/spline.png" imgAlt="Spline" title="Spline" />
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="contact-section">
      <div class="contact-form">
        <h1>Let's talk<span style="color: #d9d9d9; opacity: 0.5;">.</span></h1>
        <ContactForm />
      </div>
      <div class="social-links">
        <div class="linkedin">
          <a target="_blank" href="https://www.linkedin.com/in/steffen-svenningsen/">
            <img src="/public/images/linkedin.png" alt="LinkedIn">
            LinkedIn
          </a>
        </div>
        <div class="github">
          <a target="_blank" href="https://github.com/Steffen-Svenningsen">
            <img src="/public/images/github.png" alt="GitHub" />
            GitHub
          </a>
        </div>
        <div class="mail">
          <a target="_blank" href="mailto:stef7625@gmail.com">
            <img src="/public/images/mail.png" alt="Mail" />
            Mail
          </a>
        </div>
        <div class="resume">
          <a href="#" download>
            <img src="/public/images/resume.png" alt="Resume" />
            Download Resumé
          </a>
        </div>
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
      font-size: clamp(22px, 5vw, 64px)
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

    .mobile-hero
      display: none

      .mobile-h3-text
        font-size: 42px

      .line, .line-2
        height: 1px
        background: $white
        position: absolute
        right: 2rem
        bottom: 10%

      .line
        width: 50%

      .line-2
        transform: translateY(2rem)
        width: 75%

  .text-section

    h1
      font-size: clamp(38px, 10vw, 96px)
      color: #f5f5f580
      font-weight: 600
      line-height: 1.2

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

  .project-section
    display: flex
    flex-direction: column
    gap: 4rem

    .project-row
      display: flex
      gap: 10%

      .flex-30
        flex: 30%

      .flex-60
        flex: 60%

      .card-item
        flex: 25%

  .white-grey-text
    font-size: clamp(38px, 10vw, 96px)
    color: $white
    font-weight: 600
    line-height: 1.2

    span
      opacity: 0.5

  .tech-stack-section

    .learning-curve
      display: flex
      color: $white
      justify-content: center
      align-items: center
      gap: 4rem
      flex-wrap: wrap
      width: fit-content
      margin: auto
      padding-top: 2rem

      h1
        font-size: clamp(38px, 10vw, 96px)
        font-weight: 600
        border-bottom: 1px solid $grey
        text-align: center
        padding-bottom: 0.5rem

      .skills
        display: flex
        flex-direction: column
        flex-wrap: wrap
        align-items: center
        gap: 4rem
        justify-content: center

        .skill-container
          display: flex
          gap: 6rem
          flex-wrap: wrap
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
        font-size: clamp(38px, 10vw, 96px)
        font-weight: 600
        color: $white
        margin-bottom: 4rem

    .social-links
      flex: 30%
      display: flex
      flex-direction: column
      justify-content: space-between

      div
        width: 100%
        height: 100px
        border-radius: 12px
        display: flex
        align-items: center
        border: 1px solid $white
        margin-bottom: 1rem
        transition: 0.2s

        &:hover
          transform: scale(1.015)

        &:last-of-type
          margin-bottom: 0 

        a
          width: 100%
          height: 100%
          text-decoration: none
          color: $white
          font-size: 24px
          font-weight: 500
          display: flex
          align-items: center
          gap: 1rem

      .linkedin
        background: linear-gradient(115deg, $blue 60%, $green 100%)

      .resume
        background: #1b1b1b

      .github
        background: linear-gradient(115deg, $orange 60%, $yellow 100%)

      .mail
        background: linear-gradient(115deg, $purple 60%, $red 100%)

  footer
    color: $grey
    border-top: 1px solid $grey
    padding-top: 2rem
    
    p
      margin-top: 1rem
      line-height: 1.3
      opacity: 0.5
      font-size: 12px

@media (max-width: 490px)
  .skills
    h1
      br
        display: none

@media (max-width: 740px)

  .hero-section

    h6
      text-align: right
      right: 1.25rem

    .desktop-h3-text
      display: none !important

    .mobile-hero
      display: block !important
      
      .mobile-h3-text
        right: 2rem !important

      span
        border-radius: 18px !important
        padding: 0.15rem 0.75rem !important

  .project-section
    .project-row
      flex-direction: column
      gap: 4rem !important

  .hero-section
    height: 100vh
    
</style>
