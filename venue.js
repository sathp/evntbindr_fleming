var database = firebase.database();
var venuesRef = database.ref('venues');
var usersRef = database.ref('users');

function venue_function() {

    var venuedata = {
        userName: firebase.auth().currentUser.displayName,
        uid: firebase.auth().currentUser.uid,
        name: $('#name').val(),
        description: $('#description').val(),
        owner: firebase.auth().currentUser.displayName,
        location: $('#location').val(),
        venue_type: $('#venue_type').val(),
        setting: $('#setting').val(),
        capacity: $('#capacity').val(),
        price: $('#price').val(),
        amenities: $('#amenities').val(),
        rules: $('#rules').val()
    };

    var userdata = {
        userName: firebase.auth().currentUser.displayName,
        uid: firebase.auth().currentUser.uid,
        venue_name: $('#name').val()
    };

    var newPostKey = firebase.database().ref().child('venues').push().key;

    var updates = {};
    uploadImage(newPostKey).then(function(imageURL) {
        console.log(newPostKey);
        venuedata["imageURL"] = imageURL;
        updates['/venues/' + newPostKey] = venuedata;
        updates['/users/' + newPostKey] = userdata;
        firebase.database().ref().update(updates);
    });
    /* venuedata["key"] = newPostKey;*/
    
    /*  updates {newPostKey] = venuedata;*/

    //return firebase.database().ref().update(updates);

}
