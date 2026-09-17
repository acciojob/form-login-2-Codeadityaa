function showAlert(event) {
 event.preventDefault();

    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    alert(
        "First Name: " + firstName +
        " Last Name: " + lastName +
        " Phone Number: " + phone +
        " Email ID: " + email
    );
}