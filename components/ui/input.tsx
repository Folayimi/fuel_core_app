import { cn } from "@/lib/utils"
import * as React from "react"
import { Text, TextInput, View } from "react-native"
import tw from "twrnc"

export interface InputProps extends React.ComponentProps<typeof TextInput> {
  label?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, error, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <View style={tw`w-full`}>
        {label && (
          <Text style={tw`text-sm font-medium text-gray-700 mb-2`}>
            {label}
          </Text>
        )}
        <View style={tw`relative`}>
          {leftIcon && (
            <View style={tw`absolute left-3 top-1/2 -translate-y-1/2 z-10`}>
              {leftIcon}
            </View>
          )}
          <TextInput
            ref={ref}
            style={tw`${cn(
              "flex h-12 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-base text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100 disabled:text-gray-500",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-red-500 focus:border-red-500 focus:ring-red-200",
              className
            )}`}
            placeholderTextColor="#6B7280"
            {...props}
          />
          {rightIcon && (
            <View style={tw`absolute right-3 top-1/2 -translate-y-1/2 z-10`}>
              {rightIcon}
            </View>
          )}
        </View>
        {error && (
          <Text style={tw`text-sm text-red-600 mt-1`}>
            {error}
          </Text>
        )}
      </View>
    )
  }
)
Input.displayName = "Input"

export { Input }

