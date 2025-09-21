import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from "react-native";
import { X } from "lucide-react-native";
import tw from "twrnc";

type SheetProps = {
  visible: boolean;
  onClose: () => void;
  side?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
};

export const Sheet = ({ visible, onClose, side = "right", children }: SheetProps) => {
  const { height, width } = Dimensions.get("window");

  const getPositionStyle = () => {
    switch (side) {
      case "top":
        return tw`absolute top-0 left-0 right-0 h-1/3`;
      case "bottom":
        return tw`absolute bottom-0 left-0 right-0 h-1/3`;
      case "left":
        return tw`absolute left-0 top-0 bottom-0 w-3/4`;
      case "right":
      default:
        return tw`absolute right-0 top-0 bottom-0 w-3/4`;
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      {/* Overlay */}
      <Pressable
        style={tw`flex-1 bg-black/60`}
        onPress={onClose}
      >
        {/* Stop touches from closing when interacting with content */}
        <Pressable style={[tw`bg-white dark:bg-neutral-900 p-6`, getPositionStyle()]} onPress={() => {}}>
          {/* Close Button */}
          <TouchableOpacity
            onPress={onClose}
            style={tw`absolute top-3 right-3 p-2 rounded-full bg-neutral-200 dark:bg-neutral-800`}
          >
            <X size={20} color="black" />
          </TouchableOpacity>

          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

/* Subcomponents (API like Radix) */
export const SheetHeader = ({ children }: { children: React.ReactNode }) => (
  <View style={tw`mb-4`}>{children}</View>
);

export const SheetFooter = ({ children }: { children: React.ReactNode }) => (
  <View style={tw`mt-4 flex-row justify-end`}>{children}</View>
);

export const SheetTitle = ({ children }: { children: React.ReactNode }) => (
  <Text style={tw`text-lg font-semibold text-black dark:text-white`}>
    {children}
  </Text>
);

export const SheetDescription = ({ children }: { children: React.ReactNode }) => (
  <Text style={tw`text-sm text-neutral-600 dark:text-neutral-400`}>
    {children}
  </Text>
);
