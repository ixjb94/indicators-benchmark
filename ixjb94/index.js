import { Indicators } from "@ixjb94/indicators"
import { Benchmark } from "./benchmark.js"
import { Data } from "./data.js"

const ta = new Indicators()
const benchmark = new Benchmark("@ixjb94/indicators")

const open = []
const high = []
const low = []
const close = []
const volume = []
for (let index = 0; index < Data.length; index++) {
    const element = Data[index]
    open.push(element.open)
    high.push(element.high)
    low.push(element.low)
    close.push(element.close)
    volume.push(element.volume)
}

benchmark
    .it("ATR", () => ta.atr(high, low, close, 14))
    .it("BBAND", () => ta.bbands(close, 20, 2))
    .it("CCI", () => ta.cci(high, low, close, 20))
    .it("DC", () => ta.dc(high, low, 20))
    .it("EMA", () =>  ta.ema(close, 10))
    .it("HMA", () => ta.hma(close, 10))
    .it("MACD", () => ta.macd(close, 12, 26, 9))
    .it("ROC", () => ta.roc(close, 9))
    .it("RSI", () => ta.rsi(close, 14))
    .it("SMA", () => ta.sma(close, 10))
    .it("STOCH", () => ta.stoch(high, low, close, 14, 1 , 3))
    .run(100)