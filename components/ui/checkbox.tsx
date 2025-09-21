import { cn } from "@/lib/utils"
import * as React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"

export interface CheckboxProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
  className?: string
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  CheckboxProps
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
          "h-5 w-5 rounded border-2 items-center justify-center",
          checked ? "bg-blue-600 border-blue-600" : "border-gray-300 bg-white",
          disabled && "opacity-50"
        )}`}
      >
        {checked && (
          <Text style={tw`text-white text-xs font-bold`}>✓</Text>
        )}
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
Checkbox.displayName = "Checkbox"

export { Checkbox }
