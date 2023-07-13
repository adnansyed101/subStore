import { ReactNode, createContext, useContext } from "react";

type ShoppingCartProviderProvider = {
  children: ReactNode;
};

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProvider) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
