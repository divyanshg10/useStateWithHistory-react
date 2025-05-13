# useStateWithHistory Hook Example

## Contents

- [Features](#features)
- [Usage](#usage)
    - [Install dependencies](#1-install-dependencies)
    - [Start the development server](#2-start-the-development-server)
    - [How the hook works](#3-how-the-hook-works)
    - [Example](#4-example)
- [Project Structure](#project-structure)
- [License](#license)

This project demonstrates a custom React hook, `useStateWithHistory`, which extends the standard `useState` by keeping a history of state values and providing undo functionality.

## Features

- **Custom Hook:** `useStateWithHistory` for state management with history tracking.
- **Undo Support:** Easily revert to previous state values.
- **Configurable History Length:** Limit the number of stored history entries.
- **Sample App:** Simple React app to showcase the hook in action.

## Usage

### 1. Install dependencies

```
npm install
```

### 2. Start the development server

```
npm run dev
```

### 3. How the hook works

```typescript
const [state, setState, history, undo] = useStateWithHistory<T>(initialValue, maxHistoryLength?)
```

- `state`: Current value.
- `setState`: Function to update the value.
- `history`: Array of previous values (including current).
- `undo`: Function to revert to the previous value.

### 4. Example

See `src/App.tsx` for a usage example.

## Project Structure

- `src/useStateWithHistory.tsx` — The custom hook implementation.
- `src/App.tsx` — Sample app using the hook.
- `index.html` — App entry point.

## License

MIT