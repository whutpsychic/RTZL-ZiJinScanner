<template>
    <RouterView/>

</template>

<script>
    import {RouterView} from 'vue-router'
    import fc from "flutter-core"
    import { useRoute } from 'vue-router';


    export default {
        components: {RouterView},

        mounted() {
            fc.init(this)

        },


    }

</script>
