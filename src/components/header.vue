<template>
    <header>
        <Categories />
        Header
    </header>
</template>

<script>
import Categories from '@/components/Categories'
    export default {
        components: {
            Categories,
        }        
    }
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-around;
}
</style>