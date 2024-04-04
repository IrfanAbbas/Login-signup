class UserAuth {
    constructor() {
        this.users = JSON.parse(localStorage.getItem("users")) || [];
    }

    saveUser(email, password, name) {
        const existingUser = this.users.find(user => user.email === email);
        if (existingUser) {
            alert("User with this email already exists. Please choose a different email.");
            return false;
        }

        this.users.push({ email, password, name });
        localStorage.setItem("users", JSON.stringify(this.users));
        alert("User registered successfully");
        window.location.replace("./login.html");
        return true;
    }
}

const userAuth = new UserAuth();

function saveData() {
    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;
    const name = document.getElementById("yourName").value;

    if (userAuth.saveUser(email, password, name)) {
        // Clear input fields after successful sign up
        document.getElementById("exampleInputEmail1").value = "";
        document.getElementById("exampleInputPassword1").value = "";
        document.getElementById("yourName").value = "";
    }
}
