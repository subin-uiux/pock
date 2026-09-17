import type { InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function SearchInput({
  label = "검색",
  className = "",
  id = "search-input",
  ...rest
}: SearchInputProps) {
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
        placeholder="검색"
        {...rest}
        maxLength={10}
      />
    </label>
  );
}
