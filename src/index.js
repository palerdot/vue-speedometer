import _debounce from "lodash-es/debounce"
import _each from "lodash-es/each"
import { select as d3Select } from "d3-selection"

import { getConfig, updateConfig } from "./core/config"
import { render, update } from "./core/render"
import props, { getProps, getPropKeys } from "./props"
import { Transition, CustomSegmentLabelPosition } from "./core/enums"

// export enums (for both Typescript and JS)
export { Transition, CustomSegmentLabelPosition }

export default {
  name: "vue-speedometer",
  props,

  template: `
    <div></div>
  `,

  beforeCreate: function () {
    this.d3_refs = {
      pointer: false,
      current_value_text: false,
    }
  },

  created: function () {
    this._initWatchers()
  },

  mounted: function () {
    // render the gauge here
    this.renderGauge()
  },

  data: function () {
    return {
      // track forceRender internally
      force_render: this.forceRender,
    }
  },

  // we had to watch for 'prop' changes in vue
  // ref: https://stackoverflow.com/questions/44584292/how-to-listen-for-props-changes
  // here we watch specifically for 'forceRender' which is what we are interested to render or update
  watch: {
    forceRender: function (newValue) {
      // force render should just take the new value
      this.force_render = newValue
    },
  },

  methods: {
    // we had to watch for 'prop' changes in vue
    // ref: https://stackoverflow.com/questions/44584292/how-to-listen-for-props-changes
    // initing watchers here
    _initWatchers() {
      this.updateReadings = _debounce(this._updateReadings, 0, {
        leading: false,
        trailing: true,
      })

      const DEFAULT_WATCHERS = getPropKeys().filter(
        (prop) => prop !== "forceRender"
      )

      // set up watchers for all
      _each(DEFAULT_WATCHERS, (prop) => {
        this.$watch(prop, function (newValue, oldValue) {
          this.watchUpdater({ newValue, oldValue, prop })
        })
      })
    },

    watchUpdater: function ({ newValue, oldValue, prop }) {
      const newConfig = Object.assign(
        {
          [prop]: newValue || oldValue,
        },
        // handling 'value' prop update when value is 0
        // we will explicitly handle 'value' prop
        // since 'newValue || oldValue' will fail for '0'
        prop === "value"
          ? {
              // we will always take the new value
              value: newValue,
            }
          : {}
      )

      // update the config (only if not optional)
      this.config = updateConfig(this.config, newConfig)

      this.$nextTick().then(() => {
        this.updateReadings()
      })
    },

    renderGauge: function () {
      this.config = getConfig({
        PROPS: getProps(this),
        parentWidth: this.$el.parentNode.clientWidth,
        parentHeight: this.$el.parentNode.clientHeight,
      })

      // remove existing gauge (if any)
      d3Select(this.$el).select("svg").remove()

      this.d3_refs = render({
        container: this.$el,
        config: this.config,
      })

      update({
        d3_refs: this.d3_refs,
        newValue: this.value,
        config: this.config,
      })
    },

    _updateReadings: function () {
      if (this.force_render) {
        this.renderGauge()
      } else {
        // updates the readings of the gauge with the current prop value
        // animates between old prop value and current prop value
        update({
          d3_refs: this.d3_refs,
          newValue: this.config.value || 0,
          config: this.config,
        })
      }
    },
  },
}
