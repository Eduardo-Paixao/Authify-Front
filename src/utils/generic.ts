export function decodeJwt(token: string) {
  try {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload));
    return decoded;
  } catch {
    return null;
  }
}

export const pagination = (
  currentPage: number,
  totalPages: number,
  sibling: number = 1
) => {
  const pages: (number | string)[] = [];

  pages.push(1);

  const leftSibling = Math.max(currentPage - sibling, 2);
  const rightSibling = Math.min(currentPage + sibling, totalPages - 1);

  if (leftSibling > 2) {
    pages.push("...");
  }

  const middlePages = Array.from(
    { length: rightSibling - leftSibling + 1 },
    (_, i) => leftSibling + i
  );
  pages.push(...middlePages);

  if (rightSibling < totalPages - 1) {
    pages.push("...");
  }

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
};
