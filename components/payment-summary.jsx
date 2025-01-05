export function PaymentSummary({ data }) {
    return (
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h6 className="text-muted">Total Number of Payments</h6>
              <h2 className="card-title display-6 fw-bold">{data.totalPayments}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h6 className="text-muted">New Payment</h6>
              <h2 className="card-title display-6 fw-bold">{data.newPayments}</h2>
              <p className="text-muted small">{data.lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  