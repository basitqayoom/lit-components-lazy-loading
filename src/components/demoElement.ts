import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('pw-element')
class MyElement extends LitElement {
  @property()
  timerInSeconds = 0;

  constructor() {
    super();

    setInterval(() => {
      this.timerInSeconds = this.timerInSeconds + 1;
    }, 1000)
  }

  override render() {
    return html`
      <p>Here is running timer ${this.timerInSeconds} Seconds</p>
    `;
  }
}

  export default MyElement