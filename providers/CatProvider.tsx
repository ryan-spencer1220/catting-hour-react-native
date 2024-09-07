import { useContext, createContext, PropsWithChildren, useState } from 'react';

interface Cat {
  id: number;
  lat: number;
  long: number;
  name: string;
  type: string;
  personality: string;
  last_seen: string;
}

interface CatContextType {
  selectedCat: Cat | undefined;
  setSelectedCat: React.Dispatch<React.SetStateAction<Cat | undefined>>;
}

const CatContext = createContext<CatContextType | undefined>(undefined);

export default function CatProvider({ children }: PropsWithChildren) {
  const [selectedCat, setSelectedCat] = useState<Cat | undefined>();
  return (
    <CatContext.Provider value={{ selectedCat, setSelectedCat }}>{children}</CatContext.Provider>
  );
}

export const useCat = () => {
  const context = useContext(CatContext);
  if (!context) {
    throw new Error('useCat must be used within a CatProvider');
  }
  return context;
};
