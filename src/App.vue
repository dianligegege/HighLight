<template>
    <div id="app">
        <component
            v-if="layout"
            :is="layout"
        />
    </div>
</template>

<script>
import DefaultLayout from '@/layout/Default';

export default {
    components: {
        Default: DefaultLayout,
    },
    computed: {
        layout() {
            console.log(this.$route);
            return this.$route.meta.layout || 'Default';
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/styles/public";
</style>
