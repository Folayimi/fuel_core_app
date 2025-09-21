import { cn } from "@/lib/utils"
import * as React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"

export interface AccordionProps {
  type?: "single" | "multiple"
  collapsible?: boolean
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  children: React.ReactNode
  className?: string
}

export interface AccordionItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

export interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

export interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

const AccordionContext = React.createContext<{
  type: "single" | "multiple"
  value: string | string[]
  onValueChange: (value: string | string[]) => void
}>({
  type: "single",
  value: "",
  onValueChange: () => {},
})

const Accordion = React.forwardRef<
  React.ElementRef<typeof View>,
  AccordionProps
>(({ className, type = "single", collapsible = true, value = "", onValueChange, children, ...props }, ref) => {
  const [internalValue, setInternalValue] = React.useState<string | string[]>(value)
  const currentValue = value !== undefined ? value : internalValue
  
  const handleValueChange = (newValue: string | string[]) => {
    if (value === undefined) {
      setInternalValue(newValue)
    }
    onValueChange?.(newValue)
  }

  return (
    <AccordionContext.Provider value={{ type, value: currentValue, onValueChange: handleValueChange }}>
      <View
        ref={ref}
        style={tw`${cn("w-full", className)}`}
        {...props}
      >
        {children}
      </View>
    </AccordionContext.Provider>
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof View>,
  AccordionItemProps
>(({ className, value, children, ...props }, ref) => {
  return (
    <View
      ref={ref}
      style={tw`${cn("border-b border-gray-200", className)}`}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            itemValue: value,
          })
        }
        return child
      })}
    </View>
  )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  AccordionTriggerProps & { itemValue?: string }
>(({ className, children, itemValue, ...props }, ref) => {
  const { type, value, onValueChange } = React.useContext(AccordionContext)
  
  const isOpen = type === "single" 
    ? value === itemValue
    : Array.isArray(value) && value.includes(itemValue || "")

  const handlePress = () => {
    if (!itemValue) return

    if (type === "single") {
      onValueChange(isOpen ? "" : itemValue)
    } else {
      const currentValues = Array.isArray(value) ? value : []
      const newValues = isOpen
        ? currentValues.filter(v => v !== itemValue)
        : [...currentValues, itemValue]
      onValueChange(newValues)
    }
  }

  return (
    <TouchableOpacity
      ref={ref}
      style={tw`${cn(
        "flex-row items-center justify-between py-4",
        className
      )}`}
      onPress={handlePress}
      activeOpacity={0.7}
      {...props}
    >
      <Text style={tw`flex-1 text-base font-medium text-gray-900`}>
        {children}
      </Text>
      <Text style={tw`text-lg text-gray-500`}>
        {isOpen ? "−" : "+"}
      </Text>
    </TouchableOpacity>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof View>,
  AccordionContentProps & { itemValue?: string }
>(({ className, children, itemValue, ...props }, ref) => {
  const { type, value } = React.useContext(AccordionContext)
  
  const isOpen = type === "single" 
    ? value === itemValue
    : Array.isArray(value) && value.includes(itemValue || "")

  if (!isOpen) {
    return null
  }

  return (
    <View
      ref={ref}
      style={tw`${cn("pb-4 pt-0", className)}`}
      {...props}
    >
      {children}
    </View>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }

