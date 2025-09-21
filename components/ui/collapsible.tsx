import { cn } from "@/lib/utils"
import * as React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"

export interface CollapsibleProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

export interface CollapsibleTriggerProps {
  children: React.ReactNode
  className?: string
}

export interface CollapsibleContentProps {
  children: React.ReactNode
  className?: string
}

const CollapsibleContext = React.createContext<{
  open: boolean
  onOpenChange: (open: boolean) => void
}>({
  open: false,
  onOpenChange: () => {},
})

const Collapsible = React.forwardRef<
  React.ElementRef<typeof View>,
  CollapsibleProps
>(({ className, open = false, onOpenChange, children, ...props }, ref) => {
  const [internalOpen, setInternalOpen] = React.useState(open)
  const isOpen = open !== undefined ? open : internalOpen
  
  const handleOpenChange = (newOpen: boolean) => {
    if (open === undefined) {
      setInternalOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  return (
    <CollapsibleContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>
      <View
        ref={ref}
        style={tw`${cn("w-full", className)}`}
        {...props}
      >
        {children}
      </View>
    </CollapsibleContext.Provider>
  )
})
Collapsible.displayName = "Collapsible"

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  CollapsibleTriggerProps
>(({ className, children, ...props }, ref) => {
  const { open, onOpenChange } = React.useContext(CollapsibleContext)

  return (
    <TouchableOpacity
      ref={ref}
      style={tw`${cn("flex-row items-center justify-between py-4", className)}`}
      onPress={() => onOpenChange(!open)}
      activeOpacity={0.7}
      {...props}
    >
      {children}
      <Text style={tw`text-lg`}>
        {open ? "−" : "+"}
      </Text>
    </TouchableOpacity>
  )
})
CollapsibleTrigger.displayName = "CollapsibleTrigger"

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof View>,
  CollapsibleContentProps
>(({ className, children, ...props }, ref) => {
  const { open } = React.useContext(CollapsibleContext)

  if (!open) {
    return null
  }

  return (
    <View
      ref={ref}
      style={tw`${cn("pb-4", className)}`}
      {...props}
    >
      {children}
    </View>
  )
})
CollapsibleContent.displayName = "CollapsibleContent"

export { Collapsible, CollapsibleContent, CollapsibleTrigger }

