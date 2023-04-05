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
   room_name=localStorage.getItem("room_name")
   user_name=localStorage.getItem("user_name")
  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,

        like:0,
    })

    document.getElementById("msg").value = "";
  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}