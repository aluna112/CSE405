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
    } else {
        console.log("user logged out");
        document.getElementById("Instructions").style.display = "none";
        document.getElementById("logout-button").style.display = "none";
        document.getElementById("account-button").style.display = "none";
        document.getElementById("create-post-button").style.display = "none";
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
        });
    } else {
        alert("Passwords do not match.");
    }
});

const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
    e.preventDefault;
    auth.signOut();
});

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;
                           
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        document.getElementById('id02').style.display='none';
        loginForm.reset();
    });
});

