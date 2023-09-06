// child-form.js
import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('pw-form')
class ChildForm extends LitElement {
    @property({ type: String })
    username = '';

    @property({ type: String })
    password = '';

    override render() {
        return html`
        <form @submit=${this.onSubmit}>
            <label for="username">Username:</label>
            <input
            type="text"
            id="username"
            name="username"
            value=${this.username}
            @input=${(e: InputEvent) => (this.username = (e.target as HTMLInputElement).value)}
            />

            <label for="password">Password:</label>
            <input
            type="password"
            id="password"
            name="password"
            value=${this.password}
            @input=${(e: InputEvent) => (this.password = (e.target as HTMLInputElement).value)}
            />

            <button type="submit">Submit</button>
        </form>
        `;
    }

    onSubmit(e: Event) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const formDataObject: Record<string, any> = {};
        formData.forEach((value, key) => {
        formDataObject[key] = value;
        });

        // Handle the form data as needed (e.g., send it to a server, update parent component, etc.).
        alert(`Username is ${this.username} & Password is ${this.password} `)
    }
}

export default ChildForm