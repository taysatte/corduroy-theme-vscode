import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const palettes = {
  corduroy: {
    comment: "#887b8c",
    punctuation: "#887b8c",
    punctuationString: "#edb392",
    keyword: "#4b8686",
    storage: "#4b8686",
    structural: "#d27f91",
    support: "#d27f91",
    name: "#e99d90",
    constant: "#4b8686",
    constantNumeric: "#e99d90",
    constantAccent: "#e06278",
    string: "#edb392",
    variable: "#cdc8d0",
    parameter: "#c285b2",
    attribute: "#c285b2",
    invalid: "#e06278",
    invalidDeprecated: "#887b8c",
    metaText: "#cdc8d0",
    variableCss: "#d27f91",
  },
  "corduroy-dark": {
    comment: "#9a8d9e",
    punctuation: "#9a8d9e",
    punctuationString: "#f0bd9c",
    keyword: "#55a0a0",
    storage: "#55a0a0",
    structural: "#dc92a3",
    support: "#dc92a3",
    name: "#f0a89b",
    constant: "#55a0a0",
    constantNumeric: "#f0a89b",
    constantAccent: "#e8758a",
    string: "#f0bd9c",
    variable: "#ddd8df",
    parameter: "#cf98c4",
    attribute: "#cf98c4",
    invalid: "#e8758a",
    invalidDeprecated: "#9a8d9e",
    metaText: "#ddd8df",
    variableCss: "#dc92a3",
  },
};

function colorSettings(foreground, { italic = false } = {}) {
  const settings = { foreground };
  if (italic) {
    settings.fontStyle = "italic";
  }
  return settings;
}

