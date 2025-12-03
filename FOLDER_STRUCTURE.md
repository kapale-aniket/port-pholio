# 📁 Detailed Folder Structure

This document provides a comprehensive overview of the project's folder structure and file organization.

## Root Directory

```
port-pholio/
│
├── 📁 public/                    # Public static files (served as-is)
├── 📁 src/                       # Source code directory
├── 📄 .gitignore                 # Git ignore rules
├── 📄 eslint.config.js           # ESLint configuration
├── 📄 index.html                 # HTML entry point
├── 📄 package.json               # NPM dependencies and scripts
├── 📄 vite.config.js             # Vite build configuration
├── 📄 LICENSE                    # MIT License
├── 📄 FOLDER_STRUCTURE.md        # This file
└── 📄 README.md                  # Project documentation
```

---

## 📁 public/ Directory

Contains static files that are served directly without processing.

```
public/
│
└── 📄 Aniket_Arun_Kapale.pdf     # Resume PDF file (downloadable)
```

**Purpose:** Files in this folder are copied to the root of the build output and can be referenced with absolute paths (e.g., `/Aniket_Arun_Kapale.pdf`).

---

## 📁 src/ Directory

Main source code directory containing all React components, styles, and assets.

```
src/
│
├── 📁 components/                # React components
│   │
│   ├── 📄 Navbar.jsx            # Fixed navigation bar component
│   │   └── Features:
│   │       - Active section highlighting
│   │       - Mobile hamburger menu
│   │       - Smooth scroll navigation
│   │
│   ├── 📄 Hero.jsx              # Landing/hero section
│   │   └── Features:
│   │       - Name and role display
│   │       - Call-to-action buttons
│   │       - Profile photo
│   │       - Scroll indicator
│   │
│   ├── 📄 About.jsx              # About section
│   │   └── Content:
│   │       - Professional summary
│   │       - Background information
│   │
│   ├── 📄 Skills.jsx             # Skills showcase
│   │   └── Features:
│   │       - Categorized skills
│   │       - Frontend, Backend, Database, Tools
│   │
│   ├── 📄 Projects.jsx           # Projects portfolio
│   │   └── Features:
│   │       - Project cards
│   │       - Technology tags
│   │       - Project descriptions
│   │
│   ├── 📄 Experience.jsx         # Work experience
│   │   └── Features:
│   │       - Timeline layout
│   │       - Company details
│   │       - Responsibilities
│   │
│   ├── 📄 Education.jsx          # Education section
│   │   └── Features:
│   │       - Degree information
│   │       - Institution details
│   │       - Percentage/GPA
│   │
│   ├── 📄 Contact.jsx            # Contact form
│   │   └── Features:
│   │       - Contact form
│   │       - Email and phone
│   │       - Social media links
│   │
│   └── 📄 Footer.jsx             # Footer component
│       └── Features:
│           - Copyright information
│
├── 📁 styles/                     # CSS stylesheets
│   │
│   ├── 📄 global.css             # Global styles and resets
│   │   └── Contains:
│   │       - CSS resets
│   │       - Scrollbar styling
│   │       - Base typography
│   │       - Smooth scroll settings
│   │
│   ├── 📄 Navbar.css             # Navigation bar styles
│   ├── 📄 Hero.css               # Hero section styles
│   ├── 📄 About.css              # About section styles
│   ├── 📄 Skills.css              # Skills section styles
│   ├── 📄 Projects.css            # Projects section styles
│   ├── 📄 Experience.css          # Experience section styles
│   ├── 📄 Education.css           # Education section styles
│   ├── 📄 Contact.css             # Contact section styles
│   └── 📄 Footer.css              # Footer styles
│
├── 📁 assets/                     # Static assets
│   │
│   └── 📄 red.jpg                 # Profile photo (used in Hero)
│
├── 📄 App.jsx                      # Main App component
│   └── Purpose:
│       - Root component
│       - Imports all sections
│       - Manages component structure
│
├── 📄 main.jsx                     # Application entry point
│   └── Purpose:
│       - React DOM rendering
│       - App initialization
│
└── 📄 index.css                   # Base CSS imports
```

---

## Configuration Files

### 📄 .gitignore

Specifies files and directories to ignore in Git:

```
node_modules/
dist/
docs/
*.log
.env
.DS_Store
```


### 📄 package.json

NPM configuration file containing:
- Project metadata
- Dependencies
- Scripts (dev, build, preview, lint)

### 📄 vite.config.js

Vite build configuration:
- React plugin setup
- Base path configuration
- Build output directory

### 📄 eslint.config.js

ESLint configuration for code quality and consistency.

---

## File Naming Conventions

### Components
- **Format:** `PascalCase.jsx`
- **Example:** `Navbar.jsx`, `Hero.jsx`

### Styles
- **Format:** `PascalCase.css`
- **Example:** `Navbar.css`, `Hero.css`

### Assets
- **Format:** `kebab-case.ext`
- **Example:** `red.jpg`, `profile-photo.png`

---

## Import Structure

### Component Imports
```jsx
import ComponentName from './components/ComponentName';
import '../styles/ComponentName.css';
```

### Asset Imports
```jsx
import assetName from '../assets/asset-name.jpg';
```

### Public File References
```jsx
// Files in public/ are referenced with absolute paths
const filePath = '/Aniket_Arun_Kapale.pdf';
```

---

## Build Output Structure

When you run `npm run build`, the output structure is:

```
docs/
│
├── 📄 index.html                 # Main HTML file
├── 📁 assets/                    # Compiled JS and CSS
│   ├── index-[hash].js
│   └── index-[hash].css
└── 📄 Aniket_Arun_Kapale.pdf     # Copied from public/
```

---

## Best Practices

1. **Component Organization:** One component per file
2. **Style Organization:** One CSS file per component
3. **Asset Management:** Keep assets in `src/assets/` or `public/`
4. **Naming:** Use descriptive, consistent naming conventions
5. **Structure:** Keep related files together

---

## Questions?

If you have questions about the project structure, please refer to:
- [README.md](./README.md) - Main documentation
- [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) - API docs (if applicable)

