import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { UserListContext } from "@/contexts/userListContext";
import { useContext } from "react";

export function PaginationComponent() {
  const { setPage, hasMore, hasPrevious, page, totalPages } = useContext(UserListContext);
  const isActive = false;
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious  />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i + 1}>
            <PaginationLink
              isActive={page === i + 1}
              onClick={() => {
                setPage(i + 1);
              }}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext  />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
