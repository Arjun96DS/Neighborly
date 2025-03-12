import React from "react";

const Transactions = () => {
  const transactions = [
    { id: 1, date: "2025-02-20", amount: "$100.00", status: "Completed" },
    { id: 2, date: "2025-02-21", amount: "$250.00", status: "Pending" },
    { id: 3, date: "2025-02-22", amount: "$75.00", status: "Completed" },
  ];

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="p-2">Date</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="p-2">{transaction.date}</td>
              <td className="p-2">{transaction.amount}</td>
              <td className="p-2">{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
