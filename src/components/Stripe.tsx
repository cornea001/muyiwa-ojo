"use client";

import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/../lib/convertToSubcurrency";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
);

const donationAmounts = [25, 50, 100, 250, 500, 1000, 1200];

export default function DonationPage() {
  const [amount, setAmount] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);

  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [stripeError, setStripeError] = useState<string | null>(null);

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
      setStripeError('Something went wrong. Please try again.')
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-xl mx-auto p-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Support Muyiwa
      </h1>

      {!clientSecret ? (
        <div className="space-y-6">

          {/* PRESET AMOUNTS */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold">
                Select Donation Amount
              </h2>

              {/* CLEAR BUTTON */}
              {selectedPreset !== null && (
                <button
                  onClick={clearSelection}
                  className="text-xs font-semibold text-red-600 hover:underline"
                >
                  Clear selection
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {donationAmounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handlePresetClick(value)}
                  className={`p-4 rounded-lg border font-semibold transition-all ${
                    selectedPreset === value
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300 hover:border-black"
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
              <label className="block mb-2 font-semibold">
                Other Amount
              </label>

              <input
                type="number"
                min="1"
                step="0.01"
                placeholder="Enter custom amount"
                aria-label="Custom donation amount"
                value={amount}
                onChange={(e) => handleCustomChange(e.target.value)}
                className="w-full p-4 border border-navy/20 focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
          )}

          {/* REBATE */}
          {isValidAmount && rebate > 0 && (
            <div className="p-4 rounded-lg bg-gold/10 border border-gold/30 text-sm">
              <p className="font-semibold text-navy">
                💡 Rebate Estimate
              </p>
              <p className="mt-1 text-gray-700">
                You can get up to{" "}
                <span className="font-bold text-black">
                  ${rebate.toFixed(2)}
                </span>{" "}
                rebate from this contribution.
              </p>
            </div>
          )}

          {stripeError && (
            <p role="alert" className="text-red-600 text-sm font-body border border-red-200 bg-red-50 px-4 py-3">
              {stripeError}
            </p>
          )}

          {/* CONTINUE */}
          <button
            onClick={handleContinue}
            disabled={loading || !numericAmount || numericAmount < 1}
            className="w-full bg-black text-white p-4 rounded-md font-semibold"
          >
            {loading ? "Loading..." : `Donate $${numericAmount || 0}`}
          </button>

        </div>
      ) : (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: { theme: "stripe" },
          }}
        >
          <CheckoutPage amount={numericAmount} />
        </Elements>
      )}
    </main>
  );
}