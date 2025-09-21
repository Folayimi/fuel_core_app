
import { cn } from "@/lib/utils"
import Slider from '@react-native-community/slider'
import * as React from "react"
import { Text, View } from "react-native"
import tw from "twrnc"

export interface SliderProps {
  value?: number
  onValueChange?: (value: number) => void
  minimumValue?: number
  maximumValue?: number
  step?: number
  disabled?: boolean
  minimumTrackTintColor?: string
  maximumTrackTintColor?: string
  thumbTintColor?: string
  className?: string
  showValue?: boolean
}

const CustomSlider = React.forwardRef<
  React.ElementRef<typeof Slider>,
  SliderProps
>(({ 
  className, 
  value = 0, 
  onValueChange, 
  minimumValue = 0, 
  maximumValue = 100, 
  step = 1,
  disabled = false,
  minimumTrackTintColor = "#3B82F6",
  maximumTrackTintColor = "#E5E7EB",
  thumbTintColor = "#3B82F6",
  showValue = false,
  ...props 
}, ref) => {
  return (
    <View style={tw`${cn("w-full", className)}`}>
      {showValue && (
        <Text style={tw`text-sm text-gray-600 mb-2 text-center`}>
          {value}
        </Text>
      )}
      <Slider
        ref={ref}
        style={{ width: '100%', height: 40 }}
        value={value}
        onValueChange={onValueChange}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        disabled={disabled}
        minimumTrackTintColor={minimumTrackTintColor}
        maximumTrackTintColor={maximumTrackTintColor}
        thumbTintColor={thumbTintColor}
        {...props}
      />
    </View>
  )
})
CustomSlider.displayName = "Slider"

export { CustomSlider as Slider }

