Vue.component('peopel',{
    template:`
    <div class="childs" id="rooms-1">
        <div class="adult">
            <label>بزرگسال</label>
            <div class="buttons">
                <button type="button" class="add">+</button>
                <input type="number" min="0" value="1">
                <button type="button" class="remove">-</button>
            </div>
        </div>
        <div class="children">
            <label>خردسال</label>
            <div class="buttons">
                <button type="button" class="add">+</button>
                <input type="number" min="0" class="child-in" id="child-in" value="0">
                <button type="button" class="remove">-</button>
            </div>
        </div>
        <div class="infants">
            <label>نوزاد</label>
            <div class="buttons">
                <button type="button" class="add">+</button>
                <input type="number" min="0" id="infant-in" value="0">
                <button type="button" class="remove">-</button>
            </div>
        </div>
    </div>
    `
});
Vue.component('child',{
    template:`
    <div class="child-out">
        <label>سن خردسال</label>
        <div class="buttons">
            <input type="number" min="0">
        </div>
    </div>
    `
});
Vue.component('infant',{
    template:`
    <div class="child-out">
        <label>سن نوزاد</label>
        <div class="buttons">
            <input type="number" min="0">
        </div>
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