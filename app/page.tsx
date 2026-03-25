import Header from "@/app/components/Header";
import CardList from "@/app/components/CardList";
import QueryProvider from "@/app/providers/QueryProvider";
import { SearchProvider } from "@/app/providers/SearchProvider";

export default function Home() {
  return (
    <QueryProvider>
      <SearchProvider>
        <main>
          <Header />
          <section aria-label="트럼프 발언·기사 목록">
            <CardList />
          </section>
        </main>
      </SearchProvider>
    </QueryProvider>
  );
}
