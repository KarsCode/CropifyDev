import React, { createContext, FC, useEffect, useState } from "react";
import { VITE_API_URL } from './setupEnv';
import axios from "axios";

interface UserContextProps {
  user: unknown;
  setUser: React.Dispatch<React.SetStateAction<unknown>>;
  ready:unknown;
}

export const UserContext = createContext<UserContextProps>({
    user: undefined,
    setUser: function (): void {
        throw new Error("Function not implemented.");
    },
    ready: undefined,
});




export const UserContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user,setUser] = useState<unknown>(null);
  const [ready,setReady] = useState(false);
  useEffect(()=>{
    if(!user){
      axios.get(`${VITE_API_URL}/profile`,{withCredentials:true}).then(({data}) => {
        setUser(data);
        setReady(true);
      });
    }
  
  },[user]);
  return (
    <UserContext.Provider value={{ user, setUser,ready }}>
      {children}
    </UserContext.Provider>
  );
};