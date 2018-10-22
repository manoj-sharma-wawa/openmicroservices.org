<template>
  <div class="wrap-content">
      <h1>OMG Supporters</h1>
      <p>Here are some of the top companies that uphold the OMG standard:</p>
      <div class="supporters">
        <div class="supporter">
          <img src="/supporter-asyncy.png" alt="Asyncy" />
          <h2>Asyncy</h2>
          <p>Write smarter code to choregraph microservices.</p>
          <p>Build smarter applications.</p>
        </div>
        <div class="supporter">
          <img src="/supporter-generic.png" alt="Contact" />
          <h2>Your company</h2>
          <p>Contact us.</p>
          <a href="#feedback" title="Contact">Contact</a>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Supporters'
  }
</script>

<style lang="stylus" scoped>
  @import "../config.styl"
  
  div.wrap-content
    padding 4rem 0 5rem 0
    font-size $lnSize
  p 
    margin-bottom 2rem
    line-height 2.4rem
  h1
    margin-bottom 2.5rem
  .supporters
    display flex
    flex-direction row
    justify-content space-around
    flex-wrap wrap
    .supporter
      display inline-flex
      flex-direction column
      width 270px
      h2
        margin-bottom 0
        border none
      a
        color #00FF7E

</style>
