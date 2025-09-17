import { createApp } from 'vue';
import App from './App.vue';
import AppHeader from './components/appHeader.vue';


const app = createApp(App);

app.component('app-header', AppHeader);

app.mount('#app');
