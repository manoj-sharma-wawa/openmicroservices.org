<template>
  <OMGPage>
    <why-omg class="container"/>
    <twelve-factors class="container"/>
  </OMGPage>
</template>

<script>
import OMGPage from './shared/OMGPage.vue'

import WhyOmg from './pages/about/WhyOMG.vue'
import TwelveFactors from './pages/about/TwelveFactors.vue'

export default {
  name: 'About',
  components: {
    OMGPage,
    WhyOmg,
    TwelveFactors
  }
}
</script>