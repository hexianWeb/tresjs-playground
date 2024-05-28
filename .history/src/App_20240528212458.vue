<script setup lang="ts">
import TheExperience from "./components/TheExperience.vue";
</script>

<template>
  <nav>
    <button>
      <RouterLink to="/" tag="button"> Go to one</RouterLink>
    </button>
    <RouterLink to="/other">Go to other</RouterLink>
  </nav>
  <router-view></router-view>
</template>
