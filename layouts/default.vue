<template>
  <div class="dark:bg-base transition duration-500">
    <Header />
    <DarkToggleButton :is-dark="dark" :is-theme="theme" />
    <main class="w-full xs:w-11/12 mx-auto max-w-screen-xl mb-12">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'light',
      dark: true,
    }
  },
  mounted() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      this.theme = 'dark'
      this.dark = true
    } else {
      document.documentElement.classList.remove('dark')
      this.theme = 'right'
      this.dark = false
    }
  },
}
</script>
