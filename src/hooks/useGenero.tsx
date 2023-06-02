import Reacr, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { ICGenero } from '@/interfaces';
import type { selectData } from '@/typings';

const DefaultGenero: selectData = {
  value: null,
  name: 'Escoge un género',
};

type useGeneroT = (dataGenero: ICGenero[]) => {
  optionsGenero: selectData[];
  selectedGenero: selectData;
  setSelectedGenero: Dispatch<SetStateAction<selectData>>;
};

const useGenero: useGeneroT = (dataGenero) => {
  const [optionsGenero, setOptionsGenero] = useState<selectData[]>([]);

  const [selectedGenero, setSelectedGenero] =
    useState<selectData>(DefaultGenero);

  useEffect(() => {
    const options = dataGenero.map<selectData>(
      ({ id_gen, tipo_gen }: ICGenero) => ({
        value: id_gen,
        name: tipo_gen,
      })
    );
    setOptionsGenero(options);
  }, []);

  return { optionsGenero, selectedGenero, setSelectedGenero };
};

export default useGenero;
