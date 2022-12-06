class AppBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 20px;
                box-sizing: border-box;
                background-color: cornflowerblue;
                color: white;
                border: 5px;
                border-color: black;
            }

            :host {
                display: block;
                width: 100%;
                background-color: #eaeaea;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
            }

            h2 {
                text-align: center;
            }
        </style>
        <h2>Movie Finder</h2>`;
    }
}

customElements.define("app-bar", AppBar);