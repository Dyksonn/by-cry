import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

interface IOptionsProps {
  data: {
    icon: any;
    text: string;
  }[];
}

export function Options({ data }: IOptionsProps) {
  return (
    <View className="mt-8 flex-row justify-between items-center">
      {data.map(({icon, text}, index) => (
        <View key={index+text} className="items-center gap-3">
        <TouchableOpacity className="p-5 rounded-xl bg-red-200 justify-center items-center">
          {icon}
        </TouchableOpacity>
        <Text className="text-white">{text}</Text>
      </View>
      ))}
    </View>
  );
}
