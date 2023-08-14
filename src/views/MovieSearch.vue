<template>
    <div>
        Results for: {{ searchQuery }} <br />
        Total page: {{ totalPage }} <br />
        Current page: {{ currentPage }} <br />
        Results: {{ totalResults }} <br />
    </div>
    <br /><br />
    <div>
        <span v-for="result in searchResult">
            Title: <a :href="`/movie/${result.id}`">{{ result.original_title }}</a> <br />
        </span>
    </div>
    <div>
        <span class="pagesSelection" v-for="i in  totalPage">
            <a v-if="i === currentPage" class="selectedPage" :href="`/movieSearch/${this.searchQuery}&${i}`">{{ i }}</a>
            <a v-else :href="`/movieSearch/${this.searchQuery}&${i}`">{{ i }}</a>
        </span>
    </div>
</template>

<script>

import axios from 'axios';
import MovieDBConstants from '../constants/MovieDBConstants.js'

export default {
    props: {
        searchQuery: String,
        pageNumber: Number
    },
    data() {
        return {
            searchResult: [],
            totalPage: null,
            currentPage: null,
            totalResults: null
        }
    },
    methods: {
        async getSearchResults() {
            const response
                = await axios.get(`${MovieDBConstants.API_URL_MOVIE_SEARCH}${MovieDBConstants.API_KEY_PARAM}&query=${this.searchQuery}&page=${this.pageNumber}`);

            this.searchResult = response.data.results;
            this.totalPage = response.data.total_pages;
            this.currentPage = response.data.page;
            this.totalResults = response.data.total_results;
        }
    },
    mounted() {
        this.getSearchResults();
    }
}

</script>

<style lang="less">
.selectedPage {
    font-weight: bold;
    background-color: lightgray;
    border-radius: 25%;
}

.pagesSelection {
    margin: 2px;
}
</style>