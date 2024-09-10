<script lang="ts">
import ProductCard from './ProductCard.vue'
import Cart from './Cart.vue';
import type { CartDetail, Product } from '../model/types';

export default {
    components: {
        ProductCard,
        Cart
    },
    data() {
        return {
            products: <Array<Product>>[

                {name: 'chair', price: 56, id: 5},
                {name: 'display', price: 450, id: 7},
                {name: 'microphone', price: 120, id: 12},
                
            ],
            details: <Array<CartDetail>>[]
        
        }
    },
    methods: {
        onAddProduct(productId: number){
            const detailFound = this.details.find(d => d.productId = productId);
            if (detailFound) {
                detailFound.quantity += 1;

            } else { 
            console.log('add product' + productId);
            this.details.push({
                productId,
                quantity: 1
            });
            }
           
        }
    }
}

</script>

<template>
    <v-row>
        <v-col v-for="p in products" cols="4">
            <ProductCard 
            :product="p"
            @addProduct="onAddProduct(p.id)"/> <!-- el @ es un event listener, puede encontrarse como "v-on"-->
        </v-col> 
    </v-row>

    

    <Cart :details="details"/>

</template> 