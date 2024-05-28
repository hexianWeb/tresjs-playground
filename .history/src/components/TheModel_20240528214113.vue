<script setup lang="ts">
import { useGLTF, Html } from "@tresjs/cientos";
import {
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";

const { scene: model } = await useGLTF(
  "https://raw.githubusercontent.com/Tresjs/assets/main/models/gltf/aku-aku/AkuAku.gltf",
  {
    draco: true,
  }
);

const akuAkuRef = ref(null);

watch(akuAkuRef, (model) => {
  // eslint-disable-next-line no-console
  console.log("akuAkuRef", model);
});

onBeforeMount(() => {
  console.log("the Model onBeforeMount");
});

onMounted(() => {
  console.log("the Model onMounted");
});

onBeforeUnmount(() => {
  console.warn("the Model onBeforeUnmount");
});

onUnmounted(() => {
  console.warn("the Model onUnmounted");
});
</script>

<template>
  <TresGroup :position="[0, 2, 0]">
    <Html :position="[0, 2, 0]"> <p class="cool-font">Tresjs is Best!</p></Html>
    <primitive ref="akuAkuRef" :object="model" />
  </TresGroup>
</template>

<style scoped>
.cool-font {
  font-family: "Courier New", monospace;
  color: royalblue;
  font-size: 24px;
  font-weight: bold;
}
</style>
