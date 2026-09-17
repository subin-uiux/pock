/**
 * One-shot: guide.html body → GuideMarkup.tsx fragment
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const html = fs.readFileSync(path.join(root, "legacy", "pages", "guide.html"), "utf8");

const start = html.indexOf('<div class="guide">');
const end = html.indexOf("</main>", start);
if (start < 0 || end < 0) {
  console.error("Could not find guide markup");
  process.exit(1);
}

let body = html.slice(start, end).trim();

body = body.replace(/\ssrc="assets\//g, ' src="/assets/');
body = body.replace(/\shref="assets\//g, ' href="/assets/');
body = body.replace(/\bclass=/g, "className=");
body = body.replace(/\bcontenteditable=/gi, "contentEditable=");
body = body.replace(/\btabindex=/gi, "tabIndex=");
body = body.replace(/\bcolspan=/gi, "colSpan=");
body = body.replace(/\browspan=/gi, "rowSpan=");
body = body.replace(/\bautocomplete=/gi, "autoComplete=");
body = body.replace(/\binputmode=/gi, "inputMode=");
body = body.replace(/\bautofocus\b/gi, "autoFocus");
body = body.replace(/\bspellcheck=/gi, "spellCheck=");

// width/height numeric attributes for React
body = body.replace(/\b(width|height|colSpan|rowSpan|tabIndex)="(\d+)"/g, "$1={$2}");

// Self-close void elements (with or without attributes)
body = body.replace(
  /<(img|input|br|hr|meta|link|source|area|col|embed|param|track|wbr)(\s[^>]*?)?\s*\/?>/gi,
  (match, tag, attrs) => {
    if (/\/>\s*$/.test(match)) return match.replace(/\s*\/>$/, " />");
    return `<${tag}${attrs || ""} />`;
  },
);
// Remove style attributes if any (none expected) — convert to empty
body = body.replace(/\sstyle="[^"]*"/g, "");

// JSX comments for HTML comments
body = body.replace(/<!--([\s\S]*?)-->/g, "{/*$1*/}");

// aria-current="page" is fine
// boolean contentEditable without value → contentEditable={true}
body = body.replace(/\bcontentEditable(?!=)/g, "contentEditable={true}");
body = body.replace(/contentEditable="true"/g, "contentEditable={true}");
body = body.replace(/contentEditable=""/g, "contentEditable={true}");

const out = `/* Auto-generated from guide.html — do not hand-edit large chunks; re-run _tools/convert-guide.mjs */
export function GuideMarkup() {
  return (
    <>
${body
  .split("\n")
  .map((line) => (line.length ? `      ${line}` : ""))
  .join("\n")}
    </>
  );
}
`;

const outPath = path.join(root, "src", "pages", "guide", "GuideMarkup.tsx");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, out, "utf8");
console.log("Wrote", outPath, "bytes", out.length);
