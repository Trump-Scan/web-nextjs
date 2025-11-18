import type { Content } from "@/app/types";
import FeedTime from "@/app/components/FeedTime";

export default function Card({ content }: { content: Content }) {
  const { title, tags, source, link, date } = content;
  return (
    <div className="flex flex-col bg-white rounded-lg w-2/3 max-w-sm text-sm shadow-md">
      <Header source={source} date={date} />
      <Content title={title} tags={tags} />
      <Footer source={source} link={link} />
    </div>
  );
}

const Header = ({ source, date }: { source: string; date: string }) => {
  return (
    <div className="flex items-center gap-2 p-4 border-b border-gray-200 text-gray-600">
      <div className="rounded-full bg-gray-200 w-6 h-6"></div>
      <span>{source}</span>
      <FeedTime date={date} />
    </div>
  );
};

const Content = ({ title, tags }: { title: string; tags: string[] }) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <span>{title}</span>
      </div>
      <div className="flex gap-2 text-blue-700">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

const Footer = ({ source, link }: { source: string; link: string }) => {
  return (
    <div className="p-4 border-t border-gray-200">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center p-2 rounded-sm border border-blue-700 text-blue-700 text-sm w-full"
      >
        {source}에서 보기 ↗
      </a>
    </div>
  );
};
