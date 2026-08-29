# rmitOS

A full-stack semester management dashboard built for RMIT University students. Aggregates course data from Canvas LMS and Allocate+ timetabling into a single dark-mode interface, with grade projection, assessment tracking, and a live timetable.

**Live:** `https://rmitos.pages.dev` &nbsp;·&nbsp; **Stack:** React 18 · Vite · Cloudflare Pages

---

## Features

- **Calendar import** — parses `.ics` feeds from Canvas and Allocate+ with separate source-aware importers; intelligently distinguishes class sessions from graded assessments using section-code detection
- **Assessment tracker** — sortable by due date or grade weight, filterable by course, with starred-item checklist grouped by teaching week
- **14-day horizon** — signature visualisation showing upcoming work as a timeline strip where bar height encodes percentage contribution to the final grade
- **Live timetable** — weekly grid with date-anchored class sessions (so break weeks show empty), due-date chips per day, and week-by-week navigation
- **Grade projections** — per-course weighted average, HD/DI/CR/PA ceiling and target calculator; automatically falls back to points-based weighting when percentage weights aren't set, so freshly imported courses calculate correctly
- **Historical mark entry** — inline score input with configurable out-of value for recording past results
- **Per-user data isolation** — all state persisted to `localStorage` under the user's own browser, never transmitted or shared; no backend, no authentication server
- **Canvas OAuth scaffolding** — authorisation URL wired to RMIT's Canvas endpoint, ready for a developer key

## Technical highlights

- Custom ICS parser with RRULE weekly-recurrence expansion — no external calendar library
- Source-aware import pipeline: Allocate+ feed creates timetable entries, Canvas feed creates assessments; cross-source class-session detection prevents duplicate pollution
- Course resolution by code, bracketed subject name, and Canvas course URL ID, with fuzzy normalised-name matching across sources
- Import audit log surfaced in the UI — every parsed event shown with its verdict so users can diagnose missing items without needing devtools
- Fully client-side: zero server, zero telemetry, deployable as a static site


## Project structure

```
src/
  App.jsx        # entire application — parser, state, all views
  main.jsx       # ReactDOM entry point
index.html
vite.config.js
```

---

Built as a personal project to solve a real gap: RMIT has Canvas, Allocate+, and a gradebook, but no single place that shows you everything at once.
