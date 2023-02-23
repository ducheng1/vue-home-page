<script setup>
  import { ref } from 'vue'

  const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <div class="footer animate__animated animate__fadeInUp">
    <div>Copyright &copy; 2022-{{ currentYear }} DuCheng</div>
    <a href="https://beian.miit.gov.cn/#/Integrated/index">浙ICP备2022032081号</a>
    <a href="https://unsplash.com/photos/H_BJWThZRok?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
      背景图片来源于unsplash
    </a>
  </div>
</template>

<style scoped lang="scss">
  @import "hover.css";
  // footer
  .footer {
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;

    a {
      color: white;
      margin-top: 0.4rem;
      text-decoration: none;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #fc2f70;
        transform-origin: center;
        transform: translate(-50%, 0) scaleX(0);
        transition: transform 0.3s ease-in-out;
      }

      &:hover::before {
        transform: translate(-50%, 0) scaleX(1);
      }
    }
  }

</style>
