<template>
    <div class="video">

        <!-- Header -->
        <el-row>
            <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                <el-button @click="goBack()" class="back_button" type="danger" circle
                           icon="el-icon-d-arrow-left"></el-button>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h1>Video</h1>
            </el-col>
        </el-row>

        <!-- Content -->
        <div class="block" style="overflow:auto;">
            <!-- TODO : This player is configured to fit portrait videos, modify height and width to customize the player.
                        Or simply delete width and height to obtain landscape mode.  -->
            <youtube class="player" :video-id="videoId" ref="youtube" :width="540" :height="960"></youtube>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Video",
        data(){
            return {
                // TODO : Change the videoID to your youtube video's id
                // BTW, this is a Sam Smith song :)
                videoId : 'HSCymCubvhk'
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .back_button {
        margin-top: 15px;
        position: absolute;
    }
</style>