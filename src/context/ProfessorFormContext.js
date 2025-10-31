import React, { createContext, useState } from 'react';

export const ProfessorFormContext = createContext({});

export const ProfessorFormProvider = ({ children }) => {
  
  const [professorData, setProfessorData] = useState({
    foto: null,      
    nome: '',        
    rp: '',           
    telefone: '',     
    email: '',       
    disciplina: '',   
    unidade: '',      
    tipoAvaliacao: '',
  });

  return (
    <ProfessorFormContext.Provider value={{ professorData, setProfessorData }}>
      {children}
    </ProfessorFormContext.Provider>
  );
};