import array from '../index.json' assert {type:"json"};

const pageSetUp = document.createElement("div");
pageSetUp.className = "mydiv";

let countryName = array.filter((i)=>i.population < 200000);

countryName.forEach(element => {
  
    const countriesDetail = document.createElement("div");
    countriesDetail.className = "box";

    const cName = document.createElement("p");
    cName.innerText = element.name;

    const cPopulation = document.createElement("p");
    cPopulation.innerText = element.population;

    countriesDetail.append(cName,cPopulation);
    pageSetUp.append(countriesDetail);
});
document.body.append(pageSetUp)