
<template>
    <div class="header">
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
  
<style lang="less">
.header {
    background-color: rgb(72, 72, 188);
}
</style>  