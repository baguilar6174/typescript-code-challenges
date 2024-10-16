export function maxProfit(prices: number[]): number {
	let minPrice = Infinity; // we garantee that minPrice is always smaller than prices[i]
	let maxProfit = 0;

	for (let i = 0; i < prices.length; i++) {
		// if we find a smaller price, we update minPrice
		if (prices[i] < minPrice) minPrice = prices[i];
		// calculate profit if we sell in current day
		const profit = prices[i] - minPrice;
		// if profit is greater than maxProfit, we update maxProfit
		if (profit > maxProfit) maxProfit = profit;
	}

	return maxProfit;
}

const case1 = maxProfit([7, 1, 5, 3, 6, 4]); // 5
const case2 = maxProfit([7, 6, 4, 3, 1]); // 0

console.log({ case1, case2 });
