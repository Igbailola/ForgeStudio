import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center space-y-6">
      <h1 className="font-display text-6xl sm:text-7xl font-black text-on-surface">
        404
      </h1>
      <p className="text-lg text-on-surface-variant max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand hover:bg-brand-hover text-white font-medium transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
