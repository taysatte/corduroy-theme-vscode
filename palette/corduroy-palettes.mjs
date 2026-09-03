/**
 * Canonical Corduroy palette + semantic role aliases.
 * Consumed by theme build scripts; keep CSS palette files in sync.
 */

function withRoles(base) {
  return {
    ...base,
    // Semantic aliases
    accent: base.rayon,
    accentForeground: base.base,
    keyword: base.argyle,
    storage: base.argyle,
    structural: base.velour,
    support: base.velour,
    name: base.rayon,
    constant: base.argyle,
    constantNumeric: base.rayon,
    constantAccent: base.chenille,
    string: base.chamois,
    punctuationString: base.chamois,
    variable: base.text,
    parameter: base.paisley,
    attribute: base.paisley,
    comment: base.subtle,
    punctuation: base.subtle,
    invalid: base.chenille,
    invalidDeprecated: base.subtle,
    metaText: base.text,
    variableCss: base.velour,
    error: base.chenille,
    warning: base.chamois,
    info: base.velour,
    transparent: "#0000",
  };
}

export const palettes = {
  corduroy: withRoles({
    base: "#1d1920",
    surface: "#261e2a",
    overlay: "#2e2533",
    muted: "#6f6373",
    subtle: "#887b8c",
    text: "#cdc8d0",
    chenille: "#e06278",
    chamois: "#edb392",
    rayon: "#e99d90",
    argyle: "#4b8686",
    velour: "#d27f91",
    paisley: "#c285b2",
    highlightLow: "#251f28",
    highlightMed: "#443c4a",
    highlightHigh: "#504757",
    ansiBlack: "#362d3b",
  }),
  "corduroy-dark": withRoles({
    base: "#141016",
    surface: "#1b151e",
    overlay: "#221a26",
    muted: "#7d7082",
    subtle: "#9a8d9e",
    text: "#ddd8df",
    chenille: "#e8758a",
    chamois: "#f0bd9c",
    rayon: "#f0a89b",
    argyle: "#55a0a0",
    velour: "#dc92a3",
    paisley: "#cf98c4",
    highlightLow: "#18131b",
    highlightMed: "#4f4656",
    highlightHigh: "#5a5160",
    ansiBlack: "#2a2130",
  }),
};

export function alpha(hex, a) {
  return `${hex}${a}`;
}
