<template>
    <div class="child-out">
        <label>سن نوزاد</label>
        <div class="buttons">
            <input type="number" min="0" v-model="infage" @change="onInput">
        </div>
    </div>
</template>

<script>
    export default {
        name: "infant",
        data(){
            return{
                infage:0
            }
        },
        methods:{
            onInput(){
                this.$emit('updateinfant',this.infage)
            },
        }
    }
</script>
