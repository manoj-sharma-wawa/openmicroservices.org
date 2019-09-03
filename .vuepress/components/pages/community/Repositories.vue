<template>
  <div class="community-repos">
    <div class="ui">
      <h3 class="title">OMG UI</h3>
      <p class="text">
        We build a UI tool so that you can test and build your micro services flawlessly.
      </p>
      <s-button
        secondary
        arrow
        lightShadow
      >
        UI Repo
      </s-button>
    </div>
    <div class="cli">
      <h3 class="title">OMG CLI</h3>
      <p class="text">
        We built command line tools that can help you test and deploy your microservices.
      </p>
      <s-button
        secondary
        arrow
        lightShadow
      >
        CLI Repo
      </s-button>
    </div>
  </div>
</template>

<script>
import SButton from '../../components/Button.vue'

export default {
  name: 'CommunityRepositories',
  components: {
    SButton
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../override'
@require '../../../fonts'

.community-repos
  display: flex
  flex-direction: column
  align-items: center
  padding: 4rem 1rem !important
  @media (min-width: $MQMobile + 1px)
    padding: 4rem 0 !important
    flex-direction: row
    justify-content: space-between
    align-items: flex-end
  .ui
  .cli
    flex-basis: 49%
    display: flex
    flex-direction: column
    align-items: center
    @media (min-width: $MQMobile + 1px)
      align-items: flex-start
    .text
      text-align: center
      margin: 1rem 0 1.5rem 0
      @media (min-width: $MQMobile + 1px)
        text-align: left
  .ui
    margin-bottom: 2rem
    @media (min-width: $MQMobile + 1px)
      margin-bottom: 0
      margin-right: 2.5rem
</style>