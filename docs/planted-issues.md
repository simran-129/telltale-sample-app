# Planted Usability Issues — Campus Connect

**For facilitators only. Don't show this to participants.**

These 5 problems were added to the site on purpose. They're small, and participants can still finish both tasks, but each one should cause some hesitation, a wrong click, or a question. In the code, each issue is marked with a `PLANTED ISSUE #n` comment.

| # | Issue | Task |
|---|-------|------|
| 1 | Directory menu link is labeled "Resources" | Task 2 |
| 2 | ID office uses jargon ("OneCard"), and search only matches office names | Task 2 |
| 3 | Office hours hidden behind a faint "Details" link | Task 2 |
| 4 | Time slots in 24-hour format | Task 1 |
| 5 | Room sizes hidden in a separate table, plus a vague error when the room is too small | Task 1 |

---

## 1. Vague menu label: "Resources"

- **Where:** Top menu on every page (`index.html`, `book.html`, `directory.html`, `confirmation.html`)
- **What's wrong:** The office directory is labeled "Resources". That word doesn't tell people it's where to find offices, contacts, or hours.
- **What you might see:** The participant scans the menu, hesitates, clicks "Home" or "Book a Room" first, or says "I'm not sure where to go."
- **Why it matters:** Labels should use the user's words and describe what's behind them (information scent, match with the real world).
- **Better fix:** Rename it "Office Directory" or "Find an Office".

## 2. Jargon office name plus name-only search

- **Where:** `directory.html` / `js/directory.js`
- **What's wrong:** The ID office is called "OneCard Services", which is an insider brand name. The search box only matches office **names**, so searching "student ID", "ID card", or "lost ID" shows "No offices found." The word "ID" does appear in the office's summary, but search ignores the summary.
- **What you might see:** The participant searches "ID" or "student ID", gets no results, and concludes the site can't help. They may scroll through the list and skip past "OneCard" because the name doesn't sound right.
- **Why it matters:** Users search with their own words, not the institution's (recognition over recall, match with the real world).
- **Better fix:** Rename it "Student ID Card Office (OneCard)", and make search check the summary and keywords too.

## 3. Office hours hidden behind a faint "Details" link

- **Where:** Office cards on `directory.html` (styled in `css/styles.css`, `.details-toggle`)
- **What's wrong:** Location, phone, and hours are only visible after clicking a small, pale grey "Details ▸" link that doesn't look clickable.
- **What you might see:** The participant finds OneCard Services, then says "It doesn't say the hours" or "Where's the address?" without noticing the link.
- **Why it matters:** Key information is hidden, and the control has poor contrast and weak affordance (visibility, accessibility contrast).
- **Better fix:** Show hours and location right on the card, or make the toggle a clear, high-contrast button.

## 4. 24-hour time slots

- **Where:** "Time" dropdown on `book.html`
- **What's wrong:** Times are listed as "13:00–14:00", "14:00–15:00", and so on, with no "Afternoon" grouping or am/pm. Most US students use 12-hour time.
- **What you might see:** The participant pauses on the dropdown, counts on their fingers, or asks "Is 13:00 afternoon?" Some may pick "12:00–13:00", thinking of noon.
- **Why it matters:** Users have to translate the format in their heads, which adds effort and room for error (match with the real world, cognitive load).
- **Better fix:** Use "1:00 – 2:00 pm" and group options under "Morning / Afternoon / Evening".

## 5. Room sizes hidden away, plus a vague error message

This issue has two parts that work together.

- **Where:**
  - The Room dropdown and "Room info" table in `book.html`
  - The seat-count check in `js/book.js`
- **How to trigger it:** Choose "Quiet Pod A" or "Quiet Pod B" with 3 people, fill in the rest, and click "Book room".
- **What's wrong:**
  - **Part 1:** The Room dropdown shows only room names, like "Quiet Pod A". How many people each room seats is only listed in a separate "Room info" table below the form, which many people won't scroll to or read.
  - **Part 2:** If the room is too small, the error says only "Error: invalid selection (code 42)." It doesn't say which field is wrong or how to fix it, and "code 42" means nothing to users.
- **What you might see:**
  - The participant picks the first room listed (a Quiet Pod) without checking its size.
  - After the error, they re-check the date or time, change the wrong field, or give up.
  - Watch whether they find the "Room info" table on their own, and how long it takes.
- **Why it matters:**
  - Information needed for a decision should be shown where the decision is made (recognition over recall, visibility).
  - Error messages should be in plain language, identify the problem, and suggest a fix (help users recognize, diagnose, and recover from errors).
- **Better fix:**
  - Show seats in the dropdown, e.g. "Quiet Pod A (seats 2)".
  - Rewrite the error to say what to do: "Quiet Pod A only seats 2 people. Please choose a room that fits 3, like Group Room 1."
  - Best of all, hide or disable rooms that are too small for the chosen group size.

---

## Task success criteria (for scoring)

- **Task 1 success:** The participant reaches the confirmation page with a room that seats 3 or more (Group Room 1, 2, or 3), the date set to this Friday, a time slot starting at 12:00 or later, and 3 people.
- **Task 2 success:** The participant says "OneCard Services, Student Center, Lower Level, Room 012" and "Mon–Fri, 10am–3pm, closed 12–1 for lunch."
