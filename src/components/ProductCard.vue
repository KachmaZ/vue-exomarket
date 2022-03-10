<template>
    <div class='product-card'>
        {{product.title}}
    </div>
</template>

<script>
    export default {
        props: {
            product: Object,
        }
    }
</script>

<style lang="scss" scoped>
.product-card {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>