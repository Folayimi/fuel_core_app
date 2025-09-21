import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { ChevronDown } from "lucide-react-native";
import tw from "twrnc";

type NavigationMenuItemProps = {
  label: string;
  children?: React.ReactNode; // dropdown content
};

const NavigationMenuItem = ({ label, children }: NavigationMenuItemProps) => {
  const [open, setOpen] = useState(false);
  const rotateAnim = new Animated.Value(0);

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;
    Animated.timing(rotateAnim, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setOpen(!open);
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View style={tw`mb-2`}>
      <TouchableOpacity
        style={tw`flex-row items-center justify-between px-4 py-2 bg-gray-100 rounded-md`}
        onPress={toggleMenu}
      >
        <Text style={tw`text-sm font-medium text-gray-800`}>{label}</Text>
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <ChevronDown size={16} color="black" />
        </Animated.View>
      </TouchableOpacity>

      {open && children ? (
        <View style={tw`mt-2 pl-6`}>
          {children}
        </View>
      ) : null}
    </View>
  );
};

export const NavigationMenu = () => {
  return (
    <View style={tw`w-full`}>
      <NavigationMenuItem label="Home" />
      <NavigationMenuItem label="Services">
        <TouchableOpacity style={tw`py-2`}>
          <Text style={tw`text-gray-700`}>Web Development</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`py-2`}>
          <Text style={tw`text-gray-700`}>Mobile Apps</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`py-2`}>
          <Text style={tw`text-gray-700`}>UI/UX Design</Text>
        </TouchableOpacity>
      </NavigationMenuItem>
      <NavigationMenuItem label="About" />
      <NavigationMenuItem label="Contact" />
    </View>
  );
};
