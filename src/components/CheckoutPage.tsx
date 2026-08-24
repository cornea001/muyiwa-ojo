

"use client";

import { useState } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useTranslations } from "next-intl";

interface CheckoutPageProps {
  amount: number;
}

export default function CheckoutPage({
  amount,
}: CheckoutPageProps) {
  const stripe = useStripe();
  const elements = useElements();
  const t = useTranslations("Donate");

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
      className="bg-white dark:bg-navy p-4 rounded-md shadow transition-colors duration-300"
    >
      <div className="mb-4 text-xl font-bold dark:text-white transition-colors duration-300">
        {t("amount")}: ${amount.toFixed(2)}
      </div>

      <PaymentElement />

      {errorMessage && (
        <div className="text-red-500 dark:text-red-400 mt-3 transition-colors duration-300">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-black dark:bg-white text-white dark:text-black font-display font-bold uppercase tracking-widest p-4 rounded-md mt-4 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading
          ? t("processing")
          : `${t("pay")} $${amount.toFixed(2)}`}
      </button>
    </form>
  );
}