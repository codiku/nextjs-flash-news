"use client";

import { useState } from "react";

export default function PagesTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rating, setRating] = useState("");

  const sendRating = () => {
    alert("Rating submited ! Thanks ");
  };
  return (
    <div>
      {children}
      <div className="fixed bottom-10 right-10">
        Rate this page
        <div className="flex space-x-2">
          <input
            className="block border border-slate-200 w-10"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.currentTarget.value)}
          />
          <button
            onClick={sendRating}
            className="text-xs bg-yellow-500 text-white rounded-lg p-2"
          >
            Send rating
          </button>
        </div>
      </div>
    </div>
  );
}
