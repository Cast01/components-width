import React, { createContext, useState } from "react";
import { ReactNode } from "react";

interface AsideSwitcherType {
  aside: boolean;
  setAside: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AsideSwitcher = createContext({} as AsideSwitcherType);

interface AsideSwitcherProviderProps {
  children: ReactNode;
}

export function AsideSwitcherProvider({
  children,
}: AsideSwitcherProviderProps) {
  const [aside, setAside] = useState(true);

  return (
    <AsideSwitcher.Provider value={{ aside, setAside }}>
      {children}
    </AsideSwitcher.Provider>
  );
}
