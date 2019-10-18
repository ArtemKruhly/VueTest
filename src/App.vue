<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header :value="value" />
    <router-view @authenticated="setAuth">
    </router-view>
  </div>
</template>

<script>

import Header from "@/components/Header";

export default {
  name: 'app',
  data() {
    return {
      authenticated: !!localStorage.getItem('auth'),
      value: '',
      msg: 'VUE APP',
    }
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.push('/login');
    } else {
      this.value = localStorage.getItem('userName');
    }
  },
  methods: {
    setAuth() {
        this.authenticated = !!localStorage.getItem('auth');
    },
    logout() {
      this.$router.push('/login');
      localStorage.clear();
    },
  },
  components: {
    Header,
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
