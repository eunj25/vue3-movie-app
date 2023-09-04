<template>
  <div class="about">
    <div class="photo">
      <Loader 
        v-if="imageLoading"
        absolute />
      <img 
        :src="image"
        :alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ blog }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '~/components/Loader'

export default {
  components: {
    Loader
  },
  data() {
    return {
      imageLoading: true
    }
  },
  computed: {
    ...mapState('about', [
      'image',
      'name',
      'email',
      'blog',
      'phone'
    ]),
    loading() {
      return this.$store.state.movie.loading
    }
  },  
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      await this.$loadImage(this.image)
      this.imageLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  .photo {
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    border: 10px solid $gray-300;
    border-radius: 50%;
    background-color: $gray-200;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      transform: scale(1.5);
    }
  }
  .name {
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    margin-bottom: 20px;
  }
}
</style>