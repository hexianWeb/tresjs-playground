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

import { useTresContext } from "@tresjs/core";

const { scene } = useTresContext();
const { scene: model } = await useGLTF(
  "https://raw.githubusercontent.com/Tresjs/assets/main/models/gltf/aku-aku/AkuAku.gltf",
  {
    draco: true,
  }
);

const akuAkuRef = ref(null);

onBeforeMount(() => {
  console.log("the Second Child onBeforeMount");
});

onMounted(() => {
  console.log(scene.value.children);

  console.log("the Second Child onMounted");
});

onBeforeUnmount(() => {
  console.log("the Second Child onBeforeUnmount");
});

onUnmounted(() => {
  console.log("the Second Child onUnmounted");
});
</script>

<template>
  <TresGroup :position="[0, 0, 0]" name="model">
    <Html :position="[0, 2, 0]">
      <p class="cool-font">The Second Child</p></Html
    >
    <primitive ref="akuAkuRef" :object="model"> </primitive>
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
