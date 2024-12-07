"use client";

import { useRouter } from "next/navigation";
import { RiArrowGoBackFill } from "react-icons/ri";
import MagicButton from "./MagicButton";

export default function BackButton() {
  const router = useRouter();

  const onClick = () => {
    router.push("/#projects");
  };

  return (
    <div className="fixed top-4 right-4"
    style={{ zIndex: 50 }}
    >
    <MagicButton
      title="Back To Projects"
      icon={<RiArrowGoBackFill />}
      position="right"
      handleClick={onClick}
    />
    </div>
  );
}
