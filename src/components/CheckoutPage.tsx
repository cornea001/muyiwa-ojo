

"use client";

import { useState } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

interface CheckoutPageProps {
  amount: number;
}

export default function CheckoutPage({
  amount,
}: CheckoutPageProps) {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] =
    useState<string>("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!stripe || !elements) {
  setLoading(false);
  return;
}

    setLoading(true);
    setErrorMessage("");

    const { error: submitError } =
      await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message || "");
      setLoading(false);
      return;
    }

    const { error } =
      await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url:
            // `${window.location.origin}` +
            // `/payment-success?amount=${amount}`,
            `${window.location.origin}/payment-success`,
        },
      });

    if (error) {
      setErrorMessage(error.message || "");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-md shadow"
    >
      <div className="mb-4 text-xl font-bold">
        Amount: ${amount.toFixed(2)}
      </div>

      <PaymentElement />

      {errorMessage && (
        <div className="text-red-500 mt-3">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-black text-white p-4 rounded-md mt-4"
      >
        {loading
          ? "Processing..."
          : `Pay $${amount.toFixed(2)}`}
      </button>
    </form>
  );
}