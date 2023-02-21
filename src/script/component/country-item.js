class CountryItem extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set country(country) {
        let nativeName = country.name.official;
        const property = country.name.nativeName
        
        if(property){
            const properties = Object.keys(property)
            properties.forEach(name=> {
            nativeName = property[name].official;
            return nativeName;
            })
        }
        
        this._country = country;
        this.nativeName = nativeName;
        this.render();
    }

    render() {
        
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin: 0 auto;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                    max-width: 600px;
                }
                
                .flag-country {
                    min-width: 600px;
                    max-width: 600px;
                    object-fit: cover;
                    object-position: center;
                }
                
                .country-info {
                    padding: 24px;
                }
                
                .country-info > h2 {
                    font-weight: lighter;
                    margin-bottom: 5px;
                }

                .country-info > h3 {
                    font-weight: lighter;
                    margin-top: 0px;
                }
                
                .country-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
                @media screen and (max-width: 650px){
                    :host{
                        max-width: 400px;
                    }
                    .flag-country {
                        min-width: 400px;
                        max-width: 400px;
                    }
                }
                @media screen and (max-width: 410px){
                    :host{
                        max-width: 300px;
                    }
                    .flag-country {
                        min-width: 300px;
                        max-width: 300px;
                    }
                }
            </style>
            <img class="flag-country" src="${this._country.flags.svg}" alt="Flag">
            <div class="country-info">
                <h2>${this._country.name.official}</h2>
                <h3><i>(${this.nativeName})</i></h3>
                <p>Area (km<sup>2</sup>): ${this._country.area.toLocaleString("en-US")}</p>
                <p>Region: ${this._country.region}</p>
                <p>Capital: ${this._country.capital}</p>
                <p>Population (2020): ${this._country.population.toLocaleString("en-US")}</p>
            </div>`;
    }
}

customElements.define("country-item", CountryItem);