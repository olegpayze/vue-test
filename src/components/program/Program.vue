<template>
    <div class="p-program-wrapper">
        Рекомендательная программа
    </div>
</template>

<script>
    import Vue from 'vue';
    import { mapActions, mapState } from 'vuex';

    export default {
        data : function() {
            return {
            }
        },
        computed: {
        },
        watch : {
        },
        methods: {
        },
        components: {
            Response: Response,
        },
        $_veeValidate: {
            validator: 'new' // Provide VeeValidate to child components
        }
    }
</script>


<style lang="scss" scoped>

    @import "../../assets/scss/variables.scss";

    .p-program-wrapper {}

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
