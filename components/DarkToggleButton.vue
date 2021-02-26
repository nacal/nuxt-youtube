<template>
  <div>
    <div
      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
    >
      <input
        id="toggle"
        type="checkbox"
        name="toggle"
        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none transform transition duration-500"
        :checked="isDark"
        @click="toggleDarkMode()"
      />
      <label
        for="toggle"
        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isTheme: {
      type: String,
      default: 'light',
    },
    isDark: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentTheme: this.isTheme,
      currentDark: this.isDark,
    }
  },
  methods: {
    toggleDarkMode() {
      if (this.currentTheme === 'dark') {
        document.documentElement.classList.remove('dark')
        this.currentTheme = 'light'
      } else {
        document.documentElement.classList.add('dark')
        this.currentTheme = 'dark'
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.toggle-checkbox:checked {
  @apply translate-x-4 border-green-400;
}

.toggle-checkbox:checked + .toggle-label {
  @apply bg-green-400;
}
</style>
