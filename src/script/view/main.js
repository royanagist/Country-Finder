import '../component/country-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    console.log(searchElement);
    const countryListElement = document.querySelector("country-list");

    const renderResult =  results => {
        countryListElement.countries = results;
    };

    const fallbackResult = message => {
        countryListElement.renderError(message);
    };

    const onButtonSearchNameClicked = async () => {
        try{
            const result = await DataSource.searchCountryByName(searchElement.valueName);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };
    
    const onButtonAfricaClicked = async () => {
        try{
            const result = await DataSource.searchCountryAfrica();
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };
    
    const onButtonAmericasClicked = async () => {
        try{
            const result = await DataSource.searchCountryAmericas();
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };
    
    const onButtonAsiaClicked = async () => {
        try{
            const result = await DataSource.searchCountryAsia();
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };
    
    const onButtonEuropeClicked = async () => {
        try{
            const result = await DataSource.searchCountryEurope();
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };
    
    const onButtonOceaniaClicked = async () => {
        try{
            const result = await DataSource.searchCountryOceania();
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    

    searchElement.clickEventName = onButtonSearchNameClicked;
    searchElement.clickEventAfrica = onButtonAfricaClicked;
    searchElement.clickEventAmericas = onButtonAmericasClicked;
    searchElement.clickEventAsia = onButtonAsiaClicked;
    searchElement.clickEventEurope = onButtonEuropeClicked;
    searchElement.clickEventOceania = onButtonOceaniaClicked;
};

export default main;