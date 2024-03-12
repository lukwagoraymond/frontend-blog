/* eslint-disable react/prop-types */


const Pagination = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const pageNumberButtons = []
  for(let i = 1; i <= numberOfPages; i++) {
    pageNumberButtons.push(i);
  }

  const goToNext = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  }

  const goToPrevious = () => {
    if (currentPage != 1) setCurrentPage(currentPage -1)
  }

  return (
    <div>
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a className="page-link" onClick={goToPrevious}>Previous</a>
          </li>
          {
            pageNumberButtons.map((pageNumber) => {
              return <li key={pageNumber} className={`page-item ${currentPage == pageNumber ? 'active' : ''}`}>
                <a className="page-link" href="#" onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</a>
              </li>
            })
          }
          <li className={`page-item ${currentPage === numberOfPages ? 'disabled' : ''}`}>
            <a className="page-link" href="#" onClick={goToNext}>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
