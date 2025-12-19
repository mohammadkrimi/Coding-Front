import { useState } from "react";
import { usePayment } from "../context/PaymentContext";

export default function PaymentForm() {
  const { addPayment } = usePayment();

  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !day || !amount) return;

    addPayment({ name, day, amount: Number(amount) });

    setName("");
    setDay("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-red-300 shadow-md rounded-lg p-4"
    >
      <h2 className="text-lg font-semibold text-center">Payment Form</h2>

      <input
        type="text"
        placeholder="Name"
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Day"
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount"
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}