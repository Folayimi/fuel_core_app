import React, { useState, ReactNode } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import { Check, ChevronRight, Circle } from "lucide-react-native";

type ContextMenuProps = {
  children: ReactNode;
};

const ContextMenu = ({ children }: ContextMenuProps) => {
  return <>{children}</>;
};

const ContextMenuTrigger = ({
  children,
  menu,
}: {
  children: ReactNode;
  menu: ReactNode;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Pressable onLongPress={() => setVisible(true)}>{children}</Pressable>
      <Modal
        transparent
        animationType="fade"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <Pressable
          style={tw`flex-1 bg-black/50`}
          onPress={() => setVisible(false)}
        />
        <View style={tw`absolute bottom-20 left-4 right-4 rounded-md bg-white shadow-lg`}>
          <ScrollView>{menu}</ScrollView>
        </View>
      </Modal>
    </>
  );
};

const ContextMenuItem = ({
  children,
  inset,
  onPress,
  disabled,
}: {
  children: ReactNode;
  inset?: boolean;
  onPress?: () => void;
  disabled?: boolean;
}) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={tw.style(
      `px-3 py-2 flex-row items-center rounded-md`,
      disabled ? "opacity-50" : "active:bg-gray-200",
      inset && "pl-8"
    )}
  >
    <Text style={tw`text-sm text-gray-800`}>{children}</Text>
  </TouchableOpacity>
);

const ContextMenuCheckboxItem = ({
  children,
  checked,
  onPress,
}: {
  children: ReactNode;
  checked?: boolean;
  onPress?: () => void;
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={tw`px-3 py-2 flex-row items-center rounded-md`}
  >
    <View style={tw`w-4 h-4 mr-2 items-center justify-center`}>
      {checked && <Check size={14} color="black" />}
    </View>
    <Text style={tw`text-sm text-gray-800`}>{children}</Text>
  </TouchableOpacity>
);

const ContextMenuRadioItem = ({
  children,
  selected,
  onPress,
}: {
  children: ReactNode;
  selected?: boolean;
  onPress?: () => void;
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={tw`px-3 py-2 flex-row items-center rounded-md`}
  >
    <View style={tw`w-4 h-4 mr-2 items-center justify-center`}>
      {selected && <Circle size={10} color="black" fill="black" />}
    </View>
    <Text style={tw`text-sm text-gray-800`}>{children}</Text>
  </TouchableOpacity>
);

const ContextMenuLabel = ({ children }: { children: ReactNode }) => (
  <Text style={tw`px-3 py-2 text-xs font-semibold text-gray-500`}>
    {children}
  </Text>
);

const ContextMenuSeparator = () => (
  <View style={tw`h-px bg-gray-200 my-1`} />
);

const ContextMenuShortcut = ({ label }: { label: string }) => (
  <Text style={tw`ml-auto text-xs tracking-wider text-gray-400`}>
    {label}
  </Text>
);

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
};
