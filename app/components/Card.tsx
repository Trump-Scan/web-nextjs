import Image from "next/image";

import type { Feed } from "@/app/types";
import FeedTime from "@/app/components/FeedTime";
import { getChannelIconSrc } from "@/app/lib/channelIcon";

export default function Card({ feed }: { feed: Feed }) {
  const { summary, tags, channel, link, published_at } = feed;
  return (
    <div className="flex flex-col bg-white rounded-lg max-w-sm text-sm shadow-md w-full">
      <Header channel={channel} publishedAt={published_at} />
      <FeedContent summary={summary} tags={tags} />
      <Footer channel={channel} link={link} />
    </div>
  );
}

const Header = ({
  channel,
  publishedAt,
}: {
  channel: string;
  publishedAt: string;
}) => {
  const iconSrc = getChannelIconSrc(channel);

  return (
    <div className="flex items-center gap-2 p-4 border-b border-gray-200 text-gray-600 flex-wrap">
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt={`${channel} 아이콘`}
          width={24}
          height={24}
          className="rounded-full object-cover w-6 h-6 shrink-0"
        />
      ) : (
        <div className="rounded-full bg-gray-200 w-6 h-6 shrink-0" />
      )}
      <span>{channel}</span>
      <FeedTime publishedAt={publishedAt} />
    </div>
  );
};

const FeedContent = ({
  summary,
  tags,
}: {
  summary: string;
  tags: string[];
}) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <span>{summary}</span>
      </div>
      <div className="flex gap-2 text-blue-700 flex-wrap">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

const Footer = ({ channel, link }: { channel: string; link: string }) => {
  return (
    <div className="p-4 border-t border-gray-200">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center p-2 rounded-sm border border-blue-700 text-blue-700 text-sm w-full"
      >
        {channel}에서 보기 ↗
      </a>
    </div>
  );
};
