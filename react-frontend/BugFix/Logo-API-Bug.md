# Bug Fix: Dynamic Logo Not Loading from API

**File:** `src/Components/Header/MainHeader.jsx`  
**Date:** 2026-06-24

---

## Problem

The header logo was hardcoded and not loading dynamically from the backend `settings` table, even though the correct URL was stored in the database.

---

## Root Causes (4 Bugs)

### Bug 1 — Wrong initial state type

```jsx
// ❌ Wrong: {} is an object, arrays have .find() / .filter(), objects don't
const [settings, setSettings] = useState({});

// ✅ Fixed: API returns an array, so initialize as array
const [settings, setSettings] = useState([]);
```

---

### Bug 2 — Missing `[]` in `useEffect` (infinite loop)

```jsx
// ❌ Wrong: no dependency array = runs on every render = infinite API calls
useEffect(() => {
  settingsCall();
});

// ✅ Fixed: empty array = runs only once on component mount
useEffect(() => {
  settingsCall();
}, []);
```

---

### Bug 3 — Reading stale state after `setState`

`setState` is **asynchronous** — the new value is not available on the next line.

```jsx
// ❌ Wrong: settings still holds the OLD value here
setSettings(response.data);
const logo = settings.find(...); // always searches the empty old state

// ✅ Fixed: filter response.data directly (the fresh value)
const data = response.data?.data ?? response.data;
setSettings(data);
const logoSetting = data.find(...); // searches the fresh data
```

---

### Bug 4 — Wrong column names (typo)

The Laravel `Setting` model uses `settings_key` and `settings_value` (with **'s'**), not `setting_key` / `setting_value`.

```jsx
// ❌ Wrong column names — find() never matches, logoSetting is always undefined
const logoSetting = data.find((s) => s.setting_key === "logo_url");
setLogoUrl(logoSetting.setting_value);

// ✅ Fixed: match the actual DB column names
const logoSetting = data.find((s) => s.settings_key === "logo_url");
if (logoSetting) {
  setLogoUrl(logoSetting.settings_value);
}
```

> Check the model at `app/Models/Setting.php` — the `$fillable` array is the source of truth for column names.

---

## Final Corrected Code

```jsx
const [settings, setSettings] = useState([]);
const [logoUrl, setLogoUrl] = useState("");

const settingsCall = async () => {
  const response = await axios.get("http://localhost:8000/api/settings");
  const data = response.data?.data ?? response.data; // handles paginated or plain array
  setSettings(data);

  const logoSetting = data.find(
    (setting) => setting.settings_key === "logo_url",
  );
  if (logoSetting) {
    setLogoUrl(logoSetting.settings_value);
  }
};

useEffect(() => {
  settingsCall();
}, []);
```

Logo `img` tag with fallback:

```jsx
<img
  src={logoUrl || "/assets/images/dreamwebdev-logo.png"}
  alt="DreamWebdev"
  className="logo__image d-block"
/>
```

---

## Database Requirement

Make sure the `settings` table has this row:

| id  | settings_key | settings_value                      |
| --- | ------------ | ----------------------------------- |
| 2   | logo_url     | /assets/images/dreamwebdev-logo.png |

---

## Key Lessons

| Lesson              | Rule                                                                           |
| ------------------- | ------------------------------------------------------------------------------ |
| `useState` type     | Match initial type to what the API returns (array vs object)                   |
| `useEffect` deps    | Always add `[]` if you only want to fetch once                                 |
| `setState` is async | Never read state on the line after setting it — work with the raw data instead |
| Column names        | Always cross-check column names with the Eloquent model's `$fillable`          |
