$.ready {
    next();
}

const main = document.getElementById("prime");

/* ----------- Class and Objects ----------- */
yearArray = [
    y2010 = {
      "Navn": 2010,
      "PiOslo": 69.7,
      "PiNorge": 74.6,
      "KvmPris": "35,100 kr",
      "Inntekt": "500,700 kr",
      "EndringPiOslo": "100.00%",
      "EndringPiNorge": "100.00%",
      "DiffPi": "0.00%",
      "EndringInntekt": "100.00%",
      "EndringKvmPris": "100.00%"
    },
    y2011 = {
      "Navn": 2011,
      "PiOslo": 77.3,
      "PiNorge": 80.9,
      "KvmPris": "38,480 kr",
      "Inntekt": "518,400 kr",
      "EndringPiOslo": "110.90%",
      "EndringPiNorge": "108.45%",
      "DiffPi": "2.46%",
      "EndringInntekt": "103.54%",
      "EndringKvmPris": "109.63%"
    },
    y2012 = {
      "Navn": 2012,
      "PiOslo": 82.7,
      "PiNorge": 86,
      "KvmPris": "41,017 kr",
      "Inntekt": "533,200 kr",
      "EndringPiOslo": "118.65%",
      "EndringPiNorge": "115.28%",
      "DiffPi": "3.37%",
      "EndringInntekt": "106.49%",
      "EndringKvmPris": "116.86%"
    },
    y2013 = {
      "Navn": 2013,
      "PiOslo": 89.2,
      "PiNorge": 91.4,
      "KvmPris": "41,948 kr",
      "Inntekt": "543,500 kr",
      "EndringPiOslo": "127.98%",
      "EndringPiNorge": "122.52%",
      "DiffPi": "5.46%",
      "EndringInntekt": "108.55%",
      "EndringKvmPris": "119.51%"
    },
    y2014 = {
      "Navn": 2014,
      "PiOslo": 87,
      "PiNorge": 91.7,
      "KvmPris": "42,606 kr",
      "Inntekt": "548,600 kr",
      "EndringPiOslo": "124.82%",
      "EndringPiNorge": "122.92%",
      "DiffPi": "1.90%",
      "EndringInntekt": "109.57%",
      "EndringKvmPris": "121.38%"
    },
    y2015 = {
      "Navn": 2015,
      "PiOslo": 97.4,
      "PiNorge": 98.3,
      "KvmPris": "46,753 kr",
      "Inntekt": "551,000 kr",
      "EndringPiOslo": "139.74%",
      "EndringPiNorge": "131.77%",
      "DiffPi": "7.97%",
      "EndringInntekt": "110.05%",
      "EndringKvmPris": "133.20%"
    },
    y2016 = {
      "Navn": 2016,
      "PiOslo": 106.5,
      "PiNorge": 102.8,
      "KvmPris": "51,941 kr",
      "Inntekt": "538,900 kr",
      "EndringPiOslo": "152.80%",
      "EndringPiNorge": "137.80%",
      "DiffPi": "15.00%",
      "EndringInntekt": "107.63%",
      "EndringKvmPris": "147.98%"
    },
    y2017 = {
      "Navn": 2017,
      "PiOslo": 128.9,
      "PiNorge": 113.2,
      "KvmPris": "57,525 kr",
      "Inntekt": "542,400 kr",
      "EndringPiOslo": "184.94%",
      "EndringPiNorge": "151.74%",
      "DiffPi": "33.19%",
      "EndringInntekt": "108.33%",
      "EndringKvmPris": "163.89%"
    },
    y2018 = {
      "Navn": 2018,
      "PiOslo": 122.6,
      "PiNorge": 112,
      "KvmPris": "58,761 kr",
      "Inntekt": "542,600 kr",
      "EndringPiOslo": "175.90%",
      "EndringPiNorge": "150.13%",
      "DiffPi": "25.76%",
      "EndringInntekt": "108.37%",
      "EndringKvmPris": "167.41%"
    },
    y2019 = {
      "Navn": 2019,
      "PiOslo": 128.3,
      "PiNorge": 115.4,
      "KvmPris": "61,729 kr",
      "Inntekt": "547,200 kr",
      "EndringPiOslo": "184.07%",
      "EndringPiNorge": "154.69%",
      "DiffPi": "29.38%",
      "EndringInntekt": "109.29%",
      "EndringKvmPris": "175.87%"
    },
    y2020 = {
      "Navn": 2020,
      "PiOslo": 132.2,
      "PiNorge": 117.6,
      "KvmPris": "60,603 kr",
      "Inntekt": "546,700 kr",
      "EndringPiOslo": "189.67%",
      "EndringPiNorge": "157.64%",
      "DiffPi": "32.03%",
      "EndringInntekt": "109.19%",
      "EndringKvmPris": "172.66%"
    }
]

