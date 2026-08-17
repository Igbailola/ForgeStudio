import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="w-10 h-10 border-3 border-outline-variant border-t-brand rounded-full animate-spin" />
    </div>
  );
}
