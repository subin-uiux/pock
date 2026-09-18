import type { FocusEvent, InputHTMLAttributes } from "react";
import { useState } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const DEFAULT_PLACEHOLDER = "검색어를 입력하세요.";

export function SearchInput({
  label = "검색",
  className = "",
  id = "search-input",
  placeholder = DEFAULT_PLACEHOLDER,
  onFocus,
  onBlur,
  ...rest
}: SearchInputProps) {
  const [focused, setFocused] = useState(false);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(event);
  };

  return (
    <label className={`search-input ${className}`.trim()} htmlFor={id}>
      <span className="visually-hidden">{label}</span>
      <img
        className="search-input__icon"
        src="/assets/images/search-icon.svg"
        alt=""
        width={18}
        height={18}
      />
      <input
        id={id}
        className="search-input__field"
        type="search"
        placeholder={focused ? "" : placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
        maxLength={10}
      />
    </label>
  );
}
