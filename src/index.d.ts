declare module "vue-speedometer" {
  import Vue from "vue"
  interface ComponentOptions<V extends Vue> {
    value?: number

    minValue?: number
    maxValue?: number

    segments?: number
    maxSegmentLabels?: number

    forceRender?: boolean

    width?: number
    height?: number

    dimensionUnit?: string
    fluidWidth?: boolean

    needleColor?: string
    startColor?: string
    endColor?: string
    segmentColors?: string[]

    needleTransition?: string
    needleTransitionDuration?: number
    needleHeightRatio?: number

    ringWidth?: number
    textColor?: string

    valueFormat?: string
    currentValueText?: string
    currentValuePlaceholderStyle?: string

    customSegmentStops?: number[]

    labelFontSize?: string
    valueTextFontSize?: string

    paddingHorizontal?: number
    paddingVertical?: number
  }

  class VueSpeedometer<ComponentOptions> extends Vue {}

  export default VueSpeedometer
}
