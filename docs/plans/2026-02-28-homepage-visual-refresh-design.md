# Homepage Visual Refresh Design

## Summary

Refresh the homepage into a research-oriented tech portfolio while preserving the current Jekyll content structure. The redesign keeps the existing two-column layout, but upgrades the visual language, motion, and component consistency so the site better reflects XR and eye-tracking research.

## Goals

- Increase visual polish without rebuilding the site architecture.
- Make the homepage feel more like a curated research portfolio than a blog template.
- Keep the content readable and academically credible.
- Prepare the homepage for future interactive research visualizations.

## Constraints

- Preserve the existing Jekyll + Minimal Mistakes structure.
- Avoid heavy frontend infrastructure changes.
- Do not make the homepage depend on a full WebGL-first experience.
- Keep mobile readability and performance acceptable.

## Approved Direction

### Visual Positioning

- Style: tech portfolio
- Hero style: balanced, combining strong visual focus with readable information density
- Palette: warm neutral base with selective cool-tech highlights

### Layout Strategy

- Keep the current left sidebar + right content flow.
- Upgrade the sidebar to feel like a cleaner personal brand card.
- Turn the homepage hero into a stronger primary visual block.
- Unify cards, tags, buttons, and sections into a single design system.

## Visual System

### Color

- Retain warm neutral surfaces for page background and body content.
- Introduce cool accents for focus states, key tags, dividers, and highlight elements.
- Use contrast to create a stronger “XR / eye-tracking” signature without forcing a dark theme.

### Typography

- Preserve the academic serif-forward heading feel.
- Increase hierarchy contrast in the hero and section headers.
- Improve spacing and rhythm before changing the overall font system.

### Motion

- Increase motion beyond the current subtle polish.
- Use stronger but controlled entrance animations in the hero and cards.
- Add clearer hover transitions for cards, filters, and tags.
- Respect `prefers-reduced-motion`.

## Homepage Changes

### Sidebar

- Simplify and refine the author card presentation.
- Improve grouping and spacing for identity, bio, and links.
- Reduce visual clutter from the default social list styling.

### Hero

- Rebuild the hero as a stronger visual anchor.
- Emphasize name, research positioning, and concise introduction.
- Convert quick links into clearer primary and secondary actions.
- Add atmospheric background treatment with warm/cool blended gradients and soft glow effects.

### Cards

- Apply one consistent card language to highlights, papers, and projects.
- Sharpen borders, spacing, and hover response.
- Make labels and metadata more scannable.

### Timeline And Filters

- Restyle as more system-like navigation controls.
- Increase structure and rhythm in timeline nodes and connectors.
- Make project filters feel more like segmented controls.

## Future Research Visualization Module

### Purpose

Add a dedicated “Research Demo” section that explains the core research area in under ten seconds for a first-time visitor.

### Content Direction

- Prioritize explanation over spectacle.
- Show interpretable visual elements such as fixation points, scanpaths, dwell zones, or target acquisition.
- Include short labels that explain what each visual element means.

### Interaction Level

- Static state should already be informative.
- Interaction should lightly enhance understanding, not gate it.
- Hover or pointer movement can trigger highlights or path emphasis.

### Technology Direction

- Reserve `three.js` for this module only, not the whole homepage.
- Use it later as an implementation option for a contained research visualization block.
- Do not make the core homepage UX depend on WebGL.

## Recommended Delivery Sequence

1. Refresh the homepage visual system and motion in existing templates and SCSS.
2. Improve the sidebar and hero presentation.
3. Unify cards, filters, and timeline styling.
4. Leave a clean insertion point for a later Research Demo module.
5. Add the interactive research visualization in a separate follow-up iteration.

## Success Criteria

- The homepage feels distinctly more like a tech research portfolio.
- Visitors can identify XR / eye-tracking as the main research area immediately.
- The page remains readable, responsive, and maintainable within the current stack.
- The design creates a clear path for future interactive scientific visualization.
