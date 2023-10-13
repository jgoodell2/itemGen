 /**
 * PercentGauge WebComponent
 * @author Jim Goodell
 */
class PercentGauge extends HTMLElement {
      constructor() {
        super();
        // Create shaddow root
        const shadowRoot = this.attachShadow({ mode: 'open' });
        // Create a canvas element and add it to the shadow DOM
        const canvas = document.createElement("canvas");
        canvas.id = "myCanvas";
        canvas.width = 150;
        canvas.height = 150;
        shadowRoot.appendChild(canvas);
      }
      static get observedAttributes() { return ['gauge-band-color', 'gauge-value-decimal']; }
      attributeChangedCallback(attr, oldVal, newVal) {
        if (oldVal === newVal) return; // nothing to do
        const gaugeBandColor= this.getAttribute('gauge-band-color');
        const gaugeValueDecimal= this.getAttribute('gauge-value-decimal');
        const canvas = this.shadowRoot.getElementById('myCanvas');
        // Get the canvas context and draw the percent gauge
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clean the slate
        drawPercentGauge(ctx, gaugeValueDecimal, gaugeBandColor);
      }
      connectedCallback() {}
}
// Define webComponent as a custom element
customElements.define('percent-gauge', PercentGauge);
// Define the drawPercentGauge function
function drawPercentGauge(ctx, p, col) {
  ctx.beginPath();
  ctx.arc(
    100,
    75,
    40,
    Math.PI / 2,
    p * 2 * Math.PI + Math.PI / 2
  );
  ctx.strokeStyle = col;
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.font = "18px Arial";
  const pLabel = (p * 100).toFixed(0) + "%";
  ctx.fillText(pLabel, 75, 85);
}   
//EXAMPLE use of percent-gague webComponent in HTML:
//<percent-gauge id="myGauge" gauge-band-color="green" gauge-value-decimal=".701">Custom element not supported.</percent-gauge>
//**** Need to add code to parse/validate parameters, truncate decimal, handle bad parameters gracefully 
