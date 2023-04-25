document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    console.log("DOM is ready!");
    // You can now safely access and manipulate the DOM elements

    var today = new Date();
    const currentYear = today.getFullYear();
    document.getElementById("currentYear").textContent = currentYear;


    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
     
    console.log(dateTime)
});
