<template>
    <div class="childs">
        <div class="adult">
            <label>بزرگسال</label>
            <div class="buttons">
                <button type="button" class="add" @click="adultvalue++">+</button>
                <input type="number" min="0"  v-model="adultvalue">
                <button type="button" class="remove" @click="adultvalue--">-</button>
            </div>
        </div>
        <div class="children">
            <label>خردسال</label>
            <div class="buttons">
                <button type="button" class="add" @click="childvalue++">+</button>
                <input type="number" min="0" class="child-in"  v-model="childvalue">
                <button type="button" class="remove" @click="childvalue--">-</button>
            </div>
        </div>
        <div class="infants">
            <label>نوزاد</label>
            <div class="buttons">
                <button type="button" class="add" ref="inc" @click="infantvalue++">+</button>
                <input type="number" min="0" v-model="infantvalue">
                <button type="button" class="remove" @click="infantvalue --">-</button>
            </div>
        </div>
        <child v-for="(children,index) in childvalue" :key="'child'+index"></child>
        <infant v-for="(infants,index) in infantvalue" :key="'infant'+index"></infant>

    </div>

</template>

<script>
    import child from '../components/child.vue'
    import infant from '../components/infant.vue'
    export default {
        name: "users",
        components:{child,infant},
        // props: ['id','adultvalue','childvalue','infantvalue'],
        data() {
            return {
                adultvalue: 0,
                childvalue: 0,
                infantvalue: 0,

            }
        },
        methods: {
            increment(value) {
                value = value +1;
                alert(value);
                return(value);
            },
            decrement(value) {
                if ((value) > 0) {
                    value--
                }
                else {
                    value = 0;
                }
                console.log(value);
            }
        },

    }
</script>
