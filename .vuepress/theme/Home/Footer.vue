<template>
  <div class="container">
    <div class="footer">
      <div class="footer-left">
        <h5>OPEN<br>MICROSERVICE<br>GUIDE</h5>
        <div class="logo" />
      </div>
      <div class="footer-centered">
        <p>
          Made with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 376.23 209.36"
            width="20"
            height="12"
          >
            <defs>
              <clipPath id="heart-clip-path">
                <path fill="none" d="M188.11,19.26a67.07,67.07,0,0,0-93.59,1.22h0a67.09,67.09,0,0,0-1.25,93.57l0,0,1.28,1.28L188.11,209l93.6-93.59,1.28-1.28,0,0a67.07,67.07,0,0,0-1.25-93.56h0A67.09,67.09,0,0,0,188.11,19.26Z"></path>
              </clipPath>
            </defs>
            <g clip-path="url(#heart-clip-path)">
              <polygon fill="#a67eff" points="376.23 209.36 0 209.36 0 0 376.23 0 376.23 209.36"></polygon>
              <polyline fill="#52dbff" points="376.23 174.47 0 174.47 0 139.58 376.23 139.58"></polyline>
              <polyline fill="#00dcab" points="376.23 139.58 0 139.58 0 104.68 376.23 104.68"></polyline>
              <polyline fill="#fd0" points="376.23 104.68 0 104.68 0 69.79 376.23 69.79"></polyline>
              <polyline fill="#ff8522" points="376.23 69.79 0 69.79 0 34.89 376.23 34.89"></polyline>
              <polyline fill="#fa496e" points="376.23 34.89 0 34.89 0 0 376.23 0"></polyline>
            </g>
          </svg>
          by <a href="//asyncy.com" title="Asyncy">asyncy.com</a>
        </p>
      </div>
      <div class="footer-right">
        <NavLink
          class="button button-tertiary button-full"
          :item="{ text: 'Edit on Github', link: repoLink }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  name: 'Footer',
  components: { NavLink },
  computed: {
    repoLink: function () {
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
@import './styles/config.styl'

.footer
  position relative
  background-color #0c1039
  display flex
  align-items center
  flex-grow 1
  flex-shrink 1
  flex 1 1 100%
  flex-wrap wrap
  flex-direction row
  padding-bottom 1rem
  @media (min-width: ($MQMobile + 1px))
    flex-wrap nowrap
    overflow hidden
    height 5rem
    padding-bottom 0
  margin 2rem 0 0
  border 1px solid $primaryColor
  border-bottom none
  .footer-left, .footer-centered, .footer-right
    display inline-flex
    align-items center
    justify-content center
    flex-shrink 1
    flex-grow 1
    height 100%
  .footer-left
    justify-content space-between
    position relative
    padding 1rem 2rem
  .footer-left, .footer-right
    flex 1 1 100%
    @media (min-width: ($MQMobile + 1px))
      flex 1 1 20%
  .footer-centered
    flex 1 1 100%
    @media (min-width: ($MQMobile + 1px))
      flex 1 1 60%
      border-left 1px solid $primaryColor
      border-right 1px solid $primaryColor
    p, p a
      font-size .75rem
      line-height 1
      @media (min-width: ($MQMobile + 1px))
        margin 0
      letter-spacing 1.3px
      text-transform uppercase
      color #fff
      font-weight 600
      a
        color $accentColor
</style>
