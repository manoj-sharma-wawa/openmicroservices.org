<template>
  <div class="container divided large">
    <div class="container-content-left">
      <h2>GET <span>INVOLVED</span></h2>
      <p class="larger">
        Do you have feedback, questions<br>
        or an inquiry to support the OMG standard? Reach out to us.
      </p>
    </div>
    <div class="container-content-right">
      <form :class="['form', {'error': error}]" @submit.prevent="submit">
        <input required v-model="email" class="input" type="email" placeholder="E-MAIL" />
        <textarea required v-model="message" placeholder="TYPE A MESSAGE" rows="8" />
        <button type="submit" class="button button-primary" :disabled="sending">{{ success ? 'Thanks !' : 'Send' }}</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data: () => ({
    sending: false,
    success: false,
    error: false,
    email: '',
    message: ''
  }),
  watch: {
    error: function () { setTimeout(() => (this.error = this.sending = false), 820) },
    success: function () { setTimeout(() => (this.success = this.sending = false), 1000) }
  },
  methods: {
    submit: function () {
      if (!this.email || !this.message || this.sending) return
      this.sending = true
      const success = (Math.floor(Math.random() * 100)) % 2 === 0 // just a random here
      if (success) {
        this.success = true
        this.email = ''
        this.message = ''
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.form
  display flex
  flex-direction column
  &.error
    animation shake 0.82s cubic-bezier(.36,.07,.19,.97) both
    transform translate3d(0, 0, 0)
    backface-visibility hidden
    perspective 1000px
  textarea
    margin 1rem 0
  .button
    @media (min-width: ($MQNarrow + 1px))
      width 28.125rem
    cursor pointer
  textarea
    max-height 12.5rem
  input, textarea
    @media (min-width: ($MQNarrow + 1px))
      width calc(28.125rem - 2rem)
      max-width calc(28.125rem - 2rem)
    display block
    cursor text
    color #fff
    display inline-flex
    flex-direction row
    align-items center
    justify-content flex-start
    border none
    border-radius 0
    font-family Poppins
    font-weight 500
    font-size 0.875rem
    line-height 1.43
    letter-spacing 1.5px
    outline none
    padding 1rem
    background rgba(255, 255, 255, .15)
    &::placeholder
      color rgba(255, 255, 255, .6)

@keyframes shake
  10%, 90%
    transform translate3d(-1px, 0, 0)
  20%, 80%
    transform translate3d(2px, 0, 0)
  30%, 50%, 70%
    transform translate3d(-4px, 0, 0)
  40%, 60%
    transform translate3d(4px, 0, 0)

</style>
