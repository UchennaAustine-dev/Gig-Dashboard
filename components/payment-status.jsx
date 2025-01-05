import React from 'react';

export function PaymentStatus({ status }) {
  const getStatusStyles = (status) => {
    const baseStyles = 'badge d-inline-flex align-items-center gap-2 fw-medium';
    
    switch (status) {
      case 'New':
        return `${baseStyles} bg-primary text-white`;
      case 'Shipped':
        return `${baseStyles} bg-danger text-white`;
      case 'Out for Delivery':
        return `${baseStyles} bg-warning text-dark`;
      case 'Delivered':
        return `${baseStyles} bg-success text-white`;
      default:
        return `${baseStyles} bg-secondary text-white`;
    }
  };

  const renderStatusDot = (status) => {
    if (status === 'New') {
      return (
        <span 
          className="d-inline-block rounded-circle" 
          style={{ 
            width: '6px', 
            height: '6px',
            backgroundColor: 'currentColor' 
          }}
        />
      );
    }
    return null;
  };

  return (
    <span 
      className={getStatusStyles(status)}
      style={{
        padding: '0.35rem 0.75rem',
        fontSize: '0.875rem',
        borderRadius: '9999px',
        transition: 'all var(--animation-duration) ease'
      }}
    >
      {renderStatusDot(status)}
      {status}
    </span>
  );
}