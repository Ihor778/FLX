let time = new Date().getHours();
let login = prompt("Enter you login: ");
if (login === null) {
    alert("Canceled.")
} else if (login < 4) {
    alert("I don't know any users having name length less than 4 symbols.");
} else if (login === "Admin") {
    let pass = prompt("You Password: ")
    if (pass === null) {
        alert("Canceled.");
    } else if (pass === "RootPass") {
        if (time < 20) {
            alert("Good day, dear Admin!");
        } else {
            alert("Good evening, dear Admin!");
        }
    } else {
        alert("Wrong password.");
    }
} else if (login === "User") {
    let pass = prompt("You Password: ")
    if (pass === null) {
        alert("Canceled.");
    } else if (pass === "UserPass") {
        if (time < 20) {
            alert("Good day, dear User!");
        } else {
            alert("Good evening, dear User!");
        }
    } else {
        alert("Wrong password.");
    }
} else {
    alert("I don’t know you");
}
