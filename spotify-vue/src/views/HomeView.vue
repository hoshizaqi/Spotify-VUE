<script setup>
import HomeCard from '../components/HomeCard.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const getRecentlyPlayed = async () => {
  try {
    const response = await axios.get('http://192.168.1.4:3050/recentlyplayed');
    console.log('dataRecentlyPlayed:', response.data);
    recentlyPlayed.value = response.data;
  } catch (error) {
    console.error(error.message);
    error.value = 'Error occurred while fetching recently played tracks';
  } finally {
    loading.value = false;
  }
};

const getMyTopArtist = async () => {
  try {
    const response = await axios.get('http://192.168.1.4:3050/mytopartists');
    console.log('dataMyTopArtist:', response.data);
    topArtists.value = response.data;
  } catch (error) {
    console.error(error.message);
  }
};

const getRecomenSongs = async () => {
  try {
    const response = await axios.get('http://192.168.1.4:3050/recommendations');
    console.log('dataRecomSongs:', response.data);
    recomenSongs.value = response.data;
  } catch (error) {
    console.error(error.message);
  }
};

const loading = ref(true);
const error = ref(null);
const recentlyPlayed = ref([]);
const topArtists = ref([]);
const recomenSongs = ref([]);

onMounted(() => {
  getRecentlyPlayed();
  getMyTopArtist();
  getRecomenSongs();
});
</script>

<template>
  <div class="p-8">
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">Terkahir Kali Diputar</button>

    <div class="py-1.5"></div>

    <div class="flex items-center">
      <HomeCard v-for="index in recentlyPlayed.slice(0, 5)" :key="index?.track_id" :image="index?.album_images[0]?.url" :title="index?.track_name" :subTitle="index?.artist_name" />
    </div>
  </div>

  <div class="p-8">
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">Top Artist</button>

    <div class="py-1.5"></div>

    <div class="flex items-center">
      <HomeCard v-for="index in topArtists.slice(0, 5)" :key="index?.id" :image="index?.images[0]?.url" :title="index?.name" :subTitle="index?.genres[0]" />
    </div>
  </div>

  <div class="p-8">
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">Recommended songs</button>

    <div class="py-1.5"></div>

    <div class="flex items-center">
      <HomeCard v-for="index in recomenSongs.slice(0, 5)" :key="index?.id" :image="index?.images[0]?.url" :title="index?.name" :subTitle="index?.artists" />
    </div>
  </div>
</template>
