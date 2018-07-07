var APIKey = "31cf0d281ebbf40675ce6d09d12a89dc"; 
var queryURL="https://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);

     

      for(var i=0;i<8;i++)
      {
        //   var d=$("<div>");
          var p=  $("#displayWeather");
          p.text("Time-Date: " +response.list[i].dt_txt);
          var h=$("<p>");
          h.text("Humidity: " +response.list[i].main.humidity);
          d.append(h);
          var m=$("<p>");
          m.text("max-temprature:" +response.list[i].main.temp_max);
          d.append(m);
          var min=$("<p>");
          min.text("min-tempreture:"+response.list[i].main.temp_min);
          d.append(min);
          var s=$("<p>");
          s.text("Description: " +response.list[i].weather[0].description);
          d.append(s);
          var icon=  $("<img>");
          icon.addClass("p1");
         icon.attr("src","http://openweathermap.org/img/w/"+response.list[i].weather[0].icon+".png");
         d.append(icon);
          d.append(p);
          d.addClass("tm1");
          $(".time").append(d);
      }
      
      for(var i=8;i<16;i++)
      {
          var d=$("<div>");
          var p=  $("<p>");
          p.text("Time-Date: " +response.list[i].dt_txt);
          var h=$("<p>");
          h.text("Humidity: " +response.list[i].main.humidity);
          d.append(h);
          var m=$("<p>");
          m.text("max-temprature:" +response.list[i].main.temp_max);
          d.append(m);
          var min=$("<p>");
          min.text("min-tempreture:"+response.list[i].main.temp_min);
          d.append(min);
          var s=$("<p>");
          s.text("Description: " +response.list[i].weather[0].description);
          d.append(s);
          var icon=  $("<img>");
          icon.addClass("p1");
         icon.attr("src","http://openweathermap.org/img/w/"+response.list[i].weather[0].icon+".png");
         d.append(icon);
          d.append(p);
          d.addClass("tm2");
          $(".time1").append(d);
      }
      for(var i=16;i<24;i++)
      {
          var d=$("<div>");
          var p=  $("<p>");
          p.text("Time-Date: " +response.list[i].dt_txt);
          var h=$("<p>");
          h.text("Humidity: " +response.list[i].main.humidity);
          d.append(h);
          var m=$("<p>");
          m.text("max-temprature:" +response.list[i].main.temp_max);
          d.append(m);
          var min=$("<p>");
          min.text("min-tempreture:"+response.list[i].main.temp_min);
          d.append(min);
          var s=$("<p>");
          s.text("Description: " +response.list[i].weather[0].description);
          d.append(s);
          var icon=  $("<img>");
          icon.addClass("p1");
         icon.attr("src","http://openweathermap.org/img/w/"+response.list[i].weather[0].icon+".png");
         d.append(icon);
          d.append(p);
          d.addClass("tm3");
          $(".time2").append(d);
      }
      for(var i=24;i<32;i++)
      {
          var d=$("<div>");
          var p=  $("<p>");
          p.text("Time-Date: " +response.list[i].dt_txt);
          var h=$("<p>");
          h.text("Humidity: " +response.list[i].main.humidity);
          d.append(h);
          var m=$("<p>");
          m.text("max-temprature:" +response.list[i].main.temp_max);
          d.append(m);
          var min=$("<p>");
          min.text("min-tempreture:"+response.list[i].main.temp_min);
          d.append(min);
          var s=$("<p>");
          s.text("Description: " +response.list[i].weather[0].description);
          d.append(s);
          var icon=  $("<img>");
          icon.addClass("p1");
         icon.attr("src","http://openweathermap.org/img/w/"+response.list[i].weather[0].icon+".png");
         d.append(icon);
          d.append(p);
          d.addClass("tm4");
          $(".time3").append(d);
      }
      for(var i=32;i<40;i++)
      {
          var d=$("<div>");
          var p=  $("<p>");
          p.text("Time-Date: " +response.list[i].dt_txt);
          var h=$("<p>");
          h.text("Humidity: " +response.list[i].main.humidity);
          d.append(h);
          var m=$("<p>");
          m.text("max-temprature:" +response.list[i].main.temp_max);
          d.append(m);
          var min=$("<p>");
          min.text("min-tempreture:"+response.list[i].main.temp_min);
          d.append(min);
          var s=$("<p>");
          s.text("Description: " +response.list[i].weather[0].description);
          d.append(s);
          var icon=  $("<img>");
          icon.addClass("p1");
         icon.attr("src","http://openweathermap.org/img/w/"+response.list[i].weather[0].icon+".png");
         d.append(icon);
          d.append(p);
          d.addClass("tm5");
          $(".time4").append(d);
      }
  }); 
 