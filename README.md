# lit-lazy

`lit-lazy` is a lazy-loading web components library built using the [Lit](https://lit.dev) framework. It dynamically loads web components when they are inserted into the DOM, enhancing performance by only loading components as needed.

## Getting Started

### Installation

To install `lit-lazy`, simply clone this repository or download it as a zip file and extract it into your project directory.

### Usage

Here's how you can use `lit-lazy` to lazy load custom web components in your project.

1. Add the components you want to lazy-load as custom elements in your HTML.
2. The components will automatically load when they are inserted into the DOM.

### Example

In your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        let toAdd = true
        window.addEventListener('DOMContentLoaded', ()=>{
            const btn = document.querySelector('#btn');
            btn.addEventListener('click', ()=>{
                if(toAdd){
                    const el = document.createElement('pw-form');
                    document.body.appendChild(el);
                }else{
                    const el = document.querySelector('pw-form');
                    document.body.removeChild(el);
                }
                toAdd = !toAdd
            })
        })
    </script>
</head>
<body>
    <h1>Mutation</h1>
    <button id="btn">Click to add/remove custom element</button>
    <pw-button></pw-button>
    <script src="./index.js"></script>
</body>
</html>
```

```javascript
const observer = new MutationObserver((mutations) => {
  for (const { addedNodes } of mutations) {
    for (const node of addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        discover(node);
      }
    }
  }
});

/**
 * Checks a node for undefined elements and attempts to register them.
 */
async function discover(root) {
  const rootTagName = root instanceof Element ? root.tagName.toLowerCase() : "";
  const rootIsCustomElement = rootTagName?.includes("-");
  const tags = [...root.querySelectorAll(":not(:defined)")]
    .map((el) => el.tagName.toLowerCase())
    .filter((tag) => tag.startsWith("pw-"));

  // If the root element is an undefined custom element, add it to the list
  if (rootIsCustomElement && !customElements.get(rootTagName)) {
    tags.push(rootTagName);
  }

  // Make the list unique
  const tagsToRegister = [...new Set(tags)];

  await Promise.allSettled(tagsToRegister.map((tagName) => register(tagName)));
}

/**
 * Registers an element by tag name.
 */
function register(tagName) {
  const tagWithoutPrefix = tagName.replace(/^pw-/i, "");

  // If the element is already defined, there's nothing more to do
  if (customElements.get(tagName)) {
    return Promise.resolve();
  }

  // Register it
  return new Promise((resolve, reject) => {
    import("../dist/" + tagWithoutPrefix + ".bundle.js");
    import("../dist/shared.bundle")
      .then(() => {
        resolve();
        console.log("Custom Element added successfully")
      })
      .catch(() =>
        reject(new Error(`Unable to autoload <${tagName}> from ${path}`))
      );
  });
}

// Initial discovery
discover(document.body);

// Listen for new undefined elements
observer.observe(document.documentElement, { subtree: true, childList: true });
```


### How it works

1. Observer Setup: A MutationObserver is used to watch for changes in the DOM, specifically looking for new nodes that are added.
2. Discover Function: Whenever new nodes are added, the discover function checks if the node is a custom element that hasn’t been defined yet. If it is, it adds the element to a list of tags to register.
3. Dynamic Registration: The register function dynamically imports the component bundles (.bundle.js files) corresponding to the tag name and registers the custom element if it hasn’t been registered yet.
4. Lazy Loading: Components are only loaded when they are added to the DOM, improving the performance by not loading unnecessary resources upfront.
