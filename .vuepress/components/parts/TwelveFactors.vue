<template>
  <div class="container">
    <h2 class="title">THE <span>TWELVE-FACTOR</span> MICROSERVICE</h2>
    <LineSvg long />
    <p>Inspired by <a href="//12factor.net" title="Twelve-Factor App">The Twelve-Factor App</a>.</p>
    <div class="factors">
      <div class="factor">
        <factor-svg :idx="1" />
        <h4>Domain Specific</h4>
        <p>Specialized to the domain and encapsulating the full API of the domain.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="2" />
        <h4>Containerized</h4>
        <p>For portability and re-usability (ex. Docker, rkt or FaaS).</p>
      </div>
      <div class="factor">
        <factor-svg :idx="3" />
        <h4>Language-Agnostic</h4>
        <p>Written in any programming language.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="4" />
        <h4>Vendor-neutral</h4>
        <p>
          Not be tied to one platform.<br>
          Platforms designed to interface with OMG Compliant services can interact with all services.
        </p>
      </div>
      <div class="factor">
        <factor-svg :idx="5" />
        <h4>Any Interface</h4>
        <p>Free to choose any <b>communication interface</b>.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="6" />
        <h4>Documentation</h4>
        <p>Automatically generated and actionable through the <b>microservice.yml</b>.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="7" />
        <h4>Declarative</h4>
        <p>List all <b>actions</b> the service can perform, including the arguments and the output.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="8" />
        <h4>Stateless</h4>
        <p>Services must be stateless.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="9" />
        <h4>Cloud Events</h4>
        <p>Use a common specification for describing <b>event data</b>.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="10" />
        <h4>Meta</h4>
        <p>Include <b>health</b>, <b>metrics</b>, <b>resources</b>, and <b>logs</b>.</p>
      </div>
      <div class="factor">
        <factor-svg :idx="11" />
        <h4>Isolated</h4>
        <p>Not depend on any other service (aka container coupling).</p>
      </div>
      <div class="factor">
        <factor-svg :idx="12" />
        <h4>Config</h4>
        <p>All service <b>configuration</b> must be documented.</p>
      </div>
    </div>
  </div>
</template>

<script>
import LineSvg from './LineSvg.vue'
import FactorSvg from './FactorSvg.vue'

export default {
  name: 'TwelveFactors',
  components: { LineSvg, FactorSvg }
}
</script>
