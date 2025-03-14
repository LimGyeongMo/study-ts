import axios from "axios";
import { CoinData } from "../stores/coinState/atom";

// API 응답 데이터 형식
interface CoinPaprikaResponse {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    quotes: {
        KRW: {
            price: number;
            volume_24h: number;
            market_cap: number;
            percent_change_24h: number;
        };
    };
}

// API 호출 함수
export const fetchCoinData = async (): Promise<CoinData[]> => {
    try {
        const response = await axios.get<CoinPaprikaResponse[]>(
            "https://api.coinpaprika.com/v1/tickers?quotes=KRW"
        );
        // API 데이터를 우리가 원하는 CoinData 형식으로 변환
        const coinData: CoinData[] = response.data.map((coin) => ({
            rank: coin.rank,
            name: `${coin.name} (${coin.symbol})`, // 이름과 심볼 함께 표시
            price: coin.quotes.KRW.price,
            volume24h: coin.quotes.KRW.volume_24h,
            marketCap: coin.quotes.KRW.market_cap,
            change24h: coin.quotes.KRW.percent_change_24h,
        }));
        return coinData;
    } catch (error) {
        console.error("코인 데이터를 가져오는 중 오류 발생:", error);
        return []; // 오류 시 빈 배열 반환
    }
};
