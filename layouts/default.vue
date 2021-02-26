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
._text {
  @apply dark:text-white transition duration-500;
}

._bg {
  @apply bg-gray-200 dark:bg-gray-800 transition duration-500;
}

._bg-card {
  @apply bg-gray-100 dark:bg-gray-700 transition duration-500;
}
</style>
