<template>
  <section class="mt-12">
    <div class="flex border-b-2 border-primary">
      <h1 class="text-xl font-bold _text text-center xs:text-left">
        {{ title }}
      </h1>
      <a :href="channelURL + channelId" target="blank" class="ml-2"><Link /></a>
    </div>
    <div
      class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 mt-6"
    >
      <article v-for="(movie, index) in showVideos" :key="index">
        <div v-if="movie.snippet.title != 'Private video'">
          <a
            :href="
              'https://www.youtube.com/watch?v=' +
              movie.snippet.resourceId.videoId
            "
            target="_blank"
          >
            <img :src="movie.snippet.thumbnails.medium.url" class="w-full" />
            <div class="p-3">
              <p class="text-sm font-medium _text mb-2 h-10 overflow-clamp">
                {{ movie.snippet.title }}
              </p>
            </div>
          </a>
        </div>
      </article>
    </div>
    <button
      v-if="showVideos.length - current >= 0"
      type="button"
      class="mx-auto mt-6 block bg-primary font-bold text-xs px-4 py-2 rounded shadow hover:bg-yellow-200"
      style="transition: all 0.3s ease"
      @click="isMore"
    >
      もっと見る
    </button>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    playlist: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      videos: '',
      channelId: '',
      current: 0,
      count: 0,
      params: {
        part: 'snippet',
        playlistId: this.playlist,
        maxResults: '50',
        key: process.env.apiKey,
      },
      width: 0,
      screens: {
        xs: 420,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
      channelURL: 'https://www.youtube.com/channel/',
    }
  },
  computed: {
    showVideos() {
      const videos = this.videos
      return videos.slice(0, this.current)
    },
  },
  created() {
    const self = this
    axios
      .get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: this.params,
      })
      .then(function (res) {
        self.videos = res.data.items
        self.channelId = res.data.items[0].snippet.channelId
      })
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    isMore() {
      this.current += this.count
    },
    handleResize() {
      if (window.innerWidth > this.screens.lg) {
        this.current = 4
        this.count = 8
      } else if (window.innerWidth > this.screens.md) {
        this.current = 6
        this.count = 6
      } else if (window.innerWidth > this.screens.xs) {
        this.current = 4
        this.count = 4
      } else {
        this.current = 2
        this.count = 4
      }
    },
  },
}
</script>

<style scoped>
.overflow-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
