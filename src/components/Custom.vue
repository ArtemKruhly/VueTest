<template>
    <div>
        <h1>
            Custom component
        </h1>
        <div>Parent:{{ point }}</div>
        <Clicker :point="point" v-on:click="updateClick"/>
        <div>
            <b-button type="is-primary" @click="showModal">
                Launch modal
            </b-button>
            <modal v-if="isOpen" class="flex">
                <div class="card">
                    <div class="card-image">
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                            </div>
                            <div class="media-content">
                                <p class="title is-4">John Smith</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>
                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            <a>#css</a> <a>#responsive</a>
                            <br>
                            <small>11:09 PM - 1 Jan 2016</small>
                        </div>
                    </div>
                </div>
            </modal>
        </div>
    </div>
</template>

<script>
    import Clicker from "@/components/Clicker";
    export default {
        name: "Custom",
        components: {Clicker},
        data() {
            return {
                point: 0,
                isOpen: false,
            };
        },
        methods: {
            updateClick(updatedPoint) {
                this.point = updatedPoint;
            },
            showModal() {
              this.isOpen = !this.isOpen;
            },
            closeModal() {
              this.isOpen = false;
            },
        }
    }
</script>

<style scoped>
.flex {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>