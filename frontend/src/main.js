import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import mitt from 'mitt';

const emitter = mitt();
const app = createApp(App);
app.use(router);
app.config.globalProperties.emitter = emitter;  // <-- para eventos

app.mount('#app')

axios.defaults.baseURL = 'http://localhost:3000/api';

