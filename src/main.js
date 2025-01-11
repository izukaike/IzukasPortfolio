import { createApp } from 'vue';
import App from './App.vue';
import router from './router.ts'; // Import Vue Router
import 'bulma/css/bulma.css'; // Import Bulma styles

const app = createApp(App);

app.use(router); // Use Vue Router
app.mount('#app');
