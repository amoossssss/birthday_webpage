<template>
    <div class="home">
        <el-container class="home_container">

            <!-- Cake and buttons  -->
            <el-main class="home_content">

                <!-- Birthday cake -->
                <el-row :gutter="10" type="flex" class="home_row cake_row" justify="center">
                    <el-col :xs="20" :sm="16" :md="12" :lg="6" :xl="6">
                        <transition name="slide-fade">
                            <div class="cake" v-if="showCake">
                                <div class="plate"></div>
                                <div class="layer layer-bottom"></div>
                                <div class="layer layer-middle"></div>
                                <div class="layer layer-top"></div>
                                <div class="icing"></div>
                                <div class="drip drip1"></div>
                                <div class="drip drip2"></div>
                                <div class="drip drip3"></div>
                                <div class="candle">
                                    <div class="flame"></div>
                                </div>
                            </div>
                        </transition>
                    </el-col>
                </el-row>

                <!-- Messages -->
                <el-row type="flex" class="button_row" justify="center">
                    <el-col :xs="16" :sm="16" :md="12" :lg="6" :xl="6">
                        <transition name="slide-fade">
                            <el-button @click="goMessages()" class="home_button" plain type="danger"
                                       icon="el-icon-ice-cream-round" v-if="showButtons">
                                Messages
                            </el-button>
                        </transition>
                    </el-col>
                </el-row>

                <!-- Video -->
                <el-row type="flex" class="button_row" justify="center">
                    <el-col :xs="16" :sm="16" :md="12" :lg="6" :xl="6">
                        <transition name="slide-fade">
                            <el-button @click="goVideo()" class="home_button" plain type="danger"
                                       icon="el-icon-sugar" v-if="showButtons">
                                Video
                            </el-button>
                        </transition>
                    </el-col>
                </el-row>

                <!-- Stories Behind -->
                <el-row type="flex" class="button_row" justify="center">
                    <el-col :xs="16" :sm="16" :md="12" :lg="6" :xl="6">
                        <transition name="slide-fade">
                            <el-button @click="goStoriesBehind()" class="home_button" plain type="danger"
                                       icon="el-icon-cold-drink" v-if="showButtons">
                                Stories Behind
                            </el-button>
                        </transition>
                    </el-col>
                </el-row>

            </el-main>

        </el-container>

        <!-- For background effect -->
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                showCake: false,
                showButtons: false,
            }
        },
        mounted: function () {
            this.showCake = true;
            this.showButtons = true;
        },
        methods: {
            goMessages() {
                this.$router.push('/messages');
            },
            goVideo() {
                this.$router.push('/video');
            },
            goStoriesBehind() {
                this.$router.push('/storiesbehind');
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/Home.scss";
    @import "../styles/BirthdayCake.scss";

    .home {
        position: relative;
        overflow: hidden;
    }

    .home_container {
        height: 100vh;
        background: #fde2e2;
        position: relative;
    }

    .home_content {
        z-index: 1;
    }

    .cake_row {
        height: 35vh;
    }

    .button_row {
        height: 12vh;
    }

    .home_button {
        width: 100%;
        height: 60%;
        font-size: 20px;
        font-weight: bold;
        border-radius: 20px;
    }

    .el-main {
        color: #333;
        text-align: center;
        line-height: 160px;
        width: 100vw;
    }
</style>