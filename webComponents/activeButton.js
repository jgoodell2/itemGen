/**
 * Active Button WebComponent
 * @author Jim Goodell
 */
class ActiveButton extends HTMLElement {
      constructor() {
        super();
        // Create shaddow root
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = "<style>.button {display: inline-block; padding: 5px 10px; font-size: 14px; cursor: pointer; text-align: center; text-decoration: none; outline: none; color: #fff; background-color: #4C50AF; border: none; border-radius: 15px; box-shadow: 0 6px #999;} .button:hover {background-color: #008CBA;} .button:active {  background-color: #008CBA;  box-shadow: 0 3px #666; transform: translateY(3px);}</style><button class='button'>Add guage to your content or application</button>";
      }
};
// Define webComponent as a custom element
customElements.define('active-button', ActiveButton);

//EXAMPLE use of activeButton webComponent in HTML:
//<activeButton id="myButton">Custom element not supported.</activeButton>
