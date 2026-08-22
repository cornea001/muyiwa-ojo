
import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "#F7F5EF" }}
    >
      <div
        className="w-full max-w-xl rounded-3xl p-10 text-center shadow-2xl border"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "#FAF0D7",
        }}
      >
        {/* Success Icon */}
        <div
          className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full"
          style={{
            backgroundColor: "#1F5E4E",
          }}
        >
          <span className="text-4xl">✓</span>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#0B1F3A" }}
        >
          Payment Successful
        </h1>

        {/* Gold Divider */}
        <div
          className="w-24 h-1 mx-auto rounded-full mb-6"
          style={{ backgroundColor: "#D4A537" }}
        />

        {/* Message */}
        <p
          className="text-lg leading-relaxed mb-8"
          style={{ color: "#6B7280" }}
        >
          Thank you for supporting{" "}
          <span
            className="font-semibold"
            style={{ color: "#0B1F3A" }}
          >
            Muyiwa Ojo's Campaign
          </span>
          . Your contribution helps move the vision forward and is greatly
          appreciated.
        </p>

        {/* Return Button */}
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "#D4A537",
            color: "#0B1F3A",
          }}
        >
          ← Return to Campaign
        </Link>

        {/* Footer Note */}
        <p
          className="mt-8 text-sm"
          style={{ color: "#6B7280" }}
        >
          A confirmation of your contribution has been successfully processed.
        </p>
      </div>
    </main>
  );
}