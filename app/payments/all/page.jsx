'use client'

import { useState } from 'react'
import { PaymentTable } from "@/components/payment-table"
import { Pagination } from "@/components/pagination"

const mockPayments = Array(50).fill(null).map((_, index) => ({
  transactionNumber: `454903eJwC47242Ou${index + 1}`,
  customerName: "Dami Love",
  email: "dami.love@gmail.com",
  phoneNumber: "+2345486757575",
  amountPaid: "NGN 40,000",
  status: ["New", "Shipped", "Out for Delivery", "Delivered"][Math.floor(Math.random() * 4)],
  dateCreated: "20/01/2024",
}));

export default function AllPaymentsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(mockPayments.length / itemsPerPage);

  const currentPayments = mockPayments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">All Payments</h1>
      </div>
      
      <PaymentTable payments={currentPayments} />
      
      <div className="mt-4">
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
}

