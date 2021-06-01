<template>
    <div class="index-wrap">
        <div class="index-header">
            <h1 class="header-title">
                在这里见证你的时刻
            </h1>
            <div class="header-list">
                <p>守望先锋</p>
                <p>NBA2K</p>
                <p>...</p>
            </div>
        </div>
        <div class="index-content content-ow">
            <div class="content-text">
                <h2>
                    Overwatch
                </h2>
                <div class="text-list">
                    <p>暴雪娱乐</p>
                    <p>射击游戏</p>
                    <p>极易血压升高</p>
                </div>
            </div>
            <div class="content-video">
                <MyVideo
                    :options="options1"
                />
            </div>
        </div>
        <div class="index-content content-nba">
            <div class="content-video">
                <MyVideo
                    :options="options2"
                />
            </div>
            <div class="content-text">
                <h2>
                    NbA2K
                </h2>
                <div class="text-list">
                    <p>2K Games</p>
                    <p>体育游戏</p>
                    <p>差评如潮，销量暴增</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyVideo from '@/components/common/Video';

export default {
    components: {
        MyVideo,
    },
    data() {
        return {
            options1: {
                controls: false,
                poster: 'https://overwatch.nosdn.127.net/2/media/artwork/dva-animated-short.jpg',
                sources: [{
                    src: '//vjs.zencdn.net/v/oceans.mp4',
                    type: 'video/mp4',
                }],
            },
            options2: {
                controls: false,
                poster: 'https://nba.2k.com/images/social/social-mamba-cg.jpg',
                sources: [{
                    src: '//vjs.zencdn.net/v/oceans.mp4',
                    type: 'video/mp4',
                }],
            },
        };
    },
};
</script>

<style lang='scss' scoped>
.index-wrap {
    color: white;

    .index-header {
        background:
            url(~@/assets/images/index/genji.jpg) right top/auto 100vh no-repeat,
            linear-gradient(
                to bottom,
                #080d11,
                #080d11 10%,
                #090b0f 20%,
                #0a0b0f 30%,
                #0f0808 50%,
                #12090a 60%,
                #140b0c 70%,
                #160709 73%,
                #1d0509 80%,
                #1f0302 90%,
                #150301
            );
        height: 100vh;
        padding: 35vh 0 0 20vw;

        .header-title {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 12px;
        }

        .header-list {
            > p {
                font-size: 16px;
                height: 30px;
            }
        }
    }

    .index-content {
        background: black;
        height: 600px;
        display: flex;
        justify-content: space-between;
        padding: 100px 10vw;
        width: 100%;

        .content-text {
            text-align: left;
            margin-right: 200px;
            margin-top: 40px;

            h2 {
                font-size: 28px;
                line-height: 30px;
                margin-bottom: 24px;
                font-weight: bold;
            }

            .text-list {
                font-size: 18px;

                > p {
                    margin-bottom: 18px;
                    font-weight: 500;
                }
            }
        }

        &.content-ow {
            background: url(~@/assets/images/index/header-bg.jpg) center/cover no-repeat;
        }

        &.content-nba {
            background: url(~@/assets/images/index/2k.png) center/cover no-repeat;

            .content-text {
                margin-right: 0;
                margin-left: 200px;
                color: rgba(234, 234, 234, 0.8);
            }
        }
    }
}
</style>
