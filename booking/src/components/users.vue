<template>
    <div class="childs">
        <div class="adult">
            <label>بزرگسال</label>
            <div class="buttons">
                <button type="button" class="add" @click="adultvalue++">+</button>
                <input type="number" min="0"  v-model="adultvalue" >
                <button type="button" class="remove" @click="adultvalue--">-</button>
            </div>
        </div>
        <div class="children">
            <label>خردسال</label>
            <div class="buttons">
                <button type="button" class="add" @click="addchild">+</button>
                <input type="number" min="0" class="child-in"  v-model="childvalue" >
                <button type="button" class="remove" @click="removechild">-</button>
            </div>
        </div>
        <div class="infants">
            <label>نوزاد</label>
            <div class="buttons">
                <button type="button" class="add" ref="inc" @click="addinfant">+</button>
                <input type="number" min="0" v-model="infantvalue" >
                <button type="button" class="remove" @click="removeinfant" >-</button>
            </div>
        </div>
        <!--<child v-for="(children,index) in childvalue" :key="'child'+index" @updatechild="updateChildAge" ></child>-->
        <!--<infant v-for="(infants,index) in infantvalue" :key="'infant'+index" @updateinfant="updateInfantAge"></infant>-->




        <div v-if="infantvalue > 0" v-for="(infant,index) in infants">
            <label> {{index + 1}}سن نوزاد</label>
            <div class="buttons">
                <input type="number" min="0" v-model="infant.age">
            </div>
        </div>


        <div v-if="childvalue > 0" v-for="(child,index) in childs">
            <label> {{index + 1}}سن خردسال</label>
            <div class="buttons">
                <input type="number" min="0" v-model="child.age">
            </div>
        </div>
    </div>

</template>

<script>
    import child from '../components/child.vue'
    export default {
        name: "users",
        props:["clicked"],
        // components:{child},
        data() {
            return {
                adultvalue: 0,
                childvalue: 0,
                infantvalue: 0,
                childage:[],
                infantage:[],
                cage:[],
                iage:[],
                infants:[],
                childs:[]

            }
        },
        methods: {

            // updateChildAge(value) {
            //     this.cage.push(value);
            // },
            // updateInfantAge(value){
            //     this.iage.push(value);
            // },
            addinfant(){
                this.infants.push({
                    age:''
                });
                this.infantvalue = this.infantvalue +1
            },
            removeinfant(){
                this.infants.pop({
                    age:''
                });
                if ((this.infantvalue) > 0) {
                    this.infantvalue--
                }
                else {
                    this.infantvalue = 0;
                }
            },
            addchild(){
                this.childs.push({
                    age:''
                });
                this.childvalue = this.childvalue +1
            },
            removechild(){
                this.childs.pop({
                    age:''
                });
                if ((this.childvalue) > 0) {
                    this.childvalue--
                }
                else {
                    this.childvalue = 0;
                }
            }

        },
        watch:{
            clicked:function(){
                this.childage=[];
                this.infantage=[];
                var adults = this.adultvalue;
                var children = this.childvalue;
                var infants = this.infantvalue;
                var childage = this.childage;
                var infantsage = this.infantage;
                var output={};

                for (var i =0; i<this.childs.length;i++){
                    this.childage.push(this.childs[i].age);
                }
                for (var j =0; j<this.infants.length;j++){
                    this.infantage.push(this.infants[j].age);
                }
                output = {adults,children,infants,childage,infantsage};
                var str = JSON.stringify(output);
                this.$emit('output',str);
            }
        }

    }
</script>
