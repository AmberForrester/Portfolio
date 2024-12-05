"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/#projects");
      }}
      className="mt-8 inline-block px-6 py-2 text-white bg-purple-600 rounded-md"
    >
      Go Back
    </button>
  );
}
