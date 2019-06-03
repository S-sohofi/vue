<template>
    <ul>
        <li v-for="item in items" v-text="item"></li>
    </ul>
</template>

<script>
    export default {
        name: "example",
        props:['items'],

    }
</script>
