import Link from "next/link";
import React from "react";

type PlanProps = {
  close: () => void;
};

export default function Plan({ close }: PlanProps) {
  return (
    <div>
      <div className="bg-gray-700 rounded-lg shadow p-6 flex flex-col text-white items-center">
        <div className="text-white text-lg font-semibold mb-2">
          Currently You are using free Plan
        </div>
        <div>
          <Link
            href="/plan"
            onClick={close}
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Paid plan
          </Link>
        </div>
      </div>
    </div>
  );
}
