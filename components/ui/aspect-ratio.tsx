import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import tw from "twrnc";

type AspectRatioProps = {
  ratio?: number; // e.g. 16/9, defaults to 1 (square)
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
};

export function AspectRatio({ ratio = 1, children, style }: AspectRatioProps) {
  return (
    <View style={[{ aspectRatio: ratio }, tw`w-full overflow-hidden`, style]}>
      {children}
    </View>
  );
}
