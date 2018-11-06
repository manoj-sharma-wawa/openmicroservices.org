<template>
  <transition name="fade">
    <div class="modal">
      <div class="modal-wrap">
        <div class="modal-body">
          <div v-html="text" />
          <!-- <span class="close" @click="$emit('close')">&times;</span> -->
          <div class="right">
            <button type="button" @click="$emit('close')">OK</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MicroModal',
  props: {
    text: {
      type: String,
      default: '',
      description: 'The modal text'
    }
  },
  beforeDestroy: function () {
    document.body.classList.remove('modal-hover')
  },
  mounted: function () {
    document.body.classList.add('modal-hover')
  }
}
</script>

<style lang="css">
body.modal-hover {
  overflow: hidden;
}

.modal {
  z-index: 1010;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  padding: 2rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  overflow: auto;
}

.modal::before {
  content: '';
  z-index: 1001;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal .modal-wrap {
  z-index: 1010;
  background-color: #fff;
  border-radius: .5rem;
  display: block;
  width: 600px;
  padding: 1rem 2rem;
  position: relative;
  color: #000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
}
.modal .modal-wrap:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  filter: saturate(100);
  background-image: url('/header_graphic.svg');
  background-size: 150% auto;
  background-position: 10% 10%;
  width: 50%;
  height: 100%;
  z-index: -1;
}

.modal .modal-wrap .modal-body {
  display: block;
  position: relative;
}

.modal .modal-wrap .modal-body .right {
  margin-top: 1rem;
  float: right;
}

.modal .modal-wrap .modal-body button {
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  color: #111420;
  font-weight: bold;
  font-size: 1.25rem;
  background: transparent;
  outline: none;
  padding: .5rem .75rem;
  border-radius: .25rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
}
.modal .modal-wrap .modal-body button:hover {
  border-color:#dedede;
}

.modal .modal-wrap .modal-body button:active,
.modal .modal-wrap .modal-body button:focus {
  border-color:#dedede;
  background-color: #efefef;
}

.modal .modal-wrap .modal-body p {
  margin: 0;
  text-align: left;
  font-size: 1.2rem !important;
}

.modal .modal-wrap .modal-body h3 {
  text-align: left;
  font-size: 1.75rem !important;
}

.modal .modal-wrap .modal-body .close {
  position: absolute;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.7rem;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
