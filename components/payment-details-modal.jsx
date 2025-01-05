export function PaymentDetailsModal({ payment, isOpen, onClose }) {
    if (!isOpen) return null;
  
    return (
      <>
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header border-0">
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={onClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-4">
                <div className="container-fluid">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label text-muted">Transaction ID</label>
                        <div className="h5">{payment.transactionNumber}</div>
                      </div>
                    </div>
                    
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label text-muted">Customer's name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={payment.customerName} 
                          readOnly 
                        />
                      </div>
                    </div>
  
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label text-muted">Customer's Email</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          value={payment.email} 
                          readOnly 
                        />
                      </div>
                    </div>
  
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label text-muted">Phone number</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          value={payment.phoneNumber} 
                          readOnly 
                        />
                      </div>
                    </div>
  
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label text-muted">Payment Status</label>
                        <select className="form-select" value={payment.status}>
                          <option value="New">New</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Out for Delivery">Out for Delivery</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </div>
                    </div>
  
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label text-muted">Amount paid</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={payment.amountPaid} 
                          readOnly 
                        />
                      </div>
                    </div>
  
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label text-muted">View Receipt</label>
                        <div className="card">
                          <div className="card-body text-center p-4">
                            <img 
                              src="/placeholder.svg" 
                              alt="Payment Logo" 
                              className="mb-4" 
                              style={{ width: '48px', height: '48px' }} 
                            />
                            <p className="text-muted mb-2">Hi there, {payment.customerName} sent you</p>
                            <p className="text-muted mb-2">a payment request for</p>
                            <h3 className="mb-4">{payment.amountPaid}</h3>
                            <p className="text-muted small mb-2">NOTE FROM SENDER</p>
                            <p className="mb-4">For mangoes</p>
                            <button className="btn btn-success w-100 mb-3">Pay Now</button>
                            <p className="text-muted small mb-0">
                              To pay offline, use this reference
                              <br />
                              {payment.transactionNumber}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show"></div>
      </>
    );
  }
  
  