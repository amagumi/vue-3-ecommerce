<script lang="ts">
import { useProductsStore } from '@/stores/products';
import { mapActions, mapState } from 'pinia';

export default {
    methods: {
        ...mapActions(useProductsStore, ['orderByPrice', 'orderByPriceDesc', 
        'orderByName', 'orderByNameDesc'])
    },
    computed: {
        ...mapState(useProductsStore, ['order'])
    }
}
</script>

<template>
    
    <v-list-subheader>Order by</v-list-subheader>

    <v-list-item link @click="orderByPrice" :active= "order === 'price'">
        <v-list-item-title>
            price (low to high)
        </v-list-item-title>
    </v-list-item>

    <v-list-item link @click="orderByPriceDesc" :active= "order === 'priceDesc'">
        <v-list-item-title>
            price (high to low)
        </v-list-item-title>
    </v-list-item>

    <v-list-item link @click="orderByName" :active="order === 'name'">
        <v-list-item-title>
            name (a-z)
        </v-list-item-title>
    </v-list-item>

    <v-list-item link @click="orderByNameDesc" :active="order === 'nameDesc'">
        <v-list-item-title>
            name (z-a)
        </v-list-item-title>
    </v-list-item>

</template>