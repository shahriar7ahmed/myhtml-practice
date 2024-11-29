$(function() {
    // Define the start date of Ramadan (12th March 2024)
    var ramadanStart = new Date(2024, 2, 12); // Month is 0-based (0: January, 1: February, ..., 11: December)
    
    // Get the current date
    var currentDate = new Date();
    
    // Calculate the difference in days between the current date and the start of Ramadan
    var diffDays = Math.floor((currentDate - ramadanStart) / (1000 * 60 * 60 * 24));
    
    // Update the current date to be the date of Ramadan
    currentDate.setDate(currentDate.getDate() - diffDays);
    
    // Format the current date as required (e.g., "12-March-2024")
    var formattedDate = currentDate.getDate() + "-" + monthNames[currentDate.getMonth()] + "-" + currentDate.getFullYear();
    
    // Highlight the current date in the schedule table
    $(".this-day[data-date="+formattedDate+"]").addClass("table-success");

    // Calculate Sahri, sunrise, and sunset times based on the date of Ramadan
    var sahriTime = calculateSahriTime(currentDate);
    var sunriseTime = calculateSunriseTime(currentDate);
    var iftarTime = calculateIftarTime(currentDate);

    // Update the HTML to display the calculated times
    $(".ramadan-time ul li:nth-child(1) b").text("- " + sahriTime);
    $(".ramadan-time ul li:nth-child(2) b").text("- " + sunriseTime);
    $(".ramadan-time ul li:nth-child(3) b").text("- " + iftarTime);
});

// Function to calculate Sahri time (assumed 1 hour before sunrise)
function calculateSahriTime(date) {
    var sahriHour = date.getHours() - 1;
    var sahriMinute = date.getMinutes();
    return sahriHour.toString().padStart(2, '0') + ':' + sahriMinute.toString().padStart(2, '0');
}

// Function to calculate sunrise time (assumed 6:00 AM)
function calculateSunriseTime(date) {
    return '06:00 AM';
}

// Function to calculate Iftar time (assumed 7:00 PM)
function calculateIftarTime(date) {
    return '07:00 PM';
}

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
