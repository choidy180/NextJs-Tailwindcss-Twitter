import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// 페이지 변경시에도 상태관리를 유지하기 위해 사용
const { persistAtom } = recoilPersist();

export const LoginState = atom<Boolean>({
  key: 'LoginState',
  default: true,
  effects_UNSTABLE: [persistAtom],
})