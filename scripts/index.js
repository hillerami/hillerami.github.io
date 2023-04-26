document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    console.log("DOM is ready!");
    // You can now safely access and manipulate the DOM elements

    setDate();
});


const setDate = () => {

    const now = new Date();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentMonth = now.toLocaleString('default', { month: 'long' });
    const day = weekday[now.getDay()].toString();
    const currentHour = now.getHours();
    const hourIn12HourFormat = currentHour % 12 || 12;
    const amOrPm = currentHour >= 12 ? 'PM' : 'AM';
    const minutes = ('0' + now.getMinutes()).slice(-2);

    const verboseDate = `Today is <strong>${day}, ${currentMonth} ${now.getUTCDate()}</strong>`;
    const verboseTime = `Current time is <strong>${hourIn12HourFormat}:${minutes} ${amOrPm}</strong>`;

    document.getElementById("current-date").innerHTML = verboseDate;
    document.getElementById("current-time").innerHTML = verboseTime;

    // also set footer year
    document.getElementById("currentYear").innerHTML = now.getFullYear();
}

