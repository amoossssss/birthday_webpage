<template>
    <div class="landing">
        <transition name="slide-fade">
            <h1 class="landing_text" v-if="show">{{message}}</h1>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'Landing',
        data() {
            // TODO : Change these messages to your own words ...
            let landingMessages = [
                "This is more than a website...",
                "It's about you and your birthday...",
                "About celebrations and wishes...",
                "Are you ready for the experience...?",
                "Welcome to YourDomain.com"
            ];
            return {
                message: "",
                messages: landingMessages,
                show: true,
                showButton: false,
                count: 0,
                maxCount: landingMessages.length - 1
            }
        },
        mounted: function () {
            this.message = this.messages[this.count];
            setTimeout(this.fadeText, 2000);
        },
        methods: {
            fadeText() {
                this.show = false;
                this.count++;
                this.message = this.messages[this.count];
                setTimeout(this.showText, 1250);
            },
            showText() {
                this.show = true;
                if (this.count !== this.maxCount) {
                    setTimeout(this.fadeText, 2250);
                } else {
                    this.showButton = true;
                    setTimeout(() =>this.$router.push('/home'), 3000);
                }
            }
        }
    }

</script>

<style scoped>
    .landing {
        line-height: 80vh;
        font-size: 3vw;
    }

    .landing_text {
        vertical-align: baseline;
    }
</style>
