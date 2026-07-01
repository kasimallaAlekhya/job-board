# Job Board

A responsive job listing web application built with React, featuring search and filter functionality for browsing open roles.

**Live Demo:** https://job-board-phi-teal.vercel.app
**Repository:** https://github.com/kasimallaAlekhya/job-board

## Features

- **Search** — Find roles instantly by job title, company name, location, or skill tag.
- **Filter by work mode** — Toggle between All, Onsite, Hybrid, and Remote listings.
- **Job cards** — Each listing displays the role title, company, location, employment type, time posted, and relevant skill tags.
- **Job details view** — Tap any job card to open a detailed view with the full listing information and an apply action.
- **Responsive layout** — Adapts from a single column on mobile to a multi-column grid on larger screens.
- **Empty state handling** — Displays a friendly message when a search or filter returns no results.

## Tech Stack

- **React 18** — Component-based UI, built with functional components and hooks (`useState`, `useMemo`).
- **Tailwind CSS** — Utility-first styling via CDN, used for layout, spacing, and responsive design.
- **lucide-react** — Icon library for search, location, briefcase, clock, and close icons.
- **Create React App** — Project scaffolding and build tooling.
- **Vercel** — Hosting and continuous deployment, connected directly to the GitHub repository.

## Project Structure

```
job-board/
├── public/
│   └── index.html      # HTML shell and root mount point
├── src/
│   ├── index.js         # React entry point
│   └── App.js            # Main application: job data, search, filters, UI
└── package.json           # Dependencies and build scripts
```

## How It Works

1. Job listings are stored as an array of objects in `App.js`, each with fields for title, company, location, type, work mode, posted date, and tags.
2. The search box filters listings in real time by matching the query against the title, company, location, and tags (case-insensitive).
3. The mode filter buttons (All / Onsite / Hybrid / Remote) narrow the list further based on the selected work mode.
4. Filtering logic is memoized with `useMemo` so the list only recalculates when the search query or selected mode changes.
5. Clicking a job card opens a modal with full details and an apply button.

## Running Locally

```bash
npm install
npm start
```
The app runs at `http://localhost:3000`.

## Deployment

The project is connected to Vercel via GitHub. Every push to the main branch automatically triggers a new production build and deployment — no manual steps required.
