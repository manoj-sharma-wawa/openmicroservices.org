<template>
  <div class="partners">
    <div class="title">Partners</div>
    <div class="list">
      <div
        v-for="(partner, idx) in partners"
        :key="`parter-list-${idx}`"
        class="partner"
      >
        <img :src="`/assets/img/partners/${partner}.png`" :alt="`${partner} logo`">
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Patners',
  data: () => ({
    partners: [
      'gcp',
      'gh',
      'docker',
      'k8s',
      'rkt'
    ]
  })
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/palette'
@require '../../../styles/fonts'

.partners
  display flex
  flex-direction column
  align-items center
  margin 6rem 0 5rem 0
  @media (min-width: $MQMobile + 1px)
    margin 7.5rem 0
  .title
    font-family DM Bold Sans
    font-size 2.375rem
    color $secondaryColor
    margin-bottom 3.5rem
  .list
    display flex
    flex-wrap wrap
    align-items center
    justify-content space-between
    @media (min-width: $MQMobile + 1px)
      justify-content space-evenly
      width 100%
    .partner:last-child
      margin 0 auto
      @media (min-width: $MQMobile + 1px)
        margin initial
    .partner
      flex-basis initial
      @media (min-width: $MQMobile + 1px)
        flex-basis 13%
      img 
        width auto
        height 1.5rem
        @media (min-width: $MQMobile + 1px)
          height 2rem
</style>