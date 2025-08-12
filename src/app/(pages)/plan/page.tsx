"use client";
import React from "react";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Page() {
  const [showPayment, setShowPayment] = useState(false);
  const handleStripeCheckout = async () => {
    const stripe = await stripePromise;

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
    });

    const { sessionId } = await res.json();

    const result = await stripe?.redirectToCheckout({ sessionId });

    if (result?.error) {
      console.error(result.error.message);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "m") {
        setShowPayment(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="flex justify-center items-center h-[80vh] relative"
      style={{ backgroundColor: "#161616" }}
    >
      <div className="shadow-md rounded-xl p-8 bg-gray-800 max-w-[350px] text-center">
        <h2 className="text-2xl font-semibold mb-2">Paid Plan</h2>
        <p className="mb-6">Get access to premium features.</p>
        <button
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg cursor-pointer text-lg hover:bg-indigo-700 transition"
          onClick={() => setShowPayment(true)}
        >
          Subscribe
        </button>
      </div>
      {showPayment && (
        <div className="absolute right-0 top-0 h-full w-[400px] bg-gray-900 rounded-xl shadow-lg flex flex-col justify-center items-center z-10">
          <h3 className="text-xl font-semibold mb-2">Payment Box</h3>
          <p className="mb-4">Proceed to Stripe payment.</p>
          <p className="mb-4">$10 only</p>
          <button
            className="mt-4 px-5 py-2.5 bg-indigo-600 text-white rounded-lg cursor-pointer text-lg hover:bg-indigo-700 transition"
            onClick={handleStripeCheckout}
          >
            Pay Now
          </button>
          <button
            className="mt-3 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg cursor-pointer text-base hover:bg-gray-300 transition"
            onClick={() => setShowPayment(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
