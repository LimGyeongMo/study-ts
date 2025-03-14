import React, { useEffect } from "react";
import { Table, Skeleton } from "antd";
import { useRecoilState } from "recoil";
import { fetchCoinData } from "../../Services/getCoinList";
import {
    CoinData,
    coinListState,
    loadingState,
} from "../../stores/coinState/atom";

const CoinTable: React.FC = () => {
    // Recoil 상태 사용
    const [coins, setCoins] = useRecoilState(coinListState);
    const [loading, setLoading] = useRecoilState(loadingState);

    // 데이터 가져오는 함수
    const loadData = async () => {
        setLoading(true); // 로딩 시작
        const data = await fetchCoinData();
        setCoins(data); // 데이터 저장
        setLoading(false); // 로딩 끝
    };

    // 컴포넌트가 처음 렌더링될 때와 10초마다 데이터 가져오기
    useEffect(() => {
        loadData(); // 처음 로드
        const interval = setInterval(loadData, 10000); // 10초마다 갱신

        // 컴포넌트가 언마운트될 때 인터벌 정리
        return () => clearInterval(interval);
    }, []);

    // 테이블 열 정의
    const columns = [
        {
            title: "순위",
            dataIndex: "rank",
            sorter: (a: CoinData, b: CoinData) => a.rank - b.rank,
        },
        {
            title: "코인 이름",
            dataIndex: "name",
            sorter: (a: CoinData, b: CoinData) => a.name.localeCompare(b.name),
        },
        {
            title: "가격 (KRW)",
            dataIndex: "price",
            sorter: (a: CoinData, b: CoinData) => a.price - b.price,
            render: (value: number) =>
                value.toLocaleString("ko-KR", { maximumFractionDigits: 2 }) +
                "원",
        },
        {
            title: "24h 거래량 (KRW)",
            dataIndex: "volume24h",
            sorter: (a: CoinData, b: CoinData) => a.volume24h - b.volume24h,
            render: (value: number) =>
                value.toLocaleString("ko-KR", { maximumFractionDigits: 0 }) +
                "원",
        },
        {
            title: "시가총액 (KRW)",
            dataIndex: "marketCap",
            sorter: (a: CoinData, b: CoinData) => a.marketCap - b.marketCap,
            render: (value: number) =>
                value.toLocaleString("ko-KR", { maximumFractionDigits: 0 }) +
                "원",
        },
        {
            title: "변동률 (24h)",
            dataIndex: "change24h",
            sorter: (a: CoinData, b: CoinData) => a.change24h - b.change24h,
            render: (value: number) => (
                <span style={{ color: value >= 0 ? "green" : "red" }}>
                    {value >= 0 ? "+" : ""}
                    {value.toFixed(2)}%
                </span>
            ),
        },
    ];

    return (
        <div>
            {loading && coins.length === 0 ? (
                <Skeleton active paragraph={{ rows: 10 }} /> // 처음 로딩 시 스켈레톤
            ) : (
                <Table
                    columns={columns}
                    dataSource={coins}
                    rowKey="rank"
                    loading={loading} // 데이터 갱신 중 로딩 표시
                    pagination={{ pageSize: 10 }} // 한 페이지에 20개씩
                />
            )}
        </div>
    );
};

export default CoinTable;
