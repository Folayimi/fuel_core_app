import { cn } from "@/lib/utils"
import * as React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"

export interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  className?: string
}

export interface TabsListProps {
  children: React.ReactNode
  className?: string
}

export interface TabsTriggerProps {
  value: string
  children: React.ReactNode
  className?: string
}

export interface TabsContentProps {
  value: string
  children: React.ReactNode
  className?: string
}

const TabsContext = React.createContext<{
  value?: string
  onValueChange?: (value: string) => void
}>({})

const Tabs = React.forwardRef<
  React.ElementRef<typeof View>,
  TabsProps
>(({ className, defaultValue, value, onValueChange, children, ...props }, ref) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || "")
  const currentValue = value !== undefined ? value : internalValue
  
  const handleValueChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue)
    }
    onValueChange?.(newValue)
  }

  return (
    <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
      <View
        ref={ref}
        style={tw`${cn("w-full", className)}`}
        {...props}
      >
        {children}
      </View>
    </TabsContext.Provider>
  )
})
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<
  React.ElementRef<typeof View>,
  TabsListProps
>(({ className, children, ...props }, ref) => (
    <View
      ref={ref}
      style={tw`${cn(
        "flex-row h-10 items-center justify-center rounded-md bg-gray-100 p-1",
        className
      )}`}
      {...props}
    >
    {children}
  </View>
))
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  TabsTriggerProps
>(({ className, value, children, ...props }, ref) => {
  const { value: currentValue, onValueChange } = React.useContext(TabsContext)
  const isActive = currentValue === value

  return (
    <TouchableOpacity
      ref={ref}
      style={tw`${cn(
        "flex-1 items-center justify-center rounded-sm px-3 py-1.5",
        isActive ? "bg-white shadow-sm" : "",
        className
      )}`}
      onPress={() => onValueChange?.(value)}
      activeOpacity={0.7}
      {...props}
    >
      <Text style={tw`${cn(
        "text-sm font-medium",
        isActive ? "text-gray-900" : "text-gray-600"
      )}`}>
        {children}
      </Text>
    </TouchableOpacity>
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<
  React.ElementRef<typeof View>,
  TabsContentProps
>(({ className, value, children, ...props }, ref) => {
  const { value: currentValue } = React.useContext(TabsContext)
  
  if (currentValue !== value) {
    return null
  }

  return (
    <View
      ref={ref}
      style={tw`${cn("mt-2", className)}`}
      {...props}
    >
      {children}
    </View>
  )
})
TabsContent.displayName = "TabsContent"

export { Tabs, TabsContent, TabsList, TabsTrigger }