function next() {
    main.innerHTML=
    '<div class="el prev" onclick="next4()">'+
        '<i class="material-icons" style="font-size:62px">forward</i>'+
    '</div>'+
    '<div class="super" id="intro">'+
        '<div class="el title">'+
            '<p>ADSE3200 eksamen H2022</p>'+
        '</div>'+
        '<div id ="introMain">'+
            '<p class="sub"> Boligpriser i Oslo 2010-2020</p>'+
            '<p class="sub"> Av kandidat xxyy</p>'+
            '<div class="el">'+
                '<p>Mellom 2010 og 2020 så boligprisene i Oslo en enorm vekst.</p>'+
                '<p>Hva betyr det for byens innbyggere?</p>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="el next" onclick="next1()">'+
        '<i class="material-icons" style="font-size:62px">forward</i>'+
    '</div>'
;}

/* ----- relative ----- */

function next1() {
    main.innerHTML=
    '<div class="el prev" onclick="next()">'+
        '<i class="material-icons" style="font-size:62px">forward</i>'+
    '</div>'+
    '<div class="super" id="relative">'+
        '<div id="relativeWrapper">'+
            '<div class="el title">Boligprisene drar fra lønnsveksten</div>'+
            '<div class= "el" id="relativeMain">'+
            '<p id="relativeYear" class="el">Trykk på knappen for å se utviklingen.</p>'+
                '<div class= "el" id="relativeLeft">'+
                    '<div class= "el" id="rl1"><img src="personico.png" width="300px" height="300px"></div>'+
                    '<div class= "el" id="rl2"></div>'+
                '</div>'+
                '<div class= "el" id="relativeRight">'+
                    '<div class= "el" id="rr1"><img src="house.png" width="300px" height="300px"></div>'+
                    '<div class= "el" id="rr2"></div>'+
                '</div>'+
                '<button class="el" onclick="relative()">Click me</button>'+
            '</div>'+
        '</div>'+
        '<div class="el next" onclick="next2()">'+
            '<i class="material-icons" style="font-size:62px">forward</i>'+
        '</div>'+
    '</div>'
;}

function relative() {
    const guyGrowth = [1, 1.0354, 1.0649, 1.0855, 1.0957, 1.1005, 1.0763, 
    1.0833, 1.0837, 1.0929, 1.0919];
    const houseGrowth = [1, 1.0963, 1.1686, 1.1951, 1.2138, 1.3320,
    1.4798, 1.6389, 1.6741, 1.7587, 1.7266];
    const upperLeft = document.getElementById("rl1");
    const lowerLeft = document.getElementById("rl2");
    const upperRight = document.getElementById("rr1");
    const lowerRight = document.getElementById("rr2");
    const relativeYear = document.getElementById("relativeYear");
    for(i = 0; i < yearArray.length; i++){
        (function(i){
            setTimeout(function(){
                wideGuy = 200+(100 * guyGrowth[i]);
                wideHouse = 200+(100 * houseGrowth[i]);
                upperLeft.innerHTML = "<img src='personico.png' width = '"+wideGuy+"' height = '"+wideGuy+"'>";
                upperRight.innerHTML = "<img src='house.png' width = '"+wideHouse+"' height = '"+wideHouse+"'>";
                lowerLeft.innerHTML = "Medianinntekt: " +yearArray[i].Inntekt + "<br><span class='green'>Endring: +"+yearArray[i].EndringInntekt+"</span>";
                lowerRight.innerHTML = "Kvadratmeterpris i Oslo: "+yearArray[i].KvmPris + "<br><span class='red'>Endring: +"+yearArray[i].EndringKvmPris+"</span>";
                relativeYear.innerHTML = yearArray[i].Navn;
            }, 1000 * i);
        }(i));
    }
}

/* ----------- Vis 2: Timeline ------------- */

