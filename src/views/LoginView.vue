<template>
    login<br />
    <input v-model="username" /><br />
    <input v-model="password" type="password" /><br />
    <button @click="authenticate">Ok</button>

    <br />
    <br />

    1
    <form method="POST" action="http://localhost:8080/login">
        <input name="username" /><br />
        <input name="password" type="password" /><br />
        <input type="submit" />
    </form>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        authenticate() {
            axios.post("http://localhost:8080/login",
                {
                    username: this.username,
                    password: this.password
                });
        },
        async test() {
            await axios.post("http://localhost:8080/login", {
                username: 'theo1',
                password: '1234'
            }, {
                header: {
                    'Authorization': {
                        username: 'theo1',
                        password: '1234'
                    }
                }
            });
        }
    }
}
</script>