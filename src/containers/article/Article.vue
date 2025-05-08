<template>
    <div class="article">
        <p>Hiện chưa có bài viết nào</p>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.article {
    min-height: 50vh;
    max-width: var(--dls-max-width);
    margin: 0 auto;

    @media only screen and (min-width: 576px) and (max-width: 992px) {
        padding: 16px 20px;
    }

    @media only screen and (max-width: 576px) {
        padding: 16px 10px;
    }
}
</style>