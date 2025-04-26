<template>
    <div class="projects">
        <h2>WELCOME TO THE GALLERY</h2>

        <p>Chào mừng bạn đến với thư viện hình ảnh dự án của chúng tôi, nơi ghi dấu hành trình thi công những công trình chiếu sáng nội‐ngoại thất.</p>
        <p>Mỗi không gian đều thể hiện sự chuyên nghiệp và tâm huyết từ đội ngũ, sự hài lòng và tin tưởng của các bạn là động lực cho chúng tôi tiếp tục cố gắng, mang lại những sản phẩm chất lượng nhất.</p>

        <div class="projects--list">
            <div class="projects--list--item" v-for="project in projectsData" :key="project?.id">
                <div class="image">
                    <img :src="project.image" :alt="project?.desc">
                </div>
                
                <div class="desc" v-html="project?.desc"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import projectsData from '@/data/project-data'
</script>
<style scoped lang="scss">
.projects {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    line-height: 1.5;
    padding: 32px 0;

    h2 {
        text-align: center;
        color: var(--dls-primary-color);
    }

    &--list {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        row-gap: 32px;
        &--item {
            width: 300px;
            overflow: hidden;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 4px;

            .image {
                overflow: hidden;
                width: 100%;
                display: flex;
                img {
                    width: 100%;
                    height: 100%;
                    transition: filter .6s, opacity .6s, transform .6s, box-shadow .3s;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }

            .desc {
                text-align: center;
            }
        }
    }
}
</style>