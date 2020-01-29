<template>
    <div id="app" class="wrapper">
        <app-header />
        <router-view />
        <app-footer />
    </div>
</template>

<script>
    import Header from './components/Header';
    // import Home from './components/Home';
    import Footer from './components/Footer';
    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'app',
        components: {
            appHeader: Header,
            appFooter: Footer
        },
        methods: {
            ...mapActions([
                'getOfficeList',
                'fetchDirections',
                'fetchVacanciesGroupedByDirection',
            ])
        },
        created() {
            // this.getOfficeList();
            // this.fetchDirections();
            // this.fetchVacanciesGroupedByDirection();
        }
    }
</script>

<style lang="scss">

    @import "assets/scss/custom.scss";
    @import "~bootstrap/scss/bootstrap.scss";
    @import "~bootstrap-vue/dist/bootstrap-vue.css";
    @import "assets/scss/app.scss";

</style>
