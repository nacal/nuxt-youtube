<template>
  <div class="flex">
    <div class="relative inline-block w-10 mr-2 align-middle select-none">
      <input
        id="toggle"
        type="checkbox"
        name="toggle"
        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-200 border-4 border-gray-700 appearance-none cursor-pointer outline-none transform transition duration-500"
        :checked="dark"
        @click="toggleDarkMode()"
      />
      <label
        for="toggle"
        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-200 border-2 border-gray-700 cursor-pointer transition duration-500"
      ></label>
    </div>
    <transition name="fade" mode="out-in">
      <Moon v-if="dark" class="mr-2" />
      <Sun v-else class="mr-2" />
    </transition>
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
      this.theme = 'light'
      this.dark = false
    }
  },
  methods: {
    toggleDarkMode() {
      if (this.theme === 'dark') {
        document.documentElement.classList.remove('dark')
        this.theme = 'light'
        this.dark = false
      } else {
        document.documentElement.classList.add('dark')
        this.theme = 'dark'
        this.dark = true
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.toggle-checkbox:checked {
  @apply translate-x-4 bg-gray-800 border-gray-100;
}

.toggle-checkbox:checked + .toggle-label {
  @apply bg-gray-800 border-gray-100;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
