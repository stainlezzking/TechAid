"use client";

import { useState } from "react";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
    };

    const handlePrev = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {"<"}
            </button>
            <span>{currentPage}/{totalPages}</span>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {">"}
            </button>
        </div>
    );
};

export default Pagination;
