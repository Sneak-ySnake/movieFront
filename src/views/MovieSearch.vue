<template>
    <InfoBlock :searchQuery="searchQuery" :totalPage="totalPage" :currentPage="currentPage" :totalResults="totalResults" />

    <div class="searchResult">
        <span v-for="result in searchResult">
            Title: <a :href="`/movie/${result.id}`">{{ result.original_title }}</a> <br />
        </span>
    </div>
    <div class="numberList">
        <span class="pagesSelection" v-for="i in totalPage">
            <a v-if="i === currentPage" class="selectedPage" :href="`/movieSearch/${this.searchQuery}&${i}`">{{ i }}</a>
            <a v-else :href="`/movieSearch/${this.searchQuery}&${i}`">{{ i }}</a>
        </span>
    </div>
</template>

<script>
import axios from 'axios';
import MovieDBConstants from '../constants/MovieDBConstants.js';
import InfoBlock from '../components/searchResultComponents/InfoBlock.vue';

export default {
    props: {
        searchQuery: String,
        pageNumber: String
    },
    data() {
        return {
            searchResult: [],
            totalPage: null,
            currentPage: null,
            totalResults: null
        };
    },
    methods: {
        async getSearchResults() {
            const response = await axios.get(`${MovieDBConstants.API_URL_MOVIE_SEARCH}${MovieDBConstants.API_KEY_PARAM}&query=${this.searchQuery}&page=${this.pageNumber}`);
            this.searchResult = response.data.results;
            this.totalPage = response.data.total_pages;
            this.currentPage = response.data.page;
            this.totalResults = response.data.total_results;
        }
    },
    mounted() {
        this.getSearchResults();
    },
    components: { InfoBlock }
}

</script>

<style lang="less">
.numberList {
    margin: 25px;
}

.selectedPage {
    padding: 2px;
    margin: 1px;
    font-weight: bold;
    background-color: lightgray;
    border-radius: 5px;
}

.pagesSelection {
    margin: 2px;
}

.infoText {
    font-weight: bold;
    color: white;
    margin-left: 5px;
    margin-right: 5px;
}

.infoBlock {
    margin: 5px;
    width: 200px;
}

.searchResult {
    width: 800px;
}
</style>