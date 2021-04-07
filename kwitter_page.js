var firebaseConfig = {
      apiKey: "AIzaSyB36tmcuBgFBzB1AP77pwT5QdWMGEgVZrQ",
      authDomain: "add-project-kidnap.firebaseapp.com",
      databaseURL: "https://add-project-kidnap-default-rtdb.firebaseio.com",
      projectId: "add-project-kidnap",
      storageBucket: "add-project-kidnap.appspot.com",
      messagingSenderId: "51428136145",
      appId: "1:51428136145:web:88bd1117a3700998eee1f0",
      measurementId: "G-FD0JKPTSHZ"
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}