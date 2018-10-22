<template>
  <div class="feedback">
    <div class="wrap-content">
      <h1 id="feedback">Get Involved</h1>
      <p>
        Do you have feedback, questions or an inquiry to support the OMG standard?<br />
        Reach out to us.
      </p>
      <form name="contact" method="POST" @submit.prevent="handleSubmit">
        <div v-if="form.sent" class="contact-message">
          <p>We'll get in touch with you shortly.</p>
        </div>
        <div v-if="form.error" class="contact-message error">
          <p>Please, try again</p>
        </div>
        <div>
          <input v-model="form.email" required type="email" name="email" placeholder="Email">
        </div>
        <div>
          <textarea v-model="form.message" name="message" rows="7" cols="50" placeholder="Message (optional)"></textarea>
        </div>
        <div>
          <button :disabled="form.sending" class="round-button" type="submit">Send</button>
        </div> 
      </form>
    </div>
    <div class="feedback-img" />
  </div>
</template>

<script>
export default {
  name: 'SubmitFeedback',
  data: () => ({
    form: {
      email: '',
      message: '',
      sent: false,
      error: false,
      sending: false
    }
  }),
  methods: {
    handleSubmit: function () {
      this.form.error = false
      this.form.sent = false
      this.form.sending = true
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `form-name=contact&email=${encodeURIComponent(this.form.email)}&message=${encodeURIComponent(this.form.message)}`
      }).then((res) => {
        if (res.status !== 200) {
          this.form.error = true
        } else {
          this.form.sent = true
        }
        this.form.sending = false
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../config.styl"

.contact-message.error
  border-color #b94242

.contact-message
  width 460px
  max-width 80%
  background rgba(255,255,255,0.4)
  border-radius 4px
  padding 0.1rem 1.5rem
  border-left-width 0.5rem
  border-left-style solid
  margin 1rem 0
  border-color #42b983
  p
    color #000
    margin 0

.feedback 
    position relative
    background #111420
    color white
    padding 4rem 0px 5rem 0px
  input,textarea 
    color white
    border 1px solid #41434d!important
    border-radius 6px
    background transparent
    outline none
    padding 0.4rem 1rem
    font-size: $inputSize
    max-width: 30rem
  h1,p
    margin-bottom 30px
  form div 
    margin-bottom 20px  
  .feedback-img 
    position absolute
    right 0px
    top -10px
    width 600px
    height calc(100% + 10px)
    background-image url('/footer_graphic.svg')
    background-size cover
@media (max-width: $SCMedium) 
  .feedback
    .feedback-img 
        display none
   input,textarea
     max-width 20rem
@media (max-width: $SCMobileNarrow)
    input,textarea
        max-width 15rem
</style>
