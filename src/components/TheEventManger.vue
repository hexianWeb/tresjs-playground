<script setup lang="ts">
import type { ThreeEvent } from "@tresjs/core";
import { TresCanvas } from "@tresjs/core";
import {
  BasicShadowMap,
  SRGBColorSpace,
  NoToneMapping,
  BoxGeometry,
  MeshToonMaterial,
  Mesh,
  MathUtils,
} from "three";
import { TresLeches, useControls } from "@tresjs/leches";
import { OrbitControls } from "@tresjs/cientos";
import "@tresjs/leches/styles";

const gl = {
  clearColor: "#202020",
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
};

const { stopPropagation } = useControls({
  stopPropagation: false,
});

function onClick(ev: ThreeEvent<MouseEvent>) {
  console.log("click", ev);
  if (stopPropagation.value) ev.stopPropagation();
  ev.object.material.color.set("#008080");
}

function onDoubleClick(ev: ThreeEvent<MouseEvent>) {
  console.log("double-click", ev);
  if (stopPropagation.value) ev.stopPropagation();
  ev.object.material.color.set("#FFD700");
}

function onPointerEnter(ev: ThreeEvent<MouseEvent>) {
  debugger;
  console.log(ev);

  if (stopPropagation.value) ev.stopPropagation();
  ev.object.material.color.set("#CCFF03");
}

function onPointerLeave(ev: ThreeEvent<MouseEvent>) {
  if (stopPropagation.value) ev.stopPropagation();
  ev.object.material.color.set(Math.random() * 0xffffff);
}

function onPointerMove(ev: ThreeEvent<MouseEvent>) {
  if (stopPropagation.value) ev.stopPropagation();
}

function onContextMenu(ev: ThreeEvent<MouseEvent>) {
  console.log("context-menu", ev);
  if (stopPropagation.value) ev.stopPropagation();
  ev.object.material.color.set("#FF4500");
}

function onPointerMissed(ev: ThreeEvent<MouseEvent>) {
  console.log("pointer-missed", ev);
  if (stopPropagation.value) ev.stopPropagation();
}

const SIDE = 3;
const COUNT = SIDE * SIDE * SIDE;
const SPREAD = 6;
const [LO, HI] = [-SPREAD * 0.5, SPREAD * 0.5];
const lerp = MathUtils.lerp;

const geo = new BoxGeometry();
const objs = new Array(COUNT).fill(0).map((_, i) => {
  const mesh = new Mesh(geo, new MeshToonMaterial({ color: "#efefef" }));
  mesh.position.set(
    lerp(LO, HI, (i % SIDE) / (SIDE - 1)),
    lerp(LO, HI, (Math.floor(i / SIDE) % SIDE) / (SIDE - 1)),
    lerp(LO, HI, Math.floor(i / (SIDE * SIDE)) / (SIDE - 1))
  );
  return mesh;
});
</script>

<template>
  <TresLeches />
  <TresCanvas window-size v-bind="gl">
    <TresPerspectiveCamera :position="[10, 10, 10]" />
    <OrbitControls />
    <primitive
      v-for="(obj, i) in objs"
      :key="i"
      :object="obj"
      @click="onClick"
      @double-click="onDoubleClick"
      @pointer-enter="onPointerEnter"
      @pointer-leave="onPointerLeave"
      @pointer-move="onPointerMove"
      @context-menu="onContextMenu"
      @pointer-missed="onPointerMissed"
    />
    <TresDirectionalLight :intensity="1" />
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>
