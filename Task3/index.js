import array from '../index.json' assert {type:"json"};

const pageSetUp = document.createElement("h1");
pageSetUp.className = "mydiv";

array.forEach((country) => {

    const countriesDetail = document.createElement("div");
    countriesDetail.className = "box";
    
    const cFlag = document.createElement("img");
    cFlag.src = country.flag;

    const cName = document.createElement("p");
    cName.innerText = "Name : "+ country.name;

    const cCapital = document.createElement("p");
    cCapital.innerText= "Capital : "+country.capital;
    countriesDetail.append(cFlag,cName,cCapital);
    pageSetUp.append(countriesDetail);
})
document.body.append(pageSetUp)