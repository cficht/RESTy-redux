# RESTy Redux

# --------------------

## Requirements
* Match the design and overall functionality
  * Input field for entering a URL
  * Radio Buttons for method (GET/PUT/POST/DELETE)
  * Input field for typing in JSON for POST/PUT
* Full Testing and Documentation are required.

## Stretch Goals
* Use authenticated APIs by sending either Basic or Bearer Auth, when specified
  * Username+Password entry for Basic Auth
  * Token entry for Bearer Auth
* Save History in local storage
  * When choosing from history, pre-fill the form

# --------------------

## components
- [] - App
- [] - Form
- [] - RadioButtons
- [] - Display
- [] - History
- [] - HistoryItem
- [] - Header
- [] - AuthDropdown

## actions
- [] - formActions
- [] - formActions.test

## reducers
- [] - formReducer
- [] - formReducer.test

## selectors
- [] - formSelectors
- [] - formSelectors.test

## services
- [X] - api (fetch(url, object with headers, body))
  * [X] - fetchResponse

# --------------------

## Steps
- reducer index.js
- store
- index.js Provider

- Initial Form (RadioButtons/AuthDropdown)
- Initial Display
- Initial History (HistoryItem)
- Initial Header
- Form state and handlers
- fetchResponse API
- Display
- History
- Header
- localStorage
- No duplicates
- Click to load
- Auth Dropdown
- Styling (Color palette, margin, padding)
- Styling (fonts, font sizes, font colors)
- Service Testing
- Hook Testing
- Refactor