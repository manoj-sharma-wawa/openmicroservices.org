<template>
  <div class="has-background-light">
    <div class="container">
      <div class="features">
        <div class="feature">
          <feature-svg :idx="1" />
          <h3>Reusability</h3>
          <line-svg class="line" />
          <p>Focus is stressed on services being highly reusable between applications and platforms.</p>
        </div>
        <div class="feature">
          <feature-svg :idx="2" />
          <h3>Management</h3>
          <line-svg class="line" />
          <p>Define how to interface with the service, lifecycle management, scaling, among other requirements.</p>
        </div>
        <div class="feature">
          <feature-svg :idx="3" />
          <h3>Documentation</h3>
          <line-svg class="line" />
          <p>Services inherit documentation through a well defined configuration of commands, arguments and output.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineSvg from './LineSvg.vue'
import FeatureSvg from './FeatureSvg.vue'

export default {
  name: 'Features',
  components: { LineSvg, FeatureSvg }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.has-background-light
  background-color $borderColor


.features
  display flex
  padding 12.5rem 0
  margin 0
  flex-direction column
  flex-wrap nowrap
  @media (min-width: ($MQMobile + 1px))
    flex-wrap wrap
    flex-direction row
  flex 1 1 100%
  --columnGap: 3.5rem;
  .feature
    margin-bottom 1rem
    margin-left 0
    margin-right 0
    @media (min-width: ($MQMobile + 1px))
      &:not(:first-child)
        margin-left var(--columnGap)
      &:not(:last-child)
        margin-right var(--columnGap)
    padding 0
    background $borderColor
    flex 1 1 calc(33% - 2 * var(--columnGap))
    width auto
    svg
      display block
      &:not(.line)
        margin 2rem 0 1.5rem
        padding 0
    h3
      margin 0
      margin-bottom 1.5rem !important
      padding 0
    p
      margin-top 2rem
      padding 0
      padding-right 2rem
      b
        font-weight 600
        color $primaryColor
</style>
