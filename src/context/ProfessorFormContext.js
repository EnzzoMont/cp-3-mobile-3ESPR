import React, { createContext, useState } from 'react';

export const ProfessorFormContext = createContext({});

export const ProfessorFormProvider = ({ children }) => {
  // Os campos são diferentes, conforme o exercício [cite: 30, 31, 32, 33, 34, 35, 36, 37]
  const [professorData, setProfessorData] = useState({
    foto: null,       // [cite: 30]
    nome: '',         // [cite: 31]
    rp: '',           // [cite: 32]
    telefone: '',     // [cite: 33]
    email: '',        // [cite: 34]
    disciplina: '',   // [cite: 35]
    unidade: '',      // [cite: 36]
    tipoAvaliacao: '',// [cite: 37]
  });

  return (
    <ProfessorFormContext.Provider value={{ professorData, setProfessorData }}>
      {children}
    </ProfessorFormContext.Provider>
  );
};