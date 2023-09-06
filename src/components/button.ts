import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('pw-button')
class PWButton extends LitElement {
    constructor() {
        super();
    }

    override render() {
        return html`
            <button>btn</button>
        `;
    }
}

export default PWButton