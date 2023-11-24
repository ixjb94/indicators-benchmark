import pandas as pd
import pandas_ta as ta
from benchmark import Benchmark

df = pd.DataFrame()
df = pd.read_csv("data.csv", sep=",")
df.set_index(pd.DatetimeIndex(df["close_time"]), inplace=True)

bench = Benchmark("Pandas-ta")

bench \
    .it("ATR", lambda: df.ta.atr(high="high", low="low", close="close", length=14)) \
    .it("BBAND", lambda: df.ta.bbands(close="close", length=20, std=2)) \
    .it("CCI", lambda: df.ta.cci(high="high", low="low", close="close", length=20)) \
    .it("DC", lambda: df.ta.donchian(high="high", low="low", lower_length=20, upper_length=20)) \
    .it("EMA", lambda: df.ta.ema(close="close", length=10, append=True)) \
    .it("HMA", lambda: df.ta.hma(close="close", length=10, append=True)) \
    .it("MACD", lambda: df.ta.macd(close="close", fast=26, slow=12, signal=9)) \
    .it("ROC", lambda: df.ta.roc(close="close", length=9)) \
    .it("RSI", lambda: df.ta.rsi(close="close", length=14, append=True)) \
    .it("SMA", lambda: df.ta.sma(close="close", length=10, append=True)) \
    .it("STOCH", lambda: df.ta.stoch(high="high", low="low", close="close", k=14, d=3, smooth_k=1)) \
    .run(100)