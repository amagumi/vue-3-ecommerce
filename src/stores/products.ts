import { defineStore } from "pinia";
import type { Product } from "@/model/types";

export const useProductsStore = defineStore('products', {
    state: () => ({
        order: 'price' as string,
        categoryId: null as number|null,
        _products: [] as Product [],
        loading: true
    }),
    getters: {
        products(state){
            let products = null;

            // filter

            if (state.categoryId) {
                products = state._products
                return state._products
                    .filter(p => p.categoryId === state.categoryId); 
            } else {
                products = state._products;
            }

            // order
            if (state.order === '') {
                return products;
            }

            if (state.order === 'price') {
                return products.sort((a, b) => a.price - b.price);
            }

            if (state.order === 'priceDesc') {
                return products.sort((a, b) => b.price - a.price);
            }

            if (state.order === 'name') {
                return products.sort((a, b) => a.name.localeCompare(b.name));
            }

            if (state.order === 'nameDesc') {
                return products.sort((a, b) => b.name.localeCompare(a.name));
            }
        }
    },
    actions: {

        fetchProducts(){
            fetch('/data/products.json')
            .then(response => response.json())
            .then((data) => {
                this._products = data;
                this.loading = false;
            });
        },

        selectCategory(categoryId: number) {
            this.categoryId = categoryId; 
        },

        orderByPrice() {
            this.order = 'price';
            
        },

        orderByPriceDesc() {
            this.order = 'priceDesc';
            
        },

        orderByName() {
            this.order = 'name';
        },

        orderByNameDesc() {
            this.order = 'nameDesc';
        }

    }   
  })