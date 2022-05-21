import React, { useEffect } from "react";

const PaginateList = (props) => {
    // buatlah sebuah state yang bernama displayedItems dengan initial value sebuah array kosong
    const [displayedItems, setDisplayedItems] = React.useState([]);
    // buatlah sebuah state yang bernama currentPage dengan initial value props.initialPage
    const [currentPage, setCurrentPage] = React.useState(props.initialPage);

    const totalPage = Math.ceil(props.items.length / props.itemPerPage);

    const goToPrev = () => {
        // Apabila currentPage lebih besar dari 1 maka state currentPage ditambah 1
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNext = () => {
        // Apabila currentPage lebih kecil dari totalPage maka state currentPage dikurangi 1
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        const startingIndex = (currentPage - 1) * props.itemPerPage;
        const endIndex = startingIndex + props.itemPerPage;
        const newDisplayedItems =
            /* filter props.items untuk mendapatkan item dari index 'startingIndex' sampai dengan 1 index sebelum 'endIndex' */
            props.items.filter(
                (item, index) => index >= startingIndex && index < endIndex
            );
        setDisplayedItems(newDisplayedItems);
    }, [currentPage, props.itemPerPage, props.items]);

    return (
        <div>
            <ul className="list-group list-group-flush">
                {/* loop displayedItems untuk menampilkan komponen TodoItem dengan prop item adalah masing-masing item dari displayedItems (serupa dengan loop yang ada pada file TodoList.js) */}
                {displayedItems.map((item) => (
                    <li className="list-group-item" key={item.id}>
                        {item.text}
                    </li>
                ))}
            </ul>
            {totalPage > 0 && (
                <div className="page-controller">
                    <button className="page-btn" onClick={goToPrev}>
                        Prev
                    </button>
                    page {currentPage} of {totalPage}
                    <button className="page-btn" onClick={goToNext}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default PaginateList;