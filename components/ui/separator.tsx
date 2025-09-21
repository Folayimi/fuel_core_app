import { cn } from "@/lib/utils"
import * as React from "react"
import { View } from "react-native"
import tw from "twrnc"

export interface SeparatorProps extends React.ComponentProps<typeof View> {
  orientation?: "horizontal" | "vertical"
}

const Separator = React.forwardRef<
  React.ElementRef<typeof View>,
  SeparatorProps
>(
  (
    { className, orientation = "horizontal", ...props },
    ref
  ) => (
    <View
      ref={ref}
      style={tw`${cn(
        "shrink-0 bg-gray-200",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}`}
      {...props}
    />
  )
)
Separator.displayName = "Separator"

export { Separator }
