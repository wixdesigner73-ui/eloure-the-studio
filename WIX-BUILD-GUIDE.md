# ELOURE THE STUDIO – Wix Classic Editor Build Guide

`index.html` is the **visual reference** for the homepage (open it in a browser). Wix Classic Editor cannot import HTML, so this guide tells you what to build in the Editor, element by element, to reproduce it. All copy is German and uses only content found on elourethestudio.ch.

---

## 0. Before you start – open issues on the current site

| # | Finding | Action |
|---|---|---|
| 1 | **Services page** (`/book-online`) lists 35 services with **no Frauen/Männer distinction** visible. The brief asks to preserve it. | Check in Wix Bookings → Services whether categories exist. If not, ask the owners how to split them – don't guess. |
| 2 | **Duplicate service names**: *Ganzkörper* (179 / 1h15, 169 as "halbes Bein", 249 / 2h) and *Bauch* (49/15 min and 69/30 min) differ in data; *Achseln*, *Hände*, *Füsse* are listed twice with identical data (shown once in the prototype); *Beine* vs *Beine komplett* are both 129/45. | Likely intentional variants or leftovers. Confirm, then rename (e.g. "Bauch – klein / gross") or delete duplicates **in Wix Bookings**, not in the design. |
| 3 | **Only the last service** ("Jede weitere Zone") exposed a real booking URL; the others showed `#` to my fetch tool (likely a JS-rendered widget). | In the Editor, use the **Bookings Services List** element and let Wix handle links. Verify every button after publishing. |
| 4 | **FAQ #7 "Wann wirkt Laserhaarentfernung?"** has only an "X" as the answer. | Write the answer or remove the entry. |
| 5 | **Wording on existing site / brief** like "dauerhafte Haarentfernung", "langanhaltend glatte Haut", "dauerhafte Reduktion" are result claims. The existing FAQ itself says results are *not permanent*. | I kept your requested heading "langanhaltend glatter Haut"; consider softening (e.g. "Dein Weg zu glatter Haut."). Avoid "dauerhaft" in SEO titles unless you can substantiate it. |
| 6 | **Facebook icon** in the contact page footer links to a generic wix.com URL. | Remove it or link the real page. |
| 7 | **Opening hours** (Mo–Fr 10–20, Sa 10–16) appear on the homepage only; the contact page doesn't list them. | Confirm they're current, then show them on Kontakt too. |
| 8 | Copyright says ©2023. | Update or drop the year. |
| 9 | **Photo** `7940294f…` shows a wall sign reading "THE BULLSHIT". Not used – off-brand for this direction. | Your call. |
| 10 | Photo `32595ce4…` is a video frame with a **black bar** at the bottom and shows a client mid-treatment. | Crop in Wix (Crop tool) to remove the bar; make sure the client consented to public use. |
| 11 | **Testimonials**: none on the site → section omitted, per brief. | Add later only with real, approved reviews (e.g. Google reviews with permission). |
| 12 | **Logo file** wasn't accessible to me; `index.html` uses a typographic placeholder (ELOURE / THE STUDIO). | Keep your real logo from the Wix Media Manager. |

---

## 1. Site setup in Wix (Classic Editor)

### Colors (Site Design → Colors → add as theme colors)
| Name | Hex | Use |
|---|---|---|
| Warm Ivory | `#F8F5EF` | Page / header background |
| Soft Cream | `#EEE9E0` | Alternate strips |
| Pure Warm White | `#FFFDF9` | Cards, About & Price strips |
| Muted Olive | `#777F60` | Icons, band, secondary buttons |
| Deep Olive | `#525B43` | Eyebrow labels, hover |
| Terracotta | `#B86F4F` | Booking buttons, italic accent |
| Espresso | `#292722` | Text, footer |
| Soft Beige | `#DCD3C6` | Borders, dividers |

### Fonts (Site Design → Text)
Verify availability in the Editor's font list; if a font is missing, use the fallback.

