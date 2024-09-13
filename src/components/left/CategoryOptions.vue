<script lang="ts">
import { mapState } from 'pinia';
import { useCategoriesStore } from '../../stores/category';
export default {
    computed: {
        ...mapState(useCategoriesStore, ['categories'])
    },

    methods: {
        clearCategory(){
            this.$router.push({
                name: 'home'
            });
        },
        goToCategory(categoryId: number){
            this.$router.push({
                name: 'category',
                params: { categoryId }
            });
        }
    }
}

</script>

<template>
    <v-list-subheader>Categories</v-list-subheader>
        <v-list-item link @click="clearCategory()" :active="$route.name === 'home'">
            <v-list-item-title>
                All
            </v-list-item-title>
        </v-list-item>
        <v-list-item :active="$route.name === 'category' && Number($route.params.categoryId) === category.id"
            v-for="category in categories"
            :key="category.id"
            link
            @click="goToCategory(category.id)">
            <v-list-item-title>
                {{ category.name }}
            </v-list-item-title>
        </v-list-item>
</template>