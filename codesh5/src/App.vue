<template>
    <RouterView/>
    <my-footer v-if="tabType"></my-footer>

<!--    <div id="app">-->
<!--        <router-view v-slot="{ Component }">-->
<!--            <keep-alive>-->
<!--                <component :is="Component"  v-if="$route.meta.keepAlive"/>-->
<!--            </keep-alive>-->
<!--            <component :is="Component"  v-if="!$route.meta.keepAlive"/>-->
<!--        </router-view>-->
<!--    </div>-->


</template>

<script>
    import {RouterView} from 'vue-router'
    import fc from "flutter-core"
    import myFooter from "../src/views/tabbar/main.vue";

    export default {
        components: {RouterView, myFooter},
        data() {
            return {
                tabType: true
            }
        },
        mounted() {
            fc.init(this)

        },

        watch: {
            $route(e) {
                if (e.name == 'home' || e.name == 'my') {
                    this.tabType = true
                } else {
                    this.tabType = false
                }

            }

        }

    }

</script>
