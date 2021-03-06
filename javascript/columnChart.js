var columnChartData =  {
    labels: ['Food' & 'Water'],
    color: "rgba(255, 255, 255, 1)",
    datasets: [
        {
            label: 'label',
            backgroundColor: ['#3366ff', '#92d400'],
            data: [58, 0, 100]
        }
    ]
};

var columnChartOptions = {
    legend: {display: false},
    scales: {
        yAxes: [{
            gridLines: {
                color: "rgba(255, 255, 255, 1)",
            }
        }]
    }
};

var columnChartWrapper = document.getElementById('columnChartWrapper');
var columnChart = new Chart(columnChartWrapper, {
  type: 'bar',
  data: columnChartData,
  options: columnChartOptions
});
