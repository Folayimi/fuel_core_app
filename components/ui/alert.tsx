import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { Text, View } from "react-native"
import tw from "twrnc"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4",
  {
    variants: {
      variant: {
        default: "bg-blue-50 border-blue-200",
        destructive: "bg-red-50 border-red-200",
        warning: "bg-yellow-50 border-yellow-200",
        success: "bg-green-50 border-green-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface AlertProps
  extends React.ComponentProps<typeof View>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode
}

const Alert = React.forwardRef<
  React.ElementRef<typeof View>,
  AlertProps
>(({ className, variant, icon, children, ...props }, ref) => {
  const getTextColor = () => {
    switch (variant) {
      case "default":
        return "text-blue-800"
      case "destructive":
        return "text-red-800"
      case "warning":
        return "text-yellow-800"
      case "success":
        return "text-green-800"
      default:
        return "text-blue-800"
    }
  }

  return (
    <View
      ref={ref}
      style={tw`${cn(alertVariants({ variant }), className)}`}
      {...props}
    >
      {icon && (
        <View style={tw`absolute left-4 top-4`}>
          {icon}
        </View>
      )}
      <View style={tw`${icon ? "ml-7" : ""}`}>
        {children}
      </View>
    </View>
  )
})
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentProps<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    style={tw`${cn("mb-1 font-semibold leading-none tracking-tight", className)}`}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentProps<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    style={tw`${cn("text-sm leading-relaxed", className)}`}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertDescription, AlertTitle }

