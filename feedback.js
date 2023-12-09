function submitForm() {
    // Get form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Client-side validation
    var errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = "";

    if (!name || !email || !message) {
        errorMessage.innerHTML = "Please fill in all fields.";
        return;
    }
    
    alert("Form submitted successfully!");
}