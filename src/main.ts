import { createApp } from 'vue'
// import Contador from './examples/ProductList.vue'
import App from './App.vue'


// vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// router 
import router from './router'

const vuetify = createVuetify({
    components, 
    directives, 
    theme: {
        defaultTheme: 'dark'
    }
});


const app = createApp(App)

app.use(vuetify)
app.use(router)
app.mount('#app')
