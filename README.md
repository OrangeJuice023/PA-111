# README

PA 111 Exam Reviewer - A syllabus-aligned, essay-focused static website for Public Administration 111.

## Features

- **Home Page**: Overview and quick navigation to all sections
- **Syllabus**: Organized by course divisions following the reading set
- **Topic Pages**: Integrated notes with key concepts, definitions, relationships, comparisons, applications, examples
- **Concept Connections**: How theories relate across schools (Classical, Human Relations, Modern, Emerging)
- **Essay Practice**: Situational questions with CEACE framework (Claim, Explanation, Application, Comparison, Evaluation) and planning worksheets

## Tech Stack

- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React Router](https://reactrouter.com/) - Client-side routing
- Responsive CSS with green accents (academic design)

## Content Structure

Content is stored separately from UI components in src/data/:
- 	ypes.ts - TypeScript interfaces
- content.ts - Divisions and topics with sources, confidence levels, placeholders

This allows easy integration of consolidated notes without rebuilding the site structure.

## Development

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Setup
`ash
npm install
`

### Development Server
`ash
npm run dev
`
Opens at http://localhost:5173

### Build
`ash
npm run build
`
Outputs to dist/ directory. TypeScript compiles first with 	sc.

### Preview Production Build
`ash
npm run preview
`

## Deployment (Cloudflare Pages)

### Option 1: Git Integration (Recommended)
1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your repository
4. Configure build settings:
   - **Build command**: 
pm run build
   - **Build output directory**: dist
   - **Node version**: 18 or higher
5. Deploy

### Option 2: Direct Upload
1. Build the project: 
pm run build
2. Go to Cloudflare Pages → Create a project → Upload assets
3. Upload the contents of the dist/ folder

## Notes on Content

- Based on four source files: Reading Set 1, Consolidated Syllabus-Aligned Notes, PA 111 NOTES, PA 111 EXAM REVIEWER
- Some material is marked with placeholders where content couldn't be confidently extracted
- Follows syllabus divisions from the reading set while incorporating lecture deck structure
- Essay focus emphasizes situational application and theory comparison

## Project Structure

`
src/
├── components/     # Reusable components (Layout)
├── data/           # Content data and types
├── pages/          # Page components (Home, Syllabus, TopicPage, etc.)
├── styles/         # Global styles
└── utils/          # Utility functions
`

## License

For educational purposes only.
