<template>
    <div class="infoBlock">
        <span class="infoText">Results for:</span> {{ searchQuery }}
        <span class="infoText">Total page:</span> {{ totalPage }}
        <span class="infoText">Current page:</span> {{ currentPage }}
        <span class="infoText">Results:</span> {{ totalResults }}
    </div>
</template>

<script>
export default {
    props: {
        searchQuery: String,
        totalPage: String,
        currentPage: String,
        totalResults: String
    }
}
</script>