
export function getSellAndProfitData(sellAndProfitLocale: Record<string, string>) {
  return [
    { name: sellAndProfitLocale.month1, Profit: 18, Sales: 25 },
    { name: sellAndProfitLocale.month2, Profit: 10, Sales: 15 },
    { name: sellAndProfitLocale.month3, Profit: 55, Sales: 38 },
    { name: sellAndProfitLocale.month4, Profit: 96, Sales: 95 },
    { name: sellAndProfitLocale.month5, Profit: 24, Sales: 42 },
    { name: sellAndProfitLocale.month6, Profit: 28, Sales: 35 },
    { name: sellAndProfitLocale.month7, Profit: 63, Sales: 30 },
    { name: sellAndProfitLocale.month8, Profit: 3, Sales: 8 },
    { name: sellAndProfitLocale.month9, Profit: 69, Sales: 75 },
    { name: sellAndProfitLocale.month10, Profit: 70, Sales: 68 },
    { name: sellAndProfitLocale.month11, Profit: 80, Sales: 78 },
    { name: sellAndProfitLocale.month12, Profit: 55, Sales: 64 },
  ].reverse()
}
