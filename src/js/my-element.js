// Import the LitElement base class and html helper function
//import { LitElement, html } from 'lit-element';
import { LitElement, html,css } from 'https://unpkg.com/lit-element/lit-element.js?module';

// Extend the LitElement base class
class MyElement extends LitElement {
  static get styles() {
    return css`.mood { color: green; }`;
  }
  static get properties() {
    return {
      mood: {type: String}
    }
  }
  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render(){
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      Web Components are 
      <span class="mood">${this.mood}</span>!
      <slot>A paragraph</slot>
    `;
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);