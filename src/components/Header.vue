<template>
    <b-navbar v-if="authenticated">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item>
                <router-link to="/">Home</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/hello">Hello</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/array">Array</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/player">VuePlayer</router-link>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div>Hello, <strong>{{ value }}</strong></div>
                <div class="buttons">
                    <b-button @click="logout" type="is-light"><a>Logout</a></b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
    export default {
        name: "Header",
        props: {
          value: String,
        },
        data() {
            return {
                authenticated: !!localStorage.getItem('auth'),
            };
        },
        methods: {
            setAuth() {
                this.authenticated = !!localStorage.getItem('auth');
            },
            logout() {
                this.authenticated = false;
                this.$router.push('/login');
                localStorage.clear();
            },
        },
    }
</script>

<style scoped>
.router-link-exact-active {
    color: red !important;
}

</style>