
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDYBLt7nlJOrgbsRDcQAM4UwuzoNqR22jU",
    authDomain: "webtest-108e4.firebaseapp.com",
    databaseURL: "https://webtest-108e4-default-rtdb.firebaseio.com",
    projectId: "webtest-108e4",
    storageBucket: "webtest-108e4.appspot.com",
    messagingSenderId: "638687602183",
    appId: "1:638687602183:web:7f5dba7f059f04dc65aca2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let message = document.querySelector(".message").value;
  console.log(name,message);

  saveContactInfo(name,message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,

    message: message,
  });
}