<template>
    <div class="header-wrap">
        <router-link
            to="/"
            class="header-title"
        >
            HIGHLIGHT
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.header-wrap {
    position: fixed;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    color: #fff;
    background: #f2f6fc0d;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;

    .header-title {
        font-weight: bold;
        color: #ecf5ff;
    }
}
</style>
