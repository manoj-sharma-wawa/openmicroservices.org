<template>
  <div class="container">
    <div class="footer">
      <div class="left">
        <OMGLogo green long light />
      </div>
      <div class="center">
        <div class="made">Made with</div>
        <div class="heart">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M0 21.47H21V0.47H0V21.47Z" fill="url(#pattern0)"/>
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0" transform="scale(0.015625)"/>
              </pattern>
              <image id="image0" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAObUlEQVR4AezUA9A8V9aA8d+53fMitm3btm2jvLb57be2bdu2bVvR30xezEzfE2eqYhU3T9W1nz7V/rd5iIcI95E4b+7m2FfmAZm2wppCPyKuuCH9Fj+M8EMMPYjUYV0pOUDYX+ZO0gZoyXn4s/AjbkrXuA+Ec652b4hojhcelel4CUGUm1KJIoJAZqrZXSW7j4t8Ga7yAMhqe/IJMk4XZQ1uPlMGmTcnHSqRfeGzEfEq/PDevevcOe6e2Jh8Q3JyKLK2zLZomCw3p4IhuqQw0VR1ODQY9vuZ3UvxLPeRoJeZr44oD2/bltIadC0lGAt6QWImmanUStORfXTI9xKPwLX3EAF3LSAijsvMj0XESmmM6R6r9uyxfWPXzcNW67DKJLB0hn8tSH+8Kv3in6m/NE32qhwMzPb7PyXPxb/dC0LuKeIjY73elrW0+rOtFdcu9tsm7LRR2GKtsMo4sHiav83jV/9JP/5TZclQ9PqymxWRV+AU/Pr+RMCpyafbpjXsj9Mbc8R+jfMOLPbfKqy2IgVdBzRBlyycSj//T/rcr6ov/iINp1m56cxMzy7L2h2Jn7sbUndiU5rP98bGXTfdGl8tnL5fcfrejT03CauN0yS1UtArVCyc5rv/qt79vfStH1UGfaWdVuuwyjgAP7nXERBhX/y47fUMZiattHbraWc2ztqnyOSaJWl2SCICyCQx1rLuKiEiff0P1au/nP79n2ql8TSc7Rt2w/3u6jKZ3Zlt03xcmTA7Xey4Q+PJpxSHbl/MDpi3PA0rEZRbUqBgssdGq4fZ5G3frv7/w51u8UCMT8luOMQWuMLtaEkjiFImyC83vTGD6QnrbtDz0kuKXTYOf7wi9YdEkJVE5kiAAK5ZmJqGPTYOr76gePFn+fGvq/GJMSXzx7Ub7ozfGyHVY0spHx/WMd1U44RDG087tZjo8ct/pEQJIOLmVAoliMLSwjXL0gpjXH5gsenqPPItXDd/UkxOtdl138TWdxIB19xOQHywlOb8bnbCSquNe9llrc3X4r+LcvSnFzLdlhjJSLemNKysvRITY+FVX6p+8JOhZoUBdbAss9sMiwHbRMRfMnvqzLjTj+559LFh4XKWTNMUIBBGEsptIkYlJLZehx/+nce9dWBw3TS9WbI+F/9nhPZ2j9+Ocn7NhgwXHVastUL43RVVU4yQtz1YpkTNUCsVdSTFkmtZZTJdclBj+VT67W86sUKsIvPL2BfwLVp1qnXkIa0LDyj+dFU11acpFCQCEbcvQ9xOBOnn/2LXDcNFRzXe9YlWjA3lzQJegyV3KoB4ngi5nK13LHa9MeyvqjLytkNAUiFTve3xKTOlUJNayUCydIqVJ6pz9ysWLmtc9a9GTHb7yO4kbECzQb22sdNurTP2Lv58TTU7uPULpxBIEXcm4JZ+YRQVwG//m47evvjmVq3//P2mM2XWx+K5txcgSllR5qmZwVix16bF0qm0fKYqJQgYPVCSUlepUiY1yZoyyAySikyWzaTVJjltn8a7l7euu748ewCyJX+TPv7JqtNjz6xt27Zt27YCa9u2bb5a2/uube947tzuc+qXi+mOW1HRHX8OYvcbcc3MJ598zqnzb4tc0x8ieml2xzPMXv9FJn/xL4sHzyafSGCsRRPiitiIaerq52JK3V9uuDpe9jknf/UnE5lo33tjQEDbl8FVjrnlqWZPe+vkH+4eBhq0BqhxJraM1Zdl0NJS1VIhKPc+WLddV6/0ArMf/aWdDizsbth59Rc6ctcl7r3Mbj5r+Qqr6a/2f12GqSlMU0yJKcOEaeJv7hye6fY4um2yv3+S3XiqdrwofmNzBfKyhIWnvjkS7r9MldQozZU9X8bKgMFoDXQwoIxCQUs9JPD263i2Z9n5sz9B6vmebSYPFe3RzDRFUkEwBRBicwbXaZhqTs0Tc9hNHO+54/p4lqea/PFdYUd4OWcGBFBeUDHFbdfH8aEu7ykGRq8IX8oyClqWMlZnsWVsTuT61y7vecbb48//YXK04ylvnvzNXUMS08Q815yImjaTD7higDidOglzPGTAxNFUu9RN10zuuGHyx4KQPCPATgLUUxF2cbSLSyecHGoRS6+IHuUwGIOxEjdKB0Wtv4+VIS2Hct2Op3uKyXz6Mvp4YZqYpjMRNU2bwkM2JzEhZytwKn43MU9xNHE0cf/l2u0wAbh5W4JwjWJmnri8r+MDSzmcij80p0YwSjc9AKME5Uoxtmr9e3nwuG68BrjzUs3zqQFhTs6+L5vCY5sGEqbN9HdT7cNVM/cf19GMo2gjcdV5BuwVU4xyfODkwKIO48wE9uOcuLdgFGCViq6/XRsX+wWqmMS0nE2x5mm95wEJujECwhS2KTia6jDi2hNGMYVCDrZXgN4FRp0car+wXziU/WAZrNPQAuOcPWclfG3U9uegIUwlmCeK0bUBFQhxPlMIpsQ8sUyMiTHq8j6ODwAR7gfWJdj+raCcHNgvnCx1aBwGh8HSnhbeSjigXZuw6YIysE0DQMJYDaiYsG17SGgBiO1a9NSAGBMt+wMPHlun587zVuD/U5Z64MEaN7NfnMb/zABGWUoLQAt0YwTryFOrvihCS9axHkAxTbSMVRcUWwMERZicneYyE+yXuv+4LDXNhb8C2KUAfpfSuuuBeup9Nwb01IAYawM2E4H2/PYfpbBKB8iqQEPLgg4SAoOEUUCxJgQTxmCklIjjE+59oFb82nkJ+B06pNO9l4YHLtdhxEl75favowx1LnX+/d+mBRKgCEaBYCArIwyKIlAK2J7GoxBcNdU9l+LuB8pc4U7yB6sOCNhlvvMwll81j5e6dGlx532za6+d7ZdaGmcGCEULWzargcI5BQnQbowoS5mCEgg2q2VrQEmwOZlj5j8Henx5mDNo/zfGeQmgftQ0Xsp++Ld762mOar8wcmX/qaKi2JbQ1gCwLcftn1sJz8SE0YuFFusO6cqoCbAPHRwm7r6/jJoU4ztglYBhxVcZPkGGey8d3HRdHDI5pIYoBOhGRoLasor0RtCmvJRAGbbQrQnoKBglCBoGJsynrwLvu1RTSscxfsKKHG2eCe6X/pzk5XTnlluvcu11s5MRnWhy/u4mhKAlAaz1FbY7u4bk/NXo+tUkUtj2EEGgNTeuPeKBB+ruexdHPZGx/1a8HayvwJbPpi+nw30PLObdZEmMgamaoAIhibZkKyxAqwmtAlxY5AFtremgsDa424uAkFEpSR2f8ODlYbbIWOBTbchVb/GPtpyM8RcyPTM7119/ZHf1zhJMNFhNPEEoIoRsU7JRXMTjpuCC8ivdGKKVEhxhf1KXLy2msZfl8Mt4aRvm+Xk/All/sbT/gjcjlhHzHBVDtBAFKN0IbaLF5vZv6QVOFKMUBRQuej3RKgwU6MLJ5cGyyLJIx1vhb9ga8Dwfbsuc/P+lfUdxaxckpsRoVj0QA4Vt0RWJQrEVAqgN21eTBdgKB1q0FAOlJaMO+xr7YV4WevgpfLIt2NWFvLOOnxH2J5Mk7GDSEZnKRKcIghQBkqpsdxQoCYW6uBMwev4VUNqCDKAlZTmw7IcsizEO6Hu5gHl6ng9zHpP89WhfCs+htJNMUaHRbAuPZjtxJCCPx/RtfSq1nTodBdABKAYZtewHh4VlwfL5+NYLDchqBbZUfxgfLdUGMU0IhCII7cqENSWJx5eW2pYgbKa+Fb9UBuPs/fvhQA934dXg4gQ898UGTHLc9q/wxmcmTJkIAmgoSgIhtICgEIK6GNQaRrdOoBvDlsqCUWO/yEPi0dfCX8HjvQJbpuS3Wi9Nnx1GIwk5+0KEdYEJgEAA4vGh3bYiVKFg+7RWR/U0+hl7Mr4EXw5PkgFQvhfvg2uBSCYSkCBoKEAkgAKQbUIgKD3XgGKbBJSM6oJRPSzsh4wDlj/B63g8mPPcj9uAyKH8DN6d4koCkgCCEAKFANvJiXo8GrHdfleLUYqFjHIY7AfjID3Ai+DeJ5sBEPnbchdeR+CK+AK0EiJAIAQAASQuhm73PRjbuz9YqofBQ/ce3hS/7PFk9ngaAJFfxrNpXwgKCSKQCCi2PRBFrKHJ1htaSgskZGCsxI/BMnRfWc5Kr5+ILwN4siYAIPJ9eD36dEBM00S255Gg3Yw/YPNttAC1pWvxXYk/lGVhHMQ46ykPqwGAb8a7iRtYrUMvavvtJxrEhgJsy64yaEmxbMT3gPFbeFVrHo4VACAHfJ96HzHTdSESFNsu6OMqR6BI0TLoQMuonBpgKeNAl3/GC2L/CBoAuQs/iXcFnJmgCIqIBqwNUpE4l5SOMgjrj6H1zIAudNnj+fFv8AgbAPkb6e+otxK0mq2wXrwSiE1qWkrG5qPmMTicfulCD9TL4fc9Ccye60kxAM0fSv9Z83oCSNYSL9AeXLT3aKWVhZyV3rISP7wh/h/Ao5QAQPNr0hmvBBAhtmyEh9p8KeudH0OX6jIYZ+K9B74dHhsGQPOT0qfCSyiQhKBIaAgEYUs3HyufTf5K4TF8DL4QHlsGQPMj9Hnw/HLxW+GLY4+BDtalN5ZT8f0sfBw8GQ34UE9mvhsvqZ4DlAQJ0CBsDRgr8S1LdTkTPmi/Ch8I8FhLwJZvJa9On3HT9fTi0jMG41T8GIwDHdS34Z09DMQb/Z2Hj/yG9EVkIrNMM1MIBGvKQIeOs7Yf1A/jDQAe6wnY8nV4K3W7lBKhwXbvS6tn+96iP43XsuUx3AFbFvX19B1wMyiBdhP/M/GDDvhVvJyHmdlzPawGwAm+BW+vbqS0AorSoWeRV/gdvATqYWbnkeGf8ZLqt+jtMrQVoVWlA+AP8DIYHgHiDf/WI0bzLPgt3CQQlBbgT/HiuMcjRLzB33pkyXPhN+h1WPPXeBHc6RFk8ojTP8JLYg+Af8KLb8X/NzUA+nubj6pfBP8C/0MMAL+BN8Qr4x88Suw8uvyQR5l/B4S8Qg35LN3lAAAAAElFTkSuQmCC"/>
            </defs>
          </svg>
        </div>
        <div class="storyscript">
          by <a href="https://storyscript.io">storyscript.io</a>
        </div>
      </div>
      <div class="right">
        <NavLink
          class="button button-tertiary button-full"
          :item="{ text: 'Edit on Github', link: repoLink }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'
import OMGLogo from './OMGLogo.vue'

export default {
  name: 'Footer',
  components: { 
    NavLink,
    OMGLogo
  },
  computed: {
    repoLink: function () {
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

<style lang="stylus" scoped>
@require '../../styles/palette'
@require '../../styles/fonts'

.home
  .footer
    padding: 1.5rem 0
    border-top: 1px solid #566794
    @media (min-width: ($MQMobile + 1px))
      padding: 1.5rem 5.125rem 1.5rem 0
.footer 
  display: flex
  align-items: center
  justify-content: space-between
  flex-direction: column
  @media (min-width: ($MQMobile + 1px))
    flex-direction: row
  .center
    display: flex
    align-items: center
    margin: 1rem 0
    @media (min-width: ($MQMobile + 1px))
      margin: 0
    .made
    .storyscript
    .storyscript a
      font-family: DM Sans
      font-size: .75rem
      color: white
      letter-spacing: 2px
      text-transform: uppercase
    .storyscript a:hover
      color: $accentGreen
    .heart
      margin: 0 .25rem
</style>
