<template>
    <RouterView/>
    <my-footer v-if="tabType"></my-footer>



    <!-- vue3.0配置 -->
<!--    <router-view v-slot="{ Component }" v-if="isRouterAlive">-->
<!--        <keep-alive>-->
<!--            <component :is="Component" :key="route.name" v-if="route.meta.keepAlive" />-->
<!--        </keep-alive>-->
<!--        <component :is="Component" :key="route.name" v-if="!route.meta.keepAlive" />-->
<!--    </router-view>-->

</template>

<script>
    import {RouterView} from 'vue-router'
    import fc from "flutter-core"
    import { useRoute } from 'vue-router';
    import myFooter from "../src/views/tabbar/main.vue";

    export default {
        components: {RouterView, myFooter},

        setup(props) {
            const route = useRoute();
            return { route }
        },
        data() {
            return {
                tabType: true,
                isRouterAlive:true
            }
        },
        mounted() {
            fc.init(this)

        },

        // provide () { return { reload: this.reload } },
        //
        // methods: {
        //     reload () {
        //         this.isRouterAlive = false
        //         this.$nextTick(() => (this.isRouterAlive = true))
        //     }
        // },

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
