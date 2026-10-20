# PA 111 Interactive Exam Reviewer

## Purpose
Syllabus-aligned PA 111 (Management of Organizations) reviewer with topic pages, concept connections, essay practice, and a dedicated **Possible Essay Exam Questions** tab with suggested answers.

## Tech Stack
- React + TypeScript + Vite
- React Router
- Inter font (@fontsource/inter)
- Light earth-tone design tokens

## Quick Start
`ash
npm install
npm run dev
`

## Build
`ash
npm run build
npm run preview
`

## Deployment (Cloudflare Pages)
- Build command: 
pm run build
- Output directory: dist
- For SPA routing, add _redirects with /* /index.html 200 (or configure Pages redirects)

## Content
- src/data/ contains structured content (divisions, topics, questions/answers). Keep academic content separate from UI.
- Source files in source-materials/ (preserved). See docs/SOURCE_AUDIT.md.

## Notes
Questions/answers are practice material, not predictions of actual exam. Distinguish prescribed vs supplementary content.
