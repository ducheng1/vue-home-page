<script setup>
  import { ref } from 'vue'

  const time = ref('')
  const date = ref('')

  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const timerID = setInterval(updateTime, 1000)
  updateTime()

  function updateTime() {
    let cd = new Date()
    time.value = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2)
    date.value = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()]
  }

  function zeroPadding(num, digit) {
    let zero = ''
    for (let i = 0; i < digit; i++) {
      zero += '0'
    }
    return (zero + num).slice(-digit)
  }
</script>

<template>
  <div id="clock" class="animate__fadeIn animate__animated">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>

<style scoped lang="scss">
  p {
    margin: 0;
    padding: 0;
  }

  #clock {
    text-align: center;
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
    background: rgba(0, 0, 0, 0.15);
    padding: 1rem;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .time {
      letter-spacing: 0.05rem;
      font-size: 4rem;
      padding: 0.4rem 0;
    }

    .date {
      letter-spacing: 0.1em;
      font-size: 1.4rem;
    }

    .text {
      letter-spacing: 0.1rem;
      font-size: 0.8rem;
      padding: 1.2rem 0 0;
    }
  }
</style>
