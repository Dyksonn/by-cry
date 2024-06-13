import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Header } from "@/components/Header";
// @ts-ignore
import Binance from 'binance-api-react-native'

import { HeaderMarket } from "@/components/HeaderMarket";
import { CardTicketGraph } from "@/components/CardTicket";

export default function Home() {
  const client = Binance()
  const [listMarkets, setListMarkets] = useState<TTickerTrade[]>([]);

  async function getAllMarkets() {
    client.ws.allTickers((tickers: TTickerTrade[]) => {
      setListMarkets(tickers.slice(0, 5));
    })
  }

  useEffect(() => {
    getAllMarkets();
  }, []);

  return (
    <View className="flex-1 bg-black">
      <Header />
      <View>
        <FlatList 
          data={listMarkets}
          keyExtractor={(item) => String(item.symbol)}
          ListHeaderComponent={<HeaderMarket />}
          className="p-8"
          renderItem={({ item }) => {
            return (
              <CardTicketGraph item={item} />
            )
          }}
        />
      </View>
    </View>
  );
}
