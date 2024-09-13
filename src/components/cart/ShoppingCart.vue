<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';
import ShoppingCartItem from './ShoppingCartItem.vue';

export default { 
    components: {
        ShoppingCartItem
    },
    computed: {
        ...mapState(useCartStore, ["details"])
    }
}

</script>

<template>
    <v-card>
        <v-card-text>
            <v-card-title>
                Cart products
            </v-card-title>

            <v-card-text>
                <v-table v-if="details.length > 0">
                    <thead>
                    <tr>
                        <th class="text-left">
                        Product
                        </th>
                        <th class="text-center">
                        Quantity
                        </th>
                        <th>
                        Price
                        </th>
                        <th class="text-left">
                        Subtotal
                        </th>
                        <th>
                            <span class="d-sr-only"> 
                                Delete
                            </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <ShoppingCartItem
                            v-for="detail in details" 
                            :key="detail.product.id" 
                            :detail="detail"/>
                    </tbody>
                </v-table>
                <p v-else>
                    No products yet                
                </p>
            </v-card-text>
        </v-card-text>
    </v-card>
</template>