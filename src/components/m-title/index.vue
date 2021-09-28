<script>
export default {
  props: {
    level: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true,
      default: '标题'
    },
    to: {
      type: Object,
      default: () => ({})
    }
  },
  render(h) {
    return h(
      `h${this.level}`,
      {
        class: {
          'font-medium': true,
          'text-gray-700': true,
          'hover:text-gray-900': true,
          'cursor-pointer': true,
          'my-4': true
        },
        on: {
          click: () => {
            this.$router.push(this.to)
          }
        }
      },
      [
        this.title,
        this.$createElement('i', {
          class: 'el-icon-arrow-right'
        })
      ]
    )
  }
}
</script>

<style scoped>
</style>