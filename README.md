# StatMech — Statistical Mechanics Field Notes

A separate **GitHub Pages** website for MS Physics Statistical Mechanics, styled like the EM website: black background, white text, responsive for a Galaxy Watch8 browser, MathJax v3 SVG equations.

**Stage: syllabus and topic selection only.** The site contains 12 proposed chapters and 67 selectable sections, but not yet the full derivations. Your first three requested topics are expanded as chapters 04, 05 and 09.

## Publishing on GitHub Pages

In **Settings → Pages**, choose `Deploy from a branch`, branch `main`, folder `/(root)`, then Save.

Expected URL: https://geeeooooo.github.io/StatMech/

No Render, database, or build command is needed. MathJax loads from jsDelivr, so rendering needs an internet connection when not already cached. Long equations can scroll on narrow screens.

## Editing

- `index.html` contains the outline and MathJax configuration.
- `style.css` defines black-and-white responsive layouts.
- `app.js` handles selecting topics, local persistence, search, font size, and copying selections.
- `icon.svg` supplies the monochrome site icon.

Tick desired subsections, then copy your choices into ChatGPT for expansion. The saved selection is per browser, not synchronized between devices.
