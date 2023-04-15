const ASSETS = import.meta.url.substring(0, import.meta.url.lastIndexOf("/") + 1).concat("icons/");
const template = document.createElement("template");
template.innerHTML = /*html*/`
<style>
button {
    position: absolute;
    right: 10px;
    height: 28px;
    width: 28px;
    border: none;
    cursor: pointer;   
    z-index: 2;
    transition: right .2s ease;
}

@keyframes pulse {
    from { transform: scale(1); } 
    to { transform: scale(1.09); } 
}

@media(max-width: 768px){
    button {
        display: none;
    }
}
</style>
<button>
</button>
`

export class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    btn = this.getAttribute("data-btn");
    connectedCallback() {
        this.codeBlock = this.nextElementSibling;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.button = this.shadowRoot.querySelector("button");
        if (this.btn === "codepen") {
            this.button.style.background = "url(".concat(ASSETS, "codepen.svg", ")")
            this.button.style.top = "10px"
            this.button.style.right = "55px"
            this.button.title = "Ver en Codepen"
        } else if (this.btn === "compiler") {
            console.log("compiler")
        } else if (this.btn === "top"){
            this.button.style.position = 'fixed'
            this.button.style.background = "url(".concat(ASSETS, "top.svg", ")")
            this.button.style.backgroundColor = "#222";
            this.button.style.bottom = "40px";
            this.button.style.right = "-140px";
            this.button.style.backgroundRepeat = "no-repeat";
            this.button.style.backgroundPosition = "center"
            this.button.style.padding = "25px";
            this.button.style.borderRadius = "30px";
            this.button.style.animation = "pulse .9s ease infinite alternate"
            // handleOnScroll 
            window.addEventListener('scroll', () => {
            if(window.scrollY > 500){
              this.button.style.right = 40 + "px";
            } else {
              this.button.style.right = "-140px";
            }
        })
        } 
        else {
            this.button.style.top = "10px"
            this.button.style.background = "url(".concat(ASSETS, "clone-regular.svg", ")")
            this.button.title = "Copiar"
        }
        // handleOnclick
        this.button.addEventListener("click", () => {
            if (this.btn === "codepen") {

                const lang = this.parentNode.parentNode.classList[0].split("-");

                this.createPen(lang[1], this.parentNode.firstElementChild.textContent);
            } else if (this.btn === "compiler") {
              console.log("compiler")
            } else if(this.btn === "top") {
                window.scrollTo({top: 0, behavior: 'smooth'})
            }
            else {
                this.copyClipboard(this.parentNode.firstElementChild.textContent);
                this.button.style.background = "url(".concat(ASSETS, "clone-solid.svg", ")")
                setTimeout(() => {
                    this.button.style.background = "url(".concat(ASSETS, "clone-regular.svg", ")")
                }, 1000)
            }
        })

    }
    createPen(lang, content) {
        const form = document.createElement("form");
        form.action = "https://codepen.io/pen/define",
            form.method = "POST",
            form.target = "_blank",
            form.style.position = "absolute",
            form.style.left = "-9999px";
        const input = document.createElement("input");
        input.type = "hidden",
            input.name = "data",
            input.value = JSON.stringify({ title: document.title, [lang]: content.trim() }),
            form.insertAdjacentElement("afterbegin", input),
            this.shadowRoot.appendChild(form);
        form.submit();
        this.shadowRoot.removeChild(form);
    }
    copyClipboard(content) {
        if (typeof content != "string") {
            throw TypeError("El argumento debe ser un String");
        }
        const areaText = document.createElement("textarea");
        areaText.value = content.trim();
        areaText.setAttribute("readonly", "");
        areaText.style.position = "absolute";
        areaText.style.left = "-9999px";
        this.shadowRoot.appendChild(areaText);
        const selection = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;

        areaText.select();
        document.execCommand("copy");
        this.shadowRoot.removeChild(areaText);

        if (selection) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selection);
        }
    }
}