| Role | Font | Fallback in Wix |
|---|---|---|
| H1/H2/H3 | Cormorant Garamond (Medium) | Cormorant / Playfair Display |
| Italic accent word | Cormorant Garamond *Italic*, terracotta | same |
| Price numbers / optional display | DM Serif Display | Cormorant Garamond |
| Body, nav, buttons | Manrope | Montserrat / Avenir (Wix) |

Text styles: H1 64–72 px (mobile 40), H2 44 px (mobile 30), H3 25 px, body 15 px / line-height 1.7, eyebrow & nav 11 px, letter-spacing 160–220, uppercase.

### Buttons (Site Design → Buttons)
- **Primary (terracotta):** fill `#B86F4F`, text white, radius 100 (pill), Manrope 11–12 px bold, uppercase, letter-spacing ~160. Hover: fill `#A35F41`.
- **Secondary (olive):** fill `#777F60`, hover `#525B43`.
- **Ghost:** transparent, 1 px `#292722` border, hover fill `#292722` / text ivory.
- Wix hover is configured per button (Design → Hover). Keep the transition at the default ~0.3 s.

---

## 2. Header (all pages – Header area)
1. Strip background `#F8F5EF`, height ~84 px. **Pin to screen** (Settings ⚙ → "Stays on screen when scrolling") for the sticky header; works reliably in Classic.
2. Left: logo (~150 px wide).
3. Center: **Horizontal Menu** – START · LEISTUNGEN & PREISE · ÜBER UNS · FAQ · KONTAKT · TERMIN BUCHEN. Design: no background, 11 px Manrope uppercase, letter-spacing 160; hover = terracotta text + underline (Menu → Design → Hover: underline style). Page labels in the menu are separate from page names, so URLs stay unchanged.
4. Right: button **JETZT TERMIN BUCHEN** (primary) → Wix Bookings page.
5. **Mobile editor:** replace with the Mobile Menu (hamburger) containing the same 6 links; keep the terracotta button visible near the top of the first mobile section or inside the menu.

---

## 3. Homepage – section recipes
Each section = one **Strip** (full-width). Use the hex backgrounds from `index.html`. Content width ≈ 980 px (Classic grid).

### 1 · Hero (Strip, gradient ivory → cream)
- **Text:** eyebrow `ELOURE THE STUDIO · AMRISWIL`; H1 `Deine Haut. / Dein *Glow.* / Dein Moment.` ("Glow." italic, terracotta); body: *"Professionelle Laserhaarentfernung in Amriswil – mit persönlicher Beratung, einem individuellen Behandlungsplan und einer Atmosphäre, in der du dich wohlfühlst."*
- **Buttons:** TERMIN BUCHEN (primary → Bookings page) · MEHR ERFAHREN (ghost → anchor to About).
- **Image (curved mask):** the Editor can't clip to an arbitrary SVG path with a photo reliably. Two safe options:
  1. **Recommended:** prepare the image in Canva/Photoshop/Figma with the organic left edge and a **transparent PNG/WebP background** (the clip path is in `index.html` → `#heroMask`; export the same shape), upload, place right-aligned and bleeding off the strip edge.
  2. Use Wix **Shape/Mask** (Add → Image → "Shape" mask: arch/ellipse) as a simpler approximation.
  Photo: `0ae965cafab846c69457e983a71c6c59~mv2.jpg` (Corine & Caro).
- **Decor:** a soft beige circle behind the photo (Add → Shapes → Circle, `#DCD3C6`, ~55 % opacity, **sent to back**); small terracotta circle at 22 % opacity; botanical leaf PNG (transparent, olive line art) top-left.
- **Animations (Wix Animations panel):** headline lines → *Reveal* / *Slide in from bottom* (0.8–1 s, staggered via delays); image → *Fade in* + slight *Float in from below*; decorative circles → *Float* (loop), keep subtle. Mobile: reduce or disable.

