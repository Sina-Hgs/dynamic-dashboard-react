import React from "react";
import Button from "../ui/Button";
import leftArrow from "../../assets/icons/Chevron left.svg";
import rightArrow from "../../assets/icons/Chevron right.svg";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) => {
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="flex justify-end items-center gap-3 mt-4">
      <Button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        variant="pagination"
      >
        <img src={leftArrow} width={25} height={25} alt="left arrow" />
      </Button>
      <span className="text-lightSecondary font-RobotoCondensed text-sm">
        Page
        <span className="text-lightPrimary underline underline-offset-2 px-2">
          {currentPage}
        </span>
        of {totalPages}
      </span>
      <Button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        variant="pagination"
      >
        <img src={rightArrow} width={25} height={25} alt="right arrow" />
      </Button>
    </div>
  );
};

export default Pagination;
