
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
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name",room_name);

  window.location = "kwitter_page.html";
};
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
