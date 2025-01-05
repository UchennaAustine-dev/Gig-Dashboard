export function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
      <nav aria-label="Payment navigation">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => onPageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {[...Array(totalPages)].map((_, i) => (
            <li 
              key={i + 1} 
              className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
            >
              <button 
                className="page-link" 
                onClick={() => onPageChange(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => onPageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    )
  }
  
  