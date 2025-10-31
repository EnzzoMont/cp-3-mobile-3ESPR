import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfessorFormProvider } from '../context/ProfessorFormContext'; 

import ProfessorStep1Screen from '../screens/Professor/ProfessorStep1Screen';
import ProfessorStep2Screen from '../screens/Professor/ProfessorStep2Screen';
import ProfessorStep3Screen from '../screens/Professor/ProfessorStep3Screen';

const ProfessorStack = createStackNavigator();

const ProfessorNavigator = () => {
  return (
    <ProfessorFormProvider>
      <ProfessorStack.Navigator screenOptions={{ headerShown: false }}>
        <ProfessorStack.Screen name="ProfessorStep1" component={ProfessorStep1Screen} />
        <ProfessorStack.Screen name="ProfessorStep2" component={ProfessorStep2Screen} />
        <ProfessorStack.Screen name="ProfessorStep3" component={ProfessorStep3Screen} />
      </ProfessorStack.Navigator>
    </ProfessorFormProvider>
  );
};

export default ProfessorNavigator;