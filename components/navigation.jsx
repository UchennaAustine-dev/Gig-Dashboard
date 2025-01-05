export function Navigation() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid px-4">
          <a className="navbar-brand fw-bold" href="/">
            Dashboard
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/payments">
                  Payments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/transactions">
                  Transactions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/settings">
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  