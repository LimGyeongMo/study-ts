import { atom } from "recoil";

export interface Site {
    id: number;
    title: string;
    url: string;
    description?: string;
}

export const studyListState = atom<Site[]>({
    key: "sitesState",
    default: [
        {
            id: 1,
            title: "기출문제",
            url: "https://www.comcbt.com/",
            description: "comCBT 기출 문제 입니다",
        },
        {
            id: 2,
            title: "박쌤 인강",
            url: "https://www.youtube.com/@%EB%B0%95%EC%8C%A4%EC%A0%84%EC%82%B0%ED%9A%8C%EA%B3%84",
            description: "시험에 대한 다양한 자료를 제공합니다.",
        },
        {
            id: 3,
            title: "Recoil 공식문서",
            url: "https://recoiljs.org/",
            description: "Recoil 상태 관리 라이브러리 문서입니다.",
        },
        {
            id: 4,
            title: "Ant Design",
            url: "https://ant.design/",
            description: "Ant Design UI 컴포넌트 라이브러리입니다.",
        },
    ],
});
