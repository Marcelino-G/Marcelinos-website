import { createRouter as _createRouter, createWebHistory } from 'vue-router'



import AboutMeView from '../views/AboutMeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import HomeView from '../views/HomeView.vue'


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