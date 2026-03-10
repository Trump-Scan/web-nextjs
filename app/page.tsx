import Header from "@/app/components/Header";
import CardList from "@/app/components/CardList";

export default function Home() {
  return (
    <main>
      <Header />
      <section aria-label="트럼프 발언·기사 목록">
        <CardList />
      </section>
    </main>
  );
}
