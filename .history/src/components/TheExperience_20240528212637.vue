<script setup lang="ts">
import { TresCanvas, useRenderLoop } from "@tresjs/core";
import { onBeforeMount, onMounted, reactive, shallowRef } from "vue";
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from "three";
import { OrbitControls } from "@tresjs/cientos";

const state = reactive({
  clearColor: "#82DBC5",
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
});

const { onLoop } = useRenderLoop();

const boxRef = shallowRef(null);

onLoop(({ elapsed }) => {
  if (boxRef.value) {
    boxRef.value.rotation.y = elapsed;
    boxRef.value.rotation.z = elapsed;
  }
});

// 输出所有生命周期
onBeforeMount(() => {
  console.log("the one onBeforeMount");
});

onMounted(() => {
  console.log("the one onMounted");
});
</script>

<template>
  <TresCanvas v-bind="state">
    <TresPerspectiveCamera :position="[5, 5, 5]" />
    <OrbitControls />
    <TresAmbientLight :intensity="0.5" color="red" />
    <TresMesh ref="boxRef" :position="[0, 2, 0]">
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshNormalMaterial />
    </TresMesh>
    <TresDirectionalLight :position="[0, 2, 4]" :intensity="1" cast-shadow />
    <TresAxesHelper />
    <TresGridHelper :args="[10, 10, 0x444444, 'teal']" />
  </TresCanvas>
</template>
