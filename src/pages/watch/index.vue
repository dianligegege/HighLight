<template>
    <div class="watch-wrap">
        <div class="watch-box">
            <div class="watch-content">
                <div class="content-top">
                    <div class="content-title">
                        <h1>{{ title }}</h1>
                    </div>
                    <Video
                        :options="options"
                    />
                </div>
            </div>
            <div class="watch-list">
                <el-button
                    @click="getName"
                    type="primary"
                >
                    发起请求
                </el-button>
                <el-button
                    @click="myName"
                    type="primary"
                >
                    发起请求myName
                </el-button>
                <div
                    v-for="(item, index) in list"
                    :key="index"
                    class="list-item"
                >
                    <img
                        :src="item.img"
                        alt="img"
                    >
                    <div class="item-content">
                        <p class="title">
                            {{ item.title }}
                        </p>
                        <p class="info">
                            {{ item.info }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Video from '@/components/common/Video';

export default {
    components: {
        Video,
    },
    data() {
        return {
            options: {
                width: 800,
                height: 400,
            },
            title: '我是biaoti',
            list: [
                {
                    img: 'https://s3.ap-northeast-1.amazonaws.com/defigogo/media/20210531211625-e43ab35c8a5b.png',
                    title: '推荐我',
                    info: '我是介绍',
                },
                {
                    img: 'https://s3.ap-northeast-1.amazonaws.com/defigogo/media/20210531211625-e43ab35c8a5b.png',
                    title: '推荐我',
                    info: '我是介绍',
                },
                {
                    img: 'https://s3.ap-northeast-1.amazonaws.com/defigogo/media/20210531211625-e43ab35c8a5b.png',
                    title: '推荐我',
                    info: '我是介绍',
                },
            ],
        };
    },
    methods: {
        async getName() {
            const { success, data } = this.$api.node.getName();
            if (success) {
                console.log(data);
            }
        },
        async myName() {
            const { success, data } = this.$api.node.myName();
            if (success) {
                console.log(data);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.watch-wrap {
    background-color: #e5e5e5;
    width: 100%;
    height: 100vh;
    padding-top: 60px;

    .watch-box {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .watch-content {
        .content-title {
            margin-bottom: 20px;

            h1 {
                font-size: 20px;
                font-weight: bold;
            }
        }
    }

    .watch-list {
        margin-top: 50px;
        background-color: #fff;
        padding: 20px 10px;
        border-radius: 6px;
        height: max-content;

        .list-item {
            width: 300px;
            display: flex;
            justify-content: flex-start;
            margin-bottom: 20px;
            padding: 10px;
            cursor: pointer;

            &:hover {
                background-color: #f6f7fa;
            }

            img {
                width: 130px;
                height: 70px;
                margin-right: 10px;
                object-fit: cover;
            }

            .title {
                line-height: 20px;
                font-weight: 500;
                font-size: 16px;
                height: 20px;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                overflow: hidden;
                white-space: normal;
                text-overflow: ellipsis;
                word-break: break-word;
            }

            .info {
                line-height: 17px;
                font-weight: 500;
                font-size: 12px;
                height: 34px;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                overflow: hidden;
                white-space: normal;
                text-overflow: ellipsis;
                word-break: break-word;
            }
        }
    }
}
</style>
