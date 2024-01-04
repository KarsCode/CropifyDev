import React, { createContext, FC, useEffect, useState } from "react";
import { VITE_API_URL } from './setupEnv';
import axios from "axios";

interface UserContextProps {
  user: unknown;
  setUser: React.Dispatch<React.SetStateAction<unknown>>;
}

export const UserContext = createContext<UserContextProps>({
    user: undefined,
    setUser: function (): void {
        throw new Error("Function not implemented.");
    }
});




export const UserContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<unknown>(null);
  useEffect(()=>{
    if(!user){
      axios.get(`${VITE_API_URL}/profile`,{withCredentials:true})
    }
  
  },[user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};