<template>
    <div>
        <router-link to="/">Inicio</router-link>
        <router-link to="/products">Productos</router-link>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App'
    }

</script>

<style lang="scss" scoped>

</style>
