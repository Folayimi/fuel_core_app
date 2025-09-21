import React from "react";
import { View, Image, Text, ViewStyle, ImageStyle } from "react-native";
import tw from "twrnc";

type AvatarProps = {
  size?: number; // default 40px
  style?: ViewStyle | ViewStyle[];
  children?: React.ReactNode;
};

const Avatar = ({ size = 40, style, children }: AvatarProps) => {
  return (
    <View
      style={[
        tw`overflow-hidden rounded-full bg-gray-200`,
        { width: size, height: size },
        style,
      ]}
    >
      {children}
    </View>
  );
};

type AvatarImageProps = {
  source: any;
  style?: ImageStyle | ImageStyle[];
};

const AvatarImage = ({ source, style }: AvatarImageProps) => {
  return (
    <Image
      source={source}
      style={[
        tw`w-full h-full`,
        { resizeMode: "cover", borderRadius: 9999 },
        style,
      ]}
    />
  );
};

type AvatarFallbackProps = {
  label?: string;
  style?: ViewStyle | ViewStyle[];
};

const AvatarFallback = ({ label = "?", style }: AvatarFallbackProps) => {
  return (
    <View
      style={[
        tw`flex-1 items-center justify-center rounded-full bg-gray-400`,
        style,
      ]}
    >
      <Text style={tw`text-white font-bold`}>{label}</Text>
    </View>
  );
};

export { Avatar, AvatarImage, AvatarFallback };
