<template>
    <div class="messages">

        <!-- Header -->
        <el-row>
            <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                <el-button @click="goBack()" class="back_button" type="danger" circle
                           icon="el-icon-d-arrow-left"></el-button>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h1 style="margin-left: 50px">Messages</h1>
            </el-col>
        </el-row>

        <!-- Content -->
        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
                <div class="block" style="overflow:auto; min-height: 70vh">

                    <loading :active="loaderLoading"
                             :is-full-page="loaderFullPage"
                             :color="loaderColor"
                             :opacity="loaderOpacity"
                             :height="loaderHeight"
                             :width="loaderWidth"
                             :loader="loaderStyle"></loading>

                    <transition name="el-zoom-in-bottom">
                        <el-timeline class="messages_timeline"
                                     v-show="showTimeline">

                            <el-timeline-item timestamp="Say something here ..." placement="top">
                                <el-card>
                                    <el-image :src="img1" @load="onImgLoad"></el-image>
                                </el-card>
                            </el-timeline-item>

                            <el-timeline-item>
                                <el-card>
                                    <h3>Say something here ...</h3>
                                </el-card>
                            </el-timeline-item>

                            <el-timeline-item timestamp="Say something here ..." placement="top">
                                <el-card>
                                    <el-image :src="img2" @load="onImgLoad"></el-image>
                                </el-card>
                            </el-timeline-item>

                            <el-timeline-item timestamp="Say something here ..." placement="top">
                                <el-card>
                                    <el-image :src="img3" @load="onImgLoad"></el-image>
                                </el-card>
                            </el-timeline-item>

                            <el-timeline-item placement="top">
                                <el-card>
                                    <h3>Say something here ...</h3>
                                </el-card>
                            </el-timeline-item>

                            <el-timeline-item>
                                <el-card>
                                    <el-image :src="img4" @load="onImgLoad"></el-image>
                                    <h3>Say something here ...</h3>
                                </el-card>
                            </el-timeline-item>

                            <el-timeline-item timestamp="Say something here ..." placement="top">
                                <el-card>
                                    <h3>Say something here ...</h3>
                                </el-card>
                            </el-timeline-item>

                            <el-timeline-item timestamp="Say something here ..." placement="top">
                                <el-card>
                                    <el-image :src="img5" @load="onImgLoad"></el-image>
                                </el-card>
                            </el-timeline-item>

                            <el-timeline-item timestamp="Love, YourName." placement="top">
                                <el-card>
                                    <el-image :src="img6" @load="onImgLoad"></el-image>
                                </el-card>
                            </el-timeline-item>

                            <el-timeline-item>
                                <el-card>
                                    <h3>To be continued...</h3>
                                </el-card>
                            </el-timeline-item>

                        </el-timeline>
                    </transition>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    // Loading effect component
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    // Images
    // TODO : Put your images in /src/assets, and import them accordingly.
    import img1 from '../assets/just_grey0.jpg'
    import img2 from '../assets/just_grey1.jpg'
    import img3 from '../assets/just_grey2.jpg'
    import img4 from '../assets/just_grey3.jpg'
    import img5 from '../assets/just_grey4.jpg'
    import img6 from '../assets/just_grey5.jpg'

    export default {
        name: "Messages",
        data() {
            return {
                // Display Timeline
                showTimeline: false,
                // Images
                // TODO : Modify the variables to cooperate with your images
                img1: img1,
                img2: img2,
                img3: img3,
                img4: img4,
                img5: img5,
                img6: img6,
                imagesLoaded: 0,
                // TODO : Modify this number (totalImages) to the images you use in the content
                totalImages : 6,
                // Loader
                loaderLoading: true,
                loaderColor: "#dd6161",
                loaderOpacity: 1,
                loaderStyle: "dots",
                loaderHeight: 60,
                loaderWidth: 60,
                loaderFullPage: false
            }
        },
        components: {
            Loading
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            // This is a dump version of loading function,
            // feel free to change it to a more elegant implementation.
            onImgLoad() {
                this.imagesLoaded += 1;
                if (this.imagesLoaded === this.totalImages) {
                    console.log("Images Loaded");
                    setTimeout(() => this.loaderLoading = false, 500);
                    setTimeout(() => this.showTimeline = true, 800);
                }
            }
        }
    }
</script>

<style scoped>
    .messages_timeline {
        width: 80%;
        height: 83vh;
        margin-left: auto;
        margin-right: auto;
    }

    .back_button {
        margin-top: 15px;
        position: absolute;
    }
</style>