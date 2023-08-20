
<template>
    <div class="bar">
        <span class="title">Find a movie</span>
        <div class="header">
            <form :action="`/movieSearch/${searchQuery}&1`">
                <input type="text" v-model="searchQuery" />
                <input class="searchButton" type="submit" value="Search" />
            </form>
        </div>
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
    background-color: rgba(72, 72, 188, 0.533);
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
    width: 20%;
}

.searchButton {
    background-color: transparent;
    color: white;
    border: none;
}

.title {
    color: white;
    font-weight: bold;
    font-size: large;
}

.bar {
    background-color: rgb(205, 212, 255);
    width: 100%;
}
</style>  