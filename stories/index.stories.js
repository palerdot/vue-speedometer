/* eslint-disable react/react-in-jsx-scope */

import { addParameters, storiesOf, addDecorator } from "@storybook/vue"
import { create } from "@storybook/theming"
import { withInfo } from "storybook-addon-vue-info"

import VueSpeedometer from "../src/"

addDecorator(
  withInfo({
    inline: true,
    maxPropObjectKeys: 100,
    maxPropArrayLength: 1000,
  })
)

addParameters({
  options: {
    showPanel: true,
    theme: create({
      brandTitle: "<img>&lt;vue-speedometer /&gt; </img>",
    }),
  },
})

storiesOf(`vue-speedometer`, module)
  .add(
    "Default with no config",
    () => ({
      components: { VueSpeedometer },
      template: `<vue-speedometer />`,
    }),
    { source: true, inline: true, header: false }
  )
  .add("Configuring values", () => ({
    components: { VueSpeedometer },
    template: `<vue-speedometer :value="333" />`,
  }))
  .add("Custom segment colors", () => ({
    components: { VueSpeedometer },
    template: `
      <div>
        <vue-speedometer 
          :maxSegmentLabels="12"
          :segments="3"
          :value="470"
          :segmentColors='["#0055A4", "#ECEFF4", "#EF4135"]'
          needleColor='#000080' 
        />
        <vue-speedometer
          :maxSegmentLabels="12"
          :segments="3"
          :value="470"
          :segmentColors='["tomato", "gold", "limegreen"]'
          needleColor="lightgreen"
        />
      </div>
      `,
  }))
  .add("Custom Segment Stops", () => ({
    components: { VueSpeedometer },
    template: `
      <div>
        <vue-speedometer 
          :needleHeightRatio="0.7"
          :maxSegmentLabels="5"
          :segments="3"
          :customSegmentStops="[0, 500, 750, 900, 1000]"
          :segmentColors='["firebrick", "tomato", "gold", "limegreen"]'
          :value="333"
        />
        <vue-speedometer 
          :forceRender="true"
          :maxSegmentLabels="1"
          :customSegmentStops="[0, 777, 1000]"
          :segmentColors='["#5959ac", "#AAA"]'
          needleColor="#5959ac"
          :currentValueText='"Current Value: \${value}"'
          :value="777"
        />
      </div>
    `,
  }))
  .add(
    "Fluid Width view",
    () => ({
      components: { VueSpeedometer },
      data() {
        return {
          styles: {
            width: "500px",
            height: "300px",
            background: "#EFEFEF",
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
          />
          <div>
          Fluid width takes the width of the parent div (<strong>500px</strong> in this case)
          </div>
        </div>
      `,
    }),
    {
      info: "Fluid width takes the width of the parent div",
    }
  )
  .add("Needle Transition Duration", () => ({
    components: { VueSpeedometer },
    template: `
    <div>
      <vue-speedometer 
        :value="333"
        needleColor="steelblue"
        :needleTransitionDuration="4000"
        needleTransition="easeElastic"
      />
      <vue-speedometer 
        :value="333"
        needleColor="steelblue"
        :needleTransitionDuration="3000"
        needleTransition="easeQuadInOut"
      />
    </div>
    `,
  }))
  .add(
    "Force render the component",
    () => ({
      components: { VueSpeedometer },
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
        onClick: function() {
          this.toggleStatus = !this.toggleStatus
        },
      },
      template: `
    <div>
      <div>
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
      />
    </div>
    `,
    }),
    {
      info: `
    By default, on props change only the current value and needle transition is updated. 
    Force render completly re-renders the whole component on update. 
    This is helpful for features like dynmaic width/height on resize
    `,
    }
  )
  .add("Configuring the format for values displayed", () => ({
    components: { VueSpeedometer },
    template: `
      <div>
        <vue-speedometer
          :maxValue="150"
          :value="70.7"
          valueFormat="d"
          :customSegmentStops="[0, 50, 70, 90, 150]"
          :segmentColors='["#bf616a", "#d08770", "#ebcb8b", "#a3be8c"]'
        />
        <vue-speedometer
          :maxValue="150"
          :value="70.7"
          :segments="5"
          valueFormat="d"
        />
      </div>
  `,
  }))
  .add("Custom Current Value Text", () => ({
    components: { VueSpeedometer },
    template: `
      <div>
        <vue-speedometer
          :value="333"
          needleColor="steelblue"
          :needleTransitionDuration="4000"
          needleTransition="easeElastic"
          currentValueText="Current Value: \${value}"
        />
      </div>
  `,
  }))
  .add(
    "Custom Current Value Placeholder Style ... (for eg: #{value} ...)",
    () => ({
      components: { VueSpeedometer },
      template: `
      <div>
        <vue-speedometer
          :value="333"
          needleColor="steelblue"
          :needleTransitionDuration="4000"
          needleTransition="easeElastic"
          currentValueText="Current Value: #{value}"
          currentValuePlaceholderStyle="#{value}"
        />
      </div>
  `,
    }),
    {
      info: `
    Configure the current Value placeholder with custom style. For eg: you can use ruby like interpolation by giving following props:
    currentValueText=**"Current Value: #{value}"**
    currentValuePlaceholderStyle=**{"#{value}"}**. This is also helpful if you face 'no-template-curly-in-string' eslint warnings
  `,
    }
  )
  .add("Configure needle length", () => ({
    components: { VueSpeedometer },
    template: `
      <div>
        <vue-speedometer
          :value="333"
          :needleHeightRatio="0.5"
        />
      </div>
  `,
  }))
  .add(
    "Gradient effect with large number of segments and 'maxSegmentLabels' config",
    () => ({
      components: { VueSpeedometer },
      template: `
      <div>
        <vue-speedometer
          :needleHeightRatio="0.7"
          :maxSegmentLabels="5"
          :segments="1000"
          :value="333"
        />
      </div>
  `,
    })
  )
  .add("No segment Labels", () => ({
    components: { VueSpeedometer },
    template: `
        <div>
          <vue-speedometer
            :maxSegmentLabels="0" 
            :segments="1000"
          />
          <vue-speedometer
            :maxSegmentLabels="0"
            :segments="4"
            :value="333"
            startColor="#2E3440"
            endColor="#4C566A"
            needleColor="#D8DEE9"
          />
        </div>
    `,
  }))
  .add("Normal Updation of values", () => ({
    components: { VueSpeedometer },
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
            :segments="1000"
            :value="toggle ? 333 : 555"
            needleTransition="easeElastic"
            :needleTransitionDuration="3333"
          />
          <vue-speedometer
            :maxSegmentLabels="0"
            :segments="4"
            :value="toggle ? 333 : 555"
            startColor="#2E3440"
            endColor="#4C566A"
            needleColor="#D8DEE9"
          />
        </div>
    `,
  }))
