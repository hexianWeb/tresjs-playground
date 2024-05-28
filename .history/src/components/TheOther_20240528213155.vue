<script setup lang="ts">
import { TresCanvas, useRenderLoop } from "@tresjs/core";
import {
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  reactive,
  shallowRef,
} from "vue";
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from "three";
import { OrbitControls } from "@tresjs/cientos";
import TheModel from "./TheModel.vue";

const state = reactive({
  clearColor: "#82DBC5",
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
});

const { onLoop } = useRenderLoop();

const sphereRef = shallowRef(null);

onLoop(({ elapsed }) => {
  if (sphereRef.value) {
    sphereRef.value.rotation.y = elapsed;
  }
});

// 输出所有生命周期
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
  <TresCanvas v-bind="state">
    <TresPerspectiveCamera :position="[5, 5, 5]" />
    <OrbitControls />
    <TresAmbientLight :intensity="0.5" color="red" />
    <TresMesh ref="sphereRef" :position="[0, 2, 0]">
      <TresSphereGeometry :args="[1, 1]" />
      <TresMeshNormalMaterial />
    </TresMesh>
    <TheModel />
    <TresDirectionalLight :position="[0, 2, 4]" :intensity="1" cast-shadow />
    <TresAxesHelper />
    <TresGridHelper :args="[10, 10, 0x444444, 'teal']" />
  </TresCanvas>
</template>
