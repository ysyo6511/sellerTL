// https://cube.dev/blog/chart-js-example-with-dynamic-dataset/ 
// https://www.daterangepicker.com/
// daterange 참고
// https://www.daterangepicker.com/#options/
// daterangepciker options
// https://stackoverrun.com/ko/q/11026450
// 달력참고

const START_DATE = moment().subtract(29, 'days');
const END_DATE = moment();

//달력시작
$(function() { 
$('#pcy-pf-date').daterangepicker(  
  { 
    language:'kr',
    alwaysShowCalendars: true, 
    showWeekNumbers: true, 
    changeYear:true,
    changeMonth:true,
    dateFormat:'yy-mm-dd',
    showMonthAfterYear:true,
    dayNamesMin:['일','월','화','수','목','금','토'],
    monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    ranges: { 
     '오늘': [moment(), moment()], 
     '어제': [moment().subtract(1, 'days'), moment().subtract(1, 'days')], 
     '지난7일': [moment().subtract(6, 'days'), moment()], 
     '지난30일': [moment().subtract(29, 'days'), moment()], 
     '이번달': [moment().startOf('month'), moment().endOf('month')], 
     '지난달': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')] 
    },
    locale:{
      format: 'YY.MM.DD',
      applyLabel: '적용',
      cancelLabel: '취소',
      "customRangeLabel": "사용자설정",
      "separator": " ~ ",
      "daysOfWeek": ["일","월","화","수","목","금","토"],
       "monthNames": ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
    },
    startDate: START_DATE, 
    endDate: END_DATE, 
  },
    function (start, end) { 
      drawChart(start,end);
    } 
  
   )}); 

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTQ2NjY4OTR9.0fdi5cuDZ2t3OSrPOMoc3B1_pwhnWj4ZmM3FHEX7Aus",
  { apiUrl: "https://ecom.cubecloudapp.dev/cubejs-api/v1" }
);

//차트시작
var chartJsData = function (resultSet) {
  // console.log(resultSet.chartPivot())
  return {
    datasets: [
      {
        label: "순수익데이터",
        //data에 순수익데이터 배열 넣으면됨
        data: resultSet.chartPivot().map(function (datas) {
          return datas["Orders.count"];
        }),
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor:'#000',
        hoverBorderWidth:100,
      }
    ],
    //x축 시간 
    labels: resultSet.categories().map(function (dates) {
      return dates.x;
    })
  };
};
var options = {
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          unit: 'day',
          displayFormats: {
            'day': 'M월 DD일',
          },
          tooltipFormat: 'M월 DD일'
        },
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

var drawChart = function (startDate, endDate) {
  cubejsApi
    .load({
      measures: ["Orders.count"],
      timeDimensions: [
        {
          dimension: "Orders.createdAt",
          granularity: `day`,
          dateRange: [startDate, endDate]
        }
      ]
    })
    .then((resultSet) => {
      
      var data = chartJsData(resultSet);
      if (window.chart) {
        window.chart.data = data;
        window.chart.update();
      } else {
        
        window.chart = new Chart(document.getElementById("pcy-pf-chart"), {
          type: "line",
          options: options,
          data: data
        });
      }
    });
};

drawChart(START_DATE, END_DATE);
