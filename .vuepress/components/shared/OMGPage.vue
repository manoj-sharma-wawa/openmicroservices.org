<template>
  <div class="home">
    <Navbar />

    <slot />

    <div class="dark-bg">
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'

import Contact from './Contact.vue'
import Footer from './Footer.vue'

export default {
  name: 'OMGPage',
  components: {
    Navbar,
    Contact,
    Footer
  }
}
</script>