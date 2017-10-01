var days = 
[Date.parse('today').toString('MMM d'),
 Date.parse('t + 1 d').toString('MMM d'),
 Date.parse('t + 2 d').toString('MMM d'),
 Date.parse('t + 3 d').toString('MMM d'),
 Date.parse('t + 4 d').toString('MMM d'),
 Date.parse('t + 5 d').toString('MMM d'),
 Date.parse('t + 6 d').toString('MMM d'),
 Date.parse('t + 7 d').toString('MMM d'),
 Date.parse('t + 8 d').toString('MMM d'),
 Date.parse('t + 9 d').toString('MMM d'),
 Date.parse('t + 10 d').toString('MMM d'),
 Date.parse('t + 11 d').toString('MMM d'),
 Date.parse('t + 12 d').toString('MMM d'),
 Date.parse('t + 13 d').toString('MMM d'),
 Date.parse('t + 14 d').toString('MMM d'),
 Date.parse('t + 15 d').toString('MMM d')]

$(document).ready(function(){
  $('html').keydown(function(eventObject){

    if (event.keyCode == 13) {

      var city = $('#city').val();

      if (city != '') {

        $('#error').html('');

        $.ajax({

          url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&units=metric&cnt=16' + '&APPID=1f4b12bf560fae6ff05c5992b63a71f9',
          type: 'GET',
          dataType: 'jsonp',
          success: function(data) {
            console.log(data);
          
            var wiget1 = show1();
            $('#current-day').html(wiget1);

            var wiget2 = show2(data);
            $('#current-forecast').html(wiget2);

            var wiget3 = show3(data);
            $('#current-forecast-details').html(wiget3);

            var wiget4 = show4(data);
            $('#chart-temp1').html(wiget4);

            var wiget5 = show5(data);
            $('#chart-temp2').html(wiget5);

            var wiget6 = show6(data);
            $('#chart-temp3').html(wiget6);

            var wiget7 = show7(data);
            $('#chart-temp4').html(wiget7);
            

            $('#city').val('');
            $('#carouselExampleIndicators').css('display', 'block');
          }

        });

      } else {
        $('#error').html('Please, write the city name and press Enter');
      }
    }
  });
});

function show1() {
  return days[0];
}

function show2(data) {

  return "<h4> " + data.city.name + ", " + data.city.country + " </h4>" +
         "<h3> " + Math.round(data.list[0].temp.day).toFixed(0) + "&deg;" + " " + "C</h3>" +
         "<p><img src=http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png>" + data.list[0].weather[0].main + "</p>";
}

function show3(data) {
  return "<p>Pressure:<span> " + data.list[0].pressure + " </span></p>" +
         "<p>Humidity:<span> " + data.list[0].humidity + " </span></p>" +
         "<p>Wind Speed:<span> " + data.list[0].speed + " m/s</span></p>" +
         "<p>Clouds:<span> " + data.list[0].clouds + "%</span></p>";
}

