// export prop types for 'Vue' and use the core 'default' values to match with the format Vue expects
import mapValues from "lodash-es/mapValues"
import _keys from "lodash-es/keys"
import _each from "lodash-es/each"

import { DEFAULT_PROPS } from "./core/config"

const prop_types = {
  value: {
    type: Number,
    required: true,
  },
  minValue: {
    type: Number,
    required: true,
  },
  maxValue: {
    type: Number,
    required: true,
  },

  // tracks if the component should update as the whole or just animate the value
  // default will just animate the value after initialization/mounting
  forceRender: {
    type: Boolean,
    required: true,
  },

  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  paddingHorizontal: {
    type: Number,
    required: true,
  },
  paddingVertical: {
    type: Number,
    required: true,
  },
  dimensionUnit: {
    type: String,
    required: true,
  },
  fluidWidth: {
    type: Boolean,
    required: true,
  },

  // segments to show in the speedometer
  segments: {
    type: Number,
    required: true,
  },
  // maximum number of labels to be shown
  maxSegmentLabels: {
    type: Number,
  },
  // custom segment points to create unequal segments
  customSegmentStops: {
    type: Array,
  },

  // custom segment labels
  customSegmentLabels: {
    type: Array,
  },

  // color strings
  needleColor: {
    type: String,
    required: true,
  },
  startColor: {
    type: String,
    required: true,
  },
  endColor: {
    type: String,
    required: true,
  },
  // custom segment colors
  segmentColors: {
    type: Array,
    required: true,
  },

  // needle transition type and duration
  needleTransition: {
    type: String,
    required: true,
  },
  needleTransitionDuration: {
    type: Number,
    required: true,
  },
  needleHeightRatio: {
    type: Number,
    required: true,
  },

  ringWidth: {
    type: Number,
    required: true,
  },
  textColor: {
    type: String,
    required: true,
  },

  // d3 format identifier is generally a string; default "" (empty string)
  valueFormat: {
    type: String,
    required: true,
  },
  // value text format
  currentValueText: {
    type: String,
    required: true,
  },
  // placeholder style for current value
  currentValuePlaceholderStyle: {
    type: String,
    required: true,
  },

  // font sizes
  labelFontSize: {
    type: String,
    required: true,
  },
  valueTextFontSize: {
    type: String,
    required: true,
  },
  valueTextFontWeight: {
    type: String,
    required: true,
  },
  svgAriaLabel: {
    type: String,
    required: true,
  },
  // ref: https://vuejs.org/guide/components/props.html
  segmentValueFormatter: {
    type: Function,
    required: false,
  },
}

// update the props with default values
const props = mapValues(prop_types, (value, key) => {
  const CUSTOM_DEFAULTS = {
    customSegmentStops: function () {
      return []
    },
    customSegmentLabels: function () {
      return []
    },
    segmentColors: function () {
      return []
    },
    svgAriaLabel: function () {
      return "Vue Speedometer"
    },
  }

  return {
    ...value,
    default: CUSTOM_DEFAULTS[key] || DEFAULT_PROPS[key],
    // so since we are giving default let us turn of 'required' (In React it will be taken care by default Props)
    required: false,
  }
})

export default props
