function showAlert() {
    alert("Hello! Thanks for visiting my homepage :)");
}

function validateForm() {
    let name = document.getElementById("name").value;
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
