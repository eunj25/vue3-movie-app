<template>
  <div class="container">
    <input v-model="title" 
      class="form-control"
      type="text" 
      placeholder="search for Movie"
      @keyup.enter="apply" />
    <div class="selects">
      <select v-for= "filter in filters"
              :key="filter.name"
              v-model="$data[filter.name]"
              class="form-select">
        <option
          v-if="filter.name === 'year'">
          All Year
        </option>
        <option 
          v-for= "item in filter.items"
          :key="item">
          {{ item }} 
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      v-on:click="apply">
      Applet
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
        {
          name:'type',
          items: ['movie','series','episode']
        },
        {
          name: 'number',
          items: [10, 20, 30]
        },
        {
          name: 'year',
          items: (() => {
            const years = []
            const thisYear = new Date().getFullYear() //2023
            for (let i = thisYear; i >= 1985; i -= 1) {
              years.push(i)
            }
            return years
          })()
        }
      ]
    }
  },
  methods: {
    async apply() {
      this.$store.dispatch('movie/searchMovies',{
        title: this.title,
        type : this.type,
        number: this.number,
        year: this.year
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.container {
  display: flex;
  // gap: 10px;
  >* {
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  .selects {
    display: flex;
    gap: 10px;
    select {
      width: 120px;
    }
  }
  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
    color: $white;
    flex-shrink: 0; //flex 사용시 width크기가 줄어들지 않도록 방지
  }
}
</style>