<template>
    <div class="stories_behind">

        <!-- Header -->
        <el-row class="stories_behind_header">
            <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                <el-button @click="goBack()" class="back_button" type="danger" circle
                           icon="el-icon-d-arrow-left"></el-button>
            </el-col>
            <el-col :xs="24" :sm="24" :md="20" :lg="24" :xl="24">
                <h1>Stories Behind</h1>
            </el-col>
        </el-row>

        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
                <!-- Content -->
                <div class="block" style="overflow:auto">

                    <el-card class="SB_card">
                        <h3>GitHub</h3>
                        <el-button @click="goGitHub()" type="danger" round>Checkout GitHub</el-button>
                    </el-card>

                    <!-- TODO : Change these messages to your own words ... -->
                    <el-card class="SB_card">
                        <h3>Say something about how you prepared this birthday gift...</h3>
                        <p>
                            2020/**/**<br>
                            Decide to ...<br>
                            Clone this webpage repo ...<br>
                            Buy some domain name ...
                        </p>
                        <p>
                            2020/**/**<br>
                            Modify content ...<br>
                            Record video ...<br>
                            Upload to youtube ...
                        </p>
                    </el-card>

                </div>
            </el-col>
        </el-row>

    </div>

</template>

<script>
    export default {
        name: "StoriesBehind",
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            goGitHub() {
                window.open("https://github.com/amoossssss/birthday_webpage", '_blank');
            }
        }
    }
</script>

<style scoped>
    .stories_behind_header {
        position: fixed;
        width: 100%;
        background: #ffffff;
        z-index: 1;
    }

    .block {
        margin-top: 80px;
        margin-bottom: 50px;
    }

    .back_button {
        margin-top: 15px;
        position: absolute;
    }

    .SB_card {
        width: 80%;
        margin: 0 auto 20px;
    }


</style>