// Function to validate the form
function validateForm() {
    const product = document.getElementById("product");
    const quantity = document.getElementById("quantity").value;

    if (!quantity) {
        alert("All fields are required!");
        return false;
    }
    alert("Order submitted successfully!");
    return true;
}