// =========================================================
// confirmation.js — runs on the confirmation page
// The booking form put the answers in the web address, like:
//   confirmation.html?room=Group+Room+3&date=2026-11-13&time=13%3A00...
// This file reads them back out and shows them on the page.
// Nothing is saved anywhere.
// =========================================================

// URLSearchParams is a built-in tool for reading the "?..." part of a web address
var params = new URLSearchParams(window.location.search);

// Turns "2026-11-13" into something friendly like "Friday, November 13, 2026"
function friendlyDate(isoDate) {
  if (!isoDate) return "";
  var parts = isoDate.split("-"); // ["2026", "11", "13"]
  var date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

// Put each answer into its spot on the page.
// textContent is used (not innerHTML) so typed text is always shown as plain text.
document.getElementById("sum-room").textContent = params.get("room") || "—";
document.getElementById("sum-date").textContent = friendlyDate(params.get("date")) || "—";
document.getElementById("sum-time").textContent = params.get("time") || "—";
document.getElementById("sum-people").textContent = params.get("people") || "—";
document.getElementById("sum-name").textContent = params.get("name") || "—";

// Make up a fake booking number, e.g. "CC-4821"
var randomNumber = Math.floor(1000 + Math.random() * 9000);
document.getElementById("booking-number").textContent = "CC-" + randomNumber;
