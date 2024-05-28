<script setup lang="ts">
import { useGLTF, useTweakPane } from "@tresjs/cientos";
import {
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";

useTweakPane();

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
  console.log("the Other onBeforeMount");
});

onMounted(() => {
  console.log("the Other onMounted");
});

onBeforeUnmount(() => {
  console.warn("the Other onBeforeUnmount");
});

onUnmounted(() => {
  console.warn("the Other onUnmounted");
});
</script>

<template>
  <TresGroup :position="[0, 2, 0]">
    <primitive ref="akuAkuRef" :object="model" />
  </TresGroup>
</template>
onBeforeMount, onBeforeUnmount, onMounted, onUnmounted,
