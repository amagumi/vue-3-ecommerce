<script lang="ts">
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increase() {
            this.count +=1;
        }
    },
    mounted() {
        console.log('el valor inicial del contador es ' + this.count);
    }
}

</script>

<template>
    <h1>Contador: {{ count }}</h1>
    <button @click="count = count+1">
        aumentar contador
    </button>

</template>