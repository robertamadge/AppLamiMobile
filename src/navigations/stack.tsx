import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/login/index.funcao';
import CadastroScreen from '../screens/cadastro/index.funcao';

const Stack = createStackNavigator();

export const TelasSecundariasNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginCadastro" component={LoginScreen} options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
    </Stack.Navigator>
  )
}