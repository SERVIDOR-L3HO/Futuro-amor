# Corazón a Corazón

## Overview

A romantic/personal quiz web application called "Corazón a Corazón" (Heart to Heart) built entirely with vanilla HTML, CSS, and JavaScript. The app presents users with a series of 10 personal questions — some multiple choice, some free text — designed as a fun, intimate "get to know you" experience. It features a pink/red romantic color scheme with floating hearts animation and uses Google Fonts (Dancing Script and Quicksand) for styling.

The project is currently **incomplete** — the JavaScript file contains the question data and state variables but is missing the core logic for rendering questions, handling user input, navigating between questions, updating the progress bar, and displaying results.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Tech Stack
- **Pure frontend application**: No backend, no build tools, no frameworks
- **HTML5** — Single `index.html` page
- **Vanilla CSS** — `style.css` with CSS custom properties for theming
- **Vanilla JavaScript** — `script.js` for quiz logic

### Application Structure
The entire app lives in three files at the root level:
- `index.html` — Page structure with quiz container, progress bar, question area, options area, text input area, and results screen
- `style.css` — Styling with CSS variables for a romantic pink/red theme (currently incomplete — the `.card` rule is cut off)
- `script.js` — Quiz data and logic (currently incomplete — only has question definitions and state variables)

### Quiz Design Pattern
- Questions are stored as an array of objects, each with a `question` string, a `type` ("text" or "options"), and an optional `options` array
- State is tracked with `currentQuestionIndex` (number) and `answers` (array)
- The UI toggles between `options-container` (for multiple choice) and `input-container` (for free text) based on question type
- A progress bar visually tracks completion
- A result screen shows a summary of all answers at the end

### What Needs To Be Built
1. **Question rendering** — Function to display the current question and its options or text input
2. **Answer handling** — Click handlers for option buttons and the "Continuar" button for text answers
3. **Navigation logic** — Advancing through questions, updating the progress bar
4. **Results display** — Generating and showing a summary of all answers in `#summary`
5. **Floating hearts animation** — The `#hearts-container` div exists but no animation code is written
6. **CSS completion** — The `.card` class definition is truncated and needs to be finished, plus any remaining styles for options, buttons, animations, etc.

### Key DOM Element IDs
| ID | Purpose |
|---|---|
| `hearts-container` | Container for floating heart animations |
| `progress-bar` | Inner progress bar element (width should be updated as %) |
| `question-text` | H2 element for current question text |
| `options-container` | Div where multiple choice buttons are rendered |
| `input-container` | Div with text input (has `hidden` class by default) |
| `text-answer` | Text input field for free-text questions |
| `next-btn` | Button to submit text answer and continue |
| `result-screen` | Final results div (has `hidden` class by default) |
| `summary` | Div inside results where answer summary is displayed |

## External Dependencies

### Google Fonts
- **Dancing Script** (weight 700) — Used for the main heading (`h1`)
- **Quicksand** (weights 300, 500) — Used as the body font

No backend services, databases, APIs, or npm packages are used. This is a fully static, client-side application.