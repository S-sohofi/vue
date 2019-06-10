<template>
    <div id="app">
        <div class="roomCounter container" id="asd">
            <div class="rooms" id="room">
                <label>تعداد اتاق:</label>
                <div class="buttons" >
                    <button type="button" class="add" @click="increment">+</button>
                    <input type="number" id="rooms" min="0" :value="num">
                    <button type="button" class="remove" @click="decrement">-</button>
                </div>
            </div>

            <hr>
            <div class="roomDetail">
                <users v-for="room in num" :key="room"></users>
            </div>
        </div>
    </div>
</template>

<script>
    import users from './components/users.vue'

    export default {
        name: 'app',
        components: {users},
        data() {
            return {
                num: 0,
                rooms:[]
            }
        },
        methods: {
            increment() {
                this.num++;
            },
            decrement() {
                if ((this.num) > 0) {
                    this.num--
                }
                else {
                    this.num = 0;
                }
            }
        }
    }
</script>
<style>
    @import '../src/assets/style.css';
    @import '../src/assets/bootstrap.min.css';
</style>