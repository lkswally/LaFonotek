import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import CatalogoView from './views/CatalogoView.vue';
import EventosView from './views/EventosView.vue';
import ContactoView from './views/ContactoView.vue';
import ConstructionView from './views/ConstructionView.vue';

const BASE_URL = process.env.VITE_BASE_URL || '/'; // Valor por defecto '/' en desarrollo

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/catalogo', name: 'catalogo', component: CatalogoView },
    { path: '/eventos', name: 'eventos', component: EventosView },
    { path: '/contacto', name: 'contacto', component: ContactoView },
    { path: '/construccion', name: 'construccion', component: ConstructionView }
  ]
});

export default router;