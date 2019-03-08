<template>
  <div class="has-background-light">
    <div class="container">
      <div class="features">
        <div class="feature">
          <feature-svg :idx="1" />
          <h3>Reusability</h3>
          <line-svg class="line" />
          <p>Focus is stressed on services being highly reusable between applications and platforms.</p>
        </div>
        <div class="feature">
          <feature-svg :idx="2" />
          <h3>Management</h3>
          <line-svg class="line" />
          <p>Define how to interface with the service, lifecycle management, scaling, among other requirements.</p>
        </div>
        <div class="feature">
          <feature-svg :idx="3" />
          <h3>Documentation</h3>
          <line-svg class="line" />
          <p>Services inherit documentation through a well defined configuration of commands, arguments and output.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineSvg from './LineSvg.vue'
import FeatureSvg from './FeatureSvg.vue'

export default {
  name: 'Features',
  components: { LineSvg, FeatureSvg }
}
</script>
