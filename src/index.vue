<script setup>
import { ref, onMounted, onUpdated } from "vue"
import { format as d3Format } from "d3-format"
import { select as d3Select } from "d3-selection"

import defaultProps from "./props"
import {
  getConfig,
  updateConfig,
  defaultSegmentValueFormatter,
} from "./core/config"
import { render, update } from "./core/render"
import { CustomSegmentLabelPosition, Transition } from "./core/enums"

// export enums
export { CustomSegmentLabelPosition, Transition }

const props = defineProps(defaultProps)

// main container ref
const container = ref(null)

defineOptions({
  name: "vue-speedometer",
})

onMounted(() => {
  renderGauge()
})

onUpdated(() => {
  if (props.forceRender) {
    renderGauge()
  } else {
    updateReadings()
  }
})

// initial config that is shared between functions
let config = getConfig({
  PROPS: props,
  parentWidth: 0,
  parentHeight: 0,
})

let d3_refs = undefined

function renderGauge() {
  config = getConfig({
    PROPS: props,
    parentWidth: container.value.parentNode.clientWidth,
    parentHeight: container.value.parentNode.clientHeight,
  })

  // remove existing gauge (if any)
  d3Select(container.value).select("svg").remove()

  d3_refs = render({
    container: container.value,
    config,
  })

  update({
    d3_refs,
    newValue: props.value,
    config,
  })
}

function updateReadings() {
  config = updateConfig(config, {
    labelFormat: d3Format(props.valueFormat || ""),
    // consider custom value formatter if changed
    segmentValueFormatter:
      props.segmentValueFormatter || defaultSegmentValueFormatter,
    currentValueText: props.currentValueText || "${value}",
  })

  // updates the readings of the gauge with the current prop value
  // animates between old prop value and current prop value
  update({
    d3_refs,
    newValue: props.value || 0,
    config,
  })
}
</script>

<template>
  <div class="vue-speedometer" ref="container"></div>
</template>
