import { createContext } from "react";
export const UserContext = createContext({
  email: null,
  setEmail: null,
  address: null,
  setAddress: null,
  nickname: null,
  setNickname: null,
});
