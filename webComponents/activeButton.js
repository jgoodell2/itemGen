/**
 * Active Button WebComponent
 * @author Jim Goodell
 */
class ActiveButton extends HTMLElement {
      constructor() {
        super();
        // Create shaddow root
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = "<style>.button {display: inline-block; padding: 10px 20px; font-size: 16px; cursor: pointer; text-align: center; text-decoration: none; outline: none; color: #fff; background-color: #4C50AF; border: none; border-radius: 15px; box-shadow: 0 6px #999;} .button:hover {background-color: #3e418e} .button:active {  background-color: #3e418e;  box-shadow: 0 3px #666; transform: translateY(3px);}</style><button class='button'>Add to Your Content or Application</button>";
      }
};
// Define webComponent as a custom element
customElements.define('active-button', ActiveButton);

//EXAMPLE use of activeButton webComponent in HTML:
//<activeButton id="myButton">Custom element not supported.</activeButton>
