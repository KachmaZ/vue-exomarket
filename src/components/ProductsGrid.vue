<template>
  <div class="products-grid">
    <ProductCard v-for="product in allProducts" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["fetchAllProducts"]),
  },

  computed: {
    ...mapGetters(["allProducts"]),
  },

  async mounted() {
    this.fetchAllProducts();
  },

  components: {
    ProductCard,
  },
};
</script>

<style lang="scss" scoped>
.products-grid {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
}
</style>