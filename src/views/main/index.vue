<!--
 * @Project: study-vue2
 * @File:index
 * @Dsc: 描述
 * @Author wjz
 * @CreateDate 2022/5/5 17:05
-->
<template>
  <div>
    <div>
      {{ mainData.showData }}
    </div>
    <div>
      444444444444
    </div>
  </div>
</template>

<script>

  import {
    // defineComponent,
    onMounted,
    reactive,
    getCurrentInstance,
    // ref,
  } from '@vue/composition-api'

  export default {
    name: 'mainIndex',
    components: {},
    setup(props, context) {

      const _this = getCurrentInstance().proxy
      const mainData = reactive({
        showData: '2222222222',
      })

      const init = () => {
        console.log('init')
        console.log('props', props)
        console.log('context', context)
        console.log('_this', _this)
        mainData.showData = '333333333'
      }

      onMounted(() => {
        init()
      })
      return {
        mainData,

        init,
      }
    },
  }
</script>

<style scoped>

</style>
