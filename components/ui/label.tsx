import { cn } from "@/lib/utils"
import React from "react"
import { Text, TextProps } from "react-native"
import tw from 'twrnc'

type LabelProps = TextProps & {
  disabled?: boolean
}

const Label = React.forwardRef<Text, LabelProps>(
  ({ style, disabled, children, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        style={tw`${cn(
          "text-sm font-medium leading-none",
          disabled && "opacity-70",
          style
        )}`}
        {...props}
      >
        {children}
      </Text>
    )
  }
)

Label.displayName = "Label"

export { Label }

