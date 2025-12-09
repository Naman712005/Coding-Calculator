# Coding Calculator 🧮

A modern, animated calculator built with React.  
It supports basic arithmetic operations along with percentage (`%`) and floor division (`//`) and is styled with a neon, gradient border and futuristic fonts.

---

## 🔍 Introduction

**Coding Calculator** is a simple yet polished calculator web app created using **Create React App**.  
The focus of this project is:

- Clean and readable React code.
- Safe expression evaluation (no direct `eval`).
- A visually appealing UI with animated gradients and glowing borders.

It’s ideal as:

- A mini front-end project for your portfolio.
- A learning reference for React state handling and custom styling.
- A base to extend into a more advanced calculator.

---

## 🧰 Tech Stack

**Frontend**

- **React** (functional components + hooks)
- **JavaScript (ES6+)**
- **CSS3** (custom styling, gradients, animations)
- **Google Fonts**: Orbitron, Audiowide

**Tooling**

- **Create React App** (build system, dev server)
- **react-scripts**
- **Testing libraries** (already configured by CRA, optional):
  - `@testing-library/react`
  - `@testing-library/jest-dom`
  - `@testing-library/user-event`
  - `@testing-library/dom`

---

## ✨ Features

- **Basic arithmetic operations**:  
  `+`, `-`, `*`, `/`
- **Percentage support (`%`)**  
  - Expressions like `50%` are treated as `50 / 100`.
- **Floor division (`//`)**  
  - Similar to Python-style floor division.  
  - Example: `7//2` → `3`
- **Clear button (`C`)**  
  - Instantly resets the input.
- **Decimal and double-zero support**  
  - `.` and `00` buttons included.
- **Error handling**  
  - Invalid expressions show `Error` instead of breaking the app.
- **Input sanitization**  
  - Only digits, operators (`+ - * / % . ( )` and `//`) and spaces are allowed before evaluation.
- **Futuristic UI & animations**  
  - Neon animated border using `conic-gradient`.
  - Animated gradient buttons.
  - Custom display using the **Orbitron** font for a digital look.
- **Responsive centered layout**  
  - Calculator is centered in the viewport with a dark background.

---

## 📁 Project Structure

```bash
calculator/
├─ node_modules/
├─ public/
│  ├─ index.html
│  ├─ favicon.ico
│  ├─ manifest.json
│  └─ ...
├─ src/
│  ├─ App.js           # Renders the main heading + Calculator component
│  ├─ App.css          # Global styles and heading animation
│  ├─ calculator.js    # Core Calculator component (logic + UI)
│  ├─ calculator.css   # Calculator layout, animations, gradients
│  ├─ index.js         # React entry point
│  ├─ index.css        # Global resets (if any)
│  ├─ reportWebVitals.js
│  ├─ setupTests.js
│  └─ ...
├─ package.json
├─ package-lock.json
└─ README.md (this file)
