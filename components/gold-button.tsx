import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const styles =
  "inline-flex items-center justify-center border border-gold/50 px-8 py-3.5 font-cinzel text-[0.68rem] tracking-[0.32em] uppercase transition-all duration-500 hover:bg-gold hover:text-ink";

export function GoldButton({ href, children, className, onClick, type }: Props) {
  if (href) {
    return (
      <Link href={href} className={cn(styles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={cn(styles, className)}>
      {children}
    </button>
  );
}
