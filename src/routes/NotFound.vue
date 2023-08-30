<template>
  <div class="not-found">
    <div class="status">404</div>
    <div class="message">Not Found</div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main";

.not-found {
  line-height: 1.2;
  font-family: 'Oswald', sans-serif;
  text-align: center;
  padding: 80px 20px;
  .status{
    font-size: 60px;
    color: $primary;
  }
  .message{
    font-size: 50px;
  }
}
</style>