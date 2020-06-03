import React from 'react';

const PagesList = ({page, moviesCount, limit, getMoviesOfPage}) => {
    const pageCount = Math.ceil(moviesCount / limit);
    const currentPage = page + 1;
    return(
        <div className="pages-list">
            <button className="pages-list__button" 
                onClick={() => getMoviesOfPage(0)}>
                1
            </button>

            {pageCount >= 4 && currentPage >= 4 ? '.....' : null}

            {pageCount >= 3 && currentPage <= pageCount && currentPage >= 3 ? 
                <button className="pages-list__button" 
                    onClick={() => getMoviesOfPage(currentPage - 2)}>
                    {currentPage - 1}
                </button>
                : null
            }

            {pageCount >= 3 && currentPage <= pageCount - 1 && currentPage >= 2 ? 
                <button className="pages-list__button" onClick={() => getMoviesOfPage(currentPage - 1)}>
                    {currentPage}
                </button>
                : null
            }

            {pageCount >= 3 && currentPage <= pageCount - 2? 
                <button className="pages-list__button" onClick={() => getMoviesOfPage(currentPage)}>
                    {currentPage + 1}
                </button>
                : null
            }

            {pageCount >= 4 && currentPage <= pageCount - 3 ? '.....' : null}

            <button className="pages-list__button" onClick={() => getMoviesOfPage(pageCount - 1)}>
                {pageCount}
            </button>
        </div>
    )
}

export default PagesList;