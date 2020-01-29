<template>
    <b-modal id="p-modal-video" ref="modalVideo" size="video" centered hide-footer>
        <template slot="modal-header-close">
            <div class="p-svg p-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path stroke="#FFFFFF" stroke-width="2" fill="none" d="M17.412 1.871L1.975 17.307M2.184 2.079l15.02 15.02"/></svg>
            </div>
        </template>
        <div class="p-video">
            <youtube :video-id="videoModalId"
                     ref="youtube"
                     @playing="playing"
                     @ended="ended"></youtube>
        </div>
    </b-modal>
</template>

<script>

    export default {
        data : function() {
            return {
            }
        },
        computed: {
            player() {
                return this.$refs.youtube.player
            }
        },
        props: {
            videoModalId: String,
        },
        mounted() {
            this.$root.$on('bv::modal::show', (bvEvent) => {
                if(bvEvent.target.id === 'p-modal-video') {
                    this.playVideo();
                }
            });
            this.$root.$on('bv::modal::hide', (bvEvent) => {
                if(bvEvent.target.id === 'p-modal-video') {
                    this.stopVideo();
                }
            });
        },
        methods: {
            playVideo() {
                this.player.playVideo()
            },
            stopVideo() {
                this.player.stopVideo()
            },
            playing() {
                //play
            },
            ended() {
                //stop
                this.$refs.modalVideo.hide();
                this.stopVideo();
            },
        },
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/scss/variables.scss";

    //modal
    .p-modal {
        .p-video {
            width: 100%;
            padding-bottom: 65%;
        }
    }
    .p-close {
        width: 18px;
        padding-bottom: 18px;
        opacity: 1;
        outline: none !important;
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
    }

</style>

<style lang="scss">
    .p-modal {
        .modal-video {
            width: 90%;
            max-width: 1000px;

            .modal-header,
            .modal-body,
            .modal-content {
                position: relative;
                padding: 0;
                border-radius: 0 !important;
                background-color: transparent;
                border: none !important;
            }
            .modal-header .close {
                opacity: 1 !important;
                outline: none !important;
                margin-top: -4.5rem !important;
            }

        }
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-modal {
            .modal-video {
                width: 98%;
                margin: 0 auto;
            }
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
    }
</style>
