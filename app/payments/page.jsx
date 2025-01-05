'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { Navigation } from "@/components/navigation"
import { PaymentSummary } from "@/components/payment-summary"
import { PaymentTable } from "@/components/payment-table"

const mockPayments = [
  {
    transactionNumber: "454903eJwC47242Ou29",
    customerName: "Dami Love",
    email: "dami.love@gmail.com",
    phoneNumber: "+2345486757575",
    amountPaid: "NGN 40,000",
    status: "New",
    dateCreated: "20/01/2024",
  },
  {
    transactionNumber: "454903eJwC47242Ou30",
    customerName: "Dami Love",
    email: "dami.love@gmail.com",
    phoneNumber: "+2345486757575",
    amountPaid: "NGN 40,000",
    status: "Shipped",
    dateCreated: "20/01/2024",
  },
  {
    transactionNumber: "454903eJwC47242Ou31",
    customerName: "Dami Love",
    email: "dami.love@gmail.com",
    phoneNumber: "+2345486757575",
    amountPaid: "NGN 40,000",
    status: "Out for Delivery",
    dateCreated: "20/01/2024",
  },
  {
    transactionNumber: "454903eJwC47242Ou32",
    customerName: "Dami Love",
    email: "dami.love@gmail.com",
    phoneNumber: "+2345486757575",
    amountPaid: "NGN 40,000",
    status: "Delivered",
    dateCreated: "20/01/2024",
  }
];

const summaryData = {
  totalPayments: 2000,
  newPayments: 7,
  lastUpdated: "Jun 12th, 2023"
};

export default function PaymentsPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("Jun 12th, 2023");

  return (
    <>
      {/* <Navigation /> */}
      <div className="container-fluid py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3 mb-0">Payment</h1>
        </div>
        
        <PaymentSummary data={summaryData} />
        
        <div className="d-flex justify-content-between align-items-center my-4">
          <h2 className="h4 mb-0">Payment History</h2>
          <div className="d-flex gap-2">
            <button 
              className="btn btn-outline-secondary btn-sm"
              onClick={() => {
                // Add date picker functionality here
                setSelectedDate("Selected Date");
              }}
            >
              <i className="bi bi-calendar me-2"></i>
              {selectedDate}
            </button>
            <button 
              className="btn btn-link btn-sm"
              onClick={() => router.push('/payments/all')}
            >
              See all
            </button>
          </div>
        </div>
        
        <PaymentTable payments={mockPayments} />
      </div>
    </>
  )
}

