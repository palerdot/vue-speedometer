const xe={title:"vue-speedometer"},e="#AAA",n=()=>({template:`<vue-speedometer textColor="${e}" />`}),o=()=>({template:`<vue-speedometer :value="333" textColor="${e}" />`}),r=()=>({template:`
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
`}),a=()=>({template:`
  <div>
    <vue-speedometer 
      :maxSegmentLabels="12"
      :segments="3"
      :value="470"
      :segmentColors='["#0055A4", "#ECEFF4", "#EF4135"]'
      needleColor='#000080' 
      textColor="${e}"
    />
    <vue-speedometer
      :maxSegmentLabels="12"
      :segments="3"
      :value="470"
      :segmentColors='["tomato", "gold", "limegreen"]'
      needleColor="lightgreen"
      textColor="${e}"
    />
  </div>
`}),l=()=>({template:`
  <div>
    <vue-speedometer 
      :needleHeightRatio="0.7"
      :maxSegmentLabels="5"
      :segments="3"
      :customSegmentStops="[0, 500, 750, 900, 1000]"
      :segmentColors='["firebrick", "tomato", "gold", "limegreen"]'
      :value="333"
      textColor="${e}"
    />
    <vue-speedometer 
      :forceRender="true"
      :maxSegmentLabels="1"
      :customSegmentStops="[0, 777, 1000]"
      :segmentColors='["#5959ac", "#AAA"]'
      needleColor="#5959ac"
      :currentValueText='"Current Value: \${value}"'
      :value="777"
      textColor="${e}"
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
      textColor="${e}"
    />
  </div>
`}),s=()=>({data(){return{styles:{width:"500px",height:"300px",background:"#2a2744"}}},template:`
    <div :style="styles">
      <vue-speedometer 
        :fluidWidth="true"
        :minValue="100"
        :maxValue="500"
        :value="473"
        needleColor="steelblue"
        textColor="${e}"
      />
      <div style="color: ${e}">
      Fluid width takes the width of the parent div (<strong>500px</strong> in this case)
      </div>
    </div>
  `}),u=()=>({template:`
  <div>
    <vue-speedometer 
      :value="333"
      needleColor="steelblue"
      :needleTransitionDuration="4000"
      needleTransition="easeElastic"
      textColor="${e}"
    />
    <vue-speedometer 
      :value="333"
      needleColor="steelblue"
      :needleTransitionDuration="3000"
      needleTransition="easeQuadInOut"
      textColor="${e}"
    />
  </div>
`}),i=()=>({data(){return{buttonStyles:{padding:"7px",border:"thin solid steelblue",background:"white",cursor:"pointer",marginBottom:"17px"},value1:{value:111,startColor:"blue",segments:5,width:300,height:300,currentValueText:"${value}"},value2:{value:222,startColor:"orange",segments:10,width:400,height:400,currentValueText:"Current Value: ${value}"},toggleStatus:!1}},methods:{onClick:function(){this.toggleStatus=!this.toggleStatus}},template:`
    <div style="background: #2a2744">
    <div style="color: ${e}">
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
        textColor="${e}"
      />
    </div>
`}),d=()=>({template:`
  <div>
    <vue-speedometer
      :maxValue="150"
      :value="70.7"
      valueFormat="d"
      :customSegmentStops="[0, 50, 70, 90, 150]"
      :segmentColors='["#bf616a", "#d08770", "#ebcb8b", "#a3be8c"]'
      textColor="${e}"
    />
    <vue-speedometer
      :maxValue="150"
      :value="70.7"
      :segments="5"
      valueFormat="d"
      textColor="${e}"
    />
  </div>
`});function Ce(t){return t<200?`${t} 😒`:t<400?`${t} 😐`:t<600?`${t} 😌`:t<800?`${t} 😊`:t<900?`${t} 😉`:`${t} 😇`}const m=()=>({methods:{segmentValueFormatter:Ce},template:`
    <div>
      <vue-speedometer
        :value="333"
        needleColor="steelblue"
        :segmentValueFormatter="segmentValueFormatter"
        :paddingHorizontal="34"
      />
    </div>
  `}),g=()=>({template:`
  <div>
    <vue-speedometer
      :value="333"
      needleColor="steelblue"
      :needleTransitionDuration="4000"
      needleTransition="easeElastic"
      currentValueText="Current Value: \${value}"
      textColor="${e}"
    />
  </div>
`}),c=()=>({template:`
  <div>
    <vue-speedometer
      :value="333"
      needleColor="steelblue"
      :needleTransitionDuration="4000"
      needleTransition="easeElastic"
      currentValueText="Current Value: #{value}"
      currentValuePlaceholderStyle="#{value}"
      textColor="${e}"
    />
  </div>
`}),p=()=>({template:`
  <div>
    <vue-speedometer
      :value="333"
      :needleHeightRatio="0.5"
      labelFontSize="15px"
      valueTextFontSize="23px"
      textColor="${e}"
    />
  </div>
`}),v=()=>({template:`
  <div>
    <vue-speedometer
      :needleHeightRatio="0.7"
      :maxSegmentLabels="5"
      :segments="75"
      :value="333"
      textColor="${e}"
    />
  </div>
`}),C=()=>({template:`
  <div>
    <vue-speedometer
      :maxSegmentLabels="0" 
      :segments="75"
      textColor="${e}"
    />
    <vue-speedometer
      :maxSegmentLabels="0"
      :segments="4"
      :value="333"
      startColor="#2E3440"
      endColor="#4C566A"
      needleColor="#D8DEE9"
      textColor="${e}"
    />
  </div>
`}),x=()=>({created(){window.setInterval(()=>{this.toggle=!this.toggle},3e3)},data(){return{toggle:!1}},template:`
    <div>
      <vue-speedometer
        :maxSegmentLabels="0" 
        :segments="75"
        :value="toggle ? 333 : 555"
        needleTransition="easeElastic"
        :needleTransitionDuration="3333"
        textColor="${e}"
      />
      <vue-speedometer
        :maxSegmentLabels="0"
        :segments="4"
        :value="toggle ? 333 : 555"
        startColor="#2E3440"
        endColor="#4C566A"
        needleColor="#D8DEE9"
        textColor="${e}"
      />
    </div>
  `}),S=()=>({template:`
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
      textColor="${e}"
    />
  </div>
`});var h,b,V;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:'() => ({\n  template: `<vue-speedometer textColor="${textColor}" />`\n})',...(V=(b=n.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var f,T,$;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:'() => ({\n  template: `<vue-speedometer :value="333" textColor="${textColor}" />`\n})',...($=(T=o.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var E,F,D;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`() => ({
  template: \`
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
\`
})`,...(D=(F=r.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var y,w,L;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`() => ({
  template: \`
  <div>
    <vue-speedometer 
      :maxSegmentLabels="12"
      :segments="3"
      :value="470"
      :segmentColors='["#0055A4", "#ECEFF4", "#EF4135"]'
      needleColor='#000080' 
      textColor="\${textColor}"
    />
    <vue-speedometer
      :maxSegmentLabels="12"
      :segments="3"
      :value="470"
      :segmentColors='["tomato", "gold", "limegreen"]'
      needleColor="lightgreen"
      textColor="\${textColor}"
    />
  </div>
\`
})`,...(L=(w=a.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var I,A,k;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`() => ({
  template: \`
  <div>
    <vue-speedometer 
      :needleHeightRatio="0.7"
      :maxSegmentLabels="5"
      :segments="3"
      :customSegmentStops="[0, 500, 750, 900, 1000]"
      :segmentColors='["firebrick", "tomato", "gold", "limegreen"]'
      :value="333"
      textColor="\${textColor}"
    />
    <vue-speedometer 
      :forceRender="true"
      :maxSegmentLabels="1"
      :customSegmentStops="[0, 777, 1000]"
      :segmentColors='["#5959ac", "#AAA"]'
      needleColor="#5959ac"
      :currentValueText='"Current Value: \\\${value}"'
      :value="777"
      textColor="\${textColor}"
    />
    <vue-speedometer 
      :maxSegmentLabels="1"
      :customSegmentStops="[-120, -100, 0]"
      :segmentColors='["tomato", "gold"]'
      needleColor="#5959ac"
      :currentValueText='"Current Value: \\\${value}"'
      :value="-100"
      :minValue="-120"
      :maxValue="0"
      textColor="\${textColor}"
    />
  </div>
\`
})`,...(k=(A=l.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var z,H,N;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`() => ({
  data() {
    return {
      styles: {
        width: "500px",
        height: "300px",
        background: "#2a2744"
      }
    };
  },
  template: \`
    <div :style="styles">
      <vue-speedometer 
        :fluidWidth="true"
        :minValue="100"
        :maxValue="500"
        :value="473"
        needleColor="steelblue"
        textColor="\${textColor}"
      />
      <div style="color: \${textColor}">
      Fluid width takes the width of the parent div (<strong>500px</strong> in this case)
      </div>
    </div>
  \`
})`,...(N=(H=s.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var R,O,W;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`() => ({
  template: \`
  <div>
    <vue-speedometer 
      :value="333"
      needleColor="steelblue"
      :needleTransitionDuration="4000"
      needleTransition="easeElastic"
      textColor="\${textColor}"
    />
    <vue-speedometer 
      :value="333"
      needleColor="steelblue"
      :needleTransitionDuration="3000"
      needleTransition="easeQuadInOut"
      textColor="\${textColor}"
    />
  </div>
\`
})`,...(W=(O=u.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var G,B,U;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`() => ({
  data() {
    return {
      buttonStyles: {
        padding: "7px",
        border: "thin solid steelblue",
        background: "white",
        cursor: "pointer",
        marginBottom: "17px"
      },
      value1: {
        value: 111,
        startColor: "blue",
        segments: 5,
        width: 300,
        height: 300,
        currentValueText: "\${value}"
      },
      value2: {
        value: 222,
        startColor: "orange",
        segments: 10,
        width: 400,
        height: 400,
        currentValueText: "Current Value: \${value}"
      },
      toggleStatus: false
    };
  },
  methods: {
    onClick: function () {
      this.toggleStatus = !this.toggleStatus;
    }
  },
  template: \`
    <div style="background: #2a2744">
    <div style="color: \${textColor}">
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
        textColor="\${textColor}"
      />
    </div>
\`
})`,...(U=(B=i.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var P,_,M;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`() => ({
  template: \`
  <div>
    <vue-speedometer
      :maxValue="150"
      :value="70.7"
      valueFormat="d"
      :customSegmentStops="[0, 50, 70, 90, 150]"
      :segmentColors='["#bf616a", "#d08770", "#ebcb8b", "#a3be8c"]'
      textColor="\${textColor}"
    />
    <vue-speedometer
      :maxValue="150"
      :value="70.7"
      :segments="5"
      valueFormat="d"
      textColor="\${textColor}"
    />
  </div>
\`
})`,...(M=(_=d.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var Q,j,q;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`() => ({
  methods: {
    segmentValueFormatter
  },
  template: \`
    <div>
      <vue-speedometer
        :value="333"
        needleColor="steelblue"
        :segmentValueFormatter="segmentValueFormatter"
        :paddingHorizontal="34"
      />
    </div>
  \`
})`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var J,K,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`() => ({
  template: \`
  <div>
    <vue-speedometer
      :value="333"
      needleColor="steelblue"
      :needleTransitionDuration="4000"
      needleTransition="easeElastic"
      currentValueText="Current Value: \\\${value}"
      textColor="\${textColor}"
    />
  </div>
\`
})`,...(X=(K=g.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,ee;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`() => ({
  template: \`
  <div>
    <vue-speedometer
      :value="333"
      needleColor="steelblue"
      :needleTransitionDuration="4000"
      needleTransition="easeElastic"
      currentValueText="Current Value: #{value}"
      currentValuePlaceholderStyle="#{value}"
      textColor="\${textColor}"
    />
  </div>
\`
})`,...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,oe;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`() => ({
  template: \`
  <div>
    <vue-speedometer
      :value="333"
      :needleHeightRatio="0.5"
      labelFontSize="15px"
      valueTextFontSize="23px"
      textColor="\${textColor}"
    />
  </div>
\`
})`,...(oe=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,ae,le;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`() => ({
  template: \`
  <div>
    <vue-speedometer
      :needleHeightRatio="0.7"
      :maxSegmentLabels="5"
      :segments="75"
      :value="333"
      textColor="\${textColor}"
    />
  </div>
\`
})`,...(le=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var se,ue,ie;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`() => ({
  template: \`
  <div>
    <vue-speedometer
      :maxSegmentLabels="0" 
      :segments="75"
      textColor="\${textColor}"
    />
    <vue-speedometer
      :maxSegmentLabels="0"
      :segments="4"
      :value="333"
      startColor="#2E3440"
      endColor="#4C566A"
      needleColor="#D8DEE9"
      textColor="\${textColor}"
    />
  </div>
\`
})`,...(ie=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var de,me,ge;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`() => ({
  created() {
    window.setInterval(() => {
      this.toggle = !this.toggle;
    }, 3000);
  },
  data() {
    return {
      toggle: false
    };
  },
  template: \`
    <div>
      <vue-speedometer
        :maxSegmentLabels="0" 
        :segments="75"
        :value="toggle ? 333 : 555"
        needleTransition="easeElastic"
        :needleTransitionDuration="3333"
        textColor="\${textColor}"
      />
      <vue-speedometer
        :maxSegmentLabels="0"
        :segments="4"
        :value="toggle ? 333 : 555"
        startColor="#2E3440"
        endColor="#4C566A"
        needleColor="#D8DEE9"
        textColor="\${textColor}"
      />
    </div>
  \`
})`,...(ge=(me=x.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ce,pe,ve;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`() => ({
  template: \`
  <div>
    <vue-speedometer
      :value="333"
      :needleHeightRatio="0.5"
      labelFontSize="31px"
      valueTextFontSize="37px"
      valueTextFontWeight="500"
      :paddingHorizontal="17"
      :paddingVertical="17"
      currentValueText="Value: \\\${value}"
      textColor="\${textColor}"
    />
  </div>
\`
})`,...(ve=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};const Se=["DefaultWithNoConfig","ConfiguringValues","CustomSegmentLabels","CustomSegmentColors","CustomSegmentStops","FluidWidthView","NeedleTransitionDuration","ForceRenderTheComponent","ConfiguringTheFormatForValuesDisplayed","CustomSegmentValueFormatter","CustomCurrentValueText","CustomCurrentValuePlaceholderStyleForEgValue","ConfigureNeedleLengthAndFontSizes","GradientEffectWithLargeNumberOfSegmentsAndMaxSegmentLabelsConfig","NoSegmentLabels","NormalUpdationOfValues","CustomizeFontSizesAndSpacing"];export{p as ConfigureNeedleLengthAndFontSizes,d as ConfiguringTheFormatForValuesDisplayed,o as ConfiguringValues,c as CustomCurrentValuePlaceholderStyleForEgValue,g as CustomCurrentValueText,a as CustomSegmentColors,r as CustomSegmentLabels,l as CustomSegmentStops,m as CustomSegmentValueFormatter,S as CustomizeFontSizesAndSpacing,n as DefaultWithNoConfig,s as FluidWidthView,i as ForceRenderTheComponent,v as GradientEffectWithLargeNumberOfSegmentsAndMaxSegmentLabelsConfig,u as NeedleTransitionDuration,C as NoSegmentLabels,x as NormalUpdationOfValues,Se as __namedExportsOrder,xe as default};
