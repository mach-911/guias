import { CustomButton } from "../components/CustomButton.js"


customElements.define('enidev-button', CustomButton);

const codeBlocks = document.querySelectorAll("pre>code[class*='language']");

const template = document.createElement("template");
template.innerHTML = /*html*/ `
<enidev-button></enidev-button>
`

console.log("Estamos activado")

codeBlocks.forEach(el => {
	el.parentElement.appendChild(template.content.cloneNode(true));
})
