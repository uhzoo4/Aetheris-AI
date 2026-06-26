# Brand spec — AI Enterprise Data Automation Platform

*Interpreted from named brand palette and brief atmosphere. The reference image could not be read for hex extraction; tokens below are reasoned interpretations of the named colors.*

---

## Color tokens (OKLch)

| Name | Token | OKLch | Hex | Role |
|---|---|---|---|---|
| Oceanic Noir | `--bg-deep` | `oklch(8% 0.015 265)` | `#0a0e1a` | Darkest background, hero backdrop, full-screen sections |
| Nocturnal Expedition | `--surface-deep` | `oklch(18% 0.025 268)` | `#1a2238` | Dark-mode surface, card backgrounds on dark, deep nav |
| Mystic Mint | `--accent-cool` | `oklch(62% 0.07 178)` | `#64b6a1` | Secondary accent, success states, hover fills, data viz |
| Deep Saffron | `--accent-warm` | `oklch(60% 0.14 58)` | `#c97a2e` | Primary CTA, editorial eyebrow, single decisive accent |
| Forsythia | `--accent-glow` | `oklch(80% 0.16 92)` | `#e8c44a` | Highlight, badge, pricing emphasis, attention pull |
| Arctic Powder | `--bg` | `oklch(96% 0.003 260)` | `#f2f4f7` | Light-mode canvas, clean editorial background |

### Application layers

| Layer | Light mode | Dark mode |
|---|---|---|
| Background | Arctic Powder | Oceanic Noir |
| Surface | White (`oklch(100% 0 0)`) | Nocturnal Expedition |
| Foreground | Near-black (`oklch(15% 0.01 265)`) | Arctic Powder (`oklch(96% 0.003 260)`) |
| Muted | `oklch(48% 0.008 260)` | `oklch(60% 0.01 260)` |
| Border | `oklch(88% 0.005 260)` | `oklch(30% 0.015 265)` |
| Primary accent | Deep Saffron | Deep Saffron |
| Secondary accent | Mystic Mint | Mystic Mint (lighter: `oklch(72% 0.07 178)`) |
| Highlight / glow | Forsythia | Forsythia (deeper: `oklch(70% 0.16 92)`) |

---

## Typography

| Role | Family | Weight |
|---|---|---|
| Display / headings | Inter, -apple-system, system-ui, sans-serif | 300–600 |
| Body / UI | Inter, -apple-system, system-ui, sans-serif | 400 |
| Technical / pricing / metrics | JetBrains Mono, ui-monospace, monospace | 400–500 |

**Hierarchy strategy:** Typography establishes hierarchy before color. Weight and spacing do the work; color is reserved for emphasis and accent.

---

## Posture rules

1. **Generous whitespace** — 2× the spacing you'd default to. Padding is the primary luxury signal.
2. **Warm-cool tension** — Deep cool grounds (Oceanic Noir, Nocturnal Expedition) carry warm editorial accents (Saffron, Forsythia). The effect is a fire in a dark room — not a neon sign.
3. **One accent at a time** — Use Deep Saffron OR Mystic Mint as the dominant accent per section, never both at equal weight. Forsythia is a highlighter — use once per viewport.
4. **Glass and depth** — Surfaces should feel layered, not flat. Use translucent glass (`backdrop-filter: blur`), soft shadow stacks, and elevation to create depth without decoration.
5. **No default AI blue** — The palette is oceanic/warm, not tech-blue. Mystic Mint provides the cool pole without touching `#0066cc` territory.
6. **Radii** — Generous but not pill: 12–16px for cards, 8px for buttons, 4px for inline inputs.
7. **Borders** — Hairline (0.5–1px) at reduced opacity (`rgba(…, 0.06–0.12)`). Never solid heavy borders.
8. **Gradients** — Permitted only as ambient atmospheric overlays (warm → cool, translucent over deep backgrounds) and glass surface reflections. Never decorative blobs.
9. **Editorial rhythm** — Mixed density: one tight stat row, one breathing hero, one dense Bento grid, one full-bleed ambient section. Alternating pace reads as intentional.
10. **Motion** — Float, fade, glass reveal, hover elevation. Duration 300–600ms, easing `cubic-bezier(0.25, 0.1, 0.25, 1)`. No spring bounces. No keyframe loops.
