# Tutorial: Fixing Common JSX Bugs in ProductGrid.jsx

This document outlines the systematic process for identifying and fixing common JSX and React-specific bugs in the `ProductGrid.jsx` component.

## 1. Common JSX Issues Identified

### A. `class` vs `className`

In React, the standard HTML `class` attribute must be replaced with `className` because `class` is a reserved keyword in JavaScript.

- **Bug**: `class="my-style"`
- **Fix**: `className="my-style"`

### B. SVG `<use>` tag attributes

React requires SVG `<use>` tags to use the `href` attribute (or `xlinkHref` in older versions) instead of `to`.

- **Bug**: `<use to="#icon-id" />`
- **Fix**: `<use href="#icon-id" />`

### C. Persistent Typos

Small typos in CSS classes can lead to broken layouts.

- **Bug**: `d-inline-blockk`
- **Fix**: `d-inline-block` (Standard Bootstrap/CSS class)

---

## 2. Verification Commands

You can use the following `grep` commands in your terminal to verify that these issues have been resolved in `src/Components/Products/ProductGrid.jsx`.

### Check for remaining `class=` attributes

If this command returns no results, the fix is successful.

```bash
grep "class=" src/Components/Products/ProductGrid.jsx
```

### Check for incorrect SVG `use` attributes

This should return no results for `to=`.

```bash
grep "<use to=" src/Components/Products/ProductGrid.jsx
```

### Check for the `d-inline-blockk` typo

This should return no results.

```bash
grep "d-inline-blockk" src/Components/Products/ProductGrid.jsx
```

### Verify `Link` components still use `to=`

React Router `Link` components **must** use `to=`. This command should show many valid links.

```bash
grep "Link to=" src/Components/Products/ProductGrid.jsx
```

---

## 3. How to Avoid These Bugs

1. **Use Linting**: Ensure ESLint is configured with `eslint-plugin-react`.
2. **Standard Templates**: When copying HTML templates into React, use an "HTML to JSX" converter or be mindful of `class`, `for`, and SVG attributes.
3. **Regex Search**: Before finalizing a component, run a search for `class=` to ensure all have been converted.
