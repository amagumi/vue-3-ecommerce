import { defineStore } from "pinia";
import type { Product } from "@/model/types";

export const useProductsStore = defineStore('products', {
    state: () => ({
        order: 'price' as string,
        categoryId: null as number|null,
        _products: <Array<Product>>[

            {
                name: 'chair', 
                price: 56, 
                id: 1, 
                image: 'https://www.ikea.com/es/en/images/products/mammut-childrens-chair-in-outdoor-red__0727924_pe735940_s5.jpg',
                categoryId: 2
            },
            {
                name: 'monitor', 
                price: 450, 
                id: 2, 
                image: 'https://m.media-amazon.com/images/I/717oD6uN7iL._AC_SL1500_.jpg',
                categoryId: 1
            },
            {
                name: 'microphone', 
                price: 120, 
                id: 3, 
                image: 'https://vintageking.com/media/catalog/product/t/e/telefunken-m80-pink-2023_83472_1.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600',
                categoryId: 2 
            },
            {
                name: 'speaker', 
                price: 100, 
                id: 4,
                categoryId: 1
            },
            {
                name: 'headphones', 
                price: 150, 
                id: 5,
                categoryId: 2
            },
            {
                name: 'mouse', 
                price: 80, 
                id: 6,
                categoryId: 1
            }                
        ]
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