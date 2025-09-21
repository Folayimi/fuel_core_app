import { cn } from "@/lib/utils"
import * as React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"

export interface RadioGroupProps {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  className?: string
}

export interface RadioGroupItemProps {
  value: string
  label?: string
  disabled?: boolean
  className?: string
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof View>,
  RadioGroupProps
>(({ className, value, onValueChange, children, ...props }, ref) => {
  return (
    <View
      ref={ref}
      style={tw`${cn("space-y-2", className)}`}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<RadioGroupItemProps>(child)) {
          return React.cloneElement(child, {
            ...child.props,
            selected: child.props.value === value,
            onSelect: () => onValueChange?.(child.props.value),
          })
        }
        return child
      })}
    </View>
  )
})
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  RadioGroupItemProps & { selected?: boolean; onSelect?: () => void }
>(({ className, value, label, disabled = false, selected = false, onSelect, ...props }, ref) => {
  const handlePress = () => {
    if (!disabled && onSelect) {
      onSelect()
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
          "h-4 w-4 rounded-full border-2 items-center justify-center",
          selected ? "border-blue-600" : "border-gray-300",
          disabled && "opacity-50"
        )}`}
      >
        {selected && (
          <View style={tw`h-2 w-2 rounded-full bg-blue-600`} />
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
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
