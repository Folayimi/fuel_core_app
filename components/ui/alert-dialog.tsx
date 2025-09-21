import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import tw from "twrnc";

// Context to manage open/close state
const AlertDialogContext = createContext<any>(null);

export function AlertDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialogContext.Provider value={{ open, setOpen }}>
      {children}
    </AlertDialogContext.Provider>
  );
}

// Trigger (opens the modal)
export function AlertDialogTrigger({ children }: { children: ReactNode }) {
  const { setOpen } = useContext(AlertDialogContext);

  return (
    <Pressable onPress={() => setOpen(true)}>
      {children}
    </Pressable>
  );
}

// Content (dialog box itself)
export function AlertDialogContent({ children }: { children: ReactNode }) {
  const { open, setOpen } = useContext(AlertDialogContext);

  return (
    <Modal
      transparent
      visible={open}
      animationType="fade"
      onRequestClose={() => setOpen(false)}
    >
      <View style={tw`flex-1 items-center justify-center bg-black/60`}>
        <View style={tw`w-80 bg-white rounded-2xl p-6`}>
          {children}
        </View>
      </View>
    </Modal>
  );
}

// Header
export function AlertDialogHeader({ children }: { children: ReactNode }) {
  return <View style={tw`mb-4`}>{children}</View>;
}

// Footer
export function AlertDialogFooter({ children }: { children: ReactNode }) {
  return <View style={tw`flex-row justify-end mt-4`}>{children}</View>;
}

// Title
export function AlertDialogTitle({ children }: { children: ReactNode }) {
  return (
    <Text style={tw`text-lg font-bold text-gray-900 mb-2`}>{children}</Text>
  );
}

// Description
export function AlertDialogDescription({ children }: { children: ReactNode }) {
  return <Text style={tw`text-sm text-gray-600`}>{children}</Text>;
}

// Cancel Button
export function AlertDialogCancel({
  children,
}: {
  children: ReactNode;
}) {
  const { setOpen } = useContext(AlertDialogContext);

  return (
    <TouchableOpacity
      onPress={() => setOpen(false)}
      style={tw`px-4 py-2 rounded-lg border border-gray-300 mr-2`}
    >
      <Text style={tw`text-gray-700`}>{children}</Text>
    </TouchableOpacity>
  );
}

// Action Button
export function AlertDialogAction({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress?: () => void;
}) {
  const { setOpen } = useContext(AlertDialogContext);

  const handlePress = () => {
    setOpen(false);
    onPress?.();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={tw`px-4 py-2 rounded-lg bg-purple-600`}
    >
      <Text style={tw`text-white font-bold`}>{children}</Text>
    </TouchableOpacity>
  );
}
