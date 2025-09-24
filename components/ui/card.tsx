import { cn } from "@/lib/utils"
import * as React from "react"
import { Text, View } from "react-native"
import tw from "twrnc"

const Card = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View>
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    style={tw`${cn(
      "rounded-xl border border-gray-200 bg-white shadow-sm",
      className
    )}`}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View>
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    style={tw`${cn("flex flex-col space-y-2 p-6", className)}`}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentProps<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    style={tw`${cn(
      "text-xl font-semibold leading-none tracking-tight text-gray-900",
      className
    )}`}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentProps<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    style={tw`${cn("text-sm text-gray-600", className)}`}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View>
>(({ className, ...props }, ref) => (
  <View ref={ref} style={tw`${cn("p-6 pt-0", className)}`} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View>
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    style={tw`${cn("flex flex-row items-center p-6 pt-0", className)}`}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }

