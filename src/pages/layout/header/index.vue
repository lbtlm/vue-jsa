<template>
  <div class="h-16 w-screen bg-slate-50 border border-b-1">
    <div class="container mx-auto flex justify-between">
      <!-- logo -->
      <Logo />

      <!-- menu-items -->
      <MenuItems />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import MenuItems from './menu/index.vue'
</script>
<style lang="scss"></style>
