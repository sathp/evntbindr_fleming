var config = {
    apiKey: "AIzaSyDxfD5kbHrLnCVM0hBWP04BjZ2ptDN62-4",
    authDomain: "practice-a3eeb.firebaseapp.com",
    databaseURL: "https://practice-a3eeb.firebaseio.com",
    projectId: "practice-a3eeb",
    storageBucket: "practice-a3eeb.appspot.com",
    messagingSenderId: "571056102222"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var postRef = database.ref('posts');
var usersRef = database.ref('users');

var storage = firebase.storage();

var storageRef = firebase.storage().ref();

var provider = new firebase.auth.GoogleAuthProvider();
$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});