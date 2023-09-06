import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('pw-input')
class NameTag extends LitElement {
  @property()
  name: string = '';

  override render() {
    return html`
      <p>Hello, ${this.name}</p>
      <input @input=${this.changeName} placeholder="Enter your name">
    `;
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }
}

export default NameTag