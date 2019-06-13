<template>
    <div class="child-out">
        <label>سن خردسال</label>
        <div class="buttons">
            <input type="number" min="0" v-model="currentage" @change="onInput">
        </div>
    </div>
</template>

<script>
    export default {
        name: "child",
        data(){
            return{
                currentage:0,
            }
        },
        methods: {

            onInput() {
                this.$emit('updatechild', this.currentage);
            }
        },
    }
</script>