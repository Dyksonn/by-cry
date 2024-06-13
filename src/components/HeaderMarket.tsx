import { Text, View } from "react-native";

export function HeaderMarket() {
  return (
    <View className="flex-row justify-between items-center">
      <Text className="text-gray-400 font-medium text-sm">Mercado</Text>

      <Text className="text-gray-400 font-medium text-sm">24HR</Text>
    </View>
  );
}
