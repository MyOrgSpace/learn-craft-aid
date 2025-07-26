import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-soft hover:shadow-medium",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft",
        outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground shadow-soft",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-soft hover:shadow-medium",
        tertiary: "bg-tertiary text-tertiary-foreground hover:bg-tertiary-hover shadow-soft hover:shadow-medium",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        teacher: "bg-gradient-secondary text-secondary-foreground hover:shadow-medium transform hover:scale-105",
        student: "bg-gradient-tertiary text-tertiary-foreground hover:shadow-medium transform hover:scale-105",
        subject: "bg-gradient-primary text-primary-foreground hover:shadow-medium border-2 border-transparent hover:border-primary-light"
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-14 rounded-xl px-8 text-base font-semibold",
        xl: "h-16 rounded-xl px-10 text-lg font-semibold",
        icon: "h-10 w-10",
        tile: "h-32 w-full p-6 flex-col text-left"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
