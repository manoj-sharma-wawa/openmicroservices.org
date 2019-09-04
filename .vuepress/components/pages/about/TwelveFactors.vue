<template>
  <div class="twelve">
    <div class="heading">
      <h2 class="title">The Twelve-Factor Microservice</h2>
      <p class="hint">Inspired by <a href="//12factor.net" title="Twelve-Factor App">The Twelve-Factor App</a></p>
    </div>
    <div class="factors">
      <div class="factor">
        <factor-svg :idx="1" />
        <h4>Domain Specific</h4>
        <p>Specialized to the domain and encapsulating the full API of the domain.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="2" />
        <h4>Containerized</h4>
        <p>For portability and re-usability (ex. Docker, rkt or FaaS).</p>
      </div>
      <div class="factor">
        <factor-svg :idx="3" />
        <h4>Language-Agnostic</h4>
        <p>Written in any programming language.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="4" />
        <h4>Vendor-neutral</h4>
        <p>
          Not be tied to one platform.<br>
          Platforms designed to interface with OMG Compliant services can interact with all services.
        </p>
      </div>
      <div class="factor">
        <factor-svg :idx="5" />
        <h4>Any Interface</h4>
        <p>Free to choose any communication interface.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="6" />
        <h4>Documentation</h4>
        <p>Automatically generated and actionable through the microservice.yml.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="7" />
        <h4>Declarative</h4>
        <p>List all actions the service can perform, including the arguments and the output.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="8" />
        <h4>Stateless</h4>
        <p>Services must be stateless.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="9" />
        <h4>Cloud Events</h4>
        <p>Use a common specification for describing event data.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="10" />
        <h4>Meta</h4>
        <p>Include health, metrics, resources, and logs.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="11" />
        <h4>Isolated</h4>
        <p>Not depend on any other service (aka container coupling).</p>
      </div>
      <div class="factor">
        <factor-svg :idx="12" />
        <h4>Config</h4>
        <p>All service configuration must be documented.</p>
      </div>
    </div>
  </div>
</template>

<script>
import FactorSvg from './FactorSvg.vue'

export default {
  name: 'TwelveFactors',
  components: { 
    FactorSvg 
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/palette'
@require '../../../styles/fonts'

.twelve
  margin-top 7.5rem
  display flex
  flex-direction column
  align-items center
  .heading
    text-align center
    width 34rem
    .hint
      font-size 1rem
      font-family DM Sans
      a
        color #477BF3
        font-size 1rem 
        font-family DM Sans
  .factors
    display flex
    margin 4rem 0 7.5rem
    padding 0
    flex-direction column
    flex-wrap nowrap
    @media (min-width: ($MQMobile + 1px))
      flex-wrap wrap
      flex-direction row
      flex 1 1 100%
      --columnGap: .375rem;
    .factor
      margin-bottom .75rem
      min-height 18rem
      margin-left 0
      margin-right 0
      @media (min-width: ($MQMobile + 1px))
        margin-left var(--columnGap)
        margin-right var(--columnGap)
      padding 1rem .5rem 0
      background $borderColor
      flex 1 1 calc(25% - 2 * var(--columnGap) - 2rem)
      width auto
      display flex
      flex-direction column
      align-items flex-start
      border-radius 10px
      svg
        padding 1rem
      h4
        margin .5rem 0 !important
        padding-left 1rem
      p
        margin-top 1rem
        padding 1rem
        padding-bottom 0
</style>