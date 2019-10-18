<template>
    <div>
        <button v-on:click="click">Increment</button>
        <div>Child: {{ point }}</div>
    </div>
</template>

<script>
    export default {
        name: "Clicker",
        props: {
            point: Number,
        },
        methods: {
            click() {
                this.$emit('click', ++this.point);
            }
        },
    }
</script>

<style scoped>

</style>