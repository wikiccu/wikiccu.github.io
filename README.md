# Saeed Rostami — portfolio

A buildless, static portfolio for GitHub Pages. All public content is semantic HTML in `index.html`; no framework, package installation, remote fonts, API keys, or build step is needed. The supplied resume is the factual source. The system illustration is conceptual, not a product screenshot.

## Preview locally

From the repository root, run `python -m http.server 8000` (or `py -m http.server 8000` on Windows), then open <http://localhost:8000>. Any static HTTP server works. The main content and links also work with JavaScript disabled.

## Update content

`index.html` has comments marking each editable section:

- **Introduction:** name, role, summary, primary actions, GitHub, and LinkedIn. Also update the `<title>`, description, and social metadata in `<head>` when changing the introduction.
- **Work:** the featured Clexi article and the two employer work cards. Keep company attribution and dates; do not present employer work as a personal product. Update only resume-supported technologies and outcomes.
- **Named projects:** LOVE STORY, Pikaap, and User Management System. The resume does not establish their employer, ownership, or dates; those details are intentionally omitted.
- **About:** biography, supported highlights, and education.
- **Experience:** one `<li>` per role in `.timeline`, newest first. Keep dates and job titles consistent with the resume.
- **Skills:** each `.skill-group` contains its own list. No scores or proficiency percentages.
- **Contact:** use the resume email. Update every occurrence of an email or social URL together, including introduction links. The footer year updates with JavaScript and has a static fallback.

Colors, font stacks, spacing, and widths are CSS variables at the top of `css/portfolio.css`. Responsive rules follow the main styles. `js/portfolio.js` only updates the year and active sidebar section. All navigation is standard section anchors; the desktop rail becomes a compact text navigation on mobile.

## Add a project

Copy an `<article class="project-row">` inside `.project-list`. Update the number, heading, description, and documented technology or link. For a larger employer case study, copy `.work-card` inside `.work-grid` and retain the employer context. Keep the problem/purpose and your contribution clear.

Optional fields are ordinary HTML: omit the entire element when it is unavailable. Never use `href="#"`, disabled fake links, placeholder screenshots, or invented technology tags.

- **Live product:** add a descriptive `<a class="text-link" href="https://…">Product name ↗</a>` inside the project article. Use a verified URL.
- **Source code:** optionally add another descriptive anchor with the actual repository URL. Private work does not require a source link.
- **Screenshot:** save an optimized WebP or PNG under `assets/`, then add `<img src="assets/project-name.webp" width="1200" height="750" loading="lazy" alt="Describe the actual interface">` inside the article's content `<div>`. Set the real intrinsic dimensions. Style it with `max-width: 100%; height: auto;` in `css/portfolio.css`. Do not add an image if none is available.

## Replace the resume

Replace `SaeedGoharrostamiResume.pdf` with the updated PDF. The existing path is preserved for compatibility; the download attribute gives visitors the filename `SaeedRostamiResume.pdf`. The current file is an unchanged copy of the supplied two-page resume; its metadata contains only its title and PDF producer. Review future PDFs for unnecessary personal information and private metadata before publishing. Update website facts to match the new resume.

## GitHub Pages

The repository serves files from its root. Keep the existing Pages branch/folder selection; no Actions workflow or build configuration was added. After reviewing and committing locally, publish through your normal GitHub Pages workflow. This task does not push or change repository settings.

All local asset, resume, and legacy redirect paths are relative, so they work at both a root domain and `/repository/`. There is no routing fallback. No `CNAME` exists in the current checkout; none was added or restored. If you add a custom domain later, retain its `CNAME` when updating the site.

Old HTML entry points redirect to the appropriate section, with an accessible link as a fallback. Legacy template assets are retained for a separate cleanup decision; the new portfolio does not load them. Its visual design and code are original, and do not use the old Colorlib template styles or scripts.

## Best inputs for the next iteration

- Screenshots approved for public use, and verified product URLs for Clexi, Virafarin, Volvero, and Pikaap.
- Employer/client context, dates, exact role, technology stack, and ownership for each named project.
- Public source repositories where available; private work can keep product links only.
- Which outcomes are approved to publish and any technical challenges worth explaining in more depth.
- Confirm the current Google Play listing for LOVE STORY and preferred public email/social profiles. The resume supplies the product URL and email; LinkedIn comes from the previous site, and GitHub from this repository's owner.

Do not invent missing material. Add optional screenshots and links only when supplied or verified.
