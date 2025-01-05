import React, { useEffect } from 'react';
import { X, FileText, AlertCircle } from 'lucide-react';
import paystackLogo from "@/public/images/paystack-logo-vector.png"
import Image from 'next/image';

const PaymentDetailsModal = ({ payment, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!payment) return null;

  return (
    <>
      <div 
        className={`modal fade ${isOpen ? 'show d-block' : ''}`} 
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog modal-dialog-slideright modal-lg">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header bg-light border-bottom-0 p-4">
              <h5 className="modal-title fw-bold mb-0">Payment Details</h5>
              <button 
                type="button" 
                className="btn-close shadow-none"
                onClick={onClose}
                aria-label="Close"
              />
            </div>

            <div className="modal-body p-4">
              <div className="container-fluid px-0">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="d-flex align-items-center gap-3 p-3 bg-light rounded">
                      <FileText className="text-primary" size={24} />
                      <div>
                        <div className="text-muted small">Transaction ID</div>
                        <div className="fw-bold">{payment.transactionNumber}</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control bg-light"
                        id="customerName"
                        value={payment.customerName} 
                        readOnly 
                      />
                      <label htmlFor="customerName">Customer's Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="email" 
                        className="form-control bg-light"
                        id="customerEmail"
                        value={payment.email} 
                        readOnly 
                      />
                      <label htmlFor="customerEmail">Email Address</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="tel" 
                        className="form-control bg-light"
                        id="phoneNumber"
                        value={payment.phoneNumber} 
                        readOnly 
                      />
                      <label htmlFor="phoneNumber">Phone Number</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control bg-light"
                        id="amountPaid"
                        value={payment.amountPaid} 
                        readOnly 
                      />
                      <label htmlFor="amountPaid">Amount Paid</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <select 
                        className="form-select"
                        id="paymentStatus"
                        value={payment.status}
                      >
                        <option value="New">New</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                      <label htmlFor="paymentStatus">Payment Status</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-4">
                        <div className="text-center">
                          <Image 
                            src={paystackLogo}
                            alt="Payment Logo" 
                            className="mb-4" 
                            height={110}
                            width={200}
                          />
                          <p className="text-muted mb-2">Payment Receipt for {payment.customerName}</p>
                          <h3 className="mb-4">{payment.amountPaid}</h3>
                          <div className="d-grid gap-2">
                            <button className="btn btn-primary">
                              Download Receipt
                            </button>
                            <button className="btn btn-outline-secondary">
                              Print Receipt
                            </button>
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
      </div>
      <div 
        className={`modal-backdrop fade ${isOpen ? 'show' : ''}`}
        onClick={onClose}
      />
    </>
  );
};

export default PaymentDetailsModal;