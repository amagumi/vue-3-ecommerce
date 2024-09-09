<script setup>
    import { ref } from 'vue'

    const count = ref(0);
</script>


<template>
    <p>hola soy la version con composition API</p>
    <h1>Contador: {{ count }}</h1>
</template>