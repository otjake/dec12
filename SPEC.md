# Dec12 Aso-Oke Lady Invitation Site

## Purpose

This is a lightweight wedding invitation web page asking selected ladies to be the bride's Aso-Oke Ladies for `#D'sSylvar`.

The site is playful, Nigerian/Yoruba-inspired, and built as a static page that can run on GitHub Pages.

## Tech

- Static HTML/CSS/JavaScript
- Vue 3 from CDN
- Tailwind from CDN
- No build step required
- Main files:
  - `index.html`
  - `app.js`
  - `styles.css`

## Personalization

The page personalizes by reading the `name` query parameter.

Examples:

```txt
https://otjake.github.io/dec12/?name=oyin
https://otjake.github.io/dec12/?name=damilola
https://otjake.github.io/dec12/?name=yoma
https://otjake.github.io/dec12/?name=adeola
https://otjake.github.io/dec12/?name=ayodamola
https://otjake.github.io/dec12/?name=bukunmi
```

If a matching name exists, the headline becomes:

```txt
Yoma, be My Aso-Oke Lady
```

If no name is supplied, the headline becomes:

```txt
Be My Aso-Oke Lady
```

## Data To Edit

The girls are defined in `app.js` inside the `asoOkeGirls` array.

Each entry uses:

```js
{
  name: "yoma",
  displayName: "Yoma",
  description: "Personal note shown on the page."
}
```

Rules:

- `name` should be lowercase and URL-safe.
- `displayName` is what appears in the headline.
- `description` is the personal note shown in the card.

Current names:

- Oyin
- Damilola
- Yoma
- Adeola
- Ayodamola
- Bukunmi

## Yes/No Behavior

The buttons are controlled in `app.js`.

- Clicking `Yes` redirects to the WhatsApp group link.
- Clicking `No` shows a playful Nigerian pop-culture jab.
- Each `No` click makes the `Yes` button larger.
- On mobile, the button growth is capped so it does not overflow.

The WhatsApp group link is stored at the top of `app.js`:

```js
const WHATSAPP_GROUP_LINK = "...";
```

## Visual Direction

The page should feel like a polished Nigerian wedding invite, not a generic bridesmaid page.

Current visual elements:

- Aso-oke textile panel
- Adire/tie-dye accents
- Coral bead accents
- Woven mat details
- Clay pot shape
- Raffia fan shape
- Warm cream background
- Burgundy, teal, gold, coral, clay tones

Keep additional props moderate so the invite stays elegant and readable.

## Hosting

GitHub Pages works because the site is static.

Expected hosted URL:

```txt
https://otjake.github.io/dec12/
```

Use query links for personalization:

```txt
https://otjake.github.io/dec12/?name=yoma
```

## Future Edit Ideas

- Replace placeholder descriptions with final custom notes for each lady.
- Add bride/groom names if needed.
- Add wedding date and venue if this becomes a fuller invite.
- Add a short success state before WhatsApp redirect if preferred.
- Add a custom domain later.
