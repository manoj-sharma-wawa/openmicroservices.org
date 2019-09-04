<template>
  <div class="home">
    <why-omg class="container"/>

    <twelve-factors class="container"/>

    <div class="dark-bg">
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

import WhyOmg from './pages/about/WhyOMG.vue'
import TwelveFactors from './pages/about/TwelveFactors.vue'

export default {
  name: 'About',
  components: {
    Contact,
    Footer,
    WhyOmg,
    TwelveFactors
  }
}
</script>