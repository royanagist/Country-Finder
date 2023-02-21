class DataSource {
    static searchCountryByName(keyword) {
        let endPoint= `https://restcountries.com/v3.1/name/${keyword}`;
        if(keyword==""){
            endPoint=`https://restcountries.com/v3.1/all`
        }
        return fetch(endPoint)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.status == 404) {
                return Promise.reject(`${keyword} is not found`);
                
            } else {
                return Promise.resolve(responseJson);
            }
        })
    }

    static searchCountryAfrica() {
        return fetch(`https://restcountries.com/v3.1/region/africa`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.status == 404) {
                return Promise.reject(`Region Africa is not found`);
                
            } else {
                return Promise.resolve(responseJson);
            }
        })
    }

    static searchCountryAmericas() {
        return fetch(`https://restcountries.com/v3.1/region/americas`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.status == 404) {
                return Promise.reject(`Region Americas is not found`);
                
            } else {
                return Promise.resolve(responseJson);
            }
        })
    }

    static searchCountryAsia() {
        return fetch(`https://restcountries.com/v3.1/region/asia`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.status == 404) {
                return Promise.reject(`Region Asia is not found`);
                
            } else {
                return Promise.resolve(responseJson);
            }
        })
    }

    static searchCountryEurope() {
        return fetch(`https://restcountries.com/v3.1/region/europe`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.status == 404) {
                return Promise.reject(`Region Europe is not found`);
                
            } else {
                return Promise.resolve(responseJson);
            }
        })
    }

    static searchCountryOceania() {
        return fetch(`https://restcountries.com/v3.1/region/oceania`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.status == 404) {
                return Promise.reject(`Region Oceania is not found`);
                
            } else {
                return Promise.resolve(responseJson);
            }
        })
    }
}

export default DataSource;
