import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AlunoFormProvider } from '../context/AlunoFormContext'; 

import AlunoStep1Screen from '../screens/Aluno/AlunoStep1Screen';
import AlunoStep2Screen from '../screens/Aluno/AlunoStep2Screen';
import AlunoStep3Screen from '../screens/Aluno/AlunoStep3Screen';

const AlunoStack = createStackNavigator();

const AlunoNavigator = () => {
  return (

    <AlunoFormProvider>
      <AlunoStack.Navigator screenOptions={{ headerShown: false }}>
        <AlunoStack.Screen name="AlunoStep1" component={AlunoStep1Screen} />
        <AlunoStack.Screen name="AlunoStep2" component={AlunoStep2Screen} />
        <AlunoStack.Screen name="AlunoStep3" component={AlunoStep3Screen} />
      </AlunoStack.Navigator>
    </AlunoFormProvider>
  );
};

export default AlunoNavigator;