import { CustomButton } from "../components/CustomButton.js"


customElements.define('enidev-button', CustomButton);

const codeBlocks = document.querySelectorAll("div.highlight");

const template = document.createElement("template");
template.innerHTML = /*html*/ `
<enidev-button></enidev-button>
`

// const BtnCopy = document.createElement("enidev-button");
// const btnCodepen = document.createElement("enidev-button");

codeBlocks.forEach(el => {
	el.appendChild(template.content.cloneNode(true));
})
