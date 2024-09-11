import { useContext, createContext, PropsWithChildren, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { supabase } from '~/utils/supabase';

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
  nearbyCats: Array<Cat>;
}

const CatContext = createContext<CatContextType | undefined>(undefined);

export default function CatProvider({ children }: PropsWithChildren) {
  const [nearbyCats, setNearbyCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState<Cat | undefined>();

  useEffect(() => {
    const fetchCats = async () => {
      const { error, data } = await supabase.rpc('nearby_cats', {
        lat: 0,
        long: 0,
      });

      if (error) {
        Alert.alert('Failed to fetch scooters...');
      } else {
        setNearbyCats(data);
      }
    };

    fetchCats();
  }, []);
  return (
    <CatContext.Provider value={{ selectedCat, setSelectedCat, nearbyCats }}>
      {children}
    </CatContext.Provider>
  );
}

export const useCat = () => {
  const context = useContext(CatContext);
  if (!context) {
    throw new Error('useCat must be used within a CatProvider');
  }
  return context;
};
