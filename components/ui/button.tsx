import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/50", {
  variants: {
    variant: {
      default: "bg-lime text-black hover:bg-lime/90 shadow-[0_0_18px_rgba(155,255,46,.16)]",
      outline: "border border-white/10 bg-white/[.025] text-zinc-300 hover:border-lime/30 hover:text-white",
      ghost: "text-zinc-400 hover:bg-white/[.05] hover:text-white",
    },
    size: { default: "h-10 px-4", sm: "h-8 px-3 text-xs", icon: "size-9" },
  }, defaultVariants: { variant: "default", size: "default" },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />);
Button.displayName = "Button";
