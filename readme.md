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
- (Times faster) is compared to @ixjb94/indicators    
    Example: @ixjb94/indicator is 25.18x times faster than Pandas-ta and 2.71x times faster than Tulip Node

| Identifier    | @ixjb94/indicators        | pandas-ta (Times faster)  | Tulip node (Times faster) |
| ------------- | --------------------------| --------------------------|---------------------------|
| ATR           | 27049.69                  | 1074.29 (25.18 x)         | 9967.70 (2.71 x)          |
| BBAND         | 22608.07                  | 819.92  (27.57 x)         | 13110.28 (1.72 x)         |
| CCI           | 15252.74                  | 509.70  (29.92 x)         | 11605.24 (1.31 x)         |
| DC            | 11404.20                  | 1597.50 (7.14 x)          | Not available             |
| EMA           | 59421.24                  | 2609.47 (22.77 x)         | 25214.32 (2.35 x)         |
| HMA           | 18891.81                  | 212.35  (88.97 x)         | 25063.91 (0.75 x)         |
| MACD          | 33641.72                  | 475.78  (70.71 x)         | 12403.72 (2.71 x)         |
| ROC           | 54707.58                  | 3638.51 (15.04 x)         | 26865.11 (2.03 x)         |
| RSI           | 30360.07                  | 857.06  (35.42 x)         | 26609.19 (1.14 x)         |
| SMA           | 59733.61                  | 4671.15 (12.79 x)         | 22757.79 (2.62 x)         |
| STOCH         | 9732.93                   | 684.72  (14.21 x)         | 9185.60 (1.05 x)          |

Q: Why HMA is slower than tulip-node?    
A: Because my HMA is calling another function, which I'll fix it soon. 

### Results - Image
![ixjb94](https://raw.githubusercontent.com/ixjb94/indicators-benchmark/master/images/ixjb94.png "ixjb94")    
![pandas-ta](https://raw.githubusercontent.com/ixjb94/indicators-benchmark/master/images/pandas-ta.png "pandas-ta")    
![tulipnode](https://raw.githubusercontent.com/ixjb94/indicators-benchmark/master/images/tulipnode.png "tulipnode")    

### System Info
OS : Windows 10    
CPU: Intel Core i7 8700k - 3.70GHz    
RAM: 32gb - DDR4    
SSD: ADATA SU9000    