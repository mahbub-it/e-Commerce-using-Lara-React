# Tutorial: Fixing the "Cannot read properties of undefined (reading 'name')" Bug

In React applications, one of the most common runtime errors is `TypeError: Cannot read properties of undefined (reading '...')`. This tutorial explains how we fixed this in our product components.

## 1. The Error

The browser console showed:

```text
TypeError: Cannot read properties of undefined (reading 'name')
    at ProductCard (ProductCard.jsx:72)
```

## 2. The Cause: Missing or Nil Objects

The error occurred because we were trying to access `category.name` where `category` was either `null` or a `string` instead of an object. This happened for two reasons:

1. **Backend**: The initial API call didn't including the category relationship.
2. **Data Flow**: The parent component was passing a string instead of the full object.

## 3. The Comprehensive Fix

### Step A: Backend (Laravel)

We used **Eager Loading** to ensure the category data is included in the JSON response.

```php
public function index() {
    return Product::with('category')->get();
}
```

### Step B: Parent Component (ProductGrid.jsx)

We pass the entire `category` object to the child component.

```javascript
category={product.category}
```

### Step C: Child Component (ProductCard.jsx)

We use **Optional Chaining (`?.`)** and a **Fallback Value** to handle cases where a product might not have a category assigned.

```javascript
<p className="pc__category">{category?.name || "Uncategorized"}</p>
```

## 4. Key Takeaways

1. **Defensive Coding**: Always use `?.` when accessing properties of objects that come from an API.
2. **Consistency**: Ensure the parent component and child component agree on the data type (Object vs. String) being passed as a prop.
3. **Eager Loading**: In Laravel, use `with()` to prevent N+1 query issues and ensure related data is available for React.

---

## Bonus: Fixing Modal Accessibility Warnings

If you see an error like `Blocked aria-hidden because its descendant retained focus`, it means a modal was hidden but still had focus inside it.

**The Fix**: Synchronize React state with your modal close button.

```javascript
// Replace data-bs-dismiss="modal" with:
<button onClick={onClose}>Close</button>;

// And use a cleanup effect to remove Bootstrap classes:
useEffect(() => {
  return () => document.body.classList.remove("modal-open");
}, []);
```
