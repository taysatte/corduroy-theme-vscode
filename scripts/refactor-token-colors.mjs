import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const palettes = {
  corduroy: {
    comment: "#887b8c",
    constant: "#e99d90",
    constantAccent: "#e06278",
    constantNumeric: "#e06278",
    entityName: "#cdc8d0",
    entityStructural: "#d27f91",
    entityNamespace: "#4b8686",
    entityTypeCpp: "#c285b2",
    attributeName: "#c285b2",
    invalid: "#e06278",
    invalidDeprecated: "#887b8c",
    keyword: "#4b8686",
    keywordMuted: "#887b8c",
    metaCall: "#e99d90",
    metaDirective: "#e06278",
    metaText: "#cdc8d0",
    punctuation: "#887b8c",
    punctuationString: "#edb392",
    storage: "#4b8686",
    string: "#edb392",
    support: "#d27f91",
    supportFunction: "#e06278",
    variable: "#cdc8d0",
    variableParameter: "#c285b2",
    variableCss: "#d27f91",
    operator: "#4b8686",
  },
  "corduroy-dark": {
    comment: "#9a8d9e",
    constant: "#f0a89b",
    constantAccent: "#e8758a",
    constantNumeric: "#e8758a",
    entityName: "#ddd8df",
    entityStructural: "#dc92a3",
    entityNamespace: "#55a0a0",
    entityTypeCpp: "#cf98c4",
    attributeName: "#cf98c4",
    invalid: "#e8758a",
    invalidDeprecated: "#9a8d9e",
    keyword: "#55a0a0",
    keywordMuted: "#9a8d9e",
    metaCall: "#f0a89b",
    metaDirective: "#e8758a",
    metaText: "#ddd8df",
    punctuation: "#9a8d9e",
    punctuationString: "#f0bd9c",
    storage: "#55a0a0",
    string: "#f0bd9c",
    support: "#dc92a3",
    supportFunction: "#e8758a",
    variable: "#ddd8df",
    variableParameter: "#cf98c4",
    variableCss: "#dc92a3",
    operator: "#55a0a0",
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
      settings: colorSettings(c.entityName),
    },
    {
      scope: "entity.name.function",
      settings: colorSettings(c.metaCall, { italic }),
    },
    {
      scope: [
        "meta.preprocessor.cpp entity.name.function",
        "meta.preprocessor entity.name.function",
      ],
      settings: colorSettings(c.entityName),
    },
    {
      scope: [
        "entity.name.section",
        "entity.name.tag",
        "entity.name.namespace",
        "entity.name.type",
      ],
      settings: colorSettings(c.entityStructural),
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
      settings: colorSettings(c.attributeName, { italic }),
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
      ],
      settings: colorSettings(c.keyword),
    },
    {
      scope: "keyword.operator.assignment",
      settings: colorSettings(c.keywordMuted),
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
      scope: "markup.italic",
      settings: { fontStyle: "italic" },
    },
    {
      scope: ["meta.tag", "meta.brace"],
      settings: colorSettings(c.metaText),
    },
    {
      scope: ["meta.import", "meta.export"],
      settings: colorSettings(c.keyword, { italic }),
    },
    {
      scope: "meta.function-call.python",
      settings: colorSettings(c.metaCall, { italic }),
    },
    {
      scope: ["meta.preprocessor.cpp", "keyword.other.directive.cpp"],
      settings: colorSettings(c.metaDirective),
    },
    {
      scope: "meta.method.body.java",
      settings: colorSettings(c.entityStructural),
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
      ],
      settings: colorSettings(c.punctuation),
    },
    {
      scope: "punctuation.accessor",
      settings: colorSettings(c.keyword),
    },
    {
      scope: "punctuation.definition.string",
      settings: colorSettings(c.punctuationString),
    },
    {
      scope: [
        "keyword.operator.stream.cpp",
        "punctuation.separator.scope-resolution.cpp",
      ],
      settings: colorSettings(c.metaDirective),
    },
    {
      scope: [
        "entity.name.function.operator.member.cpp",
        "entity.name.function.operator.cpp",
      ],
      settings: colorSettings(c.operator),
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
      settings: colorSettings(c.supportFunction, { italic }),
    },
    {
      scope: "support.type.property-name.css",
      settings: colorSettings(c.entityName),
    },
    {
      scope: "support.variable",
      settings: colorSettings(c.keyword),
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
        "variable.parameter.function.language.python",
        "meta.function-call.arguments.python",
        "variable.other.definition.java",
        "meta.function-call.java",
        "variable.other.constant.js",
        "variable.other.readwrite.js",
        "variable.other.object.js",
        "variable.other.property.js",
        "variable.argument.css",
        "variable.parameter.cpp",
      ],
      settings: colorSettings(c.variable),
    },
    {
      scope: ["variable.parameter", "entity.name.variable.parameter.cs"],
      settings: colorSettings(c.variableParameter),
    },
    {
      scope: "variable.css",
      settings: colorSettings(c.variableCss),
    },
    {
      scope: "entity.name.tag.css",
      settings: colorSettings(c.entityNamespace),
    },
    {
      scope: "entity.name.type.cpp",
      settings: colorSettings(c.entityTypeCpp),
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
