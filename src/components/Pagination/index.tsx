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
import { pagination } from "@/utils/generic";
import { useContext } from "react";

export function PaginationComponent() {
  const { setPage, hasMore, hasPrevious, page, totalPages } = useContext(UserListContext);
  const paginationItems: (string | number)[] = pagination(page, totalPages, 1);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage(hasPrevious ? page - 1 : page)}
          />
        </PaginationItem>
        {paginationItems.map((item: string | number, index: number) => {
          if (item === "...") {
            return (
              <PaginationItem key={item + index}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
          return (
            <PaginationItem key={index + 1}>
              <PaginationLink
                isActive={page === item}
                onClick={() => {
                  setPage(Number(item));
                }}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext onClick={() => setPage(hasMore ? page + 1 : page)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
