<template>
  <div class="container">
    <template v-if="loading">
      <div class="skeletons">
        <div class="skeleton poster"></div>
        <div class="specs">
          <div class="skeleton title"></div>
          <div class="skeleton spec"></div>
          <div class="skeleton plot"></div>
          <div class="skeleton etc"></div>
          <div class="skeleton etc"></div>
          <div class="skeleton etc"></div>
        </div>
      </div>
      <Loader
        :size="3"
        :z-index="9"
        fixed />
    </template>
    <div 
      v-else
      class="movie-details">
      <div 
        :style="{backgroundImage: `url(${requestDiffSizeImage(theMovie.Poster)})`}"
        class="poster">
        <Loader
          v-if="imageLoading"
          :size="3"
          :z-index="9"
          absolute />
      </div>
      <div class="specs">
        <div class="title">
          {{ theMovie.Title }}
        </div>
        <div class="labels">
          <span>{{ theMovie.Released }}</span>
          <span>{{ theMovie.Runtime }}</span>
          <span>{{ theMovie.Country }}</span>
        </div>
        <div class="plot">
          <span>{{ theMovie.Plot }}</span>
        </div>
        <div class="ratings">
          <h3>ratings</h3>
          <div class="ratings-wrap">
            <div 
              v-for="{ Source, Value } in theMovie.Ratings"
              :key="Source"
              :title="Source"
              class="rating">
              <img 
                :src="`https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/${Source}.png`" 
                :alt="Source" />
              <span>{{ Value }}</span>
            </div>
          </div>
        </div>
        <div class="etc">
          <h3>actors</h3>
          <span>{{ theMovie.Actors }}</span>
        </div>
        <div class="etc">
          <h3>director</h3>
          <span>{{ theMovie.Director }}</span>
        </div>
        <div class="etc">
          <h3>production</h3>
          <span>{{ theMovie.Production }}</span>
        </div>
        <div class="etc">
          <h3>genre</h3>
          <span>{{ theMovie.Genre }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/Loader';

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
    theMovie() {
      return this.$store.state.movie.theMovie
    },
    loading() {
      return this.$store.state.movie.loading
    }
  },
  created() {
    // console.log(this.$route)
    this.$store.dispatch('movie/searchMovieWithId', {
      id: this.$route.params.id
    })
  },
  methods: {
    requestDiffSizeImage(url, size = 700) {
      if(!url || url === 'N/A') {
        this.imageLoading = false
        return ''
      }
      const src = url.replace('SX300', `SX${size}`)
      this.$loadImage(src)
        .then(() => {
          this.imageLoading = false
        })
      return src
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top:40px;
  .poster{
    flex-shrink: 0;
    width: 500px;
    height: calc(500px * 3/2);
    margin-right: 70px;
  }
  .specs{
    flex-grow: 1;
  }
}
.skeletons{
  display: flex;
  .skeleton {
    border-radius: 10px;
    background-color: $gray-200;
    &.title {
      width: 80%;
      height: 70px;
    }
    &.spec {
      width: 60%;
      height: 30px;
      margin-top: 20px;
    }
    &.plot {
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
    &.etc {
      width: 50%;
      height: 50px;
      margin-top: 20px;
    }
  }
}
.movie-details {
  display: flex;
  .poster {
    background-size: cover;
    background-position: center;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
  }
  .specs {
    color: $black;
    .title{
      font-family: 'Oswald', sans-serif;
      font-size: 70px;
      line-height: 1;
      margin-bottom: 30px;
    }
    .labels{
      color:$primary;
      span {
        font-weight: bold;
        &::after {
          content: '\00b7';
          margin: 0 6px;
        }
        &:last-child::after {
          display: none;
        }
      }
    }
    .plot{
      margin-top: 20px;
      color: $gray-600;
    }
    .ratings{
      .ratings-wrap {
        display: flex;
        .rating {
          display: flex;
          align-items: center;
          margin-right: 32px;
          img {
            height: 30px;
            flex-shrink: 0;
            margin-right: 6px;
          }
          span {
            color: $gray-600;
          }
        }
      }
    }
    .etc {
      span {
        color: $gray-600;
      }
    }
  }
  h3 {
    font-family: 'Oswald', sans-serif;
    text-transform: capitalize;
    margin: 24px 0 6px;
    font-size: 20px;
  }
  @include media-breakpoint-down(xl) {
    .poster {
      width: 300px;
      height: calc(300px * 3/2);
      margin-right: 40px;
    }
  }
  @include media-breakpoint-down(lg) {
    display: block;
    .poster {
      margin-bottom: 40px;
    }
  }
  @include media-breakpoint-down(md) {
    .specs {
      .title {
        font-size: 50px;
      }
      .ratings {
        .rating {
          margin-top: 10px;
          margin-right: 10px;
        }
      }
    }
    .skeletons {
      display: block;
    }
    .movie-details {
      display: block;
    }
  }
}
</style>