<template>
    <div>
        <div class="wrapper">
            <b-button @click="addNew" type="is-info" v-if="!showAdded" :disabled="isDrag">Add new item</b-button>
            <b-button @click="addNew" type="is-info" v-else>Cancel</b-button>
            <div class="field">
                <b-switch :value="isDrag" :disabled="showAdded" v-model="isDrag">
                    Drag
                </b-switch>
            </div>
            <div>
                <span class="count name">
                    Items: {{ countOfItems }}
                </span>
            </div>
        </div>
        <transition name="fade">
        <div v-if="showAdded" class="block">
            <b-input type="text" :name="name" v-model="name" placeholder="Name" />
            <b-input type="text" v-model="msg" placeholder="message" />
            <b-button @click="handleSubmit" class="is-success">Apply</b-button>
        </div>
        </transition>
        <div>
            <div class="list-item">
                    <span class="name">
                        Name
                    </span>
                <span class="name">
                        Message
                    </span>
                <span class="name">
                        Action
                    </span>
            </div>
            <draggable :list="list" v-model="list" v-if="isDrag">
                <transition-group>
                    <div
                            v-for="(element, index) in list"
                            :key="index"
                            class="list-item"
                    >
                        <span class="user">{{element.user}}</span>
                        <span>{{element.msg}}</span>
                        <b-button
                                @click="removeItem(index)"
                                type="is-primary"
                        >
                            Remove
                        </b-button>
                    </div>
                </transition-group>
            </draggable>
            <div v-else>
                <div
                    v-for="(element, index) in list"
                    :key="element.id"
                    class="list-item"
                >
                    <span class="user">{{element.user}}</span>
                    <span>{{element.msg}}</span>
                    <b-button
                            @click="removeItem(index)"
                            type="is-primary"
                    >
                        Remove
                    </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    export default {
        name: "Array",
        components: {
            draggable,
        },
        data() {
            return {
              list: [
                  {
                      id: 1,
                      user: 'Bob',
                      msg: 'lololololollo!!!!!',
                  },
                  {
                      id: 2,
                      user: 'jack',
                      msg: 'lololololollo!!!!!',
                  },
                  {
                      id: 3,
                      user: 'andru',
                      msg: 'lololololollo!!!!!',
                  },
                  {
                      id: 4,
                      user: 'qwetyu',
                      msg: 'lololololollo!!!!!',
                  },
                  {
                      id: 5,
                      user: 'zana',
                      msg: 'lololololollo!!!!!',
                  },
              ],
                showAdded: false,
                maxItems: 7,
                name: '',
                msg: '',
                isDrag: false,
            };
        },
        computed: {
            countOfItems() {
                return this.list.length;
            },
        },
        beforeUpdate() {
            console.log(this.isDrag);
        },
        methods: {
            addNew() {
                this.showAdded = !this.showAdded;
            },
            handleSubmit() {
                if (!this.name || !this.msg) {
                    alert('fill the fields');
                } else if (this.list.length >= this.maxItems) {
                    this.alertCustomError();
                } else {
                    this.list.push({
                        user: this.name,
                        msg: this.msg,
                    });
                    this.msg = '';
                    this.name = '';
                }
            },
            removeItem(index) {
              this.list.splice(index, 1);
            },
            alertCustomError() {
                this.$buefy.dialog.alert({
                    title: 'Error',
                    message: 'Item list has max length',
                    type: 'is-danger',
                    hasIcon: true,
                    icon: 'times-circle',
                    iconPack: 'fa',
                });
            },
        },
    }
</script>

<style scoped>
.list-item {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.name {
    color: #42b983;
    font-weight: 900;
}

.user {
    color: #2c3e50;
    font-weight: 900;
}

.wrapper {
    align-items: center;
    display: flex;
    padding: 10px;
}

.block {
    padding: 10px;
    display: flex;
}

.count {
    padding-left: 30px;
}

.field:not(:last-child) {
    padding-left: 30px;
    margin-bottom: 0 !important;
}

</style>