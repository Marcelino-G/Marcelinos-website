import { createRouter as _createRouter, createWebHistory } from 'vue-router'


import HomeView from '../views/HomeView.vue';
import AboutMeView from '../views/AboutMeView.vue';
import ContactView from '../views/ContactView.vue';
import ProjectsView from '../views/ProjectsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutMeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  }

];

export function createRouter () {
  return _createRouter({
    history: createWebHistory(),
    routes: routes
  })
}