function next2() {
    main.innerHTML=
    '<div class="el prev" onclick="next1()">'+
        '<i class="material-icons" style="font-size:62px">forward</i>'+
    '</div>'+
    '<div class="super" id="timeline">'+

        '<div id="timelineWrapper">'+
            '<div class="el title">Boligprisvekst Oslo 2010-2020</div>'+
            '<div id="timelineMain">'+
                '<div id="selectedYear"><span id="defaultText">Trykk på tidslinjen nederst for mer detaljert informasjon</span></div>'+
                '<div id="change"></div>'+
            '</div>'+
            '<div id="graphWrapper">'+
                '<canvas id= "timelineGraph" width="3" height="1"></canvas>'+
                '<div class="el vis" id="timelineVis"></div>'+
            '</div>'+

        '</div>'+
    '</div>'+
    '<div class="el next" onclick="next3()">'+
        '<i class="material-icons" style="font-size:62px">forward</i>'+
    '</div>'
    ;

    constructSpans();
    constructListeners();

    const labels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
    const data = {
        labels: labels,
        datasets: [
            {
              label: 'Endring prisindeks Oslo',
              data: [100, 110.9, 118.65, 127.98, 124.82, 139.74,
            152.8, 184.94, 175.9, 184.07, 189.67],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            },
            {
              label: 'Endring prisindeks Norge',
              data: [100, 108.45, 115.28, 122.52, 122.92, 131.77,
            137.8, 151.74, 150.13, 154.69, 157.64],
              fill: false,
              borderColor: 'rgb(20, 120, 33)',
              tension: 0.1
            },
            {
              label: 'Endring medianinntekt',
              data: [100, 103.54, 106.49, 108.55, 109.57, 110.05,
            107.63, 108.33, 108.37, 109.29, 109.19],
              fill: false,
              borderColor: 'rgb(60, 10, 43)',
              tension: 0.1
            }
          ]
      };

    const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                x:{
                    display: false //this will remove only the label
                }
            }
        }
    };

    var ctx = document.getElementById('timelineGraph').getContext('2d');
    ctx.canvas.parentNode.style.width = "800px";

    const myChart = new Chart(ctx,
        //document.getElementById("timelineGraph"),
        config
    );
}

function constructSpans() {
    const timelineEl = document.getElementById("timelineVis");

    for (let i = 0; i < yearArray.length; i++){
        timelineEl.innerHTML+="<span id='"+yearArray[i].Navn+"'class='yearSpan'>"+yearArray[i].Navn+"</span>";
    }
}

function constructListeners(){
    for (let i = 0; i < yearArray.length; i++){
        document.getElementById(yearArray[i].Navn).addEventListener("click", function(){ selectYear(yearArray[i])})
    }
}

function selectYear(year){
    const selectedYearEl = document.getElementById("selectedYear");
    selectedYearEl.innerHTML="<span id='yellowYear' class ='bigYear'>" + year.Navn + "</span><br>Prisindeks Oslo: " + 
    year.PiOslo + "<br>Kvadratmeterpris: "+year.KvmPris+"<br>Medianinntekt: "+year.Inntekt;
    document.getElementById("change").innerHTML="<span class= 'bigYear'>Endring siden 2010</span><br><span class='red'>+" + 
    year.EndringPiOslo + "</span><br><span class='red'>+" + year.EndringKvmPris+"</span><br>"+
    "<span class=green>+"+year.EndringInntekt+"</span>";
}

function chart() {

}

/* ---------- nurse ------- */

function next3() {
    const f = 'oninput="this.nextElementSibling.value = this.value+'%'">';
    main.innerHTML=
    '<div class="el prev" onclick="next2()">'+
        '<i class="material-icons" style="font-size:62px">forward</i>'+
    '</div>'+
    '<div class="super" id="nurse">'+
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
    '</div>'+
    '<div class="el next" onclick="next4()">'+
        '<i class="material-icons" style="font-size:62px">forward</i>'+
    '</div>';
}

const n2020 = 1.3;
let guess;
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

/* ---------- Outro ---------*/

function next4() {
    main.innerHTML=
    '<div class="el prev" onclick="next3()">'+
       '<i class="material-icons" style="font-size:62px">forward</i>'+
    '</div>'+
    '<div class="super" id="outro">'+
        '<div class="el title">'+
            '<p>Avslutning</p>'+
        '</div>'+
        '<div id ="outroMain">'+
            '<p class="sub"> Utvalgt statistikk 1:</p>'+ 
            '<p class="sub"> Utvalgt statistikk 2:</p>'+
            '<br><br><p id="outroBottom">Poignant avsluning. </p>'+
        '</div>'+
    '</div>'+
    '<div class="el next" onclick="next()">'+
        '<i class="material-icons" style="font-size:62px">forward</i>'+
    '</div>'
;}