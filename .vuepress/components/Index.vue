<template>
  <div class="home">
    <div class="hero head">
      <div class="head-navbar">
        <div class="logo" />
        <SearchBox />
      </div>
      <div class="head-container">
        <div class="head-container-content">
          <h1><span>O</span>PEN <span>M</span>ICROSERVICE <span>G</span>UIDE</h1>
          <p class="description">
            {{ data.tagline || $description || 'Welcome to your VuePress site' }}
          </p>
          <div class="buttons">
            <NavLink
              class="button button-primary"
              :item="{ text: 'Get Started', link: '/introduction/overview/' }"
            />
            <NavLink
              class="button button-secondary"
              :item="{ text: 'Edit on Github', link: repoLink }"
            />
          </div>
        </div>
        <div class="head-container-footer">
          <p>
            This guide is under active development, we welcome<br>
            your input and contributions in GitHub</p>
          <div class="arrow-down" />
        </div>
      </div>

    </div>

    <TwelveFactors />

    <WhyOmg />

    <Features />

    <div class="cube-bg2">
      <Contact />
      <Footer />
    </div>


    <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'
import SearchBox from './parts/SearchBoxHead.vue'
import TwelveFactors from './parts/TwelveFactors.vue'
import WhyOmg from './parts/WhyOmg.vue'
import Features from './parts/Features.vue'
import Contact from './parts/Contact.vue'
import Footer from './parts/Footer.vue'

export default {
  components: { NavLink, SearchBox, TwelveFactors, WhyOmg, Features, Contact, Footer },

  computed: {
    data () {
      return this.$page.frontmatter
    },
    
    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
    }

  }
}
</script>

<style lang="stylus">
@import '../override.styl'

.home
  max-width unset
  padding 0
  margin 0px auto
  .container
    max-width 75rem
    padding 0
    margin 0 auto
    @media screen and (max-width: ($MQMobile))
      padding 0 1rem
  .hero
    text-align center
    min-height 100vh
    &.head
      position relative
      background-image linear-gradient(312deg, #000b5e, #070b28)
      // background-image url('img/bg.png')
      background-repeat no-repeat
      background-size cover
      // @media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (-moz-min-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3/2), only screen and (min-device-pixel-ratio: 1.5)
      //   background-image url('img/bg@2x.png')
      &:before
        content: ''
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        @media (min-width: ($MQMobile + 1px))
          background-image url('/assets/img/OMG@3x.png')
        background-repeat no-repeat
        background-size 70% auto
        background-position center top
    .head-navbar
      position absolute
      z-index 1000
      top 0
      left 0
      right 0
      max-width 75rem
      padding 3rem 2rem
      width auto
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      margin 0 auto
    .head-container
      position relative
      display flex
      flex-direction column
      justify-content space-between
      align-items center
      min-height 100vh
      .head-container-content
        padding-top 47.5vh
      .head-container-footer
        padding-bottom 2rem
        p
          color #fff
          text-transform uppercase
          font-size .75rem
          line-height 2
          letter-spacing 1px
          text-align center
          font-weight 600
          margin 1rem auto
    h1
      color #fff
      span
        @media (min-width: ($MQMobile + 1px))
          position relative
          display inline
          &:before
            content: ''
            z-index 0
            background-repeat no-repeat
            background-size contain
            width 65px
            height 80px
            position absolute
            top -9.5px
          &:first-child, &:last-child
            &:before
              background-image url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MyIgaGVpZ2h0PSI3OCIgdmlld0JveD0iMCAwIDUzIDc4Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM3NkRBQzIiIHN0cm9rZS13aWR0aD0iLjkiPjxyZWN0IHdpZHRoPSI0Mi4yMTkiIGhlaWdodD0iNjMuODE5IiB4PSI0Ljk0MiIgeT0iNy42NDEiIHJ4PSIxNy4xIi8+PHBhdGggc3Ryb2tlLWRhc2hhcnJheT0iMS43OTk5OTk5NTIzMTYyODQsMS43OTk5OTk5NTIzMTYyODQiIGQ9Ik0yNi41LjQ1djc5LjFNNTIuMjUyIDM2Ljk4OEguMjgiLz48L2c+PC9zdmc+')
              left -14px
          &:nth-child(2)
            &:before
              background-image url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NSIgaGVpZ2h0PSI3NCIgdmlld0JveD0iMCAwIDY1IDc0Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM3NkRBQzIiIHN0cm9rZS13aWR0aD0iLjY0OCI+PHBhdGggZD0iTTEwLjMyNCA5LjQwNGg0NS4zNTJ2NjMuOTg4SDEwLjMyNHoiLz48cGF0aCBzdHJva2UtZGFzaGFycmF5PSIxLjk0NCIgZD0iTTU2LjIxNCAwTC0uMTQ0IDU4Ljk4Nk04Ljg1NiAwbDU2LjM1OCA1OC45ODYiLz48L2c+PC9zdmc+')
              left -19px
    h1, .description
      margin 0 auto
    .description
      margin-top .5rem
      margin-bottom 3rem
      max-width 35rem
      font-size 1.125rem
      line-height 1.5
      letter-spacing 1px
      text-align center
      color $lightColor

@media (max-width: $MQMobile)
  .home
    // something

@media (max-width: $MQMobileNarrow)
  .home
    // padding-left 1.5rem
    // padding-right 1.5rem
</style>
