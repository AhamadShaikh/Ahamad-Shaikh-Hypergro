import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="pagination flex justify-center mt-12">
      {getPageNumbers().map(page => (
        <button
          key={page}
          className={`mx-1 px-3 py-1 border border-gray-300 rounded-md shadow-md ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-200 hover:text-gray-800'}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>

  );
};

export default Pagination;
