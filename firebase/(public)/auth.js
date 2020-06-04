db.collection("posts").get().then(snapshot => {
    setupPosts(snapshot.docs);
});

auth.onAuthStateChanged(user => {
    if (user) {
        console.log("user logged in", user);
        document.getElementById("Instructions").style.display = "block";
        document.getElementById("signup-button").style.display = "none";
        document.getElementById("login-button").style.display = "none";
        document.getElementById("directions").style.display = "none";
        window.onload = function() {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
        }
    } else {
        console.log("user logged out");
        document.getElementById("Instructions").style.display = "none";
        document.getElementById("logout-button").style.display = "none";
        document.getElementById("account-button").style.display = "none";
        document.getElementById("create-post-button").style.display = "none";
        window.onload = function() {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
        }
    }
});

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;
    const passwordRepeat = signupForm["signup-password-repeat"].value;
                            
    if (password == passwordRepeat) {
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            document.getElementById('id01').style.display='none';
            signupForm.reset();
            location.reload();
        });
/*        auth.catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        }
        else {
            alert(errorMessage);
        }
    console.log(error);
    });*/
    }
    else {
        alert("Passwords do not match.");
    }
});

const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
    e.preventDefault;
    auth.signOut();
    location.reload();
});

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;
                           
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        document.getElementById('id02').style.display='none';
        loginForm.reset();
        location.reload();
    });
});

