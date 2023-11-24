import * as tulind from "tulind"
import { Data } from "./data.js"
import { Benchmark } from "./benchmark.js"

const benchmark = new Benchmark("tulip node")

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

const ta = tulind.indicators

benchmark
    .it("ATR", () => ta.atr.indicator([high, low, close], [14]))
    .it("BBAND", () => ta.bbands.indicator([close], [20, 2]))
    .it("CCI", () => ta.cci.indicator([high, low, close], [20]))
    // .it("DC", () => "Not available")
    .it("EMA", () => ta.ema.indicator([close], [10]))
    .it("HMA", () => ta.hma.indicator([close], [10]))
    .it("MACD", () => ta.macd.indicator([close], [12, 26, 9]))
    .it("ROC", () => ta.roc.indicator([close], [9]))
    .it("RSI", () => ta.rsi.indicator([close], [14]))
    .it("SMA", () => ta.sma.indicator([close], [10]))
    .it("STOCH", () => ta.stoch.indicator([high, low, close], [14, 1 , 3]))
    .run(100)