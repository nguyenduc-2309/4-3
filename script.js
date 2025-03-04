document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "test@example.com" && password === "123456") {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
});
