<script setup>
import { ref } from "vue"
import VueSpeedometer from "../../../instrumented/index.vue"

const greeting = ref("porumai ... wait and hope")
const segments = ref(5)
const value = ref(333)
const forceRender = ref(false)

function forceRenderComponent() {
  forceRender.value = true
  value.value = 417
  segments.value = 10
}

function normalUpdateComponent() {
  value.value = 777
}
</script>
<template>
  <div>
    <div>{{ greeting }}</div>
    <button id="force-render" v-on:click="forceRenderComponent">
      Force Render
    </button>
    <button id="normal-update" v-on:click="normalUpdateComponent">
      Normal update
    </button>
    <VueSpeedometer
      :segments="segments"
      :value="value"
      :forceRender="forceRender"
    />
  </div>
</template>
