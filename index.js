document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    console.log("DOM is ready!");
    // You can now safely access and manipulate the DOM elements
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
});
