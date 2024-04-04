class UserAuth {
    constructor() {
        this.users = JSON.parse(localStorage.getItem("users")) || [];
    }

    login(email, password) {
        const user = this.users.find(user => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem("name", user.name);
            localStorage.setItem("email", user.email);
            alert("User login successful");
            window.location.href = "table.html"; // Redirect to welcome page after login
        } else {
            alert("Invalid username or password");
        }
    }
}

const userAuth = new UserAuth();

function saveData() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    userAuth.login(email, password);
}
