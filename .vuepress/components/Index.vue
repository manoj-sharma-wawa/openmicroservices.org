<template>
  <div class="home">
    <div class="hero head">
      <div class="head-navbar">
        <div class="logo" />
        <SearchBox />
      </div>
      <div class="head-container">
        <div class="head-container-content">
          <h1><span>O</span>PEN <span>M</span>ICROSERVICE <span>G</span>UIDE</h1>
          <p class="description">
            {{ data.tagline || $description || 'Welcome to your VuePress site' }}
          </p>
          <div class="buttons">
            <NavLink
              class="button button-primary"
              :item="{ text: 'Get Started', link: '/introduction/overview/' }"
            />
            <NavLink
              class="button button-secondary"
              :item="{ text: 'Edit on Github', link: repoLink }"
            />
          </div>
        </div>
        <div class="head-container-footer">
          <p>
            This guide is under active development, we welcome<br>
            your input and contributions in GitHub</p>
          <div class="arrow-down" />
        </div>
      </div>

    </div>

    <TwelveFactors />

    <WhyOmg />

    <Features />

    <div class="cube-bg2">
      <Contact />
      <Footer />
    </div>


    <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'
import SearchBox from './parts/SearchBoxHead.vue'
import TwelveFactors from './parts/TwelveFactors.vue'
import WhyOmg from './parts/WhyOmg.vue'
import Features from './parts/Features.vue'
import Contact from './parts/Contact.vue'
import Footer from './parts/Footer.vue'

export default {
  components: { NavLink, SearchBox, TwelveFactors, WhyOmg, Features, Contact, Footer },

  computed: {
    data () {
      return this.$page.frontmatter
    },
    
    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
    }

  }
}
</script>
