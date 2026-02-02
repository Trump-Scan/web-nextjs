import { Content } from "@/app/types";
import { contents } from "@/app/mock";

export interface FetchContentsResponse {
  data: Content[];
  nextPage: number | null;
  totalPages: number;
}

const PAGE_SIZE = 5;

export async function fetchContents(
  page: number = 1,
  pageSize: number = PAGE_SIZE
): Promise<FetchContentsResponse> {
  // 네트워크 지연 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 500));

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = contents.slice(startIndex, endIndex);

  const totalPages = Math.ceil(contents.length / pageSize);
  const hasNextPage = page < totalPages;

  return {
    data: paginatedData,
    nextPage: hasNextPage ? page + 1 : null,
    totalPages,
  };
}
