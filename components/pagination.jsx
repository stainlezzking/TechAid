const Pagination = ({active, changeActive, lastPage}) => {
    const totalPages = 10;

    const handleNext = () => {
        changeActive((active) => (active < totalPages ? active + 1 : active));
    };

    const handlePrev = () => {
        changeActive((active) => (active > 1 ? active - 1 : active));
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={handlePrev}
                disabled={active === 1}
                className={`cursor-pointer ${active === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {"<"}
            </button>
            <span>{active}/{lastPage}</span>
            <button
                onClick={handleNext}
                disabled={active === totalPages}
                className={`cursor-pointer ${active === lastPage ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {">"}
            </button>
        </div>
    );
};

export default Pagination;
