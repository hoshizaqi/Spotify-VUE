import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SearchView from '../views/SearchView.vue';
import LibraryView from '../views/LibraryView.vue';
import LikedSongView from '../views/LikedSongView.vue';
import PlaylistView from '../views/PlaylistView.vue';
import CreatePlaylist from '../views/CreatePlaylist.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/search',
      component: SearchView,
    },
    {
      path: '/library',
      component: LibraryView,
    },
    {
      path: '/liked',
      component: LikedSongView,
    },
    {
      path: '/playlist/:id',
      name: 'playlist',
      component: PlaylistView,
    },
    {
      path: '/createPlaylist',
      component: CreatePlaylist,
    },
  ],
});

export default router;
