import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Animated, Dimensions } from "react-native";
import { X } from "lucide-react-native";
import tw from "twrnc";

type ToastVariant = "default" | "destructive";

type ToastProps = {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  onClose?: () => void;
};

export const Toast = ({
  title,
  description,
  variant = "default",
  duration = 3000,
  onClose,
}: ToastProps) => {
  const [visible, setVisible] = useState(true);
  const translateY = new Animated.Value(-100);

  const bgStyle =
    variant === "destructive"
      ? tw`bg-red-600 border-red-700`
      : tw`bg-white border-gray-300`;

  const textStyle =
    variant === "destructive"
      ? tw`text-white`
      : tw`text-black`;

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    Animated.timing(translateY, {
      toValue: -100,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
      onClose?.();
    });
  };

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        tw`absolute top-6 left-4 right-4 rounded-md border shadow-lg p-4`,
        bgStyle,
        { transform: [{ translateY }] },
      ]}
    >
      <View style={tw`flex-row justify-between items-start`}>
        <View style={tw`flex-1 pr-6`}>
          {title ? (
            <Text style={[tw`text-sm font-semibold mb-1`, textStyle]}>{title}</Text>
          ) : null}
          {description ? (
            <Text style={[tw`text-sm opacity-80`, textStyle]}>{description}</Text>
          ) : null}
        </View>
        <TouchableOpacity onPress={handleClose} style={tw`p-1`}>
          <X size={18} color={variant === "destructive" ? "white" : "black"} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
