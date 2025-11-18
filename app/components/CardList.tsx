import { Content } from "@/app/types";

import Card from "@/app/components/Card";
import { contents } from "@/app/mock";

export default async function CardList() {
  const getContents = async () => {
    return new Promise<Content[]>((resolve) => {
      setTimeout(() => {
        resolve(contents);
      }, 1000);
    });
  };

  const items = await getContents();

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      {items.map((content: Content) => (
        <Card key={content.id} content={content} />
      ))}
    </div>
  );
}
