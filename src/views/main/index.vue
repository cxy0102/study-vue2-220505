<!--
 * @Project: study-vue2
 * @File:index
 * @Dsc: 描述
 * @Author wjz
 * @CreateDate 2022/5/5 17:05
-->
<template>
  <div>
    2222222222
  </div>
</template>

<script>

  import {
    defineComponent,
    onMounted,
    reactive,
    getCurrentInstance,
    // ref,
  } from '@vue/composition-api'

  export default defineComponent({
    name: 'mainIndex',
    components: {},
    setup(props, context) {
      const _this = getCurrentInstance().proxy
      const mainData = reactive({})

      const init = () => {
        console.log('props', props)
        console.log('context', context)
        console.log('_this', _this)
      }

      onMounted(() => {
        init()
      })
      return {
        mainData,

        init,
      }
    },
  })
</script>

<style scoped>

</style>
