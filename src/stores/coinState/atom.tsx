import { atom } from "recoil";

export interface CoinData {
    rank: number;
    name: string;
    price: number; // KRW 가격
    volume24h: number; // 24시간 거래량
    marketCap: number; // 시가총액
    change24h: number; // 24시간 변동률
}
export const coinListState = atom<CoinData[]>({
    key: "coinListState",
    default: [], // 초기 상태는 빈 배열
});

export const loadingState = atom<boolean>({
    key: "loadingState",
    default: true, // 초기 상태는 빈 배열
});

// export const getCoinData = selector({
//     key: "coinState",
//     get: async ({ get }) => {
//         // 새로고침 트리거인 refreshState를 읽기
//         const refresh = get(refreshState);
//         const res = await getCoinList();
//         const formattedData: CryptoData[] = res.data.map((coin) => ({
//             id: coin.id,
//             name: coin.name,
//             symbol: coin.symbol,
//             rank: coin.rank,
//             price: coin.quotes.KRW.price,
//             volume_24h: coin.quotes.KRW.volume_24h,
//             market_cap: coin.quotes.KRW.market_cap,
//             percent_change_24h: coin.quotes.KRW.percent_change_24h,
//         }));

//         return formattedData;
//     },
// });
