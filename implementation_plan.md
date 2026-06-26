# Phase 3 — Effects, Motion & Cinematic Polish

## Goal Description
The objective of Phase 3 is to elevate the approved Aetheris AI landing page using premium, cinematic, editorial-quality motion and interactive design. The visual experience must feel technical, elegant, editorial, and confident, avoiding flashy or distracting animations. Every animation will communicate hierarchy, focus, and polish, strictly adhering to the "No spring bounces, no keyframe loops" brand directive and respect `prefers-reduced-motion` settings.

---

## User Review Required

> [!IMPORTANT]
> **Key Design Guidelines & Constraints:**
> - **Motion Easing**: Animations must avoid standard bouncy springs or frantic bounces, using the official brand curve `cubic-bezier(0.25, 0.1, 0.25, 1)` or customized cinematic easings (e.g., `cubic-bezier(0.9, 0, 0.1, 1)` hop curve).
> - **No Infinite Loops**: Avoid running constant keyframe spin loops. For example, gears and rotators should only spin on active scroll or active hover, maintaining a quiet, serious aesthetic.
> - **Performance**: Keep rendering at 60 FPS. All coordinates will be bound to GPU-accelerated CSS properties (`transform: translate3d`, `opacity`, `filter`, and CSS variables for cursor tracking) to prevent layout thrashing.

---

## Open Questions

None at this stage. The requirements are fully detailed in the brand guidelines and reference files.

---

## Motion Audit & Reference Selection

### 1. Motion Audit
- **Navbar**: Currently snaps between heights with a simple duration. We will introduce a smooth fade-and-slide drop on load, with subtle layout transitions and underline drift states.
- **Hero Section**: Entrance is a flat block fade-up. We will convert this into an editorial cinematic reveal with word/line stagger fades.
- **Cards (Features / Pricing / Testimonials)**: Standard fade-up on scroll. We will add a sophisticated 3D tilt response and a radial glass highlight reflecting mouse coordinates.
- **CTAs & Buttons**: Static or simple translate. We will add a magnetic cursor pull and localized glow expansion.

### 2. Comprehensive Reference Library Inspections & Selected Principles
- **01_OBYS_EDITORIAL & 06_LANDING_REVEAL**:
  - *Principle: Line Masking & Editorial Text Reveals*. Headings reveal line-by-line using block wrappers (`overflow-hidden`) translating up from `yPercent: 120` to `0` with a steep easing curve (`cubic-bezier(0.9, 0, 0.1, 1)`).
- **02_SAMURAI_LOADER & 06_LANDING_REVEAL**:
  - *Principle: Progressive Matrix Loading*. Incrementing matrix-style digits simulation from `000` to `100` coupled with vertical slide wipes using `clip-path: polygon(...)`.
- **03_FURROW_STORY**:
  - *Principle: Smart Show-Hide Navigation*. The navbar automatically hides when scrolling down (enhancing reader immersion) and slides back down immediately when scrolling up.
  - *Principle: Vignette Depth Overlay*. Background visuals use inner vignette mask shadows (`shadow-[inset_0_0_80px_rgba(...)]`) that contract slightly on hover to simulate camera focus adjustments.
- **04_PARALLAX_DEPTH**:
  - *Principle: Speed-Calibrated Translate Parallax*. Scroll translations tied to relative elements using unique speed factors, generating physical depth on visual overlays.
- **07_YOOZHAA_COMPONENTS**:
  - *Principle: CSS-Driven Spotlight Glow (Hero / CTA)*. Track cursor globally and update CSS variables (`--mouse-x` and `--mouse-y`) on the root. Radial spotlight gradient masks inside `.glass` surfaces consume these coordinates directly in CSS, maintaining 60 FPS by avoiding React state re-renders.
  - *Principle: Group Hover Fade-Out (TrustedBy / Navbar)*. When the parent is hovered, all child siblings dim to `opacity: 0.3` while the active hovered child remains fully opaque (`opacity: 1`), directing visual priority.
  - *Principle: Magnetic CTA Pull*. Compute distance from button center and shift translation up to 20% towards the pointer, resetting with smooth return transitions.

---

## Proposed Changes

We will introduce reusable custom hooks to keep our components pristine, and then integrate them selectively into sections.

### Components & Hooks

#### [NEW] [useMousePosition.ts](file:///d:/WebProjects/Aetheris%20AI/src/hooks/useMousePosition.ts)
A custom hook that tracks mouse coordinates globally or locally, updating CSS variables on targeted elements for spotlight and tilt overlays.

#### [NEW] [useMagnetic.ts](file:///d:/WebProjects/Aetheris%20AI/src/hooks/useMagnetic.ts)
A custom hook returning element references and CSS styles to apply the magnetic drag transform on hover.

