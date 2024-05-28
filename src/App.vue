<script setup lang="ts">
import TheExperience from "./components/TheExperience.vue";
</script>

<template>
  <nav>
    <button>
      <RouterLink to="/" tag="button"> Go to one</RouterLink>
    </button>

    <button>
      <RouterLink to="/other">Go to other</RouterLink>
    </button>
  </nav>
  <router-view></router-view>
</template>
