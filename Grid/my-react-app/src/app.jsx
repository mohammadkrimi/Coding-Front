import PaymentForm from "./components/PaymentForm";
import TotalDisplay from "./components/TotalDisplay";
import { PaymentProvider } from "./context/PaymentContext";

export default function App() {
  return (
    <PaymentProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md space-y-4">
          <PaymentForm />
          <TotalDisplay />
        </div>
      </div>
    </PaymentProvider>
  );
}