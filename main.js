const firebaseConfig = {
    apiKey: "AIzaSyAD9LTBgaTez7qgmEMJdFms6dddDTLuUCg",
    authDomain: "jjthomsonreview.firebaseapp.com",
    projectId: "jjthomsonreview",
    storageBucket: "jjthomsonreview.firebasestorage.app",
    messagingSenderId: "88352808096",
    appId: "1:88352808096:web:e8630bdd9c8d9f407afdc5"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
setTimeout(function(){
    if(localStorage.getItem('AlreadyReview') == "Yes"){
        console.log('Working...')
        document.getElementById('review').style.display = 'none';
    }
},500);


function submitStar(){
  var star = document.getElementById('getStartNum').value;
  var name = document.getElementById('name').value;
  var opinion = document.getElementById('opinion').value;

  if(star != '' && star != undefined && name != "" && name != undefined && opinion != undefined && opinion != ""){
  firebase.database().ref('Main/').child('Reviews/').update({

  });
  firebase.database().ref('Main/').child('Reviews/').push({
  Name : name,
  Star : star,
  Opinion : opinion
  });
  document.getElementById('getStartNum').value = '';
  document.getElementById('name').value = '';
  document.getElementById('opinion').value = '';
  localStorage.setItem('AlreadyReview' , 'Yes');
  document.getElementById('review').style.display = 'none';
  }else{
    alert('Some Strings Are Missing');
  }
}
  function getData() { firebase.database().ref("Main/").child('Reviews').on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    var firebase_message_id = childKey;
    var message_data = childData;


//Start code
console.log(firebase_message_id);
console.log(message_data);
let Name = message_data['Name'];
let Opinion = message_data['Opinion'];
let Star = message_data['Star'];
console.log(Name + ' '+Opinion + ' '+Star);
var n = Opinion.slice(0 , 41);
var nn = n + ' ...';
if(Star == 1){
    var star = "⭐️";
}else if(Star == 2){
    var star = "⭐️⭐️";
}else if(Star == 3){
    var star = "⭐️⭐️⭐️";
}else if(Star == 4){
    var star = "⭐️⭐️⭐️⭐️";
}else if(Star == 5){
    var star = "⭐️⭐️⭐️⭐️⭐️";
}
var html = '<li class="review__item"><h4 class="review__heading"><span class="review__title">'+Name+'</span><span class="review__stars">'+star+'</span></h4><p class="review__content">'+Opinion+'</p></li> <hr style="height: 2px; margin: 10px;background-color: black;">';
document.getElementById("output").innerHTML += html;

//End code
 } });  }); }

getData()