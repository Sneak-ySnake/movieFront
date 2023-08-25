<template>
    <span>Title : {{ movie.original_title }}</span>

    <img :src="poster" height="200" width="120" />

    <div v-for="genre in movie.genres">
        <span>{{ genre.name }}</span>
    </div>

    <a :href="movie.homepage">Website</a>

    <span>{{ movie.overview }}</span>
</template>

<script>

import axios from 'axios';
import MovieDBConstant from '../constants/MovieDBConstants.js'

export default {
    props: {
        movieId: String
    },
    data() {
        return {
            movie: {},
            poster: '',
        }
    },
    methods: {
        async getMovie() {
            // Get movie info from API
            const response = await axios.get(`${MovieDBConstant.API_URL_MOVIE}${this.movieId}${MovieDBConstant.API_KEY_PARAM}`);

            // Assign info on our data
            this.movie = response.data;
            this.poster = `${MovieDBConstant.IMG_URL}${this.movie.poster_path}`;
        }
    },
    mounted() {
        this.getMovie();
    }
}

</script>