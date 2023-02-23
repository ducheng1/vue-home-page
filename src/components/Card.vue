<script setup>

  const props = defineProps({
    item: {
      link: String,
      label: String
    }
  })
  const handleJumpTo = () => {
    window.open(props.item.link)
  }
</script>

<template>
  <div class="card" @click="handleJumpTo">
    <component style="font-size: 2rem" :is="props.item.icon" />
    {{ props.item.label }}
  </div>
</template>

<style scoped lang="scss">
  .card {
    background: rgba(0, 0, 0, 0.2);
    width: 9rem;
    height: 5rem;
    padding: 1rem;
    border-radius: 0.4rem;
    overflow: hidden;
    transition: all .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    white-space: nowrap;
    line-height: 3rem;
    gap: 0.2rem;

    &:hover {
      cursor: pointer;
      scale: 1.05;
      box-shadow: 0 0 1rem 0.1rem rgba(0, 0, 0, 0.2);
    }
  }
</style>
