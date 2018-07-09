
// var userData = {
//     "users": {
//       "mchen": {
//         "fname": "Mary",
//         'lname': 'Chen'
        
//         // index Mary's groups in her profile
//         "groups": {
//            // the value here doesn't matter, just that the key exists
//            "alpha": true,
//            "charlie": true
//         }
//       },
//     },
//     "groups": {
//       "alpha": {
//         "name": "Alpha Group",
//         "members": {
//           "mchen": true,
//           "hmadi": true
//         }
//       },
//     }
//   }

//   companyContractors
//     companyKey1
//         contractorKey1: true
//         contractorKey3: true
//     companyKey2
//         contractorKey2: true
// contractorCompanies
//     contractorKey1
//         companyKey1: true
//     contractorKey2
//         companyKey2: true
//     contractorKey3
//         companyKey1: true

//  users = {
//     Mike: {
//         username: 'mike1',
//         password: '123',
//         group: 'Group1',
//         schedule: ''        
//     }
// }

// for length of schedule (number of scheduled blocks of time), grab those and populate calendar visual
//compare to other users in group to see when they have common free time
//possibly allow to input recurring time block that happens every day
//possibly allow people to remove blocks


var config = {
    apiKey: 'AIzaSyB27xa0pi1M-4djxsF-mlyRWbGgtatuNPc',
    authDomain: 'friendly-reminder-7a756.firebaseapp.com',
    databaseURL: 'https://friendly-reminder-7a756.firebaseio.com',
    projectId: 'friendly-reminder-7a756',
    storageBucket: 'friendly-reminder-7a756.appspot.com',
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var groupData = database.ref('/group');
  var userData = database.ref('/users');
  

  //apply momentjs to arrays to make them time objects compare with their .milli values  
  function merge3(ranges) {
    // copy and sort the array
        var sortedRange = ranges.slice().sort(function(a, b) {
            return a[0] > b[0];
        }),
            i = 0;

        while(i < sortedRange.length - 1) {
            var current = sortedRange[i],
                next = sortedRange[i+1];

            // check if there is an overlapping
            if(current[1] >= next[0]) {
                current[1] = Math.max(current[1], next[1]);
                // remove next
                sortedRange.splice(i+1, 1);
            } else {
                // move to next
                i++;
            }
        }
        return sortedRange;
    };

    function splitPairs(arr) {
        var pairs = [];
        for (var i=0 ; i<arr.length ; i+=2) {
            if (arr[i+1] !== undefined) {
                pairs.push ([arr[i], arr[i+1]]);
            } else {
                pairs.push ([arr[i]]);
            }
        }
        return pairs;
    };

  function writeUserData(userId, fName, lName, pass) {
    //if its taken dont do it and complain
    database.ref('users/' + userId).set({
        'username': userId,
        'fName': fName,
        'lName' : lName,
        'pass': pass,
        'schedule': ''
    });
}
function createGroup(groupName, currUser) {
    database.ref('groups/'+ groupName).set({
        'name': groupName,
        members: {
            [currUser]: true
        }
    });
    database.ref('groupUsers/'+groupName).set({
        [currUser]: true
    });
    database.ref('userGroups/'+currUser).update({
        [groupName]: true
    });
    

}
function joinGroup(groupName, currUser) {
    database.ref('groups/'+groupName+'/members/').update({
        [currUser]:true
    });
    database.ref('groupUsers/'+groupName).update({
        [currUser]: true
    });
    database.ref('userGroups/'+currUser).update({
        [groupName]: true
    });
}
function loginUser(currUser,pass) {
    // comparing current user to the database to see if it exists
    //compares password to stored password
    //complains if its not
    //if successful, changes current user id to login id
    //uses for current user for everything else
    // moves you to home page html
    //grabs current user schedule and populates calendar and creates eventList
}

//temp eventlist array
var eventList = [{       
    title: 'All Day Event',
    start: '2018-07-05T06:00:00',
    end: '2018-07-05T06:30:00'
}, {
    title: 'Work',
    start: '2018-07-05T07:00:00',
    end: '2018-07-05T07:30:00'
}];
//fullcalendar populates eventsList for me
// function addToEventList(start,end,title) {
//     eventList.push({
//         title: title,
//         start: start,
//         end: end
//     })
// }
// function momentify(time) {
//     time.milli
// }
function updateUserSchedule(currUser, start,end) {
    var currSchedule = database.ref('users/'+currUser+'/schedule');
    
    currSchedule.set(eventList);
    // var mergedSchedule = merge3(localSchedule);
    //pull the updated event list instead of pulling the new event so you can use it for adding and removing
}

//on userschedule change
//dont need to store this. just do clientside
//if you make a plan, push it back into the curruser schedule

//someone make a dropdown bar of all a user's current groups so you can show freetime of specific group

//activate on button click see above^^
function showGroupFreeTime(groupName) {
    var currGroupUsers = database.ref('groupUsers'/+groupName+'/members/');
    var groupUsersList = Object.keys(currGroupUsers)
    console.log(groupUsersList);
    var fullGroupSchedule = [];

    // var currUserGroups = database.ref('userGroups/'+currUser);
    // var userGroupsList = Object.keys(currUserGroups)
    
    // console.log(userGroupsList);
    for (var z=0;z<groupUsersList.length;z++) {
        var currGroupSchedule = database.ref('users/'+groupUsersList[z]+'/schedule');
        //var currUserSchedule = database.ref('users/'+currUser+'/schedule');
        
        for (var y=0;y<currGroupSchedule.length;y++) {
            fullGroupSchedule.push([currGroupSchedule[y].start  ,currGroupSchedule[y].end]);
        }
    }
    var finalGroupSchedule = merge3(fullGroupSchedule);
    console.log(finalGroupSchedule);
        
        // Object.values(currUserSchedule)
        // Object.values(currGroupSchedule)
        //[]
        //schedule will be received as an array of objects
    




    // for (var z=0;z<userGroupsList.length;z++) {
    //     var currGroupSchedule = database.ref('groups/'+userGroupsList[z]+'/schedule');
    //     var currUserSchedule = database.ref('users/'+currUser+'/schedule');
    //     Object.values(currUserSchedule)
    //     Object.values(currGroupSchedule)
    // }
}

  // var connectionsRef = database.ref('/connections');
  // var connectedRef = database.ref('.info/connected');
  
  // connectedRef.on('value', function(snap) {
  //   if (snap.val()) {
  //     var con = connectionsRef.push(true);
  //     con.onDisconnect().remove();
  //   }
  // });
  

  
  //var groupData = database.ref('/group');
  //var userData = database/ref('/users);
  
  
  $(document).ready(function() {
    writeUserData('mike1','Michael', 'Wilson', '123')
    // database.ref('/users/').set({ 
    //     mike1: {
    //         username: "mike1",
    //         fName: 'Michael',
    //         lName: 'Wilson',
    //         pass: '123', 
    //         groups: {
    //             'group1':true
    //         },
    //         schedule: ''
    //     }
    // });
    createGroup('group1', 'mike1');
    joinGroup('group1','mike1');
    
    // database.ref('/groups/').set({
    //         'group1': {
    //             name: 'Group1',
    //             members: {
    //                 'mike1': true
    //             },
    //             sumSchedule: ''
    //         }

    // });
    
    // database.ref('/userGroups/').set({
    //     group1: {mike1:true}

    // });
    // database.ref('/groupUsers/').set({
    //     mike1: {group1:true}
    // });
    
    writeUserData('bob','Bob', 'Low', '234');
    joinGroup('group1', 'bob');
    updateUserSchedule('bob');


    // window.onunload = function () {
    //   if (yourNum == '#p1') {
    //     database.ref('player/p1').set({ 
    //       name: '',
    //       win: initialWL,
    //       lose: initialWL,
    //     });
  
    //   } 
    //   else if (yourNum == '#p2') {
    //     database.ref('player/p2').set({ 
    //       name: '',
    //       win: initialWL,
    //       lose: initialWL,
    //     });
  
    //   }
    // };
  
        // database.ref('/player').on('value', function(snap) {
        //   if(yourNum) {
        //     if(snap.child('p1').child('name').val() == '' || snap.child('p2').child('name').val() == ''){
        //       $('.waiting').text('Waiting for New Challenger');
        //       $('#p2-status').empty;
        //       game.nameUpdate();
        //     }
        //   }
        // });
    
        // $('#submitmsg').click(function (e) {
        //   e.preventDefault();
        //   var name = $('#userName').val().trim();
        //   var msg = $('#usermsg').val().trim();
        //   if(name && msg) {
        //     chatData.push({
        //       name: name,
        //       text: msg,
        //       dateAdded: firebase.database.ServerValue.TIMESTAMP
        //     });
        //     $('#usermsg').val('');
        //     $('#userName').attr('readonly', 'true');
        //   }
        // });
    
        // chatData.orderByChild('dateAdded').limitToLast(5).on('child_added', function(snap) {
        //   var sv = snap.val();
        //   $('#chatArea').prepend('<p><b>' + sv.name + '</b>: ' + sv.text + '</p>');
        // }, function(errorObject) {
        //   console.log('Errors handled: ' + errorObject.code);
        // });
  
  });