<template>
  <div class="cube-bg">
    <div class="container divided large centered">
      <div class="container-content-left">
        <h2>WHY <span>OMG ?</span></h2>
        <p>
          Microservices, by design, are intended to be highly reusable, operational-specific and language-agnostic. This guide defines the standard that defines how to interface with microservices to provide a blueprint for consistency and reusability. By following this documentation, developers will be able to create a platform that is well-documented and portable while not compromising flexibility.<br><br>
          The old way of communicating software architecture and design through whiteboards and diagrams is immediately out of date and often becomes difficult to read and understand. By mapping your microservice architecture using pre-defined yaml by OMG, developers are given a way to describe architecture and operational requirements as human-readable structured data.<br><br>
          Having these models in plain text files gives developers a framework to effectively communicate architecture, service to service communication, and operational complexities to many different audiences.<br>
        </p>
      </div>
      <div class="container-content-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="294" height="296" viewBox="0 0 294 296">
          <g fill="none" fill-rule="nonzero" stroke="#4F56FF" stroke-width="5">
            <path d="M290.562 7.283l.419-4.338H93.916L2.722 88.08v.883h203.567l84.273-81.68zM2.5 89.5v203.636h38.264c1.939-8.766 7.675-13.421 16.72-13.421 9.044 0 14.886 4.645 17.063 13.421h57.685c2.687-8.78 8.496-13.421 17.075-13.421 8.574 0 14.539 4.63 17.571 13.421h41.245V89.5h-81.859c-1.42 14.702-8.508 22.52-20.952 22.52-12.468 0-19.198-7.852-19.87-22.52H2.5z"/>
            <path d="M291.265 6.41l-82.194 82.047v203.724l1.116.524 81.063-86.177v-92.526l-20.58 23.236c-.047 19.042-3.892 30.519-12.162 34.2-4.914 2.186-8.976.44-11.019-4.656-1.696-4.231-2.207-11.043-1.638-20.588l.052-.863 45.594-51.438-.232-87.484z"/>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import LineSvg from './LineSvg.vue'
import FactorSvg from './FactorSvg.vue'

export default {
  name: 'TwelveFactors',
  components: { LineSvg, FactorSvg }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.cube-bg
  background-image url('img/cube-bg.png')
  background-size cover
  background-repeat no-repeat
  background-position center
  color #fff
  p
    color $lightColor

.cube-bg2
  background-image url('img/cube-bg2.png')
  background-size cover
  background-repeat no-repeat
  background-position center
  color #fff
  p
    color $lightColor


.container
  &.large
    padding 2rem !important
    @media (min-width: ($MQMobile + 1px))
      padding 7.5rem !important
  &.divided
    display flex
    flex 1 1 100%
    flex-direction column
    flex-wrap nowrap
    @media (min-width: ($MQMobile + 1px))
      flex-wrap wrap
      flex-direction row
    justify-content space-between
    &.centered
      align-items center
    .container-content-right
      *
        @media (min-width: ($MQNarrow + 1px))
          float right
    .container-content-left, .container-content-right
      flex 1 1 50%
      width 100%
      h2
        margin-top 0 !important
      p
        margin 3rem 0
        @media (min-width: ($MQMobile + 1px))
          padding-right 5rem
      svg
        text-align right
        @media (max-width: $MQMobile)
          display none
</style>
