
"use client";

import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/../lib/convertToSubcurrency";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
);

const donationAmounts = [25, 50, 100, 250, 500, 1000, 1200];

export default function DonationPage() {
  const t = useTranslations("Donate");
  const { theme } = useTheme();
  
  const [amount, setAmount] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);

  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const numericAmount = Number(amount);
  const isValidAmount = numericAmount > 0;

  const calculateRebate = (value: number) => {
    if (!value || value <= 25) return 0;

    if (value >= 25.01 && value <= 100) {
      return value * 0.5;
    }

    if (value > 100) {
      const rebate = 50 + 0.25 * (value - 100);
      return Math.min(rebate, 75);
    }

    return 0;
  };

  const rebate = calculateRebate(numericAmount);

  const handlePresetClick = (value: number) => {
    if (selectedPreset === value) {
      setSelectedPreset(null);
      setAmount("");
      return;
    }

    setSelectedPreset(value);
    setAmount(value.toString());
  };

  const handleCustomChange = (val: string) => {
    setSelectedPreset(null);
    setAmount(val);
  };

  // 🧼 CLEAR EVERYTHING
  const clearSelection = () => {
    setSelectedPreset(null);
    setAmount("");
  };

  const handleContinue = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: convertToSubcurrency(numericAmount),
        }),
      });

      const data = await response.json();

      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    } catch (error) {
      console.error(error);
      setPaymentError('Something went wrong. Please try again.')
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-xl mx-auto p-10 pt-36">
      <h1 className="text-4xl font-bold text-center mb-8 text-navy dark:text-white transition-colors duration-300">
        {t("title")}
      </h1>

      {!clientSecret ? (
        <div className="space-y-6">

          {/* PRESET AMOUNTS */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-navy dark:text-cream transition-colors duration-300">
                {t("select_amount")}
              </h2>

              {/* CLEAR BUTTON */}
              {selectedPreset !== null && (
                <button
                  onClick={clearSelection}
                  className="text-xs font-semibold text-red-600 dark:text-red-400 hover:underline transition-colors duration-300"
                >
                  {t("clear_selection")}
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {donationAmounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handlePresetClick(value)}
                  className={`p-4 border font-bold font-display uppercase text-sm tracking-wider transition-all duration-300 ${
                    selectedPreset === value
                      ? "bg-navy text-white border-navy dark:bg-white dark:text-navy dark:border-white"
                      : "bg-white text-navy border-navy/20 hover:border-navy dark:bg-navy-dark dark:text-white dark:border-navy-light dark:hover:border-navy"
                  }`}
                >
                  ${value}
                </button>
              ))}
            </div>
          </div>

          {/* CUSTOM AMOUNT */}
          {selectedPreset === null && (
            <div>
              <label className="block mb-2 font-semibold text-navy dark:text-cream transition-colors duration-300">
                {t("other_amount")}
              </label>

              <input
                type="number"
                min="1"
                step="0.01"
                placeholder={t("custom_placeholder")}
                aria-label="Custom donation amount"
                value={amount}
                onChange={(e) => handleCustomChange(e.target.value)}
                className="w-full p-4 border border-navy/20 dark:border-navy-light bg-white dark:bg-navy-dark text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-gold transition-colors duration-300"
              />
            </div>
          )}

          {/* REBATE */}
          {isValidAmount && rebate > 0 && (
            <div className="p-4 rounded-lg bg-gold/10 border border-gold/30 text-sm transition-colors duration-300">
              <p className="font-semibold text-navy dark:text-gold transition-colors duration-300">
                {t("rebate_title")}
              </p>
              <p className="mt-1 text-navy/70 dark:text-cream/80 transition-colors duration-300">
                {t("rebate_desc1")}{" "}
                <span className="font-bold text-black dark:text-white transition-colors duration-300">
                  ${rebate.toFixed(2)}
                </span>{" "}
                {t("rebate_desc2")}
              </p>
            </div>
          )}

          {paymentError && (
            <p role="alert" className="text-red-600 dark:text-red-400 text-sm font-body border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/20 px-4 py-3 transition-colors duration-300">
              {t("error")}
            </p>
          )}

          {/* CONTINUE */}
          <button
            onClick={handleContinue}
            disabled={loading || !numericAmount || numericAmount < 1}
            className="w-full bg-navy dark:bg-white text-white dark:text-navy p-4 font-display font-bold uppercase tracking-widest hover:bg-gold dark:hover:bg-gold hover:text-navy transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? t("btn_loading") : `${t("btn_donate")} $${numericAmount || 0}`}
          </button>

        </div>
      ) : (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: { theme: theme === 'dark' ? 'night' : 'stripe' },
          }}
        >
          <CheckoutPage amount={numericAmount} />
        </Elements>
      )}
    </main>
  );
}