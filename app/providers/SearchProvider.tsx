"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type SearchContextValue = {
  searchKeyword: string;
  setSearchKeyword: (value: string) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
};

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const value = useMemo(() => {
    return {
      searchKeyword,
      setSearchKeyword,
      searchOpen,
      setSearchOpen,
    };
  }, [searchKeyword, searchOpen]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export function useSearch(): SearchContextValue {
  const searchContextValue = useContext(SearchContext);
  if (searchContextValue === undefined) {
    throw new Error(
      "useSearch는 SearchProvider 내부에서만 사용할 수 있습니다.",
    );
  }
  return searchContextValue;
}
