import { cn } from "@/lib/utils"
import * as React from "react"
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"

export interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  className?: string
}

export interface SelectTriggerProps {
  children: React.ReactNode
  className?: string
  placeholder?: string
}

export interface SelectContentProps {
  children: React.ReactNode
  className?: string
}

export interface SelectItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

export interface SelectValueProps {
  placeholder?: string
  className?: string
}

const SelectContext = React.createContext<{
  value?: string
  onValueChange?: (value: string) => void
  open: boolean
  onOpenChange: (open: boolean) => void
}>({
  value: "",
  onValueChange: () => {},
  open: false,
  onOpenChange: () => {},
})

const Select = React.forwardRef<
  React.ElementRef<typeof View>,
  SelectProps
>(({ className, value, onValueChange, children, ...props }, ref) => {
  const [open, setOpen] = React.useState(false)

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, onOpenChange: setOpen }}>
      <View
        ref={ref}
        style={tw`${cn("w-full", className)}`}
        {...props}
      >
        {children}
      </View>
    </SelectContext.Provider>
  )
})
Select.displayName = "Select"

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  SelectTriggerProps
>(({ className, children, placeholder, ...props }, ref) => {
  const { open, onOpenChange } = React.useContext(SelectContext)

  return (
    <TouchableOpacity
      ref={ref}
      style={tw`${cn(
        "flex-row h-12 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2",
        className
      )}`}
      onPress={() => onOpenChange(!open)}
      activeOpacity={0.7}
      {...props}
    >
      <View style={tw`flex-1`}>
        {children || (
          <Text style={tw`text-gray-500`}>
            {placeholder || "Select an option..."}
          </Text>
        )}
      </View>
      <Text style={tw`text-gray-400`}>
        {open ? "▲" : "▼"}
      </Text>
    </TouchableOpacity>
  )
})
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = React.forwardRef<
  React.ElementRef<typeof Text>,
  SelectValueProps
>(({ className, placeholder, ...props }, ref) => {
  const { value } = React.useContext(SelectContext)

  return (
    <Text
      ref={ref}
      style={tw`${cn(
        "text-base",
        value ? "text-gray-900" : "text-gray-500",
        className
      )}`}
      {...props}
    >
      {value || placeholder || "Select an option..."}
    </Text>
  )
})
SelectValue.displayName = "SelectValue"

const SelectContent = React.forwardRef<
  React.ElementRef<typeof Modal>,
  SelectContentProps
>(({ className, children, ...props }, ref) => {
  const { open, onOpenChange } = React.useContext(SelectContext)

  return (
    <Modal
      ref={ref}
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={() => onOpenChange(false)}
      {...props}
    >
      <TouchableOpacity
        style={tw`flex-1 bg-black/50 justify-center items-center`}
        activeOpacity={1}
        onPress={() => onOpenChange(false)}
      >
        <View
          style={tw`${cn(
            "bg-white rounded-lg border border-gray-200 shadow-lg max-h-80 w-80",
            className
          )}`}
        >
          <ScrollView style={tw`max-h-80`}>
            {children}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  )
})
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  SelectItemProps
>(({ className, value, children, ...props }, ref) => {
  const { value: selectedValue, onValueChange, onOpenChange } = React.useContext(SelectContext)
  const isSelected = selectedValue === value

  const handlePress = () => {
    onValueChange?.(value)
    onOpenChange(false)
  }

  return (
    <TouchableOpacity
      ref={ref}
      style={tw`${cn(
        "flex-row items-center px-3 py-3 border-b border-gray-100 last:border-b-0",
        isSelected && "bg-blue-50",
        className
      )}`}
      onPress={handlePress}
      activeOpacity={0.7}
      {...props}
    >
      <View style={tw`flex-1`}>
        <Text style={tw`${cn(
          "text-base",
          isSelected ? "text-blue-600 font-medium" : "text-gray-900"
        )}`}>
          {children}
        </Text>
      </View>
      {isSelected && (
        <Text style={tw`text-blue-600 text-lg`}>✓</Text>
      )}
    </TouchableOpacity>
  )
})
SelectItem.displayName = "SelectItem"

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue }

