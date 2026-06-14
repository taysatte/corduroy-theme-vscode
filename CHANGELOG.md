# Corduroy Theme Change Log

All notable changes to the "Corduroy Theme" extension will be documented in this file.

## [v1.2.8] - [v1.2.9]

- Refined syntax highlighting across all four theme variants for clearer token distinction
- Restored constants and numeric literals to the original rayon color
- Differentiated entity names, structural types, and storage keywords so they no longer share the same color
- Property access (`.length`, `.target`, `.value`) now uses argyle for better readability in TypeScript and React
- Support builtins (`document`, etc.) aligned with keyword coloring

## [v1.2.7] - [v1.2.8]

- Refined which syntax tokens are italicized in `Corduroy Italic` and `Corduroy Dark Italic`

## [v1.2.6] - [v1.2.7]

- Added `Corduroy Italic` and `Corduroy Dark Italic` theme variants
- Refactored syntax token structure across all themes for consistent scope grouping
- Syntax highlighting fixes
  - `entity.name` and `entity.name.function` now use consistent colors, with functions kept distinct
  - C++ preprocessor macro names no longer pick up the function color under `#define`
  - C++ scope resolution (`::`) now inherits the base `punctuation.separator` color
- Added `scripts/refactor-token-colors.mjs` to regenerate `tokenColors` for all four themes from a single source
- Added Prettier with `format` and `format:check` scripts
- Switched package management from npm to pnpm

## [v1.2.5] - [v1.2.6]

- Added `Corduroy Dark` theme variant with darker backgrounds and improved contrast
- Added dark palette CSS variables

## [v1.2.4] - [v1.2.5]

- Cursor and word-highlight colors adjusted for clearer contrast on selection

## [v1.2.3] - [v1.2.4]

- GitLens colors adjusted
- GitLens gutter colors adjusted
- GitLens gutter uncommitted colors adjusted

## [v1.2.1] - [v1.2.2]

- CSS variables adjusted
- README updated

## [v1.2.0] - [v1.2.1]

- Major update to the theme
  - New palette added
  - New screenshots added to the README
  - New icons added
  - New colors added to the theme

## [v1.0.16] - [v1.0.20]

- Syntax Colors adjusted (`Corduroy` & `Corduroy Darker`)
  - Python
    - Added `Corduroy Darker` mode
    - Updated `package.json` & `README.md`
    - Adjusted syntax colors / added italics
    - License file added
- Workbench colors adjusted (`Corduroy` & `Corduroy Darker`)
  - Terminal ANSI colors adjusted

## [v1.0.13] - [v1.0.14]

- Adjusted primary/secondary button colors
- Comments made more visible
- Python logical keyword operators color changed / Escape characters color changed
- Suggest Widget focus foreground colors adjusted

## [v1.0.9] - [v1.0.12]

- Adjusted selection highlighting
- Minor editor color adjustments
- Customizations/`README.md` fix

## [v1.0.6] - [v1.0.8]

- Added `Corduroy Darker` mode
- Updated `package.json` & `README.md`
- Adjusted syntax colors / added italics
- License file added

## [v1.0.1] - [v1.0.5]

- `Corduroy` logo added
- JSON file organization
- Theme documentation added

## [v1.0.0]

- Initial release! ☕️
