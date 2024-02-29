<script setup>
import { ref } from "vue"
import VueSpeedometer from "../../instrumented/index.vue"

const greeting = ref("porumai ... wait and hope")
const value = ref(333)

function resetValue() {
  value.value = 0
}

function updateValue() {
  value.value = 333
}
</script>

<template>
  <div>
    <div>{{ greeting }}</div>
    <button id="reset-value" v-on:click="resetValue">Reset to zero</button>
    <button id="update-value" v-on:click="updateValue">Update Value</button>
    <vue-speedometer :value="value" />
  </div>
</template>
