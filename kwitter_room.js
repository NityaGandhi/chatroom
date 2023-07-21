var firebaseConfig = {
      apiKey: "AIzaSyBpb_zbG7SScUFM_9KEtZTLm-fRVwe4DH0",
      authDomain: "kwitter-project-bae9e.firebaseapp.com",
      databaseURL: "https://kwitter-project-bae9e-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-bae9e",
      storageBucket: "kwitter-project-bae9e.appspot.com",
      messagingSenderId: "301940077343",
      appId: "1:301940077343:web:22bcb0ddcfc201b637362a",
      measurementId: "G-SWNECWZMSL"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name-" + room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output") = row;
      });});}
getData();


user_name = localStorage.getItem("user_name");
document.getElementById("blank").innerHTML = "Welcome -" + user_name;



function addroom() 
{ room_name = document.getElementById("addRoom").value; 
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
localStorage.setItem("room_name", room_name); 
window.location = "kwitter_page.html"; }




function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";

}



