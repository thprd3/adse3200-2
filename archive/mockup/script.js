/* ----------- Vis 1: Timeline ------------- */

// generere by name, adde listeners by name

const selectedYearEl = document.getElementById("selectedYear");
const timelineEl = document.getElementById("timeline");

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