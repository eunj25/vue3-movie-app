<template>
  <RouterLink 
    to="/" 
    class="logo">
    <span>OMDbAPI</span>.COM
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo {
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  color: $gray-900;
  text-decoration: none;
  &:hover {
    color: $gray-900;
  }
  span {
    color: $primary;
  }
}
</style>