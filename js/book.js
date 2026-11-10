// =========================================================
// book.js — runs on the "Book a Room" page
// It does two jobs:
//   1. Fills the Date dropdown with the next 7 days.
//   2. Checks the form when "Book room" is clicked.
// =========================================================

// ---------- Job 1: fill in the dates ----------

var dateSelect = document.getElementById("date");
var today = new Date();

// Loop 7 times: today, tomorrow, the day after, and so on.
for (var i = 0; i < 7; i++) {
  // Make a copy of today's date, then move it forward i days.
  var day = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);

  // What the person sees, e.g. "Friday, November 13"
  var label = day.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });

  // What gets sent to the confirmation page, e.g. "2026-11-13"
  var value = day.getFullYear() + "-" +
              String(day.getMonth() + 1).padStart(2, "0") + "-" +
              String(day.getDate()).padStart(2, "0");

  // Create a new <option> and add it to the dropdown
  var option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  dateSelect.appendChild(option);
}


// ---------- Job 2: check the form ----------

var form = document.getElementById("booking-form");
var errorBox = document.getElementById("error-box");

// Shows a message in the red error box
function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.add("visible");
}

// Hides the red error box
function hideError() {
  errorBox.textContent = "";
  errorBox.classList.remove("visible");
}

// This runs when someone clicks "Book room"
form.addEventListener("submit", function (event) {
  // Stop the form from leaving the page until we've checked it
  event.preventDefault();
  hideError();

  var roomSelect = document.getElementById("room");
  var room = roomSelect.value;
  var date = dateSelect.value;
  var time = document.getElementById("time").value;
  var people = document.getElementById("people").value;
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();

  // Check 1: is anything left blank?
  if (!room || !date || !time || !people || !name || !email) {
    showError("Please fill in every field before booking.");
    return; // stop here
  }

  // Check 2: does the email look like an email (has an @)?
  if (email.indexOf("@") === -1) {
    showError("Please enter a valid email address, like you@campus.edu.");
    return;
  }

  // Check 3: does the room have enough seats for the group?
  // Find the chosen <option> and read its data-seats number.
  var chosenOption = roomSelect.options[roomSelect.selectedIndex];
  var seats = Number(chosenOption.dataset.seats);

  if (Number(people) > seats) {
    // PLANTED ISSUE #5: this message doesn't say WHAT is wrong (the room is too small)
    // or HOW to fix it (pick a bigger room). A better message would be:
    // "Quiet Pod A only seats 2. Please choose a room for 3 or more people."
    showError("Error: invalid selection (code 42).");
    return;
  }

  // Everything looks good, so go to the confirmation page.
  // form.submit() sends the answers along in the web address.
  form.submit();
});
