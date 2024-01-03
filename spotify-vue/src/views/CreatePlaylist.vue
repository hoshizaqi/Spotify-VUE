<template>
  <div class="playlist-container">
    <form @submit.prevent="createPlaylist" class="playlist-form">
      <label for="playlistName">Nama Playlist:</label>
      <input type="text" v-model="playlistName" required placeholder="Playlist Guwejh" />
      <button type="submit">Tambah</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      playlistName: '',
    };
  },
  methods: {
    async createPlaylist() {
      try {
        // Gantilah URL dengan URL yang sesuai
        const response = await axios.post('http://192.168.1.4:3050/createplaylist', {
          playlistName: this.playlistName,
        });

        console.log('New playlist created:', response.data);
        alert('Playlist created successfully!');

        // Reset nilai playlistName setelah playlist dibuat
        this.playlistName = '';
        window.location.reload();
      } catch (err) {
        alert('Error creating playlist.');
        console.error('Error creating playlist:', err.message);
      }
    },
  },
};
</script>

<style scoped>
.playlist-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 200px 0;
}

.playlist-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-bottom: 10px;
  color: #f0f0f0;
}

input {
  padding: 10px;
  margin-bottom: 30px;
  width: 100%;
}

button {
  padding: 15px 20px;
  background-color: #f0f0f0;
  color: #000000;
  font-weight: 500;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}
</style>
