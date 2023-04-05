
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA-xI25GfgJwdV9zbp5DvdXuRTo3BaVkc4",
      authDomain: "kwitter-5ffd2.firebaseapp.com",
      databaseURL:"https://kwitter-5ffd2-default-rtdb.firebaseio.com/",
      projectId: "kwitter-5ffd2",
      storageBucket: "kwitter-5ffd2.appspot.com",
      messagingSenderId: "518728350781",
      appId: "1:518728350781:web:f38a3eccda0ad01fd23e54"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome"+user_name + "!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room_Name - ", Room_names);
     
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room"
      })
      localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
   
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}