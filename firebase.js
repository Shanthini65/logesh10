var firebaseConfig = {
    apiKey: "AIzaSyAjANvKuxvBilPYnZ5ARVY5DhsLqcoj2sY",
    authDomain: "form-3947e.firebaseapp.com",
    databaseURL: "https://form-3947e-default-rtdb.firebaseio.com",
    projectId: "form-3947e",
    storageBucket: "form-3947e.firebasestorage.app",
    messagingSenderId: "1044779753097",
    appId: "1:1044779753097:web:7eac9d030151724d253058"
  };
 // 🔹 Firebase configuration
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Realtime Database
var database = firebase.database();

// Form submit
document.getElementById("friendForm").addEventListener("submit", function(e) {
  e.preventDefault();

  var data = {
    yourName: document.getElementById("yourName").value,
    friendName: document.getElementById("friendName").value,
    nickName: document.getElementById("nickName").value
  };

  // Save under "form"
  database.ref("form").push(data);

  // Show cute notification
  var toast = document.getElementById("toast");
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.opacity = "0";
  }, 2500);

  this.reset();
});
