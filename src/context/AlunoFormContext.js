import React, { createContext, useState } from 'react';

export const AlunoFormContext = createContext({});

export const AlunoFormProvider = ({ children }) => {
  const [alunoData, setAlunoData] = useState({
    foto: null,
    nome: '',
    rm: '',
    telefone: '',
    email: '',
    endereco: '',
    turma: '',
    estagio: '',
  });

  return (
    <AlunoFormContext.Provider value={{ alunoData, setAlunoData }}>
      {children}
    </AlunoFormContext.Provider>
  );
};