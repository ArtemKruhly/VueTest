<template>
    <div class="flex">
        <transition name="fade" appear>
            <h2>Login</h2>
        </transition>
        <b-input type="text" placeholder="Name" v-model="name" />
        <b-input type="password" placeholder="Password" v-model="password" />
        <div>
            <label for="radio">accept</label>
            <input type="checkbox" id="radio" @click="check" />
        </div>
        <b-button @click="handleLogin" type="is-success">Login</b-button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
          return {
              name: '',
              password: '',
              isChecked: false,
          };
        },
        methods: {
            handleLogin() {
                if (!this.isChecked) {
                    alert('Check pls');
                    return;
                }
                if (this.name && this.password) {
                    this.$router.push('/');
                    document.location.reload();
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('userName', this.name);
                } else {
                    alert('Wrong credentials!');
                }
            },
            check() {
                this.isChecked = !this.isChecked;
            }
        },
    }
</script>

<style scoped>
.flex {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

input {
    padding: 7px;
    margin: 7px;
}
</style>