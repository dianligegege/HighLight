<template>
    <div class="layout-default c-page-width">
        <my-header />
        <main>
            <router-view />
        </main>
        <my-footer />
    </div>
</template>

<script>
import MyHeader from '@/components/layout/Header';
import MyFooter from '@/components/layout/Footer';

export default {
    name: 'DefaultLayout',
    components: {
        MyHeader,
        MyFooter,
    },
};
</script>

<style lang="scss" scoped>
// 吸底样式
.layout-default {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    > main {
        flex: 1 1 auto;
    }
}
</style>