function buildTokenColors(c, { italic = false } = {}) {
  return [
    {
      scope: "comment",
      settings: colorSettings(c.comment, { italic }),
    },
    {
      scope: "constant",
      settings: colorSettings(c.constant),
    },
    {
      scope: ["constant.numeric", "constant.language"],
      settings: colorSettings(c.constantNumeric),
    },
    {
      scope: ["constant.character.escape", "constant.other.caps.python"],
      settings: colorSettings(c.constantAccent),
    },
    {
      scope: "entity.name",
      settings: colorSettings(c.name),
    },
    {
      scope: "entity.name.function",
      settings: colorSettings(c.name),
    },
    {
      scope: [
        "meta.preprocessor.cpp entity.name.function",
        "meta.preprocessor entity.name.function",
      ],
      settings: colorSettings(c.name),
    },
    {
      scope: [
        "entity.name.section",
        "entity.name.tag",
        "entity.name.namespace",
        "entity.name.type",
        "entity.name.type.cpp",
        "entity.name.tag.css",
      ],
      settings: colorSettings(c.structural),
    },
    {
      scope: [
        "entity.other.attribute-name",
        "entity.other.attribute-name.tsx",
        "entity.other.attribute-name.id",
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class",
        "entity.other.inherited-class",
      ],
      settings: colorSettings(c.attribute, { italic }),
    },
    {
      scope: "invalid",
      settings: colorSettings(c.invalid),
    },
    {
      scope: "invalid.deprecated",
      settings: colorSettings(c.invalidDeprecated),
    },
    {
      scope: [
        "keyword",
        "keyword.control.new.java",
        "keyword.operator.logical.python",
        "keyword.control.flow.python",
        "support.variable.magic.python",
        "keyword.operator.logical.cpp",
        "variable.language.this",
        "meta.preprocessor.cpp",
        "keyword.other.directive.cpp",
        "meta.import",
        "meta.export",
      ],
      settings: colorSettings(c.keyword),
    },
    {
      scope: "keyword.operator.assignment",
      settings: colorSettings(c.punctuation),
    },
    {
      scope: "keyword.other.unit",
      settings: colorSettings(c.keyword),
    },
    {
      scope: "markup.heading",
      settings: { fontStyle: "bold" },
    },
    {
      scope: "markup.bold",
      settings: { fontStyle: "bold" },
    },
    {
      scope: ["markup.italic", "markup.italic.markdown"],
      settings: { fontStyle: "italic" },
    },
    {
      scope: ["meta.tag", "meta.brace"],
      settings: colorSettings(c.metaText),
    },
    {
      scope: "meta.function-call.python",
      settings: colorSettings(c.name),
    },
    {
      scope: "meta.directive.vue",
      settings: colorSettings(c.attribute, { italic }),
    },
    {
      scope: "meta.method.body.java",
      settings: colorSettings(c.structural),
    },
    {
      scope: [
        "punctuation",
        "punctuation.definition.arguments.end.python",
        "punctuation.definition.arguments.begin.python",
        "punctuation.definition.inheritance.begin.python",
        "punctuation.definition.inheritance.end.python",
        "punctuation.section.class.begin.python",
        "punctuation.section.class.end.python",
        "punctuation.parenthesis.begin.python",
        "punctuation.parenthesis.end.python",
        "punctuation.section.function.begin.python",
        "punctuation.section.function.end.python",
        "punctuation.definition.parameters.begin.python",
        "punctuation.definition.parameters.end.python",
        "punctuation.separator",
        "punctuation.definition.template-expression",
        "punctuation.quasi.element",
        "punctuation.section.embedded",
        "punctuation.definition.list",
        "punctuation.section.block.begin.bracket.curly.java",
        "punctuation.section.block.end.bracket.curly.java",
        "punctuation.definition.parameters.begin.bracket.round.java",
        "punctuation.definition.parameters.end.bracket.round.java",
        "punctuation.bracket.square.java",
        "punctuation.terminator.java",
        "punctuation.bracket.angle.java",
        "punctuation.bracket.round.java",
        "punctuation.definition.tag",
        "punctuation.accessor",
        "keyword.operator.stream.cpp",
        "entity.name.function.operator.member.cpp",
        "entity.name.function.operator.cpp",
      ],
      settings: colorSettings(c.punctuation),
    },
    {
      scope: "punctuation.definition.string",
      settings: colorSettings(c.punctuationString),
    },
    {
      scope: [
        "storage.type",
        "storage.modifier",
        "storage.type.function.python",
        "storage.modifier.java",
        "storage.type.cs",
        "keyword.operator.sizeof.cpp",
      ],
      settings: colorSettings(c.storage),
    },
    {
      scope: [
        "string",
        "string.quoted",
        "string.template",
        "string.regexp",
        "string.other.link",
        "string.template meta.embedded",
      ],
      settings: colorSettings(c.string),
    },
    {
      scope: "support",
      settings: colorSettings(c.support),
    },
    {
      scope: "support.constant",
      settings: colorSettings(c.string),
    },
    {
      scope: "support.function",
      settings: colorSettings(c.name, { italic }),
    },
    {
      scope: "support.type.property-name.css",
      settings: colorSettings(c.structural),
    },
    {
      scope: "support.variable",
      settings: colorSettings(c.variable),
    },
    {
      scope: "variable",
      settings: colorSettings(c.variable, { italic }),
    },
    {
      scope: [
        "variable.other",
        "variable.language",
        "variable.function",
        "variable.argument",
        "variable.other.local.cpp",
        "variable.other.global.cpp",
        "variable.other.member.cpp",
        "variable.parameter.function.language.python",
        "meta.function-call.arguments.python",
        "variable.other.definition.java",
        "meta.function-call.java",
        "variable.other.constant.js",
        "variable.other.readwrite.js",
        "variable.other.object.js",
        "variable.other.property",
        "variable.other.property.js",
        "variable.other.property.ts",
        "variable.other.property.tsx",
        "support.type.property-name",
        "variable.argument.css",
      ],
      settings: colorSettings(c.variable),
    },
    {
      scope: ["variable.parameter", "entity.name.variable.parameter.cs", "variable.parameter.cpp"],
      settings: colorSettings(c.parameter),
    },
    {
      scope: "variable.css",
      settings: colorSettings(c.variableCss),
    },
  ];
}

const themes = [
  {
    file: "themes/corduroy.json",
    paletteKey: "corduroy",
    italic: false,
  },
  {
    file: "themes/corduroy-dark.json",
    paletteKey: "corduroy-dark",
    italic: false,
  },
  {
    file: "themes/corduroy-italic.json",
    paletteKey: "corduroy",
    italic: true,
    name: "Corduroy Italic",
  },
  {
    file: "themes/corduroy-dark-italic.json",
    paletteKey: "corduroy-dark",
    italic: true,
    name: "Corduroy Dark Italic",
  },
];

for (const { file, paletteKey, italic, name } of themes) {
  const themePath = path.join(root, file);
  const theme = JSON.parse(fs.readFileSync(themePath, "utf8"));
  theme.tokenColors = buildTokenColors(palettes[paletteKey], { italic });
  if (name) {
    theme.name = name;
  }
  fs.writeFileSync(themePath, JSON.stringify(theme, null, 2) + "\n");
  console.log(
    `Updated ${file} (${theme.tokenColors.length} rules, italic: ${italic})`
  );
}
