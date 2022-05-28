const labels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
const data = {
  labels: labels,
  datasets: [
      {
        label: 'Boligprisindeks Oslo',
        data: [65, 59, 80, 81, 56, 55, 40, 8, 9, 10],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Boligprisindeks Norge',
        data: [1,2,3,4,5,6,7,8,9,10],
        fill: false,
        borderColor: 'rgb(20, 120, 33)',
        tension: 0.1
      },
      {
        label: 'Kvadratmeterpris',
        data: [11,22,33,44,55,60,78,89,90,103],
        fill: false,
        borderColor: 'rgb(30, 80, 0)',
        tension: 0.1
      },
      {
        label: 'Medianinntekt',
        data: [1,2,3,4,55,6,7,8,9,10],
        fill: false,
        borderColor: 'rgb(60, 10, 43)',
        tension: 0.1
      }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById("graph"),
    config
);