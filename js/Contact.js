const firebaseConfig = {
  apiKey: "AIzaSyAbghhTNDJ_BVe1vRsWyEz7gXywqAOJJxw",
  authDomain: "contact-form-5e594.firebaseapp.com",
  databaseURL: "https://contact-form-5e594-default-rtdb.firebaseio.com",
  projectId: "contact-form-5e594",
  storageBucket: "contact-form-5e594.appspot.com",
  messagingSenderId: "849107815946",
  appId: "1:849107815946:web:b1fdf61e098140beac59f3",
  measurementId: "G-FSXSTJ1H4J"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var contactformDB = firebase.database().ref('contactForm');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  // Save message
  saveMessage(name,email,phone,subject,message);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector(".alert").style.display = "none";
  },2000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,email, phone,subject,message){
  var newcontactformDB = contactformDB.push();
  newcontactformDB.set({
    Name: name,
    Email:email,
    Phone:phone,
    Subject:subject,
    Message:message
  });
}
 