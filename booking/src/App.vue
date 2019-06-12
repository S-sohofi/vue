<template>
    <div id="app">
        <div class="roomCounter container">
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
                <users v-for="(room,index) in num" :key="'room'+ index" @output="Allouput"></users>
            </div>
            <button type="submit" id="buttonId" ref="submitbutton" @click="creatdata" >ثبت</button>
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
                clicked:false,
                roomdetail:[],
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
            },
            creatdata(){
                var j = JSON.stringify(this.roomdetail);
                console.log(j);

            },
            Allouput(value){
                this.roomdetail.push(value)
            }

        }
    }
</script>
<style>
    @import '../src/assets/style.css';
    @import '../src/assets/bootstrap.min.css';
</style>