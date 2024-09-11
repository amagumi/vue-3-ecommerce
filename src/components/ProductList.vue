<script lang="ts">
import ProductCard from './ProductCard.vue'
import ShoppingCart from './cart/ShoppingCart.vue';
import type { Product } from '../model/types';

export default {
    components: {
        ProductCard,
        ShoppingCart
    },
    data() {
        return {
            products: <Array<Product>>[

                {name: 'chair', price: 56, id: 1, image: 'https://www.ikea.com/es/en/images/products/mammut-childrens-chair-in-outdoor-red__0727924_pe735940_s5.jpg'},
                {name: 'monitor', price: 450, id: 2, image: 'https://m.media-amazon.com/images/I/717oD6uN7iL._AC_SL1500_.jpg'},
                {name: 'microphone', price: 120, id: 3, image: 'https://vintageking.com/media/catalog/product/t/e/telefunken-m80-pink-2023_83472_1.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600'},
                {name: 'speaker', price: 56, id: 4},
                {name: 'headphones', price: 450, id: 5},
                {name: 'mouse', price: 120, id: 6}                
            ]        
        }
    },
    methods: {
        onProductAdded(productId: number){

        }
           
    }
}

</script>

<template>
    <v-row>
        <v-col v-for="p in products" cols="4">
            <ProductCard 
            :product="p"
            @addProduct="onProductAdded(p.id)"/> <!-- el @ es un event listener, puede encontrarse como "v-on"-->
        </v-col> 
    </v-row>
</template> 