function show4(data) {

  var temperatures =
 [Math.round(data.list[0].temp.day),
  Math.round(data.list[1].temp.day),
  Math.round(data.list[2].temp.day),
  Math.round(data.list[3].temp.day),
  Math.round(data.list[4].temp.day),
  Math.round(data.list[5].temp.day),
  Math.round(data.list[6].temp.day),
  Math.round(data.list[7].temp.day),
  Math.round(data.list[8].temp.day),
  Math.round(data.list[9].temp.day),
  Math.round(data.list[10].temp.day),
  Math.round(data.list[11].temp.day),
  Math.round(data.list[12].temp.day),
  Math.round(data.list[13].temp.day),
  Math.round(data.list[14].temp.day),
  Math.round(data.list[15].temp.day)]

  var chart = AmCharts.makeChart( "chartdiv-temperature", {
  "type": "serial",
  "theme": "none",
  "dataProvider": [ {
    "country": days[0],
    "visits": temperatures[0]
  }, {
    "country": days[1],
    "visits": temperatures[1]
  }, {
    "country": days[2],
    "visits": temperatures[2]
  }, {
    "country": days[3],
    "visits": temperatures[3]
  }, {
    "country": days[4],
    "visits": temperatures[4]
  }, {
    "country": days[5],
    "visits": temperatures[5]
  }, {
    "country": days[6],
    "visits": temperatures[6]
  }, {
    "country": days[7],
    "visits": temperatures[7]
  }, {
    "country": days[8],
    "visits": temperatures[8]
  }, {
    "country": days[9],
    "visits": temperatures[9]
  }, {
    "country": days[10],
    "visits": temperatures[10]
  }, {
    "country": days[11],
    "visits": temperatures[11]
  }, {
    "country": days[12],
    "visits": temperatures[12]
  }, {
    "country": days[13],
    "visits": temperatures[13]
  }, {
    "country": days[14],
    "visits": temperatures[14]
  }, {
    "country": days[15],
    "visits": temperatures[15]
  } ],
  "valueAxes": [ {
    "gridColor": "#FFFFFF",
    "gridAlpha": 0.2,
    "dashLength": 0
  } ],
  "gridAboveGraphs": true,
  "startDuration": 2,
  "graphs": [ {
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "visits"
  } ],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "country",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0,
    "tickPosition": "start",
    "tickLength": 20
  },
  "export": {
    "enabled": true
  }

} );
}

function show5(data) {

  var wind =
 [Math.round(data.list[0].speed),
  Math.round(data.list[1].speed),
  Math.round(data.list[2].speed),
  Math.round(data.list[3].speed),
  Math.round(data.list[4].speed),
  Math.round(data.list[5].speed),
  Math.round(data.list[6].speed),
  Math.round(data.list[7].speed),
  Math.round(data.list[8].speed),
  Math.round(data.list[9].speed),
  Math.round(data.list[10].speed),
  Math.round(data.list[11].speed),
  Math.round(data.list[12].speed),
  Math.round(data.list[13].speed),
  Math.round(data.list[14].speed),
  Math.round(data.list[15].speed)]

  var chart = AmCharts.makeChart( "chartdiv-wind", {
  "type": "serial",
  "theme": "light",
  "dataProvider": [ {
    "country": days[0],
    "visits": wind[0]
  }, {
    "country": days[1],
    "visits": wind[1]
  }, {
    "country": days[2],
    "visits": wind[2]
  }, {
    "country": days[3],
    "visits": wind[3]
  }, {
    "country": days[4],
    "visits": wind[4]
  }, {
    "country": days[5],
    "visits": wind[5]
  }, {
    "country": days[6],
    "visits": wind[6]
  }, {
    "country": days[7],
    "visits": wind[7]
  }, {
    "country": days[8],
    "visits": wind[8]
  }, {
    "country": days[9],
    "visits": wind[9]
  }, {
    "country": days[10],
    "visits": wind[10]
  }, {
    "country": days[11],
    "visits": wind[11]
  }, {
    "country": days[12],
    "visits": wind[12]
  }, {
    "country": days[13],
    "visits": wind[13]
  }, {
    "country": days[14],
    "visits": wind[14]
  }, {
    "country": days[15],
    "visits": wind[15]
  } ],
  "valueAxes": [ {
    "gridColor": "#FFFFFF",
    "gridAlpha": 0.2,
    "dashLength": 0
  } ],
  "gridAboveGraphs": true,
  "startDuration": 1,
  "graphs": [ {
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "visits"
  } ],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "country",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0,
    "tickPosition": "start",
    "tickLength": 20
  },
  "export": {
    "enabled": true
  }

} );
}

