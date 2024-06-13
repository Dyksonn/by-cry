import { useEffect, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { CandlestickChart, TCandle } from 'react-native-wagmi-charts';
import { colors } from "@/styles/colors";

// @ts-ignore
import Binance from 'binance-api-react-native'

export default function Candlestick() {
    const client = Binance()
    const { id } = useLocalSearchParams();
    const [candles, setCandles] = useState<TCandle[]>([])

    async function getCandlestickToTicker() {
        client.ws.candles(id, '1m', (candle: CandlesTicketProps) => {
            const obj: TCandle = {
                close: parseFloat(candle.close),
                high: parseFloat(candle.high),
                low: parseFloat(candle.low),
                open: parseFloat(candle.open),
                timestamp: candle.eventTime
            }
            setCandles(prev => [...prev, obj])
        })
    }

    async function getTickerCandle() {
        const candle = await client.candles({ symbol: id, interval: '1m', limit: 100 })
        setCandles(candle)
    }

    useEffect(() => {
        getTickerCandle();
        getCandlestickToTicker();
    }, []);

  return (
    <View className="flex-1 bg-black">
      <View className=" bg-gray-600 overflow-hidden pb-10 p-7">
        <ImageBackground
          source={require("@/assets/circle-red.png")}
          resizeMode="contain"
          imageStyle={{
            height: 400,
            position: "absolute",
            overflow: `hidden`,
            right: -205,
          }}
          className="pt-20"
        >
          <View className="flex-row justify-between items-center">
            <View className="">
              <TouchableOpacity onPress={() => router.back()}>
                <Feather
                  name="arrow-left"
                  size={30}
                  className="mb-3"
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
              <Text className="text-white font-medium text-xl">{id}</Text>
              <Text className="text-gray-400 font-regular text-sm">
                Active Balance
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View className="h-20 w-full">
      <CandlestickChart.Provider data={candles}>
        <CandlestickChart>
            <CandlestickChart.Candles />
            <CandlestickChart.Crosshair />
        </CandlestickChart>
        </CandlestickChart.Provider>
      </View>
    </View>
  );
}
