const labels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
const data = {
  labels: labels,
  datasets: [{
    label: 'Dette er label i datasets',
    data: [65, 59, 80, 81, 56, 55, 40, 8, 9, 10],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new chart(
    document.getElementById("graph"),
    config
);