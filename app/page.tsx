import Header from "@/app/components/Header";
import Card from "@/app/components/Card";
import { contents } from "@/app/mock";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-4 items-center p-4">
        {contents.map((content) => (
          <Card key={content.id} content={content} />
        ))}
      </div>
    </div>
  );
}
