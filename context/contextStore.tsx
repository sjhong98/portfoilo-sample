'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';

export const IsLoadingContext = createContext(false);
export const SetIsLoadingContext = createContext((value: boolean) => {});
export const FooterMenuContext = createContext('');
export const SetFooterMenuContext = createContext((value: string) => {});

export default function ContextStore({ children }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [footerMenu, setFooterMenu] = useState('');

  return (
    <SetIsLoadingContext.Provider value={setIsLoading}>
      <IsLoadingContext.Provider value={isLoading}>
        <SetFooterMenuContext.Provider value={setFooterMenu}>
          <FooterMenuContext.Provider value={footerMenu}>{children}</FooterMenuContext.Provider>
        </SetFooterMenuContext.Provider>
      </IsLoadingContext.Provider>
    </SetIsLoadingContext.Provider>
  );
}
