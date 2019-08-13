<script>
    export default {
        name: 'OurBadge',
        render: function (h) {
            let type = 'tip';
            let vertical = 'top';
            if (this.$options._parentVnode.data) {
                if (this.$options._parentVnode.data.attrs) {
                    type = this.$options._parentVnode.data.attrs.type || type;
                    vertical = this.$options._parentVnode.data.attrs.vertical || vertical;
                }
            }
            let text = this.$options._renderChildren[0].text;
            return h('span', {
                class: ['badge', type],
                style: {
                    verticalAlign: vertical
                }
            }, text)
        }
    }
</script>

<style lang="stylus" scoped>
.badge
  display inline-block
  font-size 14px
  height 18px
  line-height 18px
  border-radius 3px
  padding 0 6px
  color white
  background-color #42b983
  &.tip, &.green
    background-color #42b983
  &.error
    background-color #DA5961 //#f66
  &.warning, &.warn, &.yellow
    background-color darken(#ffe564, 35%)
  & + &
    margin-left 5px
</style>