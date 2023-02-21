class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEventName(event) {
        this._clickEventName = event;
        this.render();
    }
    set clickEventAfrica(event) {
        this._clickEventAfrica = event;
        this.render();
    }
    set clickEventAmericas(event) {
        this._clickEventAmericas = event;
        this.render();
    }
    set clickEventAsia(event) {
        this._clickEventAsia = event;
        this.render();
    }
    set clickEventEurope(event) {
        this._clickEventEurope = event;
        this.render();
    }
    set clickEventOceania(event) {
        this._clickEventOceania = event;
        this.render();
    }

    get valueName() {
        return this.querySelector("#searchByName").value;
    }

    render() {
        this.innerHTML = `
            <section>
                <div class="search-by-region">
                    <p>Search by Region</p>
                    <div class="search-container">
                        <button id="searchAfrica" type="submit" class="button">Africa</button>
                        <button id="searchAmericas" type="submit" class="button">Americas</button>
                        <button id="searchAsia" type="submit" class="button">Asia</button>
                        <button id="searchEurope" type="submit" class="button">Europe</button>
                        <button id="searchOceania" type="submit" class="button">Oceania</button>
                    </div>
                </div>
                <div class="search-by-name">
                    <p>Search by Name</p>
                    <div id="search-container" class="search-container">
                        <input placeholder="Search Country" id="searchByName" type="search">
                        <button id="searchButtonElement" type="submit" class="fa fa-search button"></button>
                    </div>
                </div>
                
            </section>
        `;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEventName);
        this.querySelector("#searchAfrica").addEventListener("click", this._clickEventAfrica);
        this.querySelector("#searchAmericas").addEventListener("click", this._clickEventAmericas);
        this.querySelector("#searchAsia").addEventListener("click", this._clickEventAsia);
        this.querySelector("#searchEurope").addEventListener("click", this._clickEventEurope);
        this.querySelector("#searchOceania").addEventListener("click", this._clickEventOceania);
    }
}

customElements.define("search-bar", SearchBar);