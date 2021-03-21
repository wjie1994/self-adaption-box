<template>
  <div id="app">
    <SelfAdaptionBox :width="1920"
                     :height="1080">
      123
    </SelfAdaptionBox>
  </div>
</template>

<script>
// import SelfAdaptionBox from '@/components/SelfAdaptionBox'
// import SelfAdaptionBox from './index'

export default {
  name: 'App',
  components: {
    // SelfAdaptionBox
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body, #app {
  width: 100%;
  height: 100%;
}
</style>
