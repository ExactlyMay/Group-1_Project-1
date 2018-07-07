
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
  

function writeUserData(userId, fName, lName, pass) {
    database.ref('users/' + userId).set({
        'username': userId,
        'fName': fName,
        'lName' : lName,
        'pass': pass
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