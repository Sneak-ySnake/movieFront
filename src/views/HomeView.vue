
<template>
  <span v-for="id in movieIds">
    <br />
    <RouterLink :to="{ path: `/movie/${id}` }">{{ id }}</RouterLink>
  </span>
</template>

<script>
export default {
  data() {
    return {
      movieIds: ['500', '501', '502']
    }
  }
}

</script>

