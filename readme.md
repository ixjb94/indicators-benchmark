### About
This's a performance benchmark for @ixjb94/indicators and Pandas-ta.

### Data
DOGEUSDT-4h-2023-10 (October)    
[Binance Vision](https://data.binance.vision/data/futures/um/monthly/klines/DOGEUSDT/4h/ "Binance Vision")     

### Results - Table
- ops/second    
- runes 100 samples    
- higher numbers means better    
- csv file size: 23kb    
- json file size: 69kb    
- number of candles: 186    

| Identifier    | @ixjb94/indicators        | pandas-ta          | Times Faster     |
| ------------- | --------------------------| ------------------ |------------------|
| ATR           | 27049.69                  | 1074.29            | 25.18 x          |
| BBAND         | 22608.07                  | 819.92             | 27.57 x          |
| CCI           | 15252.74                  | 509.70             | 29.92 x          |
| DC            | 11404.20                  | 1597.50            | 7.14 x           |
| EMA           | 59421.24                  | 2609.47            | 22.77 x          |
| HMA           | 18891.81                  | 212.35             | 88.97 x          |
| MACD          | 33641.72                  | 475.78             | 70.71 x          |
| ROC           | 54707.58                  | 3638.51            | 15.04 x          |
| RSI           | 30360.07                  | 857.06             | 35.42 x          |
| SMA           | 59733.61                  | 4671.15            | 12.79 x          |
| STOCH         | 9732.93                   | 684.72             | 14.21 x          |

### Results - Image
![ixjb94](https://raw.githubusercontent.com/ixjb94/indicators-benchmark/master/images/ixjb94.png "ixjb94")    
![pandas-ta](https://raw.githubusercontent.com/ixjb94/indicators-benchmark/master/images/pandas-ta.png "pandas-ta")    