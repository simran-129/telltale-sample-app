# Campus Connect (usability test site)

A small, fake campus services website for usability testing. All the data is made up, and nothing is sent anywhere or saved.

## How to open it
Double-click `index.html`. It opens in your web browser. That's it: no installs and no server.

## The pages
| Page | File | What it's for |
|------|------|---------------|
| Home | `index.html` | Welcome page with links |
| Book a Room | `book.html` | Study room booking form (Task 1) |
| Resources | `directory.html` | List of campus offices (Task 2) |
| Confirmation | `confirmation.html` | Shown after a booking |

## The other files
- `css/styles.css` controls how every page **looks** (colors, spacing, fonts).
- `js/book.js` fills in the dates and **checks the booking form**.
- `js/directory.js` holds the **fake office list** and makes the search box work. To edit an office, change the text inside the `offices` list.
- `js/confirmation.js` reads the booking details from the web address and shows them.
- `docs/planted-issues.md` is the facilitator's list of the 5 usability problems added on purpose. **Don't show it to participants.**

## Participant tasks
1. Book a study room for 3 people this Friday afternoon.
2. Find where to replace a lost student ID and what hours that office is open.

## How "nothing is saved" works
When the booking form is submitted, the answers are added to the end of the web address (for example `confirmation.html?room=Group+Room+3...`), and the confirmation page reads them from there. No server receives them. The only trace is the browser's normal history, so between participants, close the tab and start again from `index.html`.

## Changing a planted issue
Search the code for `PLANTED ISSUE` to find each one. Every spot has a comment explaining what to change for the "fixed" version.
