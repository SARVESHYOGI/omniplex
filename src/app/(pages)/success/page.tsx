"use client";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-gray-800 rounded-lg shadow-md p-8 text-center">
        <svg
          className="mx-auto mb-4 text-green-500"
          width="64"
          height="64"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" fill="#22c55e" opacity="0.2" />
          <path
            d="M7 13l3 3 7-7"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <h1 className="text-2xl font-bold mb-2">Payment Success</h1>
        <p className="text-gray-600 mb-6">
          Thank you! Your payment was processed successfully.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}
