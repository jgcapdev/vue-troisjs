import { createApp } from 'troisjs';

import App from './App.vue';
import store from './store/index.js';
import router from './router.js';

import { Pane } from 'tweakpane';

const app = createApp(App);

app.use(store);
app.use(router);

const pane = new Pane({ title: 'Options' });
app.config.globalProperties.$pane = pane;

app.mount('#app');
