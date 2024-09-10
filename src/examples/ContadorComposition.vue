<script setup>
    import { ref } from 'vue'

    const count = ref(0);

    function increase() {
        count.value += 1;
    }
</script>


<template>
    <p>hola soy la version con composition API</p>
    <h1>Contador: {{ count }}</h1>

    <button @click="increase">
        increase counter
    </button>

    <p v-if="count <= 10"> vamos tu puedes</p>
</template> 