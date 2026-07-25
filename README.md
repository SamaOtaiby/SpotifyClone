# Spotify UI Clone (React)

A UI-only clone of the Spotify landing page, built for the React training track.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Project structure

```
src/
  components/
    Sidebar.jsx / .css      - left navigation menu
    TopBar.jsx / .css       - top "Sign up / Log in" bar (shown on every screen)
    Card.jsx / .css         - a single playlist card (image + title + description)
    CardRow.jsx / .css      - a titled row ("Focus", "Spotify Playlists") that
                               maps a list of playlists to <Card /> components
    Home.jsx                - the Home screen: two <CardRow />s
    ScreenPlaceholder.jsx   - the centered-label screen used by every other tab
    Icon.jsx                - one component that returns any nav icon by name
  data/
    content.js              - all playlist data + nav item labels, kept separate
                               from the components that display them
  App.jsx                   - holds navigation state (useState) and decides
                               which screen to render
  main.jsx                  - React entry point
```

## How navigation works

`App.jsx` holds one piece of state: `activeScreen`. Clicking a link in the
sidebar calls `setActiveScreen(id)`. Based on that state, `App.jsx`
conditionally renders either:

- `<Home />` (only when `activeScreen === 'home'`), or
- `<ScreenPlaceholder label="..." />` for every other tab, which just shows
  the tab's name centered in the content area.

No routing library or backend is used — this is state-driven conditional
rendering, per the task requirements.
