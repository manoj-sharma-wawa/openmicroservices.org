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
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `form-name=contact&email=${encodeURIComponent(this.email)}&message=${encodeURIComponent(this.message)}`
      }).then((res) => {
        if (res.status !== 200) {
          this.error = true
        } else {
          this.success = true
          this.email = ''
          this.message = ''
        }
      })
    }
  }
}
</script>
