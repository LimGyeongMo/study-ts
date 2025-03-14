import { atom } from "recoil";

// 새로고침 트리거 atom
export const refreshState = atom<number>({
    key: "refreshState",
    default: 0,
});