### 2 · About (Strip `#FFFDF9`) – 3 columns
- Left: large photo with rounded corners (radius ~44 px), `93edd57865de4724a748453eaeb11b84~mv2.jpg` (or a founders photo from `/über-uns`). Behind it, cream circle.
- Center: eyebrow `ÜBER UNS`; H2 `Schönheit beginnt mit *Wohlbefinden.*`; text: *"Hey, wir sind Corine und Caro – ein eingespieltes Team voller Leidenschaft, Kompetenz und Einfühlsamkeit. Seit drei Jahren sind wir auf Laserhaarentfernung spezialisiert und empfangen dich in unserem neu eingerichteten Studio in Amriswil. Uns ist eine vertrauensvolle Atmosphäre, faire Preise, hohe Qualität und der Blick auf deine individuellen Bedürfnisse wichtig."* Button MEHR ÜBER UNS (olive → Über uns).
- Right: vertical thin line (Shape, 1 px `#DCD3C6`) + 4 rows of line icon (olive, 28 px) + label: Persönliche Beratung · Professionelle Laserhaarentfernung · Individuelle Behandlungsplanung · Wohlfühlatmosphäre.
- Icons: use the SVGs from `index.html` (copy the inline `<svg>` markup, save as `.svg`, upload to Media Manager) or Wix's icon vector art with stroke/color set to `#777F60`.

### 3 · Treatments (Strip `#EEE9E0`)
- Eyebrow `UNSERE LEISTUNGEN`, H2 `Dein Weg zu langanhaltend *glatter* Haut.` (centered).
- 4 **Boxes** (white `#FFFDF9`, radius 22, shadow: Y 10, blur 30, 7 % black). Inside: circle icon (olive on cards 1 & 3, terracotta on 2 & 4), H3, description, "MEHR ERFAHREN →" text button.
  - **Gesicht** – Laserhaarentfernung für ausgewählte Gesichtsbereiche.
  - **Körper** – Behandlungen für Beine, Arme, Achseln und weitere Körperzonen.
  - **Intim & Bikini** – Individuelle Behandlungen für sensible Körperbereiche.
  - **Ganzkörper & Kombinationen** – Flexible Kombinationen mehrerer Behandlungszonen.
- Link each to the Bookings/Services page (or to a Bookings **category** if you create categories – recommended: *Gesicht, Körper, Intim & Bikini, Ganzkörper & Kombinationen*).
- Animation: *Fade in* with 0.1 s staggered delay per card. Hover lift: group box + icon in a **Box**, enable Box Hover (Wix hover states on boxes support shadow / color; real "lift" is not available, so use shadow increase).

### 4 · Prices (Strip `#FFFDF9`)
Three cards (Box, ivory, radius 22): image on top (rounded top), name, duration, price, primary button.
| Card | Dauer | Preis | Image used |
|---|---|---|---|
| Achseln | 15 Min. | CHF 49 | Behandlungsraum `a96d7c36…` |
| Beine komplett | 45 Min. | CHF 129 | Beine `24892664…` |
| Ganzkörper (3 Zonen inkl.) | 1 Std. 15 Min. | CHF 179 | Liege am Fenster `22fbf6da…` |

Under it: ghost button **ALLE LEISTUNGEN & PREISE ANSEHEN** → Bookings page. Small note: *"Weitere Zonen ab CHF 10 bzw. 15 – Details bei der jeweiligen Behandlung."* (Ganzkörper 179: +10 CHF / Zone; Ganzkörper 249: +15 CHF / Zone.)

