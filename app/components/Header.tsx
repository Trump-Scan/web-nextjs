"use client";
import HeaderSearch from "@/app/components/HeaderSearch";
import { useSearch } from "@/app/providers/SearchProvider";

export default function Header() {
  const { searchOpen, setSearchOpen } = useSearch();

  return (
    <header className="sticky top-0 z-20 flex w-full flex-col gap-2 bg-white p-4 shadow-sm">
      <div className="flex w-full items-center justify-between gap-2">
        {!searchOpen && (
          <h1 className="min-w-0 flex-1 text-2xl font-bold">
            🇺🇸 트럼프 가라사대
          </h1>
        )}

        <HeaderSearch open={searchOpen} onOpenChange={setSearchOpen} />
      </div>
    </header>
  );
}
