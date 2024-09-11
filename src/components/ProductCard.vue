<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from '../model/types';
import { useCartStore } from '@/stores/cart';
export default {
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true
        }
        
    },
    methods: {
        onAddButtonClick() {
            const cartStore = useCartStore();
            cartStore.addProduct(this.product);
        }
    },
    computed: {
        productImageUrl() {
            return this.product.image
            ?? 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg';
        }
    }
}

</script>

<template>
    <v-card>
        <v-img
            :src="productImageUrl"
            height="200px"
            cover />

        <v-card-title>
            {{ product.name }}
        </v-card-title>

        <v-card-text>
            <p class="mb-4"> 
                texto de ejemplo :p 
            </p>   
            <v-chip>
                $ {{ product.price }}
            </v-chip>
        </v-card-text>

        <v-card-actions>
                <v-btn @click="onAddButtonClick" color="orange-lighten-2">
                    add to cart
                </v-btn>
        </v-card-actions>
    </v-card>

</template>
