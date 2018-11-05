

var chartDataBar = {
    labels: ['Movie', 'Carnival', 'Theatre', 'Comedy', 'Music', 'Meetups', 'Exhibitions', 'Workshops'],
    datasets: [
      {
        label: "Sales By Category",
        backgroundColor: ["rgba(28, 149, 237, 1)","rgba(28, 149, 237, 1)", "rgba(28, 149, 237, 1)","rgba(28, 149, 237, 1)", "rgba(28, 149, 237, 1)","rgba(28, 149, 237, 1)", "rgba(28, 149, 237, 1)", "rgba(28, 149, 237, 1)"], 
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data:[ 4750, 2300, 1800, 4600, 5800, 1850, 3150, 1350],

      }
    ]
  };

var chartOptionsBar = {
  layout: {
    padding: {
      right: '80'
    },
   },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
          gridLines: {
            display: false,
          }
      }],
      xAxes: [{
          display: true,
          position: "top",
          ticks:{
            steps: 1000,
            min: 0,
            max: 6000,
            callback: function (value, index, values) {
              var q = value / 1000;
              return q + 'k';
            }
        },
          
      }],
      
  } 

};
var chartOptionsDoughnut = {
  cutoutPercentage: 80,
  legend:{
    position:'right',
    labels:{
      fontSize: 18,
    }
  },
  layout: {
    padding: {
      top: '20',
      bottom: '100',
      right: '160',
    },
  },
};

var chartDataDoughnut = {
  
  labels: ['18 to 29 years', '30 to 49 years', '50 years and above'],
  datasets: [
    {
      label: "Sales By Demographic",
      backgroundColor: ['#4BD9A0', '#F4C036', '#FC0E6E'], 
      hoverBackgroundColor: ['#4BD9A0', '#F4C036', '#FC0E6E'],
      data:[ 192, 156, 149]
    }
  ]
};

var chartDataDoughnutGender = {
  labels: ['Male', 'Female', 'Indifferent'],
  datasets: [
    {
      label: "Sales By Gender",
      backgroundColor: ['#4BD9A0','#F4C036','#FC0E6E'], 
      hoverBackgroundColor: ['#4BD9A0', '#F4C036', '#FC0E6E'],
      data:[55, 40, 5]
    }
  ]
};

  export {chartDataBar, chartOptionsBar, chartDataDoughnut, chartDataDoughnutGender, chartOptionsDoughnut};
