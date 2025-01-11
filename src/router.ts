import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Project1 from './views/Project1.vue';
import Project2 from './views/Project2.vue';
import Project3 from './views/Project3.vue';

const routes = [
  {
    path: '/', // Default path for Home page
    name: 'Home',
    component: Home,
  },
  {
    path: '/project1',
    name: 'Project1',
    component: Project1,
  },
  {
    path: '/project2',
    name: 'Project2',
    component: Project2,
  },
  {
    path: '/project3',
    name: 'Project3',
    component: Project3,
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route for invalid paths
    redirect: '/', // Redirect to Home
  },
];

const router = createRouter({
  history: createWebHistory(), // HTML5 History mode
  routes,
});

export default router;