class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: steelblue;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                text-align: center;
            }
            h2 {
                padding-top: 30px;
            }
            p {
                padding: 15px;
                padding-bottom: 30px;
            }
        </style>
        <h2>Country Finder</h2>
        <p>Find information about countries around the world</p>
        `;
    }
}

customElements.define("app-bar", AppBar);