import { Text, View, TouchableOpacity } from "react-native";
import { CartesianChart, Line } from 'victory-native';
import { router } from "expo-router"

const DATA = Array.from({ length: 31 }, (_, i) => ({
    E: i,
    c: 40 + 30 * Math.random(),
    e: 40 + 30 * Math.random(),
    h: 40 + 30 * Math.random(),
    l: 40 + 30 * Math.random(),
    o: 40 + 30 * Math.random(),
    q: 40 + 30 * Math.random(),
    s: 40 + 30 * Math.random(),
    v: 40 + 30 * Math.random(),
}));

export function CardTicketGraph({ item }: {item: TTickerTrade}) {
    const isCrescente = (parseFloat(item.high) > parseFloat(item.low)) ? true : false


    function detailCandlestick() {
        router.push('candlestick/'+item.symbol)
    }

    return (
      <TouchableOpacity onPress={detailCandlestick} className="flex-row justify-between gap-4 items-center">
        <View className="mt-8">
          <View className="flex-row item-center gap-2">
            <Text className="text-white">{item.symbol.slice(-3)}</Text>
            <View className="w-1 h-1 rounded-full mt-2 bg-gray-400" />
            <Text className="text-white">EUR</Text>
          </View>
          <Text className="text-white mt-1">{Math.round((parseFloat(item.volume) / 100) * 10) / 10}k</Text>
        </View>

        <View className="flex-1 w-full h-10">
            {/* @ts-ignore */}
          <CartesianChart data={[item, ...DATA]} xKey="E" yKeys={["h"]}>
            {({ points }) => (
                //@ts-ignore 
              <Line points={(points.h)} color={isCrescente ? "green" : "red"} strokeWidth={3} />
            )}
          </CartesianChart>
        </View>

        <View className="gap-1">
          <Text className="text-white self-end">{parseFloat(item.high).toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</Text>
          <Text className="text-white self-end">{isCrescente ? '+' : '-'}{(((parseFloat(item.high) - parseFloat(item.low)) / parseFloat(item.low)) * 100).toFixed(3)}%</Text>
        </View>
      </TouchableOpacity>
    );
}