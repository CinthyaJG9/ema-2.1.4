import { createContext } from 'react';
import { ICGenero, ICSemestre, ICEspecialidad, IPersonalData, IRegisterStudent } from '@/interfaces';

export interface ContextPropsRegister {
  dataGenero: ICGenero[];
  dataSemestre: ICSemestre[];
  dataEspecialidad: ICEspecialidad[];
  personalData: IPersonalData | null;
  academicData: IRegisterStudent | null;
  indexActive: number;

  setGenero: (genero: ICGenero[]) => void;
  setSemestre: (semestre: ICSemestre[]) => void;
  setEspecialidad: (especialidad: ICEspecialidad[]) => void;

  setPersonalData: (personalData: IPersonalData) => void;
  setAcademicData: (academicData: IRegisterStudent) => void;

  setIndexActive: (index: number) => void;
}

export const RegisterContext = createContext({} as ContextPropsRegister);
