# Caltech Course Planner

A 4-year academic schedule planner for Caltech undergraduates. Plan your courses across all four years, track degree requirements, and avoid time conflicts.

## Features

- **4-year schedule grid** — drag and drop courses into any year (Freshman–Senior) and term (Fall/Winter/Spring)
- **Course catalog** — search and filter 200+ courses across all Caltech departments, with meeting times and unit counts
- **Core requirements tracking** — progress bars for Caltech's 486-unit core graduation requirements
- **Major & minor requirements** — checklist view for 15+ majors and 8+ minors; hover a requirement to highlight matching courses on the grid
- **Time conflict detection** — courses with overlapping meeting times are flagged automatically
- **Custom courses** — create custom course entries for research, off-campus credits, or courses not in the catalog
- **Unit progress bar** — tracks total scheduled units toward the 486-unit graduation requirement

## Course Data

Course catalog is sourced from the [Caltech Registrar schedules](https://registrar.caltech.edu/schedules) (FA/WI/SP, 2021–22 through 2025–26) and the [Caltech Undergraduate Catalog](https://catalog.caltech.edu/current/information-for-undergraduate-students/). Meeting times reflect the most recent academic year available.

## Stack

- React 19 + TypeScript
- Vite 7
- No external UI libraries — plain CSS

## Getting Started

```bash
nvm use 22
npm install
npm run dev
```

App runs at `http://localhost:5173`.

```bash
npm run build   # production build → dist/
```
