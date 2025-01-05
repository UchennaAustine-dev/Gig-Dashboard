import React, { useState } from 'react';
import { Eye, Receipt, Check, X, MoreHorizontal } from 'lucide-react';
import { PaymentStatus } from './payment-status';
import PaymentDetailsModal from './payment-details-modal';

export function PaymentTable({ payments }) {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (e) => {
      setSelectAll(e.target.checked);
      setSelectedRows(e.target.checked ? new Set(payments.map((p) => p.transactionNumber)) : new Set());
  };

  const handleSelectRow = (transactionNumber) => {
      const newSelected = new Set(selectedRows);
      newSelected.has(transactionNumber)
          ? newSelected.delete(transactionNumber)
          : newSelected.add(transactionNumber);
      setSelectedRows(newSelected);
      setSelectAll(newSelected.size === payments.length);
  };

  const formatAmount = (amount) =>
      new Intl.NumberFormat('en-NG', {
          style: 'currency',
          currency: 'NGN',
      }).format(amount);

  const formatDate = (dateString) => {
      const date = new Date(dateString);
      return isNaN(date)
          ? 'Invalid Date'
          : date.toLocaleDateString('en-NG', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const openModal = (payment) => {
      setSelectedPayment(payment);
      setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
      <div className="space-y-4">
          {/* Bulk Action Bar */}
          {selectedRows.size > 0 && (
              <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-sm font-medium">
                      {selectedRows.size} {selectedRows.size === 1 ? 'item' : 'items'} selected
                  </span>
                  <div className="space-x-2">
                      <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => {
                              setSelectedRows(new Set());
                              setSelectAll(false);
                          }}
                      >
                          <X className="w-4 h-4 mr-1" />
                          Clear Selection
                      </button>
                      <button className="btn btn-sm btn-primary">
                          <Check className="w-4 h-4 mr-1" />
                          Process Selected
                      </button>
                  </div>
              </div>
          )}

          {/* Payment Table */}
          <div className="card">
              <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                      <thead>
                          <tr>
                              <th className="w-12">
                                  <input
                                      type="checkbox"
                                      className="form-check-input"
                                      checked={selectAll}
                                      onChange={handleSelectAll}
                                  />
                              </th>
                              <th>Transaction ID</th>
                              <th>Customer</th>
                              <th>Amount</th>
                              <th>Status</th>
                              <th>Date</th>
                              <th>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {payments.map((payment) => (
                              <tr
                                  key={payment.transactionNumber}
                                  className={
                                      selectedRows.has(payment.transactionNumber)
                                          ? 'bg-blue-50/50 dark:bg-blue-900/20'
                                          : ''
                                  }
                              >
                                  <td>
                                      <input
                                          type="checkbox"
                                          className="form-check-input"
                                          checked={selectedRows.has(payment.transactionNumber)}
                                          onChange={() => handleSelectRow(payment.transactionNumber)}
                                      />
                                  </td>
                                  <td className="font-mono text-sm">{payment.transactionNumber}</td>
                                  <td>
                                      <div className="font-medium">{payment.customerName}</div>
                                      <div className="text-sm text-muted">{payment.email}</div>
                                  </td>
                                  <td className="font-medium">{formatAmount(payment.amountPaid)}</td>
                                  <td>
                                      <PaymentStatus status={payment.status} />
                                  </td>
                                  <td className="text-sm text-muted">{formatDate(payment.dateCreated)}</td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button
                                              className="btn btn-sm btn-outline-primary rounded-lg"
                                              onClick={() => openModal(payment)}
                                          >
                                              <Eye className="w-4 h-4 me-1" />
                                              View
                                          </button>
                                          <button className="btn btn-sm btn-outline-success">
                                              <Receipt className="w-4 h-4 me-1" />
                                              Receipt
                                          </button>
                                          <button className="btn btn-sm btn-outline-secondary">
                                              <MoreHorizontal className="w-4 h-4 me-1" />
                                              More
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>

          {/* Payment Details Modal */}
          <PaymentDetailsModal
              payment={selectedPayment}
              isOpen={isModalOpen}
              onClose={closeModal}
          />
      </div>
  );
}

