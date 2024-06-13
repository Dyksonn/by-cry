declare type CandleProps = {
    e: string;
    E: number;
    s: string;
    k: {
      t: number;
      T: number;
      s: string;
      i: string;
      f: number;
      L: number;
      o: number;
      c: number;
      h: number;
      l: number;
      v: number;
      n: number;
      x: boolean;
      q: number;
      V: number;
      Q: number;
      B: number;
    };
};

declare type TTicketsProps = {
  E: number;
  c: string;
  e: string;
  h: string;
  l: string;
  o: string;
  q: string;
  s: string;
  v: string;
};


declare type TTicketsNumbersProps = {
  E: number;
  c: number;
  e: number;
  h: number;
  l: number;
  o: number;
  q: number;
  s: number;
  v: number;
};


declare type TTickerTrade = {
  eventType: string;
  eventTime: number;
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvg: string;
  prevDayClose: string;
  curDayClose: string;
  closeTradeQuantity: string;
  bestBid: string;
  bestBidQnt: string;
  bestAsk: string;
  bestAskQnt: string;
  open: string;
  high: string;
  low: string;
  volume: string;
  volumeQuote: string;
  openTime: number;
  closeTime: number;
  firstTradeId: number;
  lastTradeId: number;
  totalTrades: number;
}

declare type CandlesTicketProps = {
  eventType: string;
  eventTime: number;
  symbol: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  trades: number;
  interval: string;
  isFinal: boolean;
  quoteVolume: string;
  buyVolume: string;
  quoteBuyVolume: string;
}