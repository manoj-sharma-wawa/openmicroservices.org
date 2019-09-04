<template>
  <OMGPage>
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

export default {
  components: {
    OMGPage,
    OMGApp,
    Partners,
    ThreeFactors
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
