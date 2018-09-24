<template>
  <div class="wrap-content">
      <h1>OMG Supporters</h1>
      <p>Below are the products and companies that uphold the OMG standards.</p>
      <p>Add your company or product by contacting us below or making a pull request.</p>
      <div class="supporters">
        <div class="supporter">
          <img src="/supporter-asyncy.png" alt="Asyncy" />
          <h2>Asyncy</h2>
          <p>Write smarter code to choregraph microservices.</p>
          <a href="//asyncy.com" target="_blank" title="Asyncy">Visit Site →</a>
        </div>
        <div class="supporter">
          <img src="/supporter-generic.png" alt="Contact" />
          <h2>Add your company</h2>
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