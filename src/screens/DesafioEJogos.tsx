import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const DesafiosEJogosScreen: React.FC<any> = ({ navigation }) => {
  // Função para navegar para os desafios ou jogos
  const navigateToChallenge = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Desafios e Jogos Interativos</Text>
      <Text style={styles.subtitle}>Participe de desafios e jogos para aprender sobre economia de energia de forma divertida!</Text>

      {/* Desafio 1 */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigateToChallenge('DesafioReduzirConsumo')}
      >
        <Text style={styles.buttonText}>Desafio: Reduza o Consumo de Energia</Text>
      </TouchableOpacity>

      {/* Desafio 2 */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigateToChallenge('DesafioSustentabilidade')}
      >
        <Text style={styles.buttonText}>Desafio: Rumo à Sustentabilidade</Text>
      </TouchableOpacity>

      {/* Jogo Interativo 1 */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigateToChallenge('JogoCaminhoDaEnergia')}
      >
        <Text style={styles.buttonText}>Jogo Interativo: O Caminho da Energia</Text>
      </TouchableOpacity>

      {/* Jogo Interativo 2 */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigateToChallenge('JogoEconomiaInteligente')}
      >
        <Text style={styles.buttonText}>Jogo: Economia Inteligente</Text>
      </TouchableOpacity>

      {/* Botão Voltar */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e0f7fa', // Azul claro, associado à energia limpa e à natureza
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#388e3c', // Verde sustentável
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#004d40', // Verde mais escuro
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#388e3c', // Verde forte
    padding: 16,
    borderRadius: 8,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#ccc',
    padding: 16,
    borderRadius: 8,
    marginTop: 30,
    width: '80%',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DesafiosEJogosScreen;
