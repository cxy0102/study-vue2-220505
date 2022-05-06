<!--
 * @Project: study-vue2
 * @File:TestLodash
 * @Dsc: 描述
 * @Author wjz
 * @CreateDate 2022/5/6 9:23
-->
<template>
  <div>
    555555555555555555
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
    name: 'TestLodash',
    components: {},
    setup(props, context) {
      const _this = getCurrentInstance().proxy
      const mainData = reactive({})

      const init = () => {
        console.log('init')
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
