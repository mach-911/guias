import { CustomButton } from "../components/CustomButton.js"


customElements.define('enidev-button', CustomButton);

const codeBlocks = document.querySelectorAll("pre>code[class*='language']");

const template = document.createElement("template");
template.innerHTML = /*html*/ `
<enidev-button></enidev-button>
`

console.log("Estamos activado")
// const BtnCopy = document.createElement("enidev-button");
// const btnCodepen = document.createElement("enidev-button");

codeBlocks.forEach(el => {
	el.appendChild(template.content.cloneNode(true));
})
