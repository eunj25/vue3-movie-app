<template>
  <footer>
    <Logo />
    <a href="https://github.com/eunj25" target="_blank">
      (c) {{ new Date().getFullYear() }}eunj25
    </a>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

footer {
  padding: 40px;
  text-align: center;
  .logo {
    display: block;
    margin-bottom: 5px;
    opacity: .5;
  }
  a {
    text-decoration: none;
    color: $gray-600;
  }
}
</style>