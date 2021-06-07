var firebaseConfig = {
    apiKey: "AIzaSyAtNJIby6WW0BGvtGfPG9vzfRIAOWTndZg",
    authDomain: "chat-app-ca313.firebaseapp.com",
    databaseURL: "https://chat-app-ca313.firebaseio.com",
    projectId: "chat-app-ca313",
    storageBucket: "chat-app-ca313.appspot.com",
    messagingSenderId: "365485076198",
    appId: "1:365485076198:web:3de3a99591611c9a4ed527",
    measurementId: "G-B45R8CXVCB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
    user_name = localStorage.getItem("user_name");
   
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
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
  