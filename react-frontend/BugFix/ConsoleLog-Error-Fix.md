# Tutorial: Resolving Common Console Errors and Warnings

During development, the browser console often flags networking, asset, and accessibility issues. This tutorial explains how to fix three specific common errors found in this project.

## 1. Port Connection Refused (Port 8097)

### The Error

`GET http://localhost:8097/ net::ERR_CONNECTION_REFUSED`

### Cause

This error occurs when your HTML includes a script tag pointing to a local port that isn't running a service. In this case, it was a leftover debug script (likely from React DevTools standalone).

### The Fix

Remove the unnecessary script tag from your `public/index.html`:

```html
<!-- Remove this line -->
<script src="http://localhost:8097"></script>
```

---

## 2. Broken External Assets (net::ERR_CONNECTION_REFUSED)

### The Error

`GET https://external-domain.com/image.png net::ERR_CONNECTION_REFUSED`

### Cause

The external server hosting your images or assets is down, or the links are defunct. This leads to broken images in your UI and "Connection Refused" logs.

### The Fix: Use Local Assets

Instead of linking to external domains for critical UI elements like logos, save them locally in your `public/images/` folder.

**Before:**

```javascript
<img src="https://uomo-html.flexkitux.com/images/logo.png" />
```

**After:**

```javascript
<img src="/assets/images/logo.png" />
```

---

## 3. Accessibility Floor Warning (aria-hidden)

### The Error

`Blocked aria-hidden on an element because its descendant retained focus.`

### Cause: The "Mixed-Mode" Conflict

This happens when you use a React component but close it using a traditional method (like Bootstrap's `data-bs-dismiss="modal"`).

1. Bootstrap hides the modal in the DOM and adds `aria-hidden="true"`.
2. However, React still thinks the component is mounted and should be visible.
3. The focus stays on the "Close" button inside an element that is now "hidden" from assistive technology, causing a violation.

### The Fix: Synchronize State

Ensure that clicking "Close" triggers a state update in React that completely unmounts the component.

**Correct Implementation:**

```javascript
const ModalComponent = ({ onClose }) => {
  return (
    <div className="modal fade">
      {/* Use onClick={onClose} instead of data-bs-dismiss="modal" */}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
};
```

---

## 4. Advanced: Fixing "Frozen" Page after Closing Modal

### The Issue

After closing a modal, you cannot scroll or click on anything.

### The Cause

Bootstrap adds the `modal-open` class to the `body` tag and a `.modal-backdrop` div to the page. If you remove the modal component using React state without cleaning these up, the page stays "locked".

### The Fix: Cleanup Hook

Add a `useEffect` to your modal component with a cleanup function:

```javascript
useEffect(() => {
  // Opening logic...

  return () => {
    // This runs when the component is unmounted
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) backdrop.remove();
  };
}, []);
```

---

## 5. How to Find & Solve Errors Using the Command Line

To keep your console 100% clean, you shouldn't wait for errors to appear one by one. Use the terminal to find them all at once.

### A. Finding Defunct Domains

If one image from a domain is broken, likely many are. Use `grep` to find every file that still references the defunct domain.

**Run this in your terminal:**

```bash
grep -r "uomo-html.flexkitux.com" src/
```

- `-r`: Recursive (search all folders).
- `"..."`: The domain or error string you saw in the console.
- `src/`: The directory to search.

### B. Finding Broken Assets (Images/Scripts)

If you see many `GET ... net::ERR_CONNECTION_REFUSED` errors, search specifically for the `/images` path on that domain:

```bash
grep -r "https://uomo-html.flexkitux.com/images/" src/
```

### C. Mass Solving (The Strategy)

Once you have the list of files (e.g., `QuickView.jsx`, `LivingRoom.jsx`), you have two choices:

1.  **Download & Replace**: Generate or download a replacement image, save it to `public/images/`, and update the paths.
    - **Command check**: `ls public/images/` to verify your new file exists.
2.  **Use a Global Placeholder**: If there are too many images to replace one by one, use a generic placeholder like `/images/avatar-530x290.png` to stabilize the UI immediately.

### D. Verifying the Fix

After making changes, run the `grep` command again. If it returns **no results**, you have successfully removed all hardcoded references to the broken domain!

```bash
# This should return nothing if you are done:
grep -r "uomo-html.flexkitux.com" src/
```