#### [NEW] [useTilt.ts](file:///d:/WebProjects/Aetheris%20AI/src/hooks/useTilt.ts)
A custom hook that tracks local hover position over a card and generates 3D transform strings and mouse-tracking CSS variables.

#### [NEW] [useNumberCounter.ts](file:///d:/WebProjects/Aetheris%20AI/src/hooks/useNumberCounter.ts)
A lightweight count-up utility targeting metrics/numeric values when they enter the viewport.

#### [NEW] [CinematicCursor.tsx](file:///d:/WebProjects/Aetheris%20AI/src/components/ui/CinematicCursor.tsx)
A custom cursor tracker placed globally in `MainLayout`. Uses CSS transform coordinates and transitions to follow the mouse at 60 FPS, with scaling and opacity states for interactive links.

---

### Component Integration

#### [MODIFY] [MainLayout.tsx](file:///d:/WebProjects/Aetheris%20AI/src/layouts/MainLayout.tsx)
- Embed the `<CinematicCursor />` component.
- Add an initial page preloader element that performs an editorial wipe reveal.

#### [MODIFY] [Navbar.tsx](file:///d:/WebProjects/Aetheris%20AI/src/components/sections/Navbar/Navbar.tsx)
- Apply slide-down entry on page load.
- Enhance backdrop-blur transition when scrolled.
- Implement Smart Show-Hide scrolling listener.
- Apply Group Hover Fade-Out to navigation links.

#### [MODIFY] [Hero.tsx](file:///d:/WebProjects/Aetheris%20AI/src/components/sections/Hero/Hero.tsx)
- Stagger headline characters/lines for entrance.
- Apply magnetic pull on primary CTA button (`Start Exploration`).
- Enhance the ambient glow coordinates to drift slowly on load.

#### [MODIFY] [FeatureShowcase.tsx](file:///d:/WebProjects/Aetheris%20AI/src/components/sections/FeatureShowcase/FeatureShowcase.tsx)
- Wrap cards with the custom `useTilt` hook.
- Implement CSS variables on cards to move a specular lighting highlight across the surface.
- Add micro-interaction: Rotate the settings gear (`cog-8-tooth`) when card is hovered.
- Add micro-interaction: Drift/expand the progress bar indicator in the `Predictive Drift` card when visible.
- Add Vignette Depth Overlay and Parallax background to the vertical cover image.

#### [MODIFY] [Testimonials.tsx](file:///d:/WebProjects/Aetheris%20AI/src/components/sections/Testimonials/Testimonials.tsx)
- Cascade the cards in as they enter view.
- Apply soft 3D tilt and light reflection highlights.

#### [MODIFY] [Pricing.tsx](file:///d:/WebProjects/Aetheris%20AI/src/components/sections/Pricing/Pricing.tsx)
- Add slide transition to the Monthly/Annually toggle switch indicator pill.
- Format the pricing values to utilize the `useNumberCounter` hook for smooth counting updates on viewport visibility.

#### [MODIFY] [CTA.tsx](file:///d:/WebProjects/Aetheris%20AI/src/components/sections/CTA/CTA.tsx)
- Apply magnetic pull to the primary buttons.
- Create a breathing radial highlight pulse behind the CTA surface.

#### [MODIFY] [TrustedBy.tsx](file:///d:/WebProjects/Aetheris%20AI/src/components/sections/TrustedBy/TrustedBy.tsx)
- Apply Group Hover Fade-Out to validation logos.

#### [MODIFY] [index.css](file:///d:/WebProjects/Aetheris%20AI/src/index.css)
- Add keyframes for background gradient drifts.
- Define styles for the custom cinematic cursor (`mix-blend-difference`).
- Define utility classes for editorial reveal transitions, scroll choreography fades, and card reflection spotlight masks.
- Incorporate custom easing variables:
  ```css
  --easing-hop: cubic-bezier(0.9, 0, 0.1, 1);
  --easing-editorial: cubic-bezier(0.25, 0.1, 0.25, 1);
  ```

---

## Verification Plan

### Automated Verification
- Run `npm run build` to verify there are no TypeScript type errors or syntax mistakes.
- Ensure that Tailwind CSS properly compiles all style extensions.

### Manual Verification
- **Mouse tracking**: Test cursor response on links and ensure there is no latency.
- **Reduced motion**: Set client OS setting `prefers-reduced-motion` to True and verify that custom cursors and card tilts degrade gracefully to simple fades/default cursor states.
- **Frame Rate**: Monitor performance using Chrome DevTools rendering profiling, targeting constant 60 FPS.
