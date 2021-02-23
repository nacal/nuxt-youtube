<template>
  <div>
    <div>
      <font size="6" color="#c71585">YouTube Search list (Vue.js CLI)</font>
    </div>
    <br />
    <input v-model="keyword" size="40" placeholder="検索キーワードを入力" />
    <button @click="search_video">検索</button>
    <table v-show="results" cellspacing="0" cellpadding="5">
      <tr>
        <th width="50">
          <font>No</font>
        </th>
        <th width="200">
          <font>Video</font>
        </th>
        <th width="700">
          <font>Contents</font>
        </th>
      </tr>

      <tr v-for="(movie, index) in results" :key="movie.id.videoId">
        <!-- No -->
        <td valign="top" width="50">{{ index + 1 }}</td>
        <!-- Video -->
        <td valign="top" width="300">
          <a :href="'https://www.youtube.com/watch?v=' + movie.id.videoId">
            <img
              width="300"
              height="200"
              :src="movie.snippet.thumbnails.medium.url"
            />
          </a>
        </td>
        <!-- titleとdescription -->
        <td align="left" valign="top" width="700">
          <font size="5" color="#c71585"
            ><b>{{ movie.snippet.title }}</b></font
          >
          <br />
          {{ movie.snippet.description }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchVideo',
  props: {
    msg: String,
  },
  data() {
    return {
      results: null,
      keyword: 'nonkapibara',
      order: 'viewCount', // リソースを再生回数の多い順に並べます。
      params: {
        q: '', // 検索クエリを指定します。
        part: 'snippet',
        type: 'video',
        maxResults: '20', // 最大検索数
        key: 'AIzaSyC1-zMQNJDAP4eQi64o5YgomT6nhr3gcH4',
      },
    }
  },
  methods: {
    search_video() {
      this.params.q = this.keyword
      const self = this
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: this.params,
        })
        .then(function (res) {
          self.results = res.data.items
        })
    },
  },
}
</script>

<style>
table {
  border-collapse: collapse;
  border: solid 2px #c71585; /* 表全体を線で囲う */
}
table th {
  color: #fff0f5; /* 文字色 */
  background: #ff69b4; /* 背景色 */
  border: dashed 1px #c71585;
}

table td {
  background: #fff0f5;
  border: dashed 1px #c71585;
}
</style>
