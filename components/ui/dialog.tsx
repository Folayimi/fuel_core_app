import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { X } from "lucide-react-native";
import tw from "twrnc";

type DialogProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Dialog = ({ visible, onClose, children }: DialogProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        style={tw`flex-1 bg-black/70 justify-center items-center`}
        onPress={onClose} // closes if you tap outside
      >
        <View
          style={tw`w-11/12 max-w-lg bg-white dark:bg-neutral-900 rounded-lg p-6`}
        >
          {/* Close Button */}
          <TouchableOpacity
            onPress={onClose}
            style={tw`absolute top-3 right-3 p-2 rounded-full bg-neutral-200 dark:bg-neutral-800`}
          >
            <X size={18} color="black" />
          </TouchableOpacity>

          {children}
        </View>
      </Pressable>
    </Modal>
  );
};

/* Header, Footer, Title, Description (like shadcn/ui API) */

export const DialogHeader = ({ children }: { children: React.ReactNode }) => (
  <View style={tw`mb-4`}>
    {children}
  </View>
);

export const DialogFooter = ({ children }: { children: React.ReactNode }) => (
  <View style={tw`mt-4 flex-row justify-end`}>{children}</View>
);

export const DialogTitle = ({ children }: { children: React.ReactNode }) => (
  <Text style={tw`text-lg font-semibold text-black dark:text-white`}>
    {children}
  </Text>
);

export const DialogDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <Text style={tw`text-sm text-neutral-600 dark:text-neutral-400`}>
    {children}
  </Text>
);
