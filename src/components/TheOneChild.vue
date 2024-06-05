<script setup lang="ts">
import { useTresContext } from "@tresjs/core";
import { useGLTF, Html } from "@tresjs/cientos";
import {
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";
const { scene } = useTresContext();
onBeforeMount(() => {
  console.log("the One Child onBeforeMount");
});

onMounted(() => {
  console.log(scene.value.children);

  console.log("the One Child onMounted");
});

onBeforeUnmount(() => {
  console.log("the One Child onBeforeUnmount");
});

onUnmounted(() => {
  console.log("the One Child onUnmounted");
});
</script>

<template>
  <TresMesh :position="[2, 2, 0]" name="oneChild">
    <TresSphereGeometry :args="[1, 1]" />
    <TresMeshNormalMaterial />
    <Html :position="[0, 0, 0]" center>
      <span class="cool-font">I am One Child</span></Html
    >
  </TresMesh>
</template>

<style scoped>
.cool-font {
  font-family: "Courier New", monospace;
  color: green;
  font-size: 24px;
  font-weight: bold;
}
</style>
