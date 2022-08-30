import array from '../index.json' assert {type:"json"};

const pageSetUp = document.createElement("h1");
pageSetUp.className = "mydiv";

const func = (a,b) => {
    return a+b.population;
}

var sum = array.reduce(func,0);
pageSetUp.append("Total population = "+sum);

document.body.append(pageSetUp)