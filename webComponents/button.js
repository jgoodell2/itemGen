/**
 * Active Button WebComponent
 * @author Jim Goodell
 */
 customElements.define('ratio-problem-002', class extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `<style>
.button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4C50AF;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #3e418e}

.button:active {
  background-color: #3e418e;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>

<button class="button">Add to Your Content or Application</button>';
}
});
