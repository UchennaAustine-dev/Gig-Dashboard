export function PaymentStatus({ status }) {
    const getStatusClass = () => {
      switch (status) {
        case 'New':
          return 'bg-primary text-white';
        case 'Shipped':
          return 'bg-danger text-white';
        case 'Out for Delivery':
          return 'bg-warning text-dark';
        case 'Delivered':
          return 'bg-success text-white';
        default:
          return 'bg-secondary text-white';
      }
    };
  
    return (
      <span className={`badge rounded-pill ${getStatusClass()} px-3`}>
        {status}
      </span>
    );
  }
  
  