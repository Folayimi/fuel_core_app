import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { ActivityIndicator, Text, TouchableOpacity } from "react-native"
import tw from "twrnc"

const buttonVariants = cva(
  "flex-row items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-blue-600",
        destructive: "bg-red-600",
        outline: "border border-gray-300 bg-transparent",
        secondary: "bg-gray-200",
        ghost: "bg-transparent",
        link: "bg-transparent",
      },
      size: {
        default: "h-12 px-4 py-3",
        sm: "h-10 px-3 py-2",
        lg: "h-14 px-8 py-4",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ComponentProps<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode
  loading?: boolean
  disabled?: boolean
}

const Button = React.forwardRef<React.ElementRef<typeof TouchableOpacity>, ButtonProps>(
  ({ className, variant, size, children, loading = false, disabled = false, ...props }, ref) => {
    const isDisabled = disabled || loading
    
    const getTextColor = () => {
      switch (variant) {
        case "default":
          return "text-white"
        case "destructive":
          return "text-white"
        case "outline":
          return "text-gray-700"
        case "secondary":
          return "text-gray-700"
        case "ghost":
          return "text-gray-700"
        case "link":
          return "text-blue-600"
        default:
          return "text-white"
      }
    }

    return (
      <TouchableOpacity
        ref={ref}
        style={tw`${cn(buttonVariants({ variant, size }), className)}`}
        disabled={isDisabled}
        activeOpacity={0.8}
        {...props}
      >
        {loading ? (
          <ActivityIndicator 
            size="small" 
            color={variant === "outline" || variant === "ghost" || variant === "link" ? "#374151" : "white"} 
          />
        ) : (
          <Text style={tw`${cn("text-sm font-medium", getTextColor())}`}>
            {children}
          </Text>
        )}
      </TouchableOpacity>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

