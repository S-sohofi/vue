<template>
    <div id="app">
        <div class="roomCounter container">
            <div class="rooms" id="room">
                <label>تعداد اتاق:</label>
                <div class="buttons" >
                    <button type="button" class="add" @click="increment">+</button>
                    <input type="number" id="rooms" min="0" :value="rooms">
                    <button type="button" class="remove" @click="decrement">-</button>
                </div>
            </div>

            <hr>
            <div class="roomDetail">
                <users v-for="(room,index) in rooms" :key="'room'+ index" @output="Allouput" :clicked='clicked'></users>
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
                rooms: 0,
                clicked:false,
                roomdetail:[],
            }
        },
        methods: {
            increment() {
                this.rooms++;
            },
            decrement() {
                if ((this.rooms) > 0) {
                    this.rooms--
                }
                else {
                    this.rooms = 0;
                }
            },
            creatdata(){
                this.clicked = !this.clicked;
                // var j = JSON.stringify(this.roomdetail);
                // this.roomdetail=[];
                // console.log(this.roomdetail);
            },
            Allouput(value){
                this.roomdetail=[];
                this.roomdetail.push(value);
                var j = JSON.stringify(this.roomdetail);
                console.log(j);
            },

        }
    }
</script>
<style>
    @import '../src/assets/style.css';
    @import '../src/assets/bootstrap.min.css';
</style>