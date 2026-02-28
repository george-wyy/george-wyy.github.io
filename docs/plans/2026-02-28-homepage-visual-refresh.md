# Homepage Visual Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade the homepage into a more polished tech portfolio while preserving the current Jekyll structure and preparing for a future research visualization module.

**Architecture:** Keep the existing Minimal Mistakes layout and homepage content structure, then concentrate changes in the homepage markdown, shared sidebar include, and custom SCSS. Use progressive enhancement for motion and interactions so the page remains usable without any future advanced visualization layer.

**Tech Stack:** Jekyll, Liquid templates, SCSS, existing theme JavaScript, optional future `three.js` module (not in this pass)

---

### Task 1: Baseline And Visual Audit

**Files:**
- Review: `_pages/about.md`
- Review: `_includes/author-profile.html`
- Review: `_sass/_custom.scss`
- Review: `_layouts/single.html`

**Step 1: Capture the current homepage structure**

Check the current homepage blocks and note the components that must remain:

- Sidebar author profile
- Hero block
- Highlights
- Quick links
- Timeline
- Recent publications
- Project filters and project cards

**Step 2: Verify where existing styles are defined**

Run: `rg -n "profile-hero|highlight-card|paper-card|project-card|timeline|author__" _pages _includes _sass`

Expected: matching homepage markup and custom styles are found in the homepage markdown, author include, and custom SCSS.

**Step 3: Confirm the visual refresh stays scoped**

Do not change collection data, collection generators, or unrelated archive layouts in this task.

**Step 4: Commit checkpoint**

```bash
git add docs/plans/2026-02-28-homepage-visual-refresh-design.md docs/plans/2026-02-28-homepage-visual-refresh.md
git commit -m "docs: add homepage visual refresh design and plan"
```

### Task 2: Write The Failing Markup Changes

**Files:**
- Modify: `_pages/about.md`
- Modify: `_includes/author-profile.html`

**Step 1: Write the failing structural changes**

Add the missing semantic wrappers and utility classes needed by the redesign, such as:

- More intentional hero substructure
- Clear action group wrappers for quick links
- Better sidebar grouping hooks
- A reserved insertion block for a future research demo section

Example target markup:

```html
<section class="profile-hero profile-hero--immersive">
  <div class="profile-hero__content">...</div>
  <div class="profile-hero__actions">...</div>
</section>
```

**Step 2: Verify the old selectors no longer fully cover the new structure**

Run: `bundle exec jekyll build`

Expected: build succeeds, but the new classes are visually unstyled or partially styled until SCSS is updated.

**Step 3: Commit checkpoint**

```bash
git add _pages/about.md _includes/author-profile.html
git commit -m "feat: add homepage structure hooks for visual refresh"
```

### Task 3: Write The Failing Style Layer

**Files:**
- Modify: `_sass/_custom.scss`

**Step 1: Add or update design tokens**

Introduce or refine tokens for:

- warm neutral surfaces
- cool accent states
- stronger highlight glows
- card border and shadow states
- motion durations and easing

**Step 2: Add hero and sidebar styles**

Implement the new hero and sidebar presentation:

- stronger hero hierarchy
- improved sidebar brand-card feel
- clearer action buttons
- blended warm/cool visual accents

**Step 3: Add unified card and control styles**

Implement consistent styling for:

- highlight cards
- paper cards
- project cards
- project filters
- timeline nodes and connectors

**Step 4: Add motion and accessibility behavior**

Implement:

- stronger reveal and hover motion
- restrained transforms and shadow transitions
- `prefers-reduced-motion` fallback

**Step 5: Verify styles compile**

Run: `bundle exec jekyll build`

Expected: build succeeds with the updated SCSS and no syntax errors.

**Step 6: Commit checkpoint**

```bash
git add _sass/_custom.scss
git commit -m "feat: refresh homepage visual system and motion"
```

### Task 4: Add Future Research Demo Insertion Point

**Files:**
- Modify: `_pages/about.md`
- Modify: `_sass/_custom.scss`

**Step 1: Add a non-WebGL placeholder section**

Create a lightweight placeholder block that communicates the upcoming research visualization area without introducing a runtime dependency yet.

Example target markup:

```html
<section class="research-demo research-demo--placeholder">
  <div class="research-demo__copy">...</div>
  <div class="research-demo__stage" aria-hidden="true"></div>
</section>
```

**Step 2: Style it as an explanatory module**

The section should:

- read as a dedicated “Research Demo” area
- support short explanatory labels
- visually fit the new homepage system

**Step 3: Verify placement**

Run: `bundle exec jekyll build`

Expected: the section appears in the homepage flow without breaking responsive layout.

**Step 4: Commit checkpoint**

```bash
git add _pages/about.md _sass/_custom.scss
git commit -m "feat: add homepage research demo placeholder"
```

### Task 5: Manual QA And Regression Check

**Files:**
- Review: `_pages/about.md`
- Review: `_includes/author-profile.html`
- Review: `_sass/_custom.scss`

**Step 1: Run a full site build**

Run: `bundle exec jekyll build`

Expected: build completes successfully.

**Step 2: Spot-check key pages**

Review:

- homepage `/`
- publications page
- research page
- portfolio page

Expected: shared styles improve appearance without breaking non-homepage layouts.

**Step 3: Check responsive behavior**

Verify:

- sidebar behavior on desktop
- stacking order on mobile
- no horizontal overflow
- readable button and card tap targets

**Step 4: Check motion accessibility**

Verify:

- reveal and hover transitions are noticeable but controlled
- reduced-motion mode avoids unnecessary animation

**Step 5: Final commit**

```bash
git add _pages/about.md _includes/author-profile.html _sass/_custom.scss
git commit -m "feat: polish homepage into tech portfolio style"
```

### Task 6: Follow-Up Iteration For Interactive Research Visualization

**Files:**
- Future modify: `_pages/about.md`
- Future modify: `_sass/_custom.scss`
- Future create: `assets/js/research-demo.js`
- Future modify: `_includes/scripts.html`

**Step 1: Prototype the explanatory research visualization**

Build a self-contained module that visualizes:

- fixation points
- scanpaths
- target acquisition

**Step 2: Start with a non-Three.js proof**

Prototype in DOM/SVG or canvas first to validate the explanatory model before adding a WebGL dependency.

**Step 3: Upgrade to `three.js` only if needed**

Only introduce `three.js` if:

- the explanatory value clearly improves
- performance remains acceptable
- the module stays isolated from the rest of the page

**Step 4: Verify graceful fallback**

The homepage must remain fully usable if the visualization is disabled, unsupported, or deferred.
