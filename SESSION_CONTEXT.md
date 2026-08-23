# Inkwazi Session Context

This file is the shared entry point for Codex and Antigravity sessions working in this repository.

## What this web app is

Inkwazi is a static, markdown-driven portfolio of evidence for a six-week field guide course. The site presents notes, assessments, practical skills, and field-knowledge pages as a navigable web app.

## How it is used

- Open the site in a browser and use the left sidebar to switch between pages.
- Each sidebar item loads a markdown file from the repository root.
- The content is rendered client-side into HTML.
- Markdown notes can include Obsidian-style wiki links such as `[[Trees]]` and image embeds such as `![[Pasted image 20260823123001.png]]`.
- `Tasks.md` is kept separate as a working area and is not part of the main evidence flow.

## Underlying structure

### Source of truth

- The repository root contains the content files, such as `README.md`, `Trees.md`, `Birds.md`, and `Assessments.md`.
- Image assets also live at the repository root, including the pasted screenshots used in the notes.
- The markdown files are the content source of truth, not generated HTML files.

### Rendering flow

- `index.html` loads the UI shell.
- `app.js` builds the sidebar, fetches the selected markdown file, preprocesses Obsidian-specific syntax, sanitizes the result, and injects HTML into the content area.
- `styles.css` controls the app layout and markdown presentation.

### Obsidian conventions

- The notes were authored in Obsidian and still use Obsidian-style wiki links and embeds.
- `app.js` translates those patterns into web-safe links and images for browser rendering.
- The app also supports collapsible headings and nested lists after markdown is rendered.

### GitHub Pages

- The published version is the static site version of the same repository.
- GitHub Pages serves the checked-in files, so the committed markdown is the deployment source.
- If the local browser looks stale, the issue is usually cache or client-side state, not the markdown file itself.

### Local development

- The site is commonly run with Python’s `http.server`.
- The local server serves the same static files as GitHub Pages, but browser caching can still affect what is shown.

## Important operating notes

- When changing page content, update the markdown files directly.
- When changing navigation or rendering behavior, update `app.js`.
- When changing look and feel, update `styles.css`.
- If a session needs project context, start with this file and then inspect the relevant page markdown.

