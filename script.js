/* ----------- Vis 1: Timeline ------------- */

const selectedYearEl = document.getElementById("selectedYear");
const timelineEl = document.getElementById("timelineVis");

class yearObj {
    constructor(name, avgPrice, sqmPrice, percentAvg, percentSqm) {
        this.name = name;
        this.avgPrice = avgPrice;
        this.sqmPrice = sqmPrice;
        percentAvg = 4000000 / avgPrice;
        percentSqm = 72206 / sqmPrice;
    }
}

let y2010 = new yearObj ("2010", 4000000, 72206);
let y2011 = new yearObj ("2011", 4000000, 72206);
let y2012 = new yearObj ("2012", 4000000, 72206);
let y2013 = new yearObj ("2013", 4000000, 72206);
let y2014 = new yearObj ("2014", 4000000, 72206);
let y2015 = new yearObj ("2015", 4500000, 80506);
let y2016 = new yearObj ("2016", 4500000, 80506);
let y2017 = new yearObj ("2017", 4500000, 80506);
let y2018 = new yearObj ("2018", 4500000, 80506);
let y2019 = new yearObj ("2019", 5000000, 87706);
let y2020 = new yearObj ("2020", 5000000, 87706);

const yearArray = [];
yearArray.push(y2010,y2011,y2012,y2013,y2014,y2015,y2016,y2017,y2018,y2019,y2020);

// adds spans for each year to modify with css. Animations should be CSS only
// Just use js to change content
function constructSpans() {
    for (let i = 0; i < yearArray.length; i++){
        timelineEl.innerHTML+="<span id='"+yearArray[i].name+"'class='yearSpan'>"+yearArray[i].name+"</span>";
    }
}

constructSpans();

function constructListeners(){
    for (let i = 0; i < yearArray.length; i++){
        document.getElementById(yearArray[i].name).addEventListener("click", function(){ selectYear(yearArray[i])})
    }
}

constructListeners();

function selectYear(yo){
    selectedYearEl.innerHTML="<br><br>År: " + yo.name + "<br>Gj.snittlig boligpris: " + yo.avgPrice + "<br>Kvadratmeterpris: "+yo.sqmPrice+"<br><br>";
}

selectYear(y2010);

/* ---------- nurse ------- */
let nurseInputEl = document.getElementById("nurseInput");
let nurseOutputEl = document.getElementById("nurseOutput");
let div = document.getElementById("nurseVis2");

const n2020 = 1.3;

function nurseGuess () {
    let guess = nurseInputEl.value; //math floor, parse
    // if < / > / =
    let outputString = "<p>Du gjettet "+ guess + "%.";
    nurseOutputEl.innerHTML = outputString;
    generateGrid(guess);
}

function generateGrid(guess) {
    // create div nurseVis2, append to nurseWrapper 
    let output = "<table><tr>";
    let trCount = 0;
    let max = 100;
    let remainder = max - guess;
    let male = false;
    
    let nursehouseStringMale = "<td><img src = 'nursehouseM.png' alt = 'nurseHouseM'></td>";
    let nursehouseStringFemale = "<td><img src = 'nursehouseF.png' alt = 'nurseHouseF'></td>";
    let houseString = "<td><img src = 'house.png' alt = 'house'></td>";

    for (let i = 0; i < guess; i++) {
        if (male === true) {
            output+= nursehouseStringMale;
            male = false;
            trCount++;
        }
        else {
            output+= nursehouseStringFemale;
            male = true;
            trCount++;
        }
        if (trCount == 10){
            output+= "</tr><tr>"
            trCount = 0;
        }
    }

    for (let i = 0; i < remainder; i++){
        output+= houseString;
        trCount ++; 
        if (trCount == 10){
            output+= "</tr><tr>"
            trCount = 0;
            console.log("trCount is reset, is now " + trCount)
        }
    }

    output+= "</table>";

    div.innerHTML = output;

    div.innerHTML += "<button onclick='nurseTruth()'>Se svaret</button>";

    document.getElementById("nurseVis").remove();



    // append button click to continue
}

function nurseTruth () {
    //on click to continue
    let guess = nurseInputEl.value; //math floor, parse

    nurseOutputEl.innerHTML += "<p>I 2020 kunne kunne en gjennomsnittlig sykepleier kjøpe " + n2020 + "% av boligene i Oslo. Du bommet med "+ (n2020 - guess) +" prosentpoeng.";
    console.log("nurseTruth, "+nurseOutputEl)

    div.innerHTML = "<p> trueTable </p>"; //let trueTable = 1.3% hus highlighted
}