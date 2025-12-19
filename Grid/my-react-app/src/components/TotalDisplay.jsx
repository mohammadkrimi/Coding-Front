import { usePayment } from "../context/PaymentContext";

export default function TotalDisplay() {
  const { total, payments } = usePayment();

  return (
    <div className="mt-6 bg-red-300 shadow-md rounded-lg p-4 space-y-3">
      <h2 className="text-lg font-semibold text-center">Summary</h2>

      <div className="text-center text-xl font-bold">
        Total: {total}
      </div>

      {payments.length > 0 && (
        <ul className="mt-3 space-y-2 max-h-40 overflow-y-auto text-sm">
          {payments.map((p, index) => (
            <li
              key={index}
              className="flex justify-between border-b pb-1 last:border-b-0"
            >
              <span>{p.name}</span>
              <span>{p.day}</span>
              <span>{p.amount}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}