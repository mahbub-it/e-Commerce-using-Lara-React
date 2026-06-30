# Tutorial: Fixing the "Add to Cart" Page Hang & Scroll Lock

This tutorial explains how to fix issues related to React e-commerce side drawers (like the shopping cart or login panel) when integrated with legacy HTML/CSS templates. Specifically, we cover:

1. Resolving the `"onClick listener expected a function, instead got object"` runtime error.
2. Preventing duplicate overlays (`page-overlay`) that capture clicks and freeze interaction.
3. Synchronizing the wrapper page scroll lock (`overflow-hidden` class) with active drawer toggles.

---

## 1. Fixing the `onClick` Execution Mismatch

### The Problem

In your JSX, you might have registered the click listener like this:

```jsx
// ❌ INCORRECT: Immediately executes add_to_cart(id) during rendering
<span onClick={add_to_cart(id)}>Add To Cart</span>
```

Because the function executes immediately, React assigns the returned value (an asynchronous `Promise` object) as the event listener. React then throws this error when the component mounts:

> `Error: Expected onClick listener to be a function, instead got a value of object type.`

### The Solution

Wrap the call in an arrow function so it is passed as a **reference** and only runs when clicked:

```jsx
//  CORRECT: Defers execution until the click event fires
<button onClick={() => add_to_cart(id)}>Add To Cart</button>
```

---

## 2. Setting Up the Global Drawer Event Toggler

When a nested item is clicked (e.g., inside a product grid), we need a lightweight way to notify the parent template (like `Home.jsx`) to show the drawer.

We can achieve this by dispatching a custom DOM event on the global window object.

### Step A: Dispatch the Custom Event

Within your click handler (`ProductCard.jsx`), fire the event once the item has been updated:

```javascript
const add_to_cart = () => {
  // 1. (Your logic to update the cart state/cookies)
  const cart_items = getCookie("cart_items");
  // ...

  // 2. Dispatch custom event to notify parent Home component
  window.dispatchEvent(new CustomEvent("open-cart"));
};
```

### Step B: Listen to the Event and Render the Drawer

In your wrapper/parent component (`Home.jsx`), register a listener inside a `useEffect` hook to set the active overlay state to `'cart'`:

```jsx
const [activeOverlay, setActiveOverlay] = useState(null);

useEffect(() => {
  const handleOpenCart = () => {
    setActiveOverlay("cart");
  };
  window.addEventListener("open-cart", handleOpenCart);

  // Clean up listener on unmount
  return () => window.removeEventListener("open-cart", handleOpenCart);
}, []);
```

---

## 3. Resolving the Page Freeze & Scroll Lock

### The Problem

When the sidebar appears, the page locks it so you cannot scroll the background page (by adding the `overflow-hidden` class to `document.body`).
However, two bugs can cause the page to freeze:

1. **Double Backdrop Stacking:** Both the parent component and the active drawer render separate `.page-overlay` divs. The global overlay often lacks an `onClick` close event, sits on top, blocks clicks to the backdrop below, and prevents dismissal.
2. **Orphaned Scroll Lock Class:** When the overlay closes within Redux/React state, the `overflow-hidden` class on the `<body>` element is never cleaned up, leaving the user permanently unable to scroll.

### The Solution

#### A. Consolidate and Make the Backdrop Interactive

Remove any global overlay in your main template (`Home.jsx`), leaving only a single backdrop rendered by the drawers themselves. To make it visible and dismissable:

1. In `CardDrawer.jsx` and `LoginForm.jsx`, append the `page-overlay_visible` class:
   ```jsx
   <div className="page-overlay page-overlay_visible" onClick={onClose} />
   ```

#### B. Clean Up Scroll Lock State Automatically

In your main template (`Home.jsx`), write a `useEffect` block that watches changes to `activeOverlay`. This ensures the body scroll lock classes are tidied up whenever a drawer is closed, no matter how the close was triggered:

```javascript
useEffect(() => {
  if (activeOverlay) {
    // 1. Lock scrolling
    document.body.classList.add("overflow-hidden");

    // 2. Match scrollbar padding to prevent elements shifting
    const scrollWidth = window.innerWidth - document.body.clientWidth + "px";
    document.body.style.paddingRight = scrollWidth;
    document
      .querySelectorAll(".header_sticky, .footer-mobile")
      .forEach((element) => {
        element.style.borderRight = scrollWidth + " solid transparent";
      });
  } else {
    // 3. Unlock scrolling and reset padding on close
    document.body.classList.remove("overflow-hidden");
    document.body.style.paddingRight = "";
    document
      .querySelectorAll(".header_sticky, .footer-mobile")
      .forEach((element) => {
        element.style.borderRight = "";
      });
  }
}, [activeOverlay]);
```
