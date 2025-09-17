import { createApp } from 'vue';
import App from './App.vue';
import AppHeader from './components/appHeader.vue';
import "@/assets/style.css";

const app = createApp(App);

app.component('app-header', AppHeader);

app.mount('#app');
