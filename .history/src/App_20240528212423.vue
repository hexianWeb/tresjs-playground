<script setup lang="ts">
import TheExperience from "./components/TheExperience.vue";
</script>

<template>
  <nav>
    <RouterLink to="/" tag="button"> Go to one</RouterLink>
    <RouterLink to="/other">Go to other</RouterLink>
  </nav>
  <router-view></router-view>
</template>
