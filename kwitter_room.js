
var firebaseConfig = {
  apiKey: "AIzaSyA_cxX-x26XlM3TP7GQzrmgH9zzPf3q8WI",
  authDomain: "kwitter-c1bb7.firebaseapp.com",
  databaseURL: "https://kwitter-c1bb7-default-rtdb.firebaseio.com",
  projectId: "kwitter-c1bb7",
  storageBucket: "kwitter-c1bb7.appspot.com",
  messagingSenderId: "1051524687807",
  appId: "1:1051524687807:web:43073b88bcd69ccbdae30a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
    console.log(name)
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}