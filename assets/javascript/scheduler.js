// $(document).ready(function() {

//     // page is now ready, initialize the calendar...
  
//     $('#scheduler').fullCalendar({
//       // put your options and callbacks here

      
//     })
  
//   });


$(document).ready(function() {

    var newEvent = [{
        title: 'All Day Event',
        start: '2018-07-05T05:00:00',
        end: '2018-07-05T05:30:00'
      },
      {
        title: 'All Day Event',
        start: '2018-07-05T06:00:00',
        end: '2018-07-05T06:30:00'
      }]

    function createCalendar(newEvent) {
        $(document).off("click");
        $('#scheduler').fullCalendar({
            defaultView: 'agendaWeek',
        //   header: {
        //     left: 'prev,next today',
        //     center: 'title',
        //     right: 'month,agendaWeek,agendaDay,listWeek'
        //   },
        //   defaultDate: '2018-03-12',
          navLinks: true, // can click day/week names to navigate views
          editable: true,
          eventLimit: true, // allow "more" link when too many events
          events: newEvent,
        })

        $(document).on("click", "#addToSchedule", function(event) {
            event.preventDefault();
            var startTime = $("#userStartTime").val();
            var endTime = $("#userEndTime").val();
            var reason = $("#userReason").val();
            console.log(startTime);
            console.log(endTime);
            console.log(reason);
            var addedEvent = {
                title: reason,
                start: startTime,
                end: endTime
            };
            $('#scheduler').fullCalendar('renderEvent', addedEvent);
            // newEvent.push(addedEvent);
            // console.log(newEvent);
            // createCalendar(newEvent);
            $("#userStartTime").val("");
            $("#userEndTime").val("");
            $("#userReason").val("");
            modal.style.display = "none";
        }); 
    }
    
    createCalendar(newEvent);

    
  });

//   var date;
// var eventDescription;
// var entryId;

// function initCalendarGrid(){
//     //refactor with closure when working
// }

// function getDate(){
//     //gets user I/O and assigns to global var
// }

// function displayDate(entryId){
//     //changes CSS to highlight correct ID in DOM
// }

// function getDescription(){
//     //gets user I/O and assigns to global var
// }

// function displayDescription(entryId){
//     //writes description to correct ID in DOM
// }
// function getDescription(){
//     console.log("getDescription reached");//not reached
// eventDescription = document.getElementById('description').value;
// date = document.getElementById('dateSelect').value;//falls here when date not passed
// date = +date;
// console.log(date);
// console.log(eventDescription);
//     (function (){//pass in date as variable
//         document.getElementById(date).innerHTML = eventDescription;//works with selector as number: shouldn't
//         console.log("inner func reached");//
//     })();
// }

// function displayDescription(entryId){

// }

// /*function getDate(){
// console.log("getDate reached");
// date = document.getElementById('dateSelect').value;//falls here when date not passed
// date = +date;
// console.log(date);
//     (function (){//toggle param pass in date
//         document.getElementById("1").innerHTML = date;
//         console.log("inner func reached");
//     })();
// return date;
// }*/
