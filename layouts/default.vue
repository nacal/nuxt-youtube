<template>
  <div class="_bg">
    <Header />
    <main class="w-full xs:w-11/12 mx-auto max-w-screen-xl mb-12">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
._text,
._bg,
._bg-card,
._bg-banner {
  @apply transition duration-500;
}

._text {
  @apply dark:text-white;
}

._bg {
  @apply bg-base dark:bg-baseDark;
}

._bg-card {
  @apply bg-gray-100 dark:bg-gray-700;
}

._bg-banner,
body {
  @apply bg-white dark:bg-bannerDark;
}
</style>
