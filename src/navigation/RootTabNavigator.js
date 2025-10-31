import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 1. Importa os navegadores de "pilha" que criamos
import AlunoNavigator from './AlunoNavigator';
import ProfessorNavigator from './ProfessorNavigator';

// (Opcional: Importar ícones. Vamos pular por enquanto)
// import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true, // Vamos deixar o cabeçalho aqui
        tabBarActiveTintColor: '#007AFF', // Cor FIAP (Azul)
        tabBarInactiveTintColor: 'gray',
      }}
    >
      {/* Aba de Alunos */}
      <Tab.Screen
        name="Alunos" // Este é o nome que aparece na aba
        component={AlunoNavigator} // Esta aba renderiza TODA a pilha de Aluno
        options={{
          title: 'Cadastro de Alunos', // Título no cabeçalho
          // (Opcional: ícone)
          // tabBarIcon: ({ color, size }) => (
          //   <Ionicons name="school" color={color} size={size} />
          // ),
        }}
      />
      
      {/* Aba de Professores */}
      <Tab.Screen
        name="Professores" // Nome da aba
        component={ProfessorNavigator} // Esta aba renderiza TODA a pilha de Professor
        options={{
          title: 'Cadastro de Professores', // Título no cabeçalho
          // (Opcional: ícone)
          // tabBarIcon: ({ color, size }) => (
          //   <Ionicons name="person" color={color} size={size} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootTabNavigator;