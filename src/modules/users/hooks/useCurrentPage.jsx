import { useState } from 'react';

const useCurrentPage = (initialPage) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return [currentPage, handlePageChange];
};

export default useCurrentPage;
