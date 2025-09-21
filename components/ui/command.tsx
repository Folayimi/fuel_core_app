import React, { useState } from "react";
import {
  Modal,
  TextInput,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { Search } from "lucide-react-native";
import tw from "twrnc";

type CommandItem = {
  id: string;
  label: string;
};

interface CommandDialogProps {
  visible: boolean;
  onClose: () => void;
  items: CommandItem[];
  onSelect: (item: CommandItem) => void;
}

export const CommandDialog = ({
  visible,
  onClose,
  items,
  onSelect,
}: CommandDialogProps) => {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={tw`flex-1 justify-center items-center bg-black/50`}>
        <View
          style={tw`w-11/12 max-h-[70%] bg-white rounded-lg p-4 dark:bg-neutral-900`}
        >
          {/* Input */}
          <View
            style={tw`flex-row items-center border-b border-neutral-300 pb-2 mb-2`}
          >
            <Search size={18} color="gray" style={tw`mr-2`} />
            <TextInput
              placeholder="Search..."
              value={query}
              onChangeText={setQuery}
              style={tw`flex-1 text-base text-black`}
              placeholderTextColor="#999"
            />
          </View>

          {/* List */}
          <FlatList
            data={filteredItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
                style={tw`p-3 rounded-md`}
              >
                <Text style={tw`text-black`}>{item.label}</Text>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <Text style={tw`text-center text-neutral-500 py-4`}>
                No results found
              </Text>
            }
          />
        </View>
      </View>
    </Modal>
  );
};
