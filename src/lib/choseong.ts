const CHOSEONG = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
] as const;

const HANGUL_START = 0xac00;
const HANGUL_END = 0xd7a3;

/** 한글만 초성으로 바꾸고, 그 외 문자·줄바꿈은 그대로 둔다. */
export function toChoseong(text: string): string {
  let result = "";

  for (const char of text) {
    const code = char.codePointAt(0);
    if (code === undefined) continue;

    if (code >= HANGUL_START && code <= HANGUL_END) {
      const choseongIndex = Math.floor((code - HANGUL_START) / 588);
      result += CHOSEONG[choseongIndex] ?? char;
      continue;
    }

    result += char;
  }

  return result;
}
