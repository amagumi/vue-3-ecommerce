import { defineStore } from 'pinia'
import type { Product, CartDetail } from '@/model/types';
import { useLocalStorage } from '@vueuse/core';

export const useCartStore = defineStore('cart', {
  state: () => ({
    details: useLocalStorage<CartDetail[]>('cartDetails', [])
  }),
  getters: {
    cartItemsCount: (state) => {
      let count = 0;
      state.details.forEach(detail => {
        count += detail.quantity;
      });
      return count;
    },
    totalAmount: (state) => {
      let total = 0;

      state.details.forEach(d => {
        total += d.product.price * d.quantity;
      });

      return total;

    },
    WhatsAppMessage(state) {
      let message = 'Hola, quiero realizar la siguiente compra: \n\n';

      state.details.forEach(d => {
        message += `Producto: ${d.product.name}`;
        message += `Cantidad: ${d.quantity}`;
        message += `Subtotal: ${d.quantity * d.product.price}`;
        message += '------------------------------\n';
      });
      
      message += `Total a pagar: ${this.totalAmount}`;
      message += `Muchas gracias :)`;


    }
  },

  actions: {
    addProduct(product: Product) {
      const detailFound = this.details.find(d => d.product.id === product.id);
    
      if(detailFound) {
        detailFound.quantity += 1;
      } else {
        this.details.push({
          product,
          quantity: 1
        });
      }
    },
    deleteProduct(productId: number) {
      const index = this.details.findIndex(d => d.product.id === productId);
      this.details.splice(index, 1);

    },
    increment(productId: number){
      const detailFound = this.details.find(d => d.product.id === productId);

      if (detailFound) {
        detailFound.quantity += 1;
      }
    },
    decrement(productId: number){
      const detailFound = this.details.find(d => d.product.id === productId);

      if (detailFound) {
        detailFound.quantity -= 1;

        if (detailFound.quantity === 0) {
          this.deleteProduct(productId);
        }
      }
    },
  }
})
 