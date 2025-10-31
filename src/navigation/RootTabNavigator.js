import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AlunoNavigator from './AlunoNavigator';
import ProfessorNavigator from './ProfessorNavigator';


const Tab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true, 
        tabBarActiveTintColor: '#007AFF', 
        tabBarInactiveTintColor: 'gray',
      }}
    >
      {}
      <Tab.Screen
        name="Alunos" 
        component={AlunoNavigator} 
        options={{
          title: 'Cadastro de Alunos', 
        }}
      />
      
      {}
      <Tab.Screen
        name="Professores" 
        component={ProfessorNavigator} 
        options={{
          title: 'Cadastro de Professores', 
        }}
      />
    </Tab.Navigator>
  );
};

export default RootTabNavigator;