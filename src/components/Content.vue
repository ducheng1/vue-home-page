<script setup>
  import Card from '@/components/Card.vue'
  import DigitalClock from '@/components/DigitalClock.vue'
  import { DocumentFolder, TvOne, SendEmail, Tips, Github } from '@icon-park/vue-next'
  import OneWord from '@/components/Hitokoto.vue'

  const cards = [
    {
      icon: DocumentFolder,
      label: '博客',
      link: 'https://blog.dcwedu.top'
    },
    {
      icon: TvOne,
      label: '哔哩哔哩',
      link: 'https://space.bilibili.com/13307042'
    },
    {
      icon: SendEmail,
      label: 'Email',
      link: 'mailto://w729567588@163.com'
    },
    {
      icon: Tips,
      label: '开发知识库',
      link: 'https://flowus.cn/share/56a5383d-e6f9-4ef9-8e1b-900f9dc9741d'
    }
  ]

  const handleGithub = () => {
    window.open('https://github.com/ducheng1')
  }
</script>

<template>
  <div class="content">
    <div class="left">
      <img src="@/assets/images/logo.png" alt="logo" />
      <OneWord />
      <div class="platform">
        <Github @click="handleGithub" />
      </div>
    </div>
    <div class="right">
      <DigitalClock />
      <div class="cards">
        <Card v-for="item in cards" class="animate__fadeIn animate__animated" :item="item" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
