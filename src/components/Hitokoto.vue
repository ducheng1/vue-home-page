<script setup>
  import axios from 'axios'
  import { ref } from 'vue'

  const hitokoto = ref('')
  const from = ref('')
  const hitokotoRef = ref()

  async function getData() {
    let { data } = await axios.get('https://v1.hitokoto.cn/')
    hitokoto.value = data.hitokoto
    from.value = data.from
    hitokotoRef.value.classList.add('animate__flipInX')
  }

  getData()
</script>

<template>
  <div ref="hitokotoRef" class="hitokoto animate__animated">
    <div>{{ hitokoto }}</div>
    <div>—— {{ from }}</div>
    <button @click="getData">换一换</button>
  </div>
</template>

<style scoped lang="scss">
  .mobile{
    .hitokoto{
      width: 100%;
    }
  }
  .hitokoto {
    background: rgba(0, 0, 0, 0.15);
    width: 30rem;
    height: 10rem;
    padding: 1rem 2.4rem;
    border-radius: 0.4rem;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // 双引号
    &:before {
      content: '“';
      position: absolute;
      top: 0.6rem;
      left: 0.2rem;
    }

    &:after {
      content: '”';
      position: absolute;
      bottom: -0.6rem;
      right: 0;
    }

    &:before, &:after {
      font-size: 2rem;
      font-family: 宋体, serif;
    }

    div {
      font-size: 1.2rem;
      font-weight: bold;
      line-height: 1.4rem;

      &:nth-child(2) {
        margin-top: 0.5rem;
        font-weight: normal;
        font-size: 1rem;
        text-align: right;
      }
    }

    // 换一换
    button {
      outline: none;
      border: none;
      padding: 0.2rem 0.6rem;
      border-radius: 0.2rem;
      font-size: 0.8rem;
      transition: all .3s;
      position: absolute;
      //left: 0;
      bottom: 1rem;

      &:hover {
        scale: 1.05;
        cursor: pointer;
      }
    }
  }
</style>
