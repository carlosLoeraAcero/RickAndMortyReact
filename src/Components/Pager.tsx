import { FaAngleLeft, FaAngleRight, FaFastBackward, FaFastForward } from 'react-icons/fa';

type PagerProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export const Pager: React.FC<PagerProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handleFirstPage = () => {
        onPageChange(1);
    };

    const handleLastPage = () => {
        onPageChange(totalPages);
    };

    const pageNumbers = [
        currentPage - 1 > 0 ? currentPage - 1 : null,
        currentPage,
        currentPage + 1 <= totalPages ? currentPage + 1 : null,
    ];

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={handleFirstPage}
                        aria-label="First"
                        disabled={currentPage === 1}
                    >
                        <FaFastBackward />
                    </button>
                </li>

                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={handlePreviousPage}
                        aria-label="Previous"
                        disabled={currentPage === 1}
                    >
                        <FaAngleLeft />
                    </button>
                </li>

                {pageNumbers.map(
                    (pageNumber, index) =>
                        pageNumber && (
                            <li
                                key={index}
                                className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => onPageChange(pageNumber)}
                                >
                                    {pageNumber}
                                </button>
                            </li>
                        )
                )}

                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={handleNextPage}
                        aria-label="Next"
                        disabled={currentPage === totalPages}
                    >
                        <FaAngleRight />
                    </button>
                </li>

                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={handleLastPage}
                        aria-label="Last"
                        disabled={currentPage === totalPages}
                    >
                        <FaFastForward />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

