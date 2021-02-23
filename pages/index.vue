<template>
  <div>
    <div v-for="(playlist, index) in playlists" :key="index">
      <Playlist :title="playlist.title" :playlist="playlist.playlistId" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playlists: [
        {
          title: 'ニューヨークのニューラジオ',
          playlistId: 'PLDCx5WcWNkqpmyT4EGdKe4xTZxiB9m_oU',
        },
        {
          title: 'オズワルドのニューラジオ0(ZERO)',
          playlistId: 'PLxDFIQwAsi0xa0rsyTLvrXdO-VA1AGuv0',
        },
      ],
    }
  },
}
</script>
