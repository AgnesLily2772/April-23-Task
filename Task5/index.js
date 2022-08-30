import array from '../index.json' assert {type:"json"};

const pageSetUp = document.createElement("div");
pageSetUp.className = "mydiv";

let countryName = array.filter((i)=>i.currencies[0].code ==='USD');

countryName.forEach(element => {
    const countriesDetail = document.createElement("div");
    countriesDetail.className = "box";

    const cName = document.createElement("p");
    cName.innerText = element.name;

    const cPopulation = document.createElement("p");
    cPopulation.innerText = "Population : "+element.population;

    const cCurrency = document.createElement("p");
    cCurrency.innerText = "Currency : " +element.currencies[0].code;

    countriesDetail.append(cName,cPopulation,cCurrency);
    pageSetUp.append(countriesDetail);
})

document.body.append(pageSetUp);
