import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      date,
      category,
      description,
      amount: parseFloat(amount),
    };
    addExpense(newExpense);
    setDate("");
    setCategory("");
    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className=" block text-gray-700">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded border px-3 py-2"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded border px-3 py-2"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded border px-3 py-2"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">Amount ($)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full rounded border px-3 py-2"
          required
        />
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
