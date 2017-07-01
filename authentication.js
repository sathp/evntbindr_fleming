var provider = new firebase.auth.GoogleAuthProvider();

$('#login_with_google').click(function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
});

$('#logout').click(function() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        u = user
            // User is signed in.
            // 1. Logged In - Show Logout
        console.log("User is Logged In");
        //console.log(user);
        //console.log("Email:", user.email, user.displayName, user.photoURL);

        $('#user_name').show();
        $('#user_name').html(user.displayName);
        $('#dash_name').html(user.displayName);
        $('#user_img').attr('src', user.photoURL);
        $('#user_email').html(user.email);
        $('#login_with_google').hide();

        usersRef.once("value").then(function(snapshot) {
            snapshot.forEach(function(post) {
                if (user.uid === post.val().uid) {
                    // displayVenues(post);
                }
            });
        });
        // ...
    } else {
        // User is signed out.
        // 2. Logged Out/ Not Logged In - Show "Login with Google"
        console.log("User is not logged in");
        $('#user_name').hide();
        $('#login_with_google').show();
        // ...
    }

})
