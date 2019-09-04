<template>
  <OMGPage>
    <OMGApp />
  </OMGPage>
</template>

<script>
import OMGPage from './shared/OMGPage.vue'

import OMGApp from './pages/home/OMGApp.vue'

export default {
  components: {
    OMGPage,
    OMGApp
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
