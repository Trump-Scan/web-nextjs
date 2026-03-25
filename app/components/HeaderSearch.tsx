"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { useCallback, useEffect, useRef, useState } from "react";

const DEBOUNCE_MS = 300;

type HeaderSearchProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function HeaderSearch({
  open,
  onOpenChange,
}: HeaderSearchProps) {
  const searchToggleRef = useRef<HTMLButtonElement>(null);
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword, DEBOUNCE_MS);

  const closeSearch = useCallback(() => {
    onOpenChange(false);
    searchToggleRef.current?.focus();
  }, [onOpenChange]);

  useEffect(() => {
    const trimmedKeyword = debouncedKeyword.trim();

    if (trimmedKeyword.length === 0) {
      // TODO: 검색 결과 초기화
    } else {
      // TODO: 검색 결과 업데이트
    }
  }, [debouncedKeyword]);

  if (open) {
    return (
      <div className="flex min-w-0 flex-1 items-center gap-2" role="search">
        <label htmlFor="header-search" className="sr-only">
          검색
        </label>
        <input
          id="header-search"
          type="search"
          name="keyword"
          placeholder="검색…"
          autoFocus
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          className="min-w-0 flex-1 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-base text-[var(--foreground)] outline-none ring-offset-2 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-300"
        />
        <button
          type="button"
          onClick={closeSearch}
          className="shrink-0 rounded-lg text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          aria-label="검색 닫기"
        >
          <span
            className="header-search-icon header-search-icon--close"
            aria-hidden
          />
        </button>
      </div>
    );
  }

  return (
    <button
      ref={searchToggleRef}
      type="button"
      onClick={() => {
        onOpenChange(true);
      }}
      className="shrink-0 rounded-lg text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
      aria-label="검색"
      aria-expanded={false}
    >
      <span
        className="header-search-icon header-search-icon--search"
        aria-hidden
      />
    </button>
  );
}
