import { cn } from "@/lib/utils"
import * as React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"

export interface SwitchProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
  className?: string
}

const Switch = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  SwitchProps
>(({ className, checked = false, onCheckedChange, disabled = false, label, ...props }, ref) => {
  const handlePress = () => {
    if (!disabled && onCheckedChange) {
      onCheckedChange(!checked)
    }
  }

  return (
    <TouchableOpacity
      ref={ref}
      style={tw`${cn("flex-row items-center", className)}`}
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.7}
    {...props}
    >
      <View
        style={tw`${cn(
          "h-6 w-11 rounded-full border-2 items-center justify-start",
          checked ? "bg-blue-600 border-blue-600" : "bg-gray-200 border-gray-200",
          disabled && "opacity-50"
        )}`}
      >
        <View
          style={tw`${cn(
            "h-5 w-5 rounded-full bg-white shadow-sm",
            checked ? "ml-5" : "ml-0"
          )}`}
        />
      </View>
      {label && (
        <Text style={tw`${cn(
          "ml-2 text-sm",
          disabled ? "text-gray-400" : "text-gray-700"
        )}`}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  )
})
Switch.displayName = "Switch"

export { Switch }
