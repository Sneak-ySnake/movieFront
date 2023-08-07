
<template>
  <div>
    Search a movie <br />
    <form :action="`/movieSearch/${searchQuery}&1`">
      <input type="text" v-model="searchQuery" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ""
    }
  }
}

</script>

