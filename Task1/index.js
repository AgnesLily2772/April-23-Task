import countriesInfo from '../index.json' assert{type:"json"};

const pageSetUp = document.createElement("div");
pageSetUp.className = "mydiv";

let countryName = countriesInfo.filter((i)=>i.region == "Asia");
countryName.forEach(element => {
    const countriesDetail = document.createElement("div");
    countriesDetail.className = "box";

    const cName = document.createElement("p");
    cName.innerText ="Name : "+ element.name;

    const cRegion = document.createElement("p");
    cRegion.innerText = "Region : "+element.region;

    countriesDetail.append(cName,cRegion);
    pageSetUp.append(countriesDetail);
});
document.body.append(pageSetUp)
