// =========================================================
// directory.js — runs on the office directory page
// It holds the fake office data, shows it as cards,
// and filters the cards when someone types in the search box.
// =========================================================

// ---------- The fake data ----------
// Each office is an "object" with labeled pieces of information.
// To add an office, copy one { ... } block and change the text.

var offices = [
  {
    name: "Registrar's Office",
    summary: "Transcripts, enrollment verification, and course registration.",
    location: "Hayden Hall, Room 120",
    phone: "(555) 010-1200",
    hours: "Mon–Fri, 9:00am–4:30pm"
  },
  {
    name: "Financial Aid",
    summary: "Scholarships, grants, loans, and work-study.",
    location: "Hayden Hall, Room 140",
    phone: "(555) 010-1400",
    hours: "Mon–Thu, 9:00am–5:00pm; Fri, 9:00am–12:00pm"
  },
  {
    // PLANTED ISSUE #2: this is where students replace a lost ID,
    // but the name is campus jargon. The word "ID" only appears in the
    // summary, and the search below only checks the name.
    name: "OneCard Services",
    summary: "Student ID cards, replacements, and meal plan balances.",
    location: "Student Center, Lower Level, Room 012",
    phone: "(555) 010-0120",
    hours: "Mon–Fri, 10:00am–3:00pm (closed 12:00–1:00pm for lunch)"
  },
  {
    name: "Housing & Residential Life",
    summary: "Room assignments, maintenance requests, and move-in.",
    location: "Speare Commons, Room 5",
    phone: "(555) 010-0500",
    hours: "Mon–Fri, 8:30am–5:00pm"
  },
  {
    name: "Library Help Desk",
    summary: "Research help, printing, and study room questions.",
    location: "Snell Library, 1st Floor",
    phone: "(555) 010-2200",
    hours: "Mon–Thu, 8:00am–10:00pm; Fri, 8:00am–6:00pm; Sat–Sun, 12:00pm–6:00pm"
  },
  {
    name: "IT Service Desk",
    summary: "Wi-Fi, account passwords, and laptop help.",
    location: "Snell Library, Room 108",
    phone: "(555) 010-4357",
    hours: "Mon–Fri, 8:00am–8:00pm"
  },
  {
    name: "Health & Counseling Center",
    summary: "Appointments, immunizations, and counseling services.",
    location: "Forsyth Building, 1st Floor",
    phone: "(555) 010-9100",
    hours: "Mon–Fri, 8:30am–5:00pm"
  },
  {
    name: "Campus Police",
    summary: "Safety escorts, lost and found, and parking permits.",
    location: "Gainsborough Garage, Ground Floor",
    phone: "(555) 010-9111",
    hours: "Open 24 hours, 7 days a week"
  }
];


// ---------- Showing the offices on the page ----------

var list = document.getElementById("office-list");

// Builds one office card and returns it
function makeOfficeCard(office) {
  var card = document.createElement("div");
  card.className = "office";

  var heading = document.createElement("h2");
  heading.textContent = office.name;

  var summary = document.createElement("p");
  summary.className = "summary";
  summary.textContent = office.summary;

  // PLANTED ISSUE #3: location and hours are hidden until you click this
  // small, pale "Details" link (its look is set in css/styles.css).
  var toggle = document.createElement("button");
  toggle.className = "details-toggle";
  toggle.textContent = "Details ▸";

  var details = document.createElement("div");
  details.className = "office-details";
  details.innerHTML = "<p><strong>Location:</strong> <span class='loc'></span></p>" +
                      "<p><strong>Phone:</strong> <span class='phone'></span></p>" +
                      "<p><strong>Hours:</strong> <span class='hours'></span></p>";
  details.querySelector(".loc").textContent = office.location;
  details.querySelector(".phone").textContent = office.phone;
  details.querySelector(".hours").textContent = office.hours;

  // Clicking "Details" opens or closes the details section
  toggle.addEventListener("click", function () {
    details.classList.toggle("open");
    toggle.textContent = details.classList.contains("open") ? "Hide details ▾" : "Details ▸";
  });

  card.appendChild(heading);
  card.appendChild(summary);
  card.appendChild(toggle);
  card.appendChild(details);
  return card;
}

// Clears the list and shows the offices it's given
function showOffices(officesToShow) {
  list.innerHTML = "";

  if (officesToShow.length === 0) {
    var message = document.createElement("p");
    message.className = "no-results";
    message.textContent = "No offices found.";
    list.appendChild(message);
    return;
  }

  for (var i = 0; i < officesToShow.length; i++) {
    list.appendChild(makeOfficeCard(officesToShow[i]));
  }
}

// Show every office when the page first loads
showOffices(offices);


// ---------- Search ----------

var searchBox = document.getElementById("search");

// "input" runs every time the person types a letter
searchBox.addEventListener("input", function () {
  var searchText = searchBox.value.toLowerCase().trim();

  // PLANTED ISSUE #2 (continued): we only check the office NAME.
  // So "student ID" or "lost card" finds nothing. A better search
  // would also check office.summary.
  var matches = offices.filter(function (office) {
    return office.name.toLowerCase().indexOf(searchText) !== -1;
  });

  showOffices(matches);
});
