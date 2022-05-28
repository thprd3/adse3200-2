const main = document.getElementById("prime");
let guess;

function next() {
    main.innerHTML=
    '<div class="super" id="intro">'+
        '<div class="el prev" onclick="next1()">'+
            '<i class="material-icons" style="font-size:62px">forward</i>'+
        '</div>'+
        '<div class="el title">'+
            '<p>ADSE3200 eksamen H2022</p>'+
        '</div>'+
        '<div class="main">'+
            '<p class="sub"> Bolipriser i Oslo 2010-2020</p>'+
            '<p class="sub"> Av kandidat xxyy</p>'+
        '</div>'+
        '<br><br><br><br>'+
        '<div class="el">'+
            '<p>Mellom 2010 og 2020 så boligprisene i Oslo en enorm vekst.</p>'+
            '<p>Hva betyr det for byens innbyggere?</p>'+
        '</div>'+
        '<div class="el next" onclick="next1()">'+
            '<i class="material-icons" style="font-size:62px">forward</i>'+
        '</div>'+
    '</div>';
}

function next1() {
    console.log("next1 achieved");
    main.innerHTML=
    '<div class="super" id="relative">'+
        '<div class="el prev" onclick="next1()">'+
            '<i class="material-icons" style="font-size:62px">forward</i>'+
        '</div>'+
        '<div id="relativeWrapper">'+
            '<div class="el title">Relation avg salary avg home size comp</div>'+
                '<div class="el vis" id="relativeVis">[I AM A HOUSE] [I AM A GUY]</div>'+
                '<div class="el">Stats</div>'+
        '</div>'+
        '<div class="el next" onclick="next2()">'+
            '<i class="material-icons" style="font-size:62px">forward</i>'+
        '</div>'+
    '</div>';
}

function next2() {
    console.log("next2 achieved");
    main.innerHTML=
    '<div class="super" id="timeline">'+
        '<div class="el prev" onclick="next1()">'+
            '<i class="material-icons" style="font-size:62px">forward</i>'+
        '</div>'+
        '<div id="timelineWrapper">'+
            '<div class="el title">Boligprisvekst Oslo 2010-2020</div>'+
            '<div class="main">'+
                '<div id="selectedYear"></div>'+
                '<div class="el vis" id="timelineVis">'+
                    '<span id="price"></span>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="el next" onclick="next3()">'+
            '<i class="material-icons" style="font-size:62px">forward</i>'+
        '</div>'+
    '</div>';
    constructSpans();
    constructListeners();
    selectYear(y2010);
}

function next3() {
    const f = 'oninput="this.nextElementSibling.value = this.value+'%'">';
    console.log("next3 achieved");
    main.innerHTML=
    '<div class="super" id="nurse">'+
    '<div class="el prev" onclick="next2()">'+
        '<i class="material-icons" style="font-size:62px">forward</i>'+
    '</div>'+
    '<div class="el title" id="nurseTitle">Sykepleierindeksen</div>'+
    '<div id="nurseWrapper">'+
        '<div class="nurse" id="nurseVis">'+
            '<div class="sliding-background"></div>'+
            '<p> I 2010 kunne en typisk sykepleier kjøpe 24.5% av alle boliger i Oslo. </p>'+
            '<p> Hva tror du indeksen var i 2020? </p>'+
            '<input type="range" id="nurseInput" value="25" min="1" max="100s"'+
            f+
            '<output>25%</output>'+
            '<button onclick="nurseGuess()">Gjett</button>'+
            '<div id ="nurseOutput"></div>'+
        '</div>'+
        '<footer class="source">Kilde: https://eiendomnorge.no/aktuelt/blogg/sykepleierindeksen-h1-2021</footer>'+
    '</div>'+
    '<div class="el next" onclick="next4()">'+
        '<i class="material-icons" style="font-size:62px">forward</i>'+
    '</div>'+
'</div>';
}

