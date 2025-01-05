import { useState } from 'react'
import { PaymentStatus } from './payment-status'
import { PaymentDetailsModal } from './payment-details-modal'

export function PaymentTable({ payments }) {
  const [selectedPayment, setSelectedPayment] = useState(null);

  return (
    <>
      <div className="card">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                  </div>
                </th>
                <th>Transaction Number</th>
                <th>Customer's Name</th>
                <th>Amount Paid</th>
                <th>Status</th>
                <th>Date Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.transactionNumber}>
                  <td>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                    </div>
                  </td>
                  <td>{payment.transactionNumber}</td>
                  <td>{payment.customerName}</td>
                  <td>{payment.amountPaid}</td>
                  <td>
                    <PaymentStatus status={payment.status} />
                  </td>
                  <td>{payment.dateCreated}</td>
                  <td>
                    <div className="btn-group">
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => setSelectedPayment(payment)}
                      >
                        <i className="bi bi-eye me-1"></i>
                        View Details
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        <i className="bi bi-receipt me-1"></i>
                        See Receipt
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        <i className="bi bi-three-dots"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <PaymentDetailsModal 
        payment={selectedPayment} 
        isOpen={!!selectedPayment}
        onClose={() => setSelectedPayment(null)}
      />
    </>
  )
}

