"use client";

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center space-y-6">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-surface">
        Something went wrong
      </h2>
      <p className="text-base text-on-surface-variant max-w-md">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand hover:bg-brand-hover text-white font-medium transition-colors cursor-pointer"
      >
        Try Again
      </button>
    </div>
  );
}