> Prices must match Wix Bookings. If prices change in Bookings, update these cards manually (they're static text), or use the **Bookings Service Page** / "Featured services" element so they stay in sync.

### 5 · Experience band (Strip `#777F60`)
4 columns separated by 1 px lines (`rgba(255,253,249,.3)`), white thin line icon + Cormorant 23 px label: Individuelle Beratung · Professionelle Behandlung · Persönliche Betreuung · Angenehme Studioatmosphäre. Optional leaf PNG bottom right at 35 % opacity. Animation: fade in staggered.

### 6 · Booking steps (Strip `#EEE9E0`)
H2 `So einfach beginnt deine *Smooth-Skin-Era.*`. Four columns, each a circle (68 px, white, 1 px olive border) with `01–04` in Cormorant, H3, description; thin dashed olive line behind the circles (Shape/Line, send to back).
- **01 Behandlung auswählen** – Wähle die gewünschte Laserhaarentfernung aus unseren Leistungen.
- **02 Termin anfragen** – Wähle über unser Buchungssystem einen verfügbaren Termin.
- **03 Persönliche Beratung** – Du erhältst Informationen zur Behandlung und zu deinen individuellen Bedürfnissen.
- **04 Behandlung erleben** – Du kommst zum gebuchten Termin in unser Studio.
- Notice box (white, terracotta left border): *"Wichtig: Eine Terminanfrage ist noch keine bestätigte Buchung. Verbindlich ist dein Termin erst nach unserer Bestätigung."*
  → **Verify against your Bookings settings.** If bookings are confirmed instantly (no manual approval), change this to the actual behavior – don't publish a statement that doesn't match.
- Button **JETZT TERMIN ANFRAGEN** (primary → Bookings).

### 7 · Reviews – **omitted** (no verified reviews). Leave no placeholder.

### 8 · Gallery (Strip `#FFFDF9`)
Use a **Pro Gallery** (Grid or Masonry, 3 columns, 18 px spacing, rounded corners 20 px, hover = zoom). Images (no repeats): Porträt `048f74…`, Lounge `42461ac7…`, Sofa `9418a888…`, Sessel `5fc8c0ae…`, Behandlung `32595ce4…` (crop the black bar). Add descriptive alt text (see SEO).
*Alternative with more design control:* 5 individual images in a hand-placed grid (tall left image + 2×2 right), image hover "Zoom" effect.

### 9 · Booking + contact (Strip `#F8F5EF`)
A large rounded Box (white, radius 30, big soft shadow), split in two halves:
- **Left (cream):** photo (rounded), eyebrow, H2 `Bereit für dein neues *Hautgefühl?*`, short text, contact list with line icons: `elourethestudio@outlook.com`, `+41 76 529 71 29`, `Bahnhofstrasse 20, 8580 Amriswil`, `Mo–Fr 10:00–20:00 · Sa 10:00–16:00`.
- **Right:** to be **functional**, place the **Wix Bookings widget** here: *Add → Booking → Booking Calendar / Services List*, styled to the palette – not a hand-made form. If the widget is too tall for the box, show 3-step teaser + primary button **TERMIN BUCHEN** → Bookings page (this is what the prototype does). Secondary: link "Zum Kontaktformular".
- Mobile: stack left above right.

### 10 · Footer (Footer area, `#292722`)
4 columns: logo + one-line description + Instagram / WhatsApp icons · Navigation · Kontakt (address, email, phone) · Öffnungszeiten. Bottom row: © ELOURE THE STUDIO · Impressum (`/impressum`) · Datenschutzbestimmung (`/datenschutz`) · AGB (`/agb-s`). Text `#CFC8BA`, headings white, hairline `rgba(255,253,249,.12)`.
Social: Instagram `https://www.instagram.com/elourethestudio/`, WhatsApp `https://wa.me/41765297129`.

---

## 4. Other pages

| Page (keep existing URL) | Layout |
|---|---|
| **Leistungen & Preise** `/book-online` | Hero strip (cream) with H1 *"Leistungen & Preise"* + intro. Below: Bookings **Services List** (or Booking Calendar) styled with cream cards, serif names, olive price, terracotta "Termin buchen". Categories as **tabs** via Wix Bookings categories (Frauen / Männer **if** the business offers this split – see issue #1). Don't alter price/duration values. Footnote about extra zones. |
| **Über uns** `/über-uns` | Alternating image/text strips (cream ↔ white). H1 *"Hey, wir sind Corine und Caro."* Use existing text (certified experts for laser hair removal, 3 years specialization, newly furnished Amriswil studio, comfort / trust / fair prices / quality / individual needs). Photos from the existing page (6 studio/team images; skip the sign photo). Rounded organic masks via Shape masks. Closing CTA strip (olive) → book. |
| **FAQ** `/faq` | Keep the 16 questions (fix #7). Use the **Expandable FAQ** or Accordion-style Repeater; 1 px `#DCD3C6` borders, Cormorant 22 px questions, Manrope answers, "+" / "–" icon in olive. Keep existing wording; don't add medical claims. Group: *Ablauf & Ergebnisse · Vorbereitung & Nachsorge · Gerät & Fachpersonal*. |
| **Kontakt & Anfahrt** `/kontakt` | Left: address, phone/WhatsApp, email, **opening hours**, Instagram. Right: **Wix Form** – Name, E-Mail, Telefon (optional), Nachricht, button SENDEN (olive), thank-you text "Vielen Dank!". Below: **Wix Google Map** pinned to *Bahnhofstrasse 20, 8580 Amriswil* with a "Route planen" link. Separate terracotta box: *"Du möchtest einen Termin? → JETZT TERMIN BUCHEN"*. |
| **Termin buchen** | Dedicated page with the Booking Calendar / Services List; short intro above, FAQ link + WhatsApp below. If you don't have it as a separate page, add it and keep `/book-online` as is. |
| **Impressum / Datenschutz / AGB** | Keep text; only apply typography (H1 Cormorant, body Manrope, 720 px text column on ivory). |

---

## 5. Animations (native Wix only)
- Section content: **Fade in** (0.8 s) or **Float in** from bottom, delay +0.1 s per sibling. Trigger: on load for above-the-fold, on scroll for the rest.
- Hero headline: **Reveal** per line.
- Buttons: Hover states (color change, ~0.3 s).
- Images: Image **Hover** → Zoom in (Design → Hover on image / Pro Gallery "Hover effect").
- Decor circles/leaf: slow **Float** or none.
- Menu: underline on hover.
- **Do not** animate booking widgets, forms, or the header. Use *Reduce animations* on mobile.

## 6. Mobile editor checklist
- Switch to Mobile Editor **after** desktop is finished; Wix auto-lays out, then fix manually.
- One column everywhere; ≥ 20 px side margin; H1 ≤ 40 px; hide decorative leaf & circles; keep ≥ 44 px tall tap targets for buttons.
- Hero: text first, image below (full width, keep faces – crop so both faces visible).
- Services cards: stacked or 2×2; prices cards stacked.
- Gallery: 2 columns.
- Optimize images: upload ≤ 2000 px wide, enable Wix auto WebP; give hero photo high priority.
- Test on real phone: booking flow end to end (select service → date → submit).

## 7. SEO (Wix → Pages → SEO basics)
| Page | Title (≤ 60) | Description (≤ 155) |
|---|---|---|
| Start | Laserhaarentfernung Amriswil \| ELOURE THE STUDIO | Laserhaarentfernung in Amriswil bei ELOURE THE STUDIO: persönliche Beratung, transparente Preise, Behandlungen für Gesicht und Körper. Jetzt Termin buchen. |
| Leistungen & Preise | Laserhaarentfernung Preise Amriswil \| ELOURE | Alle Behandlungen und Preise für Laser Haarentfernung in Amriswil – Gesicht, Körper, Intimbereich und Ganzkörper. Online Termin buchen. |
| Über uns | Über uns – Laserbehandlung Amriswil \| ELOURE | Lerne Corine und Caro kennen: Dein Team für Laserhaarentfernung im neu eingerichteten Studio in Amriswil. |
| FAQ | FAQ Laserhaarentfernung \| ELOURE THE STUDIO | Antworten zu Ablauf, Vorbereitung, Nachsorge und Sitzungen bei der Laserhaarentfernung in Amriswil. |
| Kontakt | Kontakt & Anfahrt Amriswil \| ELOURE THE STUDIO | Bahnhofstrasse 20, 8580 Amriswil. Öffnungszeiten, Telefon/WhatsApp, E-Mail und Anfahrt. |

- Exactly one H1 per page; H2 for sections. Set text-tag in Wix: *Edit Text → SEO tag*.
- Keywords to work into natural copy: Laserhaarentfernung Amriswil, Laser Haarentfernung Amriswil, Laserbehandlung Amriswil, Laserhaarentfernung Schweiz. "Dauerhafte Haarentfernung Amriswil" – use only if you can substantiate it (see issue #5).
- Image alt text in German, e.g. *"Behandlungsraum mit Laser im ELOURE Studio in Amriswil"*, *"Corine und Caro, ELOURE THE STUDIO"*.
- Keep existing URLs (`/book-online`, `/faq`, `/über-uns`, `/kontakt`, `/impressum`, `/datenschutz`, `/agb-s`). Renaming = add 301 redirects.
- Add **LocalBusiness** structured data (Wix → SEO → Structured data): name, address, phone, email, hours.
- Connect Google Business Profile; submit sitemap in Search Console.

---

## 8. Services reference (from live `/book-online`, unmodified)
Source of truth is Wix Bookings – this table is only a cross-check. "—" = no price shown.

| Service | Dauer | CHF | Notiz |
|---|---|---|---|
| Probebehandlung Achsel inkl. Beratung | 30 Min. | — | nur einzeln buchbar; für Erstkunden |
| Beratungsgespräch | 25 Min. | — | Ablauf, Haut-/Haaranalyse, Behandlungsplan |
| Ganzkörper | 1 Std. 15 | 179 | 3 Zonen inkl., +10 / Zone |
| Ganzkörper halbes Bein | 1 Std. | 169 | 3 Zonen, +10 / Zone |
| Ganzkörper | 2 Std. | 249 | 3 Zonen inkl., +15 / Zone |
| Kombi Intim + Achseln | 30 | 119 | |
| Oberlippe | 15 | 39 | |
| Oberlippe & Kinn | 15 | 49 | |
| Gesicht | 15 | 69 | |
| Achseln (×2 gelistet) | 15 | 49 | Duplikat prüfen |
| Arme | 30 | 69 | |
| Arme komplett | 30 | 79 | |
| Oberarme | 15 | 49 | |
| Bauch (15 Min.) | 15 | 49 | zwei Varianten, prüfen |
| Bauch (30 Min.) | 30 | 69 | |
| Brust | 30 | 69 | |
| Brust & Bauch | 30 | 119 | |
| Halber Rücken | 15 | 49 | |
| Rücken inkl. Nacken | 30 | 99 | |
| Hals | 15 | 49 | |
| Nacken | 15 | 39 | |
| Bikinilinie | 15 | 59 | |
| Bikini / Intim | 15 | 79 | |
| Pobacken | 15 | 59 | |
| Oberschenkel | 30 | 89 | |
| Unterschenkel | 30 | 89 | |
| Beine komplett | 45 | 129 | |
| Beine | 45 | 129 | evtl. Duplikat von "Beine komplett" |
| Füsse inkl. Zehen (×2 gelistet) | 15 | 29 | Duplikat prüfen |
| Hände inkl. Finger (×2 gelistet) | 15 | 29 | Duplikat prüfen |
| Konturen | 15 | 35 | |
| Jede weitere Zone | 25 | 15 | nur mit Ganzkörperbehandlung; Link: `/booking-calendar/jede-weitere-zone-2` |

(The fetch tool returned 35 rows and said content may have been truncated – re-check the live page for anything beyond this.)

## 9. Image map (existing Wix media, `static.wixstatic.com/media/f14793_…`)
| Slot | File | Content |
|---|---|---|
| Hero / contact | `0ae965ca…~mv2.jpg` | Corine & Caro |
| About, ÜBER-UNS | `93edd578…~mv2.jpg` | Porträt (s/w) |
| Gallery tall | `048f74aa…~mv2.jpg` | Porträt (s/w) |
| Gallery | `42461ac7…`, `9418a888…`, `5fc8c0ae…` | Lounge / Sofa / Sessel |
| Price card 1 | `a96d7c36…` | Behandlungsraum mit Gerät |
| Price card 2 | `24892664…000.jpg` | Beine (Behandlungsvorbereitung) |
| Price card 3 | `22fbf6da…` | Liege am Fenster |
| Gallery (crop!) | `32595ce4…000.jpg` | Behandlung (black bar) |
| Not used | `7940294f…` | Sign "THE BULLSHIT" |

Download originals from the Wix Media Manager (the URLs above are web-optimized copies).
