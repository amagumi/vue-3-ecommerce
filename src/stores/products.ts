import { defineStore } from "pinia";
import type { Product } from "@/model/types";

export const useProductsStore = defineStore('products', {
    state: () => ({
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
                price: 56, 
                id: 4,
                categoryId: 1
            },
            {
                name: 'headphones', 
                price: 450, 
                id: 5,
                categoryId: 2
            },
            {
                name: 'mouse', 
                price: 120, 
                id: 6,
                categoryId: 1
            }                
        ]
    }),
    getters: {
        products(state){
            if (!state.categoryId) {
                return state._products;
            }
            return state._products.filter(p => p.categoryId === 1); 
        }
    },
    actions: {
        selectCategory(categoryId: number) {
            this.categoryId = categoryId; 
        }
    }
  })