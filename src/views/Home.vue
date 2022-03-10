<template>
  <div class="home">
    <ProductsGrid />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductsGrid from '@/components/ProductsGrid'

export default {
  name: 'Home',
  components: {
    ProductsGrid,
  }
}
</script>