function show6(data) {

  var pressure =
 [Math.round(data.list[0].pressure),
  Math.round(data.list[1].pressure),
  Math.round(data.list[2].pressure),
  Math.round(data.list[3].pressure),
  Math.round(data.list[4].pressure),
  Math.round(data.list[5].pressure),
  Math.round(data.list[6].pressure),
  Math.round(data.list[7].pressure),
  Math.round(data.list[8].pressure),
  Math.round(data.list[9].pressure),
  Math.round(data.list[10].pressure),
  Math.round(data.list[11].pressure),
  Math.round(data.list[12].pressure),
  Math.round(data.list[13].pressure),
  Math.round(data.list[14].pressure),
  Math.round(data.list[15].pressure)]

  var chart = AmCharts.makeChart( "chartdiv-pressure", {
  "type": "serial",
  "theme": "none",
  "dataProvider": [ {
    "country": days[0],
    "visits": pressure[0]
  }, {
    "country": days[1],
    "visits": pressure[1]
  }, {
    "country": days[2],
    "visits": pressure[2]
  }, {
    "country": days[3],
    "visits": pressure[3]
  }, {
    "country": days[4],
    "visits": pressure[4]
  }, {
    "country": days[5],
    "visits": pressure[5]
  }, {
    "country": days[6],
    "visits": pressure[6]
  }, {
    "country": days[7],
    "visits": pressure[7]
  }, {
    "country": days[8],
    "visits": pressure[8]
  }, {
    "country": days[9],
    "visits": pressure[9]
  }, {
    "country": days[10],
    "visits": pressure[10]
  }, {
    "country": days[11],
    "visits": pressure[11]
  }, {
    "country": days[12],
    "visits": pressure[12]
  }, {
    "country": days[13],
    "visits": pressure[13]
  }, {
    "country": days[14],
    "visits": pressure[14]
  }, {
    "country": days[15],
    "visits": pressure[15]
  } ],
  "valueAxes": [ {
    "gridColor": "#FFFFFF",
    "gridAlpha": 0.2,
    "dashLength": 0
  } ],
  "gridAboveGraphs": true,
  "startDuration": 1,
  "graphs": [ {
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "visits"
  } ],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "country",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0,
    "tickPosition": "start",
    "tickLength": 20
  },
  "export": {
    "enabled": true
  }

} );
}

function show7(data) {

  var humidity =
 [Math.round(data.list[0].humidity),
  Math.round(data.list[1].humidity),
  Math.round(data.list[2].humidity),
  Math.round(data.list[3].humidity),
  Math.round(data.list[4].humidity),
  Math.round(data.list[5].humidity),
  Math.round(data.list[6].humidity),
  Math.round(data.list[7].humidity),
  Math.round(data.list[8].humidity),
  Math.round(data.list[9].humidity),
  Math.round(data.list[10].humidity),
  Math.round(data.list[11].humidity),
  Math.round(data.list[12].humidity),
  Math.round(data.list[13].humidity),
  Math.round(data.list[14].humidity),
  Math.round(data.list[15].humidity)]

  var chart = AmCharts.makeChart( "chartdiv-humidity", {
  "type": "serial",
  "theme": "light",
  "dataProvider": [ {
    "country": days[0],
    "visits": humidity[0]
  }, {
    "country": days[1],
    "visits": humidity[1]
  }, {
    "country": days[2],
    "visits": humidity[2]
  }, {
    "country": days[3],
    "visits": humidity[3]
  }, {
    "country": days[4],
    "visits": humidity[4]
  }, {
    "country": days[5],
    "visits": humidity[5]
  }, {
    "country": days[6],
    "visits": humidity[6]
  }, {
    "country": days[7],
    "visits": humidity[7]
  }, {
    "country": days[8],
    "visits": humidity[8]
  }, {
    "country": days[9],
    "visits": humidity[9]
  }, {
    "country": days[10],
    "visits": humidity[10]
  }, {
    "country": days[11],
    "visits": humidity[11]
  }, {
    "country": days[12],
    "visits": humidity[12]
  }, {
    "country": days[13],
    "visits": humidity[13]
  }, {
    "country": days[14],
    "visits": humidity[14]
  }, {
    "country": days[15],
    "visits": humidity[15]
  } ],
  "valueAxes": [ {
    "gridColor": "#FFFFFF",
    "gridAlpha": 0.2,
    "dashLength": 0
  } ],
  "gridAboveGraphs": true,
  "startDuration": 1,
  "graphs": [ {
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "visits"
  } ],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "country",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0,
    "tickPosition": "start",
    "tickLength": 20
  },
  "export": {
    "enabled": true
  }

} );
}
