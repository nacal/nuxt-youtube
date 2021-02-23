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
          title: 'ダイタクのニューラジオ',
          playlistId: 'PLXJkHbqbEAw7oQtWFIPm7VtifFUfC1CnM',
        },
        {
          title: 'ジェラードンのニューラジオ！',
          playlistId: 'PLHiaq_upLIDVUP5OEXblEMwB3Ah1elTa4',
        },
        {
          title: 'オズワルドのニューラジオ',
          playlistId: 'PLxDFIQwAsi0x8H0E0uJbN9svyc5yfblcD',
        },
        {
          title: 'そいつどいつのニューラジオ',
          playlistId: 'PLhaXdiIsEif61DexlpGR7DO6C8TbNGRTC',
        },
        {
          title: 'レイザーラモンのニューラジオ',
          playlistId: 'PL-sxwZDi0ihbETOXQ9nAOsrFcTFTvDlXy',
        },
        {
          title: 'おミュータンツのニューラジオ0(ZERO)	',
          playlistId: 'PLZvAKS43DFtm4L74K5BAC-0HsygxKZ7EW',
        },
        {
          title: 'バビロンのニューラジオ0(ZERO)',
          playlistId: 'PLs9tXNDWkle0YMlH6oldL1Vjn2aIUih_e',
        },
        {
          title: 'ダイヤモンドのニューラジオ0(ZERO)',
          playlistId: 'PLmWYhyF3Raj6MFlrSc-UTxDedOZoYBiSL',
        },
        {
          title: '小虎のニューラジオ0(ZERO)',
          playlistId: 'PLCMoaOmjJE6GUwdOQrKw-7_0uLOvh9ekT',
        },
        {
          title: 'ワラバランスのニューラジオ0(ZERO)',
          playlistId: 'PL0pbA51R9vTarI1yjlyx1P4d6FS6pjxDI',
        },
      ],
    }
  },
}
</script>
