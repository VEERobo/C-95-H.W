
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB_qIlkF1i67EKWUaiielRd7eWpjTz04bc",
      authDomain: "chat-web-app-76ff6.firebaseapp.com",
      projectId: "chat-web-app-76ff6",
      storageBucket: "chat-web-app-76ff6.appspot.com",
      messagingSenderId: "541256101004",
      appId: "1:541256101004:web:5c5ca0836e098953b4dfa9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
    function addRoom(){
          firebase.database().ref("/").child(Room_names).update({
                purpose : "Add Room Name"
          });
          localStorage.setItem("Room Name" , Room_names);
          window.location = "chat_page.html";
    } 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names = " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}
