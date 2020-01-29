<template>
    <div class="p-home">
        <div class="container">
            <p>{{ msg }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Welcome Vue.js App'
            }
        }
    }
</script>

<style lang="scss" scoped>

    .p-home {
        padding: 15rem 0 2rem;
    }

</style>
