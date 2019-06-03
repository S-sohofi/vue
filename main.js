Vue.component('room',{
    template:`
    <div>
        <label> تعداد اتاق:</label>
        <input type="number" name="">
        <adult></adult>
    </div> 
    `
});
Vue.component('adult',{
    template:`
    <div v-show="this.hasRoom = true">
        <label>تعداد افراد بزرگسال:</label>
        <input type="number" >
        <label>خردسال دارید؟</label>
        <input type="checkbox">
    </div> 
    `
});

var app = new Vue({
    el:'#root',
    data(){
        return {
            hasRoom: false
        }
    }
});