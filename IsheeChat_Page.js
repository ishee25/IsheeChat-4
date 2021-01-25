// ADD FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCghOO7INYeT8CIYwQLItpjcswlebXyevE",
    authDomain: "isheechat-web-app.firebaseapp.com",
    databaseURL: "https://isheechat-web-app-default-rtdb.firebaseio.com",
    projectId: "isheechat-web-app",
    storageBucket: "isheechat-web-app.appspot.com",
    messagingSenderId: "711410488553",
    appId: "1:711410488553:web:69aee7d3d1adc5cf7d0c78"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").innerHTML = "";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}