export default {
    actions: {
        async fetchAllProducts(ctx) {
            const res = await fetch('https://fakestoreapi.com/products');
            const products = await res.json();

            ctx.commit('updateProducts', products)
        }
    },

    mutations: {
        updateProducts(state, products) {
            state.products = products;
        }
    },

    store: {
        products: [],
    },

    getters: {
        allProducts(state) {
            return state.products;
        }
    }

}