function next4() {
    main.innerHTML=
    '<div class="super" id="outro">'+
    '<div class="el prev" onclick="next3()">'+
       '<i class="material-icons" style="font-size:62px">forward</i>'+
    '</div>'+
    '<div class="el title">'+
        '<p>Avslutning</p>'+
    '</div>'+
    '<div class = "main">'+
        '<p class="sub"> Utvalgt statistikk 1:</p>'+ 
        '<p class="sub"> Utvalgt statistikk 2:</p>'+
        '<p>Poignant avsluning. </p>'+
    '</div>'+
    '<div class="el next" onclick="next()">'+
        '<i class="material-icons" style="font-size:62px">forward</i>'+
    '</div>'+
'</div>';
}

/* ----------- Vis 1: Timeline ------------- */

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
    const timelineEl = document.getElementById("timelineVis");

    for (let i = 0; i < yearArray.length; i++){
        timelineEl.innerHTML+="<span id='"+yearArray[i].name+"'class='yearSpan'>"+yearArray[i].name+"</span>";
    }
}

function constructListeners(){
    for (let i = 0; i < yearArray.length; i++){
        document.getElementById(yearArray[i].name).addEventListener("click", function(){ selectYear(yearArray[i])})
    }
}

function selectYear(yo){
    const selectedYearEl = document.getElementById("selectedYear");
    selectedYearEl.innerHTML="<br><br>År: " + yo.name + "<br>Gj.snittlig boligpris: " + yo.avgPrice + "<br>Kvadratmeterpris: "+yo.sqmPrice+"<br><br>";
}

/* ---------- nurse ------- */
const n2020 = 1.3;
let houseString = "<td><img src = 'house.png' alt = 'house'></td>";

function nurseGuess () {
    let nurseInputEl = document.getElementById("nurseInput");
    let nurseOutputEl = document.getElementById("nurseOutput");

    guess = nurseInputEl.value; //math floor, parse
    // if < / > / =
    let outputString = "<p>Du gjettet "+ guess + "%.";
    nurseOutputEl.innerHTML = outputString;
    generateGrid(guess);
    document.getElementById("nurseTitle").remove();
}

function generateGrid(guess) {
    document.getElementById("nurseVis").style.backgroundColor = "#5f4bde00";
    //set anims somehow
    let output = "<table><tr>";
    let trCount = 0;
    let max = 100;
    let remainder = max - guess;
    let male = false;
    let div = document.getElementById("nurseVis");
    
    let nursehouseStringMale = "<td class = 'nursehouse'><img src = 'nursehouseM.png' alt = 'nurseHouseM'></td>";
    let nursehouseStringFemale = "<td class= 'nursehouse'><img src = 'nursehouseF.png' alt = 'nurseHouseF'></td>";

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
        if (trCount == 20){
            output+= "</tr><tr>"
            trCount = 0;
        }
    }

    for (let i = 0; i < remainder; i++){
        output+= houseString;
        trCount ++; 
        if (trCount == 20){
            output+= "</tr><tr>"
            trCount = 0;
            console.log("trCount is reset, is now " + trCount)
        }
    }

    output+= "</table>";

    div.innerHTML = output;

    div.innerHTML += "<button onclick='nurseTruth()'>Se svaret</button>";
    div.innerHTML += "<div class='el' id='truth'></div>";

    // append button click to continue
}

function nurseTruth () {
    //on click to continue
    let nurseInputEl = document.getElementById("nurseInput");
    let nurseOutputEl = document.getElementById("truth");
    let div = document.getElementById("nurseVis");

    div.innerHTML = "";
    let trCount = 1;

    nurseOutputEl.innerHTML = "<p>I 2020 var sykepleierindeksen " + n2020 + "%. Du bommet med "+ (n2020 - guess) +" prosentpoeng.";
    nurseOutputEl.innerHTML += "<p>Hva blir den i 2030?</p>";

    let output = "<table><tr><td class = 'nursehouse'><img src = 'nursehouseF.png' alt = 'nurseHouseF'></td>";

    for (let i = 0; i < 99; i++){
        output+= houseString;
        trCount ++; 
        if (trCount == 20){
            output+= "</tr><tr>"
            trCount = 0;
            console.log("trCount is reset, is now " + trCount)
        }
    }

    output+= "</table>";

    div.innerHTML = output;
}