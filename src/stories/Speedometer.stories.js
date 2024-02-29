// IMPORTANT: checkout `.storybook/preview.js` to switch between DEV and DIST/PROD builds

export default { title: "vue-speedometer" }

const textColor = "#AAA"

export const DefaultWithNoConfig = () => ({
  template: `<vue-speedometer textColor="${textColor}" />`,
})

export const ConfiguringValues = () => ({
  template: `<vue-speedometer :value="333" textColor="${textColor}" />`,
})

export const CustomSegmentLabels = () => ({
  template: `
  <div>
    <vue-speedometer 
      :width="500"
      :needleHeightRatio="0.7"
      :value="777"
      currentValueText="Happiness Level"
      :customSegmentLabels='[
        {
          text: "Very Bad",
          position: "INSIDE",
          color: "#555",
        },
        {
          text: "Bad",
          position: "INSIDE",
          color: "#555",
        },
        {
          text: "Ok",
          position: "INSIDE",
          color: "#555",
          fontSize: "19px",
        },
        {
          text: "Good",
          position: "INSIDE",
          color: "#555",
        },
        {
          text: "Very Good",
          position: "INSIDE",
          color: "#555",
        },
      ]'
      :ringWidth="47"
      :needleTransitionDuration="3333"
      needleTransition="easeElastic"
      needleColor="#a7ff83"
      textColor="#d8dee9"
    />
    <vue-speedometer 
      :width="500"
      :needleHeightRatio="0.7"
      :value="777"
      :customSegmentStops='[0, 250, 750, 1000]'
      :segmentColors='["#9399ff", "#14ffec", "#00bbf0"]'
      currentValueText="How are you?"
      :customSegmentLabels='[
        {
          text: "Good",
          position: "OUTSIDE",
          color: "#d8dee9",
        },
        {
          text: "Great",
          position: "OUTSIDE",
          color: "#d8dee9",
        },
        {
          text: "Awesome!",
          position: "OUTSIDE",
          color: "#d8dee9",
        },
      ]'
      :ringWidth="47"
      :needleTransitionDuration="3333"
      needleTransition="easeElastic"
      needleColor="#a7ff83"
      textColor="#d8dee9"
    />
  </div>
`,
})

export const CustomSegmentColors = () => ({
  template: `
  <div>
    <vue-speedometer 
      :maxSegmentLabels="12"
      :segments="3"
      :value="470"
      :segmentColors='["#0055A4", "#ECEFF4", "#EF4135"]'
      needleColor='#000080' 
      textColor="${textColor}"
    />
    <vue-speedometer
      :maxSegmentLabels="12"
      :segments="3"
      :value="470"
      :segmentColors='["tomato", "gold", "limegreen"]'
      needleColor="lightgreen"
      textColor="${textColor}"
    />
  </div>
`,
})

export const CustomSegmentStops = () => ({
  template: `
  <div>
    <vue-speedometer 
      :needleHeightRatio="0.7"
      :maxSegmentLabels="5"
      :segments="3"
      :customSegmentStops="[0, 500, 750, 900, 1000]"
      :segmentColors='["firebrick", "tomato", "gold", "limegreen"]'
      :value="333"
      textColor="${textColor}"
    />
    <vue-speedometer 
      :forceRender="true"
      :maxSegmentLabels="1"
      :customSegmentStops="[0, 777, 1000]"
      :segmentColors='["#5959ac", "#AAA"]'
      needleColor="#5959ac"
      :currentValueText='"Current Value: \${value}"'
      :value="777"
      textColor="${textColor}"
    />
    <vue-speedometer 
      :maxSegmentLabels="1"
      :customSegmentStops="[-120, -100, 0]"
      :segmentColors='["tomato", "gold"]'
      needleColor="#5959ac"
      :currentValueText='"Current Value: \${value}"'
      :value="-100"
      :minValue="-120"
      :maxValue="0"
      textColor="${textColor}"
    />
  </div>
`,
})

export const FluidWidthView = () => ({
  data() {
    return {
      styles: {
        width: "500px",
        height: "300px",
        background: "#2a2744",
      },
    }
  },
  template: `
    <div :style="styles">
      <vue-speedometer 
        :fluidWidth="true"
        :minValue="100"
        :maxValue="500"
        :value="473"
        needleColor="steelblue"
        textColor="${textColor}"
      />
      <div style="color: ${textColor}">
      Fluid width takes the width of the parent div (<strong>500px</strong> in this case)
      </div>
    </div>
  `,
})

export const NeedleTransitionDuration = () => ({
  template: `
  <div>
    <vue-speedometer 
      :value="333"
      needleColor="steelblue"
      :needleTransitionDuration="4000"
      needleTransition="easeElastic"
      textColor="${textColor}"
    />
    <vue-speedometer 
      :value="333"
      needleColor="steelblue"
      :needleTransitionDuration="3000"
      needleTransition="easeQuadInOut"
      textColor="${textColor}"
    />
  </div>
`,
})

export const ForceRenderTheComponent = () => ({
  data() {
    return {
      buttonStyles: {
        padding: "7px",
        border: "thin solid steelblue",
        background: "white",
        cursor: "pointer",
        marginBottom: "17px",
      },
      value1: {
        value: 111,
        startColor: "blue",
        segments: 5,
        width: 300,
        height: 300,
        currentValueText: "${value}",
      },
      value2: {
        value: 222,
        startColor: "orange",
        segments: 10,
        width: 400,
        height: 400,
        currentValueText: "Current Value: ${value}",
      },
      toggleStatus: false,
    }
  },
  methods: {
    onClick: function () {
      this.toggleStatus = !this.toggleStatus
    },
  },
  template: `
    <div style="background: #2a2744">
    <div style="color: ${textColor}">
      By default, on props change only the current value and needle transition is updated. 
      Force render completly re-renders the whole component on update. 
      This is helpful for features like dynmaic width/height on resize
      </div>
      <hr />
      <button @click="onClick" :style="buttonStyles">
        <strong>Click Here to force render props</strong>
      </button>
      
      <vue-speedometer
        :value="toggleStatus ? value1.value : value2.value"
        :startColor="toggleStatus ? value1.startColor : value2.startColor"
        :forceRender="true"
        :segments="toggleStatus ? value1.segments : value2.segments"
        :width="toggleStatus ? value1.width : value2.width"
        :height="toggleStatus ? value1.height : value2.height"
        :currentValueText="toggleStatus ? value1.currentValueText : value2.currentValueText"
        textColor="${textColor}"
      />
    </div>
`,
})

export const ConfiguringTheFormatForValuesDisplayed = () => ({
  template: `
  <div>
    <vue-speedometer
      :maxValue="150"
      :value="70.7"
      valueFormat="d"
      :customSegmentStops="[0, 50, 70, 90, 150]"
      :segmentColors='["#bf616a", "#d08770", "#ebcb8b", "#a3be8c"]'
      textColor="${textColor}"
    />
    <vue-speedometer
      :maxValue="150"
      :value="70.7"
      :segments="5"
      valueFormat="d"
      textColor="${textColor}"
    />
  </div>
`,
})

function segmentValueFormatter(value) {
  if (value < 200) {
    return `${value} 😒`
  }
  if (value < 400) {
    return `${value} 😐`
  }
  if (value < 600) {
    return `${value} 😌`
  }
  if (value < 800) {
    return `${value} 😊`
  }
  if (value < 900) {
    return `${value} 😉`
  }

  return `${value} 😇`
}

// ref: https://github.com/vuejs/vue/issues/2436
export const CustomSegmentValueFormatter = () => ({
  methods: {
    segmentValueFormatter,
  },

  template: `
    <div>
      <vue-speedometer
        :value="333"
        needleColor="steelblue"
        :segmentValueFormatter="segmentValueFormatter"
        :paddingHorizontal="34"
      />
    </div>
  `,
})

export const CustomCurrentValueText = () => ({
  template: `
  <div>
    <vue-speedometer
      :value="333"
      needleColor="steelblue"
      :needleTransitionDuration="4000"
      needleTransition="easeElastic"
      currentValueText="Current Value: \${value}"
      textColor="${textColor}"
    />
  </div>
`,
})

export const CustomCurrentValuePlaceholderStyleForEgValue = () => ({
  template: `
  <div>
    <vue-speedometer
      :value="333"
      needleColor="steelblue"
      :needleTransitionDuration="4000"
      needleTransition="easeElastic"
      currentValueText="Current Value: #{value}"
      currentValuePlaceholderStyle="#{value}"
      textColor="${textColor}"
    />
  </div>
`,
})

export const ConfigureNeedleLengthAndFontSizes = () => ({
  template: `
  <div>
    <vue-speedometer
      :value="333"
      :needleHeightRatio="0.5"
      labelFontSize="15px"
      valueTextFontSize="23px"
      textColor="${textColor}"
    />
  </div>
`,
})

export const GradientEffectWithLargeNumberOfSegmentsAndMaxSegmentLabelsConfig =
  () => ({
    template: `
  <div>
    <vue-speedometer
      :needleHeightRatio="0.7"
      :maxSegmentLabels="5"
      :segments="75"
      :value="333"
      textColor="${textColor}"
    />
  </div>
`,
  })

export const NoSegmentLabels = () => ({
  template: `
  <div>
    <vue-speedometer
      :maxSegmentLabels="0" 
      :segments="75"
      textColor="${textColor}"
    />
    <vue-speedometer
      :maxSegmentLabels="0"
      :segments="4"
      :value="333"
      startColor="#2E3440"
      endColor="#4C566A"
      needleColor="#D8DEE9"
      textColor="${textColor}"
    />
  </div>
`,
})

export const NormalUpdationOfValues = () => ({
  created() {
    window.setInterval(() => {
      this.toggle = !this.toggle
    }, 3000)
  },
  data() {
    return {
      toggle: false,
    }
  },
  template: `
    <div>
      <vue-speedometer
        :maxSegmentLabels="0" 
        :segments="75"
        :value="toggle ? 333 : 555"
        needleTransition="easeElastic"
        :needleTransitionDuration="3333"
        textColor="${textColor}"
      />
      <vue-speedometer
        :maxSegmentLabels="0"
        :segments="4"
        :value="toggle ? 333 : 555"
        startColor="#2E3440"
        endColor="#4C566A"
        needleColor="#D8DEE9"
        textColor="${textColor}"
      />
    </div>
  `,
})

export const CustomizeFontSizesAndSpacing = () => ({
  template: `
  <div>
    <vue-speedometer
      :value="333"
      :needleHeightRatio="0.5"
      labelFontSize="31px"
      valueTextFontSize="37px"
      valueTextFontWeight="500"
      :paddingHorizontal="17"
      :paddingVertical="17"
      currentValueText="Value: \${value}"
      textColor="${textColor}"
    />
  </div>
`,
})
