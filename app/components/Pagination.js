"use client";

import { Pagination } from "flowbite-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PaginationComp = ({ totalPages }) => {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(1);
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentPage = searchParams.get("page") || "1";
    setPageNumber(parseInt(currentPage));
  }, [searchParams]);

  const onPageChange = (page) => {
    router.push(`/?page=${page}`);
    setPageNumber(page);
  };

  return (
    <div className="my-4 flex justify-center overflow-x-auto">
      <Pagination
        layout="navigation"
        currentPage={pageNumber}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default PaginationComp;
