import { defineStore } from "pinia"
import type { Category } from "@/model/types"

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: <Array<Category>>[{
            id: 1, 
            name: 'Technology',
            description: 'latest tech on the country'
        }, {
            id: 2,
            name: 'Toys',
            description: 'best toys for kids and teenagers'
        }]
    }),

    getters: {
    },
    actions: {

    }   
  })