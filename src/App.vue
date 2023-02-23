<script setup>
  import Footer from './components/Footer.vue'
  import Content from '@/components/Content.vue'

  const mobile = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1
  if (mobile) {
    document.body.classList.add('mobile')
  } else {
    document.body.classList.add('pc')
  }
</script>

<template>
  <Content />
  <Footer />
</template>

<style lang="scss" scoped>

</style>
