<script setup>
import CategorySelect from '../components/CategorySelect.vue';
import SongRow from '../components/SongRow.vue';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';
import Heart from 'vue-material-design-icons/Heart.vue';
import ClockTimeThreeOutline from 'vue-material-design-icons/ClockTimeThreeOutline.vue';

import { ref, onMounted } from 'vue';
import axios from 'axios';

const input = ref('');
const results = ref([]);
const hasSearched = ref(false);

const fetchData = async () => {
  try {
    const searchData = await axios.get(`http://192.168.1.4:3050/search?q=${input.value}`);

    results.value = searchData.data;
    console.log('dataSearch: ', results.value);
    hasSearched.value = true;
  } catch (error) {
    console.error('Search Error:', error);
  }
};

onMounted(() => {
  //   fetchData();
});
</script>

<template>
  <div class="p-8">
    <form @submit.prevent="fetchData">
      <input v-model="input" type="text" class="border py-3 px-5 rounded-3xl" placeholder="Search for songs..." />
      <button type="submit" class="bg-white font-medium ml-2 rounded-3xl py-3 px-5">Search</button>
    </form>

    <div class="py-10"></div>
    <div class="flex items-center w-full relative h-full">
      <div class="w-full ml-5">
        <div class="absolute flex gap-4 items-center justify-start bottom-0 mb-1.5">
          <button class="p-1 rounded-full bg-white" @click="playFunc()">
            <Play v-if="!isPlaying" fillColor="#181818" :size="25" />
            <Pause v-else fillColor="#181818" :size="25" />
          </button>
          <button type="button">
            <Heart fillColor="#1BD760" :size="30" />
          </button>
          <button type="button">
            <DotsHorizontal fillColor="#FFFFFF" :size="25" />
          </button>
        </div>
      </div>
    </div>
    <div class="grid xl:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
      <ul class="w-full" v-for="(track, index) in results" :key="track">
        <SongRow :artist="{ name: track.artists }" :track="{ name: track.name }" :index="++index" />
      </ul>
    </div>
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">Browse all</button>
    <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
      <CategorySelect category="Podcasts" image="https://picsum.photos/id/40/300/300" />
      <CategorySelect category="Audiobooks" image="https://picsum.photos/id/45/300/300" />
      <CategorySelect category="Made For You" image="https://picsum.photos/id/76/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/56/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/25/300/300" />
      <CategorySelect category="Podcasts" image="https://picsum.photos/id/103/300/300" />
      <CategorySelect category="Audiobooks" image="https://picsum.photos/id/244/300/300" />
      <CategorySelect category="Made For You" image="https://picsum.photos/id/202/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/101/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/120/300/300" />
      <CategorySelect category="Podcasts" image="https://picsum.photos/id/40/300/300" />
      <CategorySelect category="Audiobooks" image="https://picsum.photos/id/45/300/300" />
      <CategorySelect category="Made For You" image="https://picsum.photos/id/76/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/56/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/25/300/300" />
      <CategorySelect category="Podcasts" image="https://picsum.photos/id/103/300/300" />
      <CategorySelect category="Audiobooks" image="https://picsum.photos/id/244/300/300" />
      <CategorySelect category="Made For You" image="https://picsum.photos/id/202/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/101/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/120/300/300" />
      <CategorySelect category="Podcasts" image="https://picsum.photos/id/40/300/300" />
      <CategorySelect category="Audiobooks" image="https://picsum.photos/id/45/300/300" />
      <CategorySelect category="Made For You" image="https://picsum.photos/id/76/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/56/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/25/300/300" />
      <CategorySelect category="Podcasts" image="https://picsum.photos/id/103/300/300" />
      <CategorySelect category="Audiobooks" image="https://picsum.photos/id/244/300/300" />
      <CategorySelect category="Made For You" image="https://picsum.photos/id/202/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/101/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/120/300/300" />
      <CategorySelect category="Podcasts" image="https://picsum.photos/id/40/300/300" />
      <CategorySelect category="Audiobooks" image="https://picsum.photos/id/45/300/300" />
      <CategorySelect category="Made For You" image="https://picsum.photos/id/76/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/56/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/25/300/300" />
      <CategorySelect category="Podcasts" image="https://picsum.photos/id/103/300/300" />
      <CategorySelect category="Audiobooks" image="https://picsum.photos/id/244/300/300" />
      <CategorySelect category="Made For You" image="https://picsum.photos/id/202/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/101/300/300" />
      <CategorySelect category="New Release" image="https://picsum.photos/id/120/300/300" />
    </div>
  </div>
</template>
