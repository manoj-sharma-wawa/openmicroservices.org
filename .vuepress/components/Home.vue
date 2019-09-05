<template>
  <OMGPage>
    <Header class="container"/>
    <OMGSpec />
    <div class="container">
      <ThreeFactors />
      <Partners />
    </div>
    <OMGApp/>
  </OMGPage>
</template>

<script>
import OMGPage from './shared/OMGPage.vue'

import OMGApp from './pages/home/OMGApp.vue'
import Partners from './pages/home/Partners.vue'
import ThreeFactors from './pages/home/ThreeFactors.vue'
import OMGSpec from './pages/home/OMGSpec.vue'
import Header from './pages/home/Header.vue'

export default {
  components: {
    OMGPage,
    OMGApp,
    Partners,
    ThreeFactors,
    OMGSpec,
    Header
  }

  // computed: {
  //   data () {
  //     return this.$page.frontmatter
  //   },

  //   repoLink () {
  //     const { repo } = this.$site.themeConfig
  //     if (repo) {
  //       return /^https?:/.test(repo)
  //         ? repo
  //         : `https://github.com/${repo}`
  //     }
  //   }

  // }
}
</script>
