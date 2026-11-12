# Statistical Mechanics · Field Notes

A responsive black-and-white statistical mechanics reference for MS Physics, published as a static site directly from GitHub Pages. No Render backend is needed.

## Contents

**12 authored lesson pages** under `chapters/01.html` through `chapters/12.html`:

- 01. Thermodynamic Foundations — Laws, entropy, free energies, Maxwell relations, and reversible adiabatic processes.
- 02. Microstates and Entropy — Multiplicity, the Gibbs formula, spin counting and thermal equilibrium.
- 03. Statistical Ensembles — Microcanonical, canonical, and grand canonical distributions derived.
- 04. Canonical Partition Functions — Derive Z, F, U, S, P, CV; energy fluctuations and two-level example.
- 05. Quantum States and Boundary Conditions — Why box states start at 1 and oscillator states at 0; 2D/3D spectra.
- 06. Classical Ideal Gases and Equipartition — Phase-space integration, Sackur–Tetrode, ideal-gas thermodynamics, speeds.
- 07. MB, BE, and FD Statistics — Derive Bose and Fermi occupation laws and their classical limit.
- 08. Density of States in 1D, 2D, and 3D — State counting in k-space, energy integrals and Fermi energy.
- 09. Quantum-to-Classical Temperature Limits — Low/high T for quantum oscillators and 1D–3D particle boxes.
- 10. Einstein and Debye Solids — Phonon partition functions and low/high temperature heat capacities.
- 11. Fluctuations and Phase Behavior — Fluctuation–response, stability, coexistence and mean-field transitions.
- 12. Comprehensive Exam Toolkit — Fully solved problems, key equations, limiting cases and exam checks.

The initial outline has been replaced by an actual chapter index. Each lesson includes explanations, derivations, and examples. The coverage is deliberately modular and can be expanded as new examples and subtopics are requested; it is not a substitute for a complete graduate textbook.

## Run and publish

For a simple local preview, serve the repository directory using `python -m http.server 8000` and open `http://localhost:8000`.

To publish directly using **GitHub Pages**:
1. Go to repository **Settings → Pages**.
2. Under *Build and deployment* choose **Deploy from a branch**.
3. Set branch `main`, folder `/(root)`, and Save.

Expected published URL: https://geeeooooo.github.io/StatMech/

## Files

- `index.html` — chapter home, MathJax equations, search.
- `chapters/*.html` — authored textbook-style chapters.
- `style.css` — high contrast black and white design, adaptable to small watch screens.
- `reader.js` — text size, collapsible derivations, chapter search.
- `icon.svg` — monochrome site icon.

MathJax 3 SVG is fetched via jsDelivr; loading math for the first time requires a network connection. Equations are escaped to keep comparison and alignment symbols from being interpreted as HTML. Very long mathematical expressions scroll horizontally on narrow screens.

The connected [Electromagnetism](https://geeeooooo.github.io/EM/) reference is a separate GitHub repository.
