import React, { createContext, useState } from 'react';

// 1. Cria o Contexto
export const AlunoFormContext = createContext({});

// 2. Cria o "Provedor" (Provider)
// Ele é um componente que vai "envolver" parte do seu app
export const AlunoFormProvider = ({ children }) => {
  // 3. Aqui fica o estado (os dados do formulário)
  // Usamos o useState que o exercício pediu
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

  // 4. Retorna o Provedor, "dando" acesso aos dados (value)
  // para qualquer componente "filho" (children)
  return (
    <AlunoFormContext.Provider value={{ alunoData, setAlunoData }}>
      {children}
    </AlunoFormContext.Provider>
  );
};