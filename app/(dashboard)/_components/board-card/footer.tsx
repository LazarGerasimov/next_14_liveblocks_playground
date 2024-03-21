import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  isFavourite: boolean;
  title: string;
  authorLabel?: string;
  createdAtLabel: string;
  onClick: () => void;
  disabled: boolean;
}

const Footer = ({
  isFavourite,
  title,
  authorLabel,
  createdAtLabel,
  onClick,
  disabled
}: FooterProps) => {
  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate">
        {title}
      </p>
    </div>
  )
}

export default Footer