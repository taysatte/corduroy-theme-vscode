import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { palettes } from "../palette/corduroy-palettes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

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
      scope: [
        "variable.parameter",
        "entity.name.variable.parameter.cs",
        "variable.parameter.cpp",
      ],
      settings: colorSettings(c.parameter),
    },
    {
      scope: "variable.css",
      settings: colorSettings(c.variableCss),
    },
  ];
}

function buildSemanticTokenColors(c, { italic = false } = {}) {
  return {
    namespace: c.structural,
    class: c.structural,
    enum: c.structural,
    interface: c.structural,
    struct: c.structural,
    type: c.structural,
    typeParameter: c.structural,
    function: c.name,
    method: c.name,
    macro: c.name,
    variable: italic ? { foreground: c.variable, fontStyle: "italic" } : c.variable,
    parameter: c.parameter,
    property: c.variable,
    enumMember: c.constantNumeric,
    event: c.name,
    decorator: c.attribute,
    comment: italic ? { foreground: c.comment, fontStyle: "italic" } : c.comment,
    string: c.string,
    keyword: c.keyword,
    number: c.constantNumeric,
    regexp: c.string,
    operator: c.punctuation,
    "*.defaultLibrary": c.support,
    "variable.defaultLibrary": c.support,
    "function.defaultLibrary": c.name,
    "method.defaultLibrary": c.name,
    "class.defaultLibrary": c.structural,
    "interface.defaultLibrary": c.structural,
    "type.defaultLibrary": c.structural,
  };
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
  const palette = palettes[paletteKey];
  theme.tokenColors = buildTokenColors(palette, { italic });
  theme.semanticHighlighting = true;
  theme.semanticTokenColors = buildSemanticTokenColors(palette, { italic });
  if (name) {
    theme.name = name;
  }
  fs.writeFileSync(themePath, JSON.stringify(theme, null, 2) + "\n");
  console.log(
    `Updated ${file} (${theme.tokenColors.length} token rules, semantic: on, italic: ${italic})`
  );
}
