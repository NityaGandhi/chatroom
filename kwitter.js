

function addUser(){
    user_Name = document.getElementById("user_name").value;
localStorage.setItem("user_name", user_Name)
window.location = "kwitter_room.html";
}
