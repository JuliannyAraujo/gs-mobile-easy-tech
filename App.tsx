import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DesafioReduzirConsumo from './src/components/DesafioEJogos/DesafioReduzirConsumo';
import DesafioSustentabilidade from './src/components/DesafioEJogos/DesafioSustentabilidade';
import JogoCaminhoDaEnergia from './src/components/DesafioEJogos/JogoCaminhoDaEnergia';
import JogoEconomiaInteligente from './src/components/DesafioEJogos/JogoEconomiaInteligente';
import Modulo1Screen from './src/components/ModuloDeEducação/Modulo1Screen';
import Modulo2Screen from './src/components/ModuloDeEducação/Modulo2Screen';
import Modulo3Screen from './src/components/ModuloDeEducação/Modulo3Screen';
import Modulo4Screen from './src/components/ModuloDeEducação/Modulo4Screen';
import Modulo5Screen from './src/components/ModuloDeEducação/Modulo5Screen';
import CadastroScreen from './src/screens/CadastroScreen';
import DesafiosEJogosScreen from './src/screens/DesafioEJogos';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ModulosDeEducacaoScreen from './src/screens/ModuloDeEducação';
import ProgressoScreen from './src/screens/ProgressoEResultados';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DesafiosEJogos" component={DesafiosEJogosScreen} />
        <Stack.Screen name="ProgressoEResultados" component={ProgressoScreen} />
        <Stack.Screen name="JogoCaminhoDaEnergia" component={JogoCaminhoDaEnergia} />
        <Stack.Screen name="JogoEconomiaInteligente" component={JogoEconomiaInteligente} />
        <Stack.Screen name="DesafioReduzirConsumo" component={DesafioReduzirConsumo} />
        <Stack.Screen name="DesafioSustentabilidade" component={DesafioSustentabilidade} />
        <Stack.Screen name="ModulosDeEducacao" component={ModulosDeEducacaoScreen} /> 
        <Stack.Screen name="Modulo1" component={Modulo1Screen} />
        <Stack.Screen name="Modulo2" component={Modulo2Screen} />
        <Stack.Screen name="Modulo3" component={Modulo3Screen} />
        <Stack.Screen name="Modulo4" component={Modulo4Screen} />
        <Stack.Screen name="Modulo5" component={Modulo5Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
