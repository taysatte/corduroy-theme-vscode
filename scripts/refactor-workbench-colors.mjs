import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const palettes = {
  corduroy: {
    accent: "#e99d90",
    accentForeground: "#1d1920",
    chenille: "#e06278",
  },
  "corduroy-dark": {
    accent: "#f0a89b",
    accentForeground: "#141016",
    chenille: "#e8758a",
  },
};

const accentKeys = [
  "activityBarBadge.background",
  "badge.background",
  "button.background",
  "button.hoverBackground",
  "extensionButton.prominentBackground",
  "extensionButton.prominentHoverBackground",
  "extensionIcon.starForeground",
  "inputOption.activeForeground",
  "list.filterMatchBorder",
  "list.highlightForeground",
  "editorCodeLens.foreground",
  "editorLightBulbAutoFix.foreground",
  "editorLink.activeForeground",
  "editorSuggestWidget.focusHighlightForeground",
  "editorSuggestWidget.highlightForeground",
  "ports.iconRunningProcessForeground",
  "progressBar.background",
  "settings.modifiedItemIndicator",
];

const accentForegroundKeys = [
  "activityBarBadge.foreground",
  "badge.foreground",
  "button.foreground",
  "extensionButton.prominentForeground",
];

const themes = [
  { file: "themes/corduroy.json", paletteKey: "corduroy" },
  { file: "themes/corduroy-italic.json", paletteKey: "corduroy" },
  { file: "themes/corduroy-dark.json", paletteKey: "corduroy-dark" },
  { file: "themes/corduroy-dark-italic.json", paletteKey: "corduroy-dark" },
];

function accentAlpha(color, alpha) {
  return `${color}${alpha}`;
}

for (const { file, paletteKey } of themes) {
  const palette = palettes[paletteKey];
  const themePath = path.join(root, file);
  const theme = JSON.parse(fs.readFileSync(themePath, "utf8"));

  for (const key of accentKeys) {
    if (key.endsWith("hoverBackground")) {
      theme.colors[key] = accentAlpha(palette.accent, "e6");
      continue;
    }

    theme.colors[key] = palette.accent;
  }

  theme.colors["inputOption.activeBackground"] = accentAlpha(palette.accent, "26");

  for (const key of accentForegroundKeys) {
    theme.colors[key] = palette.accentForeground;
  }

  fs.writeFileSync(themePath, JSON.stringify(theme, null, 2) + "\n");
  console.log(`Updated ${file} accents to ${palette.accent}`